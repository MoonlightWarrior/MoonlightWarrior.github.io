/* Live competitive-programming stats for the About page.
 *
 * Ratings are fetched client-side through a public CORS proxy (the platforms
 * themselves don't send CORS headers / sit behind Cloudflare). The proxy can be
 * flaky, so every cell is seeded with a last-known FALLBACK first and only
 * overwritten on a successful fetch — it never gets stuck on "Loading…" or
 * flips to "Error". Refresh the FALLBACK snapshot now and then. */
document.addEventListener('DOMContentLoaded', function () {
  const handles = { boj: 'davidkim0', cf: 'MoonlightWarrior', ac: 'Moonlight_' };
  const PROXY = 'https://api-py.vercel.app/?r=';
  const TIMEOUT_MS = 8000;

  // Last-known snapshots (update occasionally).
  const FALLBACK = {
    cf: { tier: 'Expert', color: '#0000ff', rating: '1688 (max) / 1688 (now)' },
    ac: { tier: 'Gray',   color: '#808080', rating: '223 (max) / 223 (now)' }
  };

  const $ = function (id) { return document.getElementById(id); };
  function setText(id, text) { const el = $(id); if (el) el.textContent = text; }
  function applyColor(id, color) {
    const el = $(id);
    if (el) { el.style.color = color; el.style.fontWeight = 'bold'; }
  }
  // fetch with a timeout so a hung proxy can't leave things spinning.
  function fetchJSON(url) {
    const ctrl = new AbortController();
    const t = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);
    return fetch(url, { signal: ctrl.signal })
      .then(function (r) { return r.json(); })
      .finally(function () { clearTimeout(t); });
  }

  const solvedAcColors = {
    1: '#ad5600', 2: '#ad5600', 3: '#ad5600', 4: '#ad5600', 5: '#ad5600',
    6: '#435f7a', 7: '#435f7a', 8: '#435f7a', 9: '#435f7a', 10: '#435f7a',
    11: '#ec9a00', 12: '#ec9a00', 13: '#ec9a00', 14: '#ec9a00', 15: '#ec9a00',
    16: '#27e2a4', 17: '#27e2a4', 18: '#27e2a4', 19: '#27e2a4', 20: '#27e2a4',
    21: '#00b4fc', 22: '#00b4fc', 23: '#00b4fc', 24: '#00b4fc', 25: '#00b4fc',
    26: '#ff0062', 27: '#ff0062', 28: '#ff0062', 29: '#ff0062', 30: '#ff0062'
  };
  const tierNames = {
    1: 'Bronze V', 2: 'Bronze IV', 3: 'Bronze III', 4: 'Bronze II', 5: 'Bronze I',
    6: 'Silver V', 7: 'Silver IV', 8: 'Silver III', 9: 'Silver II', 10: 'Silver I',
    11: 'Gold V', 12: 'Gold IV', 13: 'Gold III', 14: 'Gold II', 15: 'Gold I',
    16: 'Platinum V', 17: 'Platinum IV', 18: 'Platinum III', 19: 'Platinum II', 20: 'Platinum I',
    21: 'Diamond V', 22: 'Diamond IV', 23: 'Diamond III', 24: 'Diamond II', 25: 'Diamond I',
    26: 'Ruby V', 27: 'Ruby IV', 28: 'Ruby III', 29: 'Ruby II', 30: 'Ruby I'
  };
  const codeforcesColors = {
    'newbie': '#808080', 'pupil': '#008000', 'specialist': '#03a89e', 'expert': '#0000ff',
    'candidate master': '#aa00aa', 'master': '#ff8c00', 'international master': '#ff8c00',
    'grandmaster': '#ff0000', 'international grandmaster': '#ff0000', 'legendary grandmaster': '#ff0000'
  };
  function atcoderTier(rating) {
    if (rating < 400) return { tier: 'Gray', color: '#808080' };
    if (rating < 800) return { tier: 'Brown', color: '#804000' };
    if (rating < 1200) return { tier: 'Green', color: '#008000' };
    if (rating < 1600) return { tier: 'Cyan', color: '#00C0C0' };
    if (rating < 2000) return { tier: 'Blue', color: '#0000FF' };
    if (rating < 2400) return { tier: 'Yellow', color: '#C0C000' };
    if (rating < 2800) return { tier: 'Orange', color: '#FF8000' };
    return { tier: 'Red', color: '#FF0000' };
  }

  // ----- Seed fallbacks so something sensible always shows -----
  setText('codeforces-tier', FALLBACK.cf.tier); applyColor('codeforces-tier', FALLBACK.cf.color);
  setText('codeforces-rating', FALLBACK.cf.rating);
  setText('atcoder-tier', FALLBACK.ac.tier); applyColor('atcoder-tier', FALLBACK.ac.color);
  setText('atcoder-rating', FALLBACK.ac.rating);
  // Baekjoon: the solved.ac badge above the table already shows this live,
  // so the row just degrades to a dash if the proxy is unreachable.
  ['baekjoon-tier', 'baekjoon-rating', 'baekjoon-solved'].forEach(function (id) { setText(id, '—'); });

  // ----- Baekjoon (solved.ac) -----
  fetchJSON(PROXY + encodeURIComponent('https://solved.ac/api/v3/user/show?handle=' + handles.boj))
    .then(function (d) {
      if (d && d.tier && d.solvedCount) {
        setText('baekjoon-tier', tierNames[d.tier] || 'Unknown');
        setText('baekjoon-rating', String(d.rating || 0));
        setText('baekjoon-solved', d.solvedCount);
        applyColor('baekjoon-tier', solvedAcColors[d.tier] || '#000');
      }
    })
    .catch(function (e) { console.warn('solved.ac stats unavailable:', e); });

  // ----- Codeforces -----
  fetchJSON(PROXY + encodeURIComponent('https://codeforces.com/api/user.info?handles=' + handles.cf))
    .then(function (d) {
      if (d && d.result && d.result.length) {
        const u = d.result[0];
        const rank = u.rank || FALLBACK.cf.tier;
        setText('codeforces-tier', rank);
        setText('codeforces-rating', (u.maxRating || '?') + ' (max) / ' + (u.rating || '?') + ' (now)');
        applyColor('codeforces-tier', codeforcesColors[rank.toLowerCase()] || '#000');
      }
    })
    .catch(function (e) { console.warn('Codeforces stats unavailable:', e); });

  // ----- AtCoder -----
  fetchJSON(PROXY + encodeURIComponent('https://atcoder.jp/users/' + handles.ac + '/history/json'))
    .then(function (d) {
      if (Array.isArray(d) && d.length) {
        const now = d[d.length - 1].NewRating;
        const max = Math.max.apply(null, d.map(function (c) { return c.NewRating; }));
        const info = atcoderTier(now);
        setText('atcoder-tier', info.tier);
        setText('atcoder-rating', max + ' (max) / ' + now + ' (now)');
        applyColor('atcoder-tier', info.color);
      }
    })
    .catch(function (e) { console.warn('AtCoder stats unavailable:', e); });
});
