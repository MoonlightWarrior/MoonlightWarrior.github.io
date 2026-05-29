#!/usr/bin/env python3
"""Non-destructive image optimizer for the blog.

Reads every raster image under `images/`, downscales anything wider than
MAX_WIDTH and recompresses it, writing the result to `images_optimized/`
with the SAME relative path / filename / format so existing post links keep
working if you later swap the trees.

Nothing in `images/` is modified. Review the report, eyeball a few outputs,
then (optionally) replace `images/` with `images_optimized/`.

Usage:
    python tools/optimize_images.py            # process all images
    python tools/optimize_images.py --apply    # also overwrite images/ in place
"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "images"
DST = ROOT / "images_optimized"

MAX_WIDTH = 1600          # px; downscale anything wider
JPEG_QUALITY = 82
RASTER_EXTS = {".png", ".jpg", ".jpeg"}

APPLY = "--apply" in sys.argv


def human(n: int) -> str:
    for unit in ("B", "KB", "MB", "GB"):
        if n < 1024 or unit == "GB":
            return f"{n:.0f} {unit}" if unit == "B" else f"{n/1:.0f}{unit}" if False else f"{n:.1f} {unit}"
        n /= 1024
    return f"{n:.1f} GB"


def optimize(src: Path, dst: Path) -> tuple[int, int]:
    """Return (orig_bytes, new_bytes)."""
    orig = src.stat().st_size
    dst.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)  # honor rotation, then drop EXIF
        if im.width > MAX_WIDTH:
            ratio = MAX_WIDTH / im.width
            im = im.resize((MAX_WIDTH, round(im.height * ratio)), Image.LANCZOS)

        ext = src.suffix.lower()
        if ext in {".jpg", ".jpeg"}:
            im = im.convert("RGB")
            im.save(dst, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)
        else:  # .png
            im.save(dst, "PNG", optimize=True)

    new = dst.stat().st_size
    # If "optimizing" made it bigger (already-tiny files), keep the original bytes.
    if new >= orig:
        dst.write_bytes(src.read_bytes())
        new = orig
    return orig, new


def main() -> None:
    if not SRC.is_dir():
        sys.exit(f"no images dir at {SRC}")

    files = sorted(p for p in SRC.rglob("*") if p.suffix.lower() in RASTER_EXTS)
    if not files:
        sys.exit("no images found")

    total_orig = total_new = 0
    rows = []
    for src in files:
        rel = src.relative_to(SRC)
        dst = DST / rel
        try:
            orig, new = optimize(src, dst)
        except Exception as e:  # corrupt/unsupported file: copy through untouched
            dst.parent.mkdir(parents=True, exist_ok=True)
            dst.write_bytes(src.read_bytes())
            orig = new = src.stat().st_size
            rows.append((rel, orig, new, f"copied (error: {e})"))
        else:
            saved = orig - new
            note = f"-{100*saved/orig:.0f}%" if orig else "-"
            rows.append((rel, orig, new, note))
        total_orig += orig
        total_new += new

    # Report: biggest savings first
    rows.sort(key=lambda r: r[1] - r[2], reverse=True)
    print(f"{'file':<55} {'before':>10} {'after':>10}  change")
    print("-" * 92)
    for rel, orig, new, note in rows[:25]:
        print(f"{str(rel):<55} {human(orig):>10} {human(new):>10}  {note}")
    if len(rows) > 25:
        print(f"... and {len(rows) - 25} more")
    print("-" * 92)
    print(f"{'TOTAL ('+str(len(rows))+' files)':<55} {human(total_orig):>10} {human(total_new):>10}  "
          f"-{100*(total_orig-total_new)/total_orig:.0f}%")
    print(f"\nOptimized copies written to: {DST}")

    if APPLY:
        import shutil
        for src in files:
            shutil.copy2(DST / src.relative_to(SRC), src)
        print("APPLIED: images/ overwritten with optimized versions.")
    else:
        print("Review the copies, then re-run with --apply to overwrite images/ in place.")


if __name__ == "__main__":
    main()
