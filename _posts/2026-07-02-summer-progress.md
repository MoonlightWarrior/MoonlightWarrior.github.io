---
layout: post
title: 2026 상반기 점검 (여름방학 progress report)
date: 2026-07-02 00:00:00
permalink: /:title
categories: [Roadmaps]
tag: ['2026']
description: 2월에 세운 계획, 반년 뒤인 지금은..?
comments: true
math: true
published: true
lang: ko
---

<!--
  SCAFFOLD — 채워 넣은 뒤 published: true 로 바꾸면 됩니다.
  범례: ✅ 달성 / 🔶 진행 중 / ❌ 미달 / 🔁 수정
  각 항목은 [What's here; 2026](/whatcomes2026) 에서 세운 목표를 그대로 옮겨온 것입니다.
-->

오랜만입니다. 벌써 여름이네요. 2월에 [신년 계획](/whatcomes2026)을 적으면서 "여름방학 중에 progress report를 정리해보겠다"고 했었는데, 약속대로 반년이 지난 지금 얼마나 지켜졌는지 솔직하게 점검해보려 합니다.

먼저 근황부터 간단히:

봄학기 자체는 무난하게 흘러간 것 같습니다. 다만 제가 성장을 새내기 때만큼 했냐라면 너무 쉰 게 아닌가 싶기도 하고... 잠만 잔 날이 좀 있긴 해서요. ㅎㅎ

# 📚 공부

> **2월 목표:** 봄/가을학기 4점대 / AI 딥하게 더 공부하기

- ✅ **봄학기 학점** — 학점 자체는 나쁘지는 않게 받았습니다. 4.09/4.3..

<style>
.gpa-chart{
  --gpa-surface: var(--card-bg, #ffffff);
  --gpa-ink: var(--text-color, #24292f);
  --gpa-muted: var(--text-muted-color, #6a737d);
  --gpa-line: var(--border-color, rgba(128,128,128,.24));
  --gpa-tint: rgba(128,128,128,.05);
  --gpa-track: rgba(128,128,128,.20);
  --gpa-gold: #f5b301;
  --gpa-gold-ink: #4a3600;
  --gpa-a0: var(--ml-accent, #4f46e5);
  --gpa-a0-ink: var(--ml-on-accent, #ffffff);
  --gpa-a0-rgb: var(--ml-accent-rgb, 79,70,229);
  box-sizing:border-box;
  max-width:640px;
  margin:1.6rem auto;
  padding:1.25rem 1.35rem 1.45rem;
  border:1px solid var(--gpa-line);
  border-radius:18px;
  background:linear-gradient(var(--gpa-tint),var(--gpa-tint)),var(--gpa-surface);
  color:var(--gpa-ink);
  font-family:system-ui,-apple-system,"Segoe UI","Apple SD Gothic Neo","Malgun Gothic",sans-serif;
  line-height:1.4;
}
.gpa-chart *{box-sizing:border-box;}

.gpa-chart .gpa-head{
  display:flex;align-items:center;gap:.45rem;
  margin:0 0 1.05rem;
  font-size:.95rem;font-weight:800;letter-spacing:.2px;
  color:var(--gpa-ink);
}
.gpa-chart .gpa-head small{
  margin-left:auto;font-size:.72rem;font-weight:700;
  letter-spacing:.4px;color:var(--gpa-muted);
}

.gpa-chart .gpa-hero{
  display:flex;flex-wrap:wrap;align-items:center;
  gap:1.15rem 1.4rem;margin-bottom:1.2rem;
}
.gpa-chart .gpa-ring{
  position:relative;flex:0 0 auto;
  width:150px;height:150px;border-radius:50%;
  background:conic-gradient(from 9deg,
     var(--gpa-gold) 0deg, var(--gpa-a0) 342deg,
     var(--gpa-track) 342deg 360deg);
  box-shadow:0 8px 22px rgba(245,179,1,.16), 0 5px 16px rgba(var(--gpa-a0-rgb),.16);
}
.gpa-chart .gpa-ring-inner{
  position:absolute;inset:13px;border-radius:50%;
  background:linear-gradient(var(--gpa-tint),var(--gpa-tint)),var(--gpa-surface);
  display:flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;
}
.gpa-chart .gpa-score{
  font-size:2.2rem;font-weight:800;line-height:1;
  letter-spacing:-.5px;color:var(--gpa-ink);
}
.gpa-chart .gpa-scale{
  font-size:.85rem;font-weight:600;color:var(--gpa-muted);margin-top:.2rem;
}
.gpa-chart .gpa-tag{
  font-size:.6rem;font-weight:800;letter-spacing:2px;
  text-transform:uppercase;color:var(--gpa-muted);margin-top:.35rem;
}

.gpa-chart .gpa-side{flex:1 1 180px;min-width:165px;}
.gpa-chart .gpa-term{
  margin:0 0 .25rem;font-size:.98rem;font-weight:800;color:var(--gpa-ink);
}
.gpa-chart .gpa-sub{
  margin:0 0 .85rem;font-size:.85rem;color:var(--gpa-muted);
}
.gpa-chart .gpa-legend{list-style:none;margin:0;padding:0;
  display:flex;flex-direction:column;gap:.42rem;}
.gpa-chart .gpa-legend li{
  display:flex;align-items:center;gap:.5rem;
  font-size:.82rem;font-weight:600;color:var(--gpa-ink);
}
.gpa-chart .gpa-dot{width:11px;height:11px;border-radius:50%;flex:0 0 auto;}
.gpa-chart .gpa-dot-ap{background:var(--gpa-gold);}
.gpa-chart .gpa-dot-a0{background:var(--gpa-a0);}

.gpa-chart .gpa-grid{
  display:grid;gap:.6rem;
  grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
}
.gpa-chart .gpa-card{
  position:relative;overflow:hidden;
  display:flex;align-items:center;justify-content:space-between;gap:.5rem;
  padding:.62rem .7rem .62rem .85rem;
  border-radius:12px;border:1px solid var(--gpa-line);
  transition:transform .16s ease, box-shadow .16s ease;
}
.gpa-chart .gpa-card::before{
  content:"";position:absolute;left:0;top:0;bottom:0;width:4px;
}
.gpa-chart .gpa-card:hover{transform:translateY(-2px);box-shadow:0 6px 16px rgba(var(--gpa-a0-rgb),.18);}
.gpa-chart .gpa-card-ap{background:rgba(245,179,1,.12);border-color:rgba(245,179,1,.36);}
.gpa-chart .gpa-card-ap::before{background:var(--gpa-gold);}
.gpa-chart .gpa-card-a0{background:rgba(var(--gpa-a0-rgb),.10);border-color:rgba(var(--gpa-a0-rgb),.32);}
.gpa-chart .gpa-card-a0::before{background:var(--gpa-a0);}
.gpa-chart .gpa-course{
  font-size:.86rem;font-weight:600;color:var(--gpa-ink);word-break:keep-all;
}
.gpa-chart .gpa-grade{
  flex:0 0 auto;font-size:.8rem;font-weight:800;letter-spacing:.3px;
  line-height:1.2;white-space:nowrap;padding:.17rem .52rem;border-radius:999px;
}
.gpa-chart .gpa-grade-ap{background:var(--gpa-gold);color:var(--gpa-gold-ink);}
.gpa-chart .gpa-grade-a0{background:var(--gpa-a0);color:var(--gpa-a0-ink);}

@media (prefers-reduced-motion:no-preference){
  .gpa-chart .gpa-card{animation:gpa-rise .5s cubic-bezier(.22,1,.36,1) both;}
  .gpa-chart .gpa-card:nth-child(1){animation-delay:.04s}
  .gpa-chart .gpa-card:nth-child(2){animation-delay:.10s}
  .gpa-chart .gpa-card:nth-child(3){animation-delay:.16s}
  .gpa-chart .gpa-card:nth-child(4){animation-delay:.22s}
  .gpa-chart .gpa-card:nth-child(5){animation-delay:.28s}
  .gpa-chart .gpa-card:nth-child(6){animation-delay:.34s}
}
@keyframes gpa-rise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
</style>
<div class="gpa-chart">
  <div class="gpa-head">🎓 2026 봄학기 성적표 <small>KAIST · 4.3 만점</small></div>

  <div class="gpa-hero">
    <div class="gpa-ring">
      <div class="gpa-ring-inner">
        <span class="gpa-score">4.09</span>
        <span class="gpa-scale">/ 4.3</span>
        <span class="gpa-tag">GPA</span>
      </div>
    </div>
    <div class="gpa-side">
      <p class="gpa-term">전 과목 A 라인 마감 🎉</p>
      <p class="gpa-sub">6과목 · A+ 두 개, A0 네 개</p>
      <ul class="gpa-legend">
        <li><span class="gpa-dot gpa-dot-ap"></span>A+ · 4.3점 · 2과목</li>
        <li><span class="gpa-dot gpa-dot-a0"></span>A0 · 4.0점 · 4과목</li>
      </ul>
    </div>
  </div>

  <div class="gpa-grid">
    <div class="gpa-card gpa-card-ap"><span class="gpa-course">고급통계학</span><span class="gpa-grade gpa-grade-ap">A+</span></div>
    <div class="gpa-card gpa-card-ap"><span class="gpa-course">강화학습 개론</span><span class="gpa-grade gpa-grade-ap">A+</span></div>
    <div class="gpa-card gpa-card-a0"><span class="gpa-course">기계학습</span><span class="gpa-grade gpa-grade-a0">A0</span></div>
    <div class="gpa-card gpa-card-a0"><span class="gpa-course">전산기조직</span><span class="gpa-grade gpa-grade-a0">A0</span></div>
    <div class="gpa-card gpa-card-a0"><span class="gpa-course">위상수학</span><span class="gpa-grade gpa-grade-a0">A0</span></div>
    <div class="gpa-card gpa-card-a0"><span class="gpa-course">데이타베이스 개론</span><span class="gpa-grade gpa-grade-a0">A0</span></div>
  </div>
</div>

-- 고급통계학(A+): 제가 제일 재밌었던 과목, 제일 많은 걸 배워간 과목. 대부분의 내용은 수강평에 옮겨적어서 굳이 안 적겠다만, 어려웠지만 상당히 재밌던 과목이였습니다. 저랑 제일 맞던 과목? ㅎㅎ

-- 기계학습(A0): 으음, 로드가 적고 과제가 좋은 건 너무 좋았는데 실수 하나에 학점이 조금 갈리네요... 데구급 채점일 유의해야 했는데...

-- 전산기조직(A0): 전 시스템쪽이랑 안 맞는 것 같습니다 ㅋㅋㅋㅋ 너무 외우는 것도 힘들고, 코딩도 어찌어찌 다 해내긴 한데 이런 걸 알아야 한다는 점 자체는 이해했지만...

-- 위상수학(A0): 파격적인 진도 방식이였지만, 그래도 재미는 있고 로드는 시험기간 공부가 전부였습니다. 다만 마지막 파트가 과하게 빡세서 안 나올 꺼 같아서 너무 대충 공부한 게 치명타가 되지 않았나.. 싶습니다. 

-- 디비개(A0): AI 토큰 갈아넣는 건 조금 쉽지 않았긴 한데, 내용적으로는 재밌었습니다. 시험도 재밌긴 한데 개어려웠고, ... 수학하고 싶다는 마음이 생기는 과목이였습니다. 

-- 강화개(A+): 이건 내용 재밌긴 한데 수업이 살짝 루즈해지는 감이 없지 않는? 그래도 새로운 내용 많이 배워서 즐거웠고, 중간고사 잘보고 프젝 나쁘지 않게 끝내서 나쁘지 않지 않나...ㅋㅋㅋ


- ✅ **AI 공부** — 기계학습/강화학습 수업 자체는 도움이 많이 되었습니다. 특히 RL에서 몰랐던 알고리즘들을 다 이해한거랑, 그동안 피상적으로 이해하고 있던 신경망이랑 Generative Model(이게 진짜 컸음)에 대한 이해가 상승한 게 유의미 한듯. 그리고 고급통계로 entropy의 중요성을 기계학습에 바로 적용할 수 있던 부분이 제일 아름다웠던 것 같습니다. 여름방학 때도 HDS 공부해보려곤 하는데..

# 🏹 PS / CP

> **2월 목표:** 수학 다이아 알고리즘 파먹기 / ICPC 본선 유의미한 결과 / loreips·simonmarais 입상

- 🔁 **수학 다이아 알고리즘** — ...He ran away.
- 🔶 **ICPC** — UCPC 본선까지는 왔습니다! L을 시간 내에 아이디어 시작을 낼 수 있던 부분이 제일 큰 듯..
- 🔶 **loreips / simonmarais** — 신청은 6/23에 바로 했습니다! 공부는 직전 주에 할 듯..

# 🔬 Research / Qualifications

> **2월 목표:** 개별연구 AI 시도 / 정보처리산업기사 취득 / CV용 프로젝트 / 군 보직

- ❌ **개별연구** — KAIRI 야심차게 지원하고 1차까지 붙고 1시간 면접까지 봤는데..아쉽네요. 일단 그래도 부족한 부분 더 채우고 더 열심히 공부하면 받아주는 곳이 있지 않을까요 ㅎㅎ... 일단 이 정도 가지곤 택도 없을 듯, 2학기 때 활동 자체는 개많으니 일단은..
- ✅ **정보처리산업기사** — 땄습니다! 필기 85 / 실기 70으로 나름 무난(?)히 얻었습니다. 
- ❌ **프로젝트** — 프로젝트라 할만한 건 크게 없고, 그냥 죽여버린 개별연구 주제 하나 AI로 돌려는 보긴 했는데, 글쎄요, 주제는 재밌긴 합니다. 최근에 AI-math 학회 하나 참관하고 왔는데, 확실히 통계쪽 AI(AI 이론?)을 파는게 맞지 않나 싶긴 합니다...

아 그리고 사이트 하나 팠습니다: moonlightwarrior.github.io/CVblog : 나중에 사이트 URL을 딴 걸로 바꿀 수도 있긴 한데, 일단 CV 기준으로 잘 나오게 하기 위해서..

- 🔶 **군 보직** — 카투사 자체는 이제 지원을 할 예정이긴 한데(TOEFL 112 쓰기), 두고 봐야죠. 공군이 더 가능성이 높긴 합니다. 어찌됐든 간에 12월을 노릴 꺼 같아서, 만일 카투사를 한다면 내년 2학기 휴학 가능성이 아예 없는 건 아니겠네요. 

# 💪 Healthcare

> **2월 목표:** 매일 밥 2끼 이상 / 주 2회 이상 운동 / 수면 5시간 보장

- ✅ **식사** — 웬만해서는 멘헤라가 안 나온 건 다행이고 최대한 밥을 먹은 건 굳인 것 같습니다. 다만.. 좀 덜 먹는 날에 밤에 라면 먹게 되는 습관을 줄여야 할 듯..
- 🔶 **운동** — 으음.. 시험기간이 아닌 주는 최대한 2회 운동은 하려 했습니다. 생각보다 기숙사 운동 시설이 엄청 좋은 편까지는 아니더라고요..? 그래도 일단 여전히 할만큼은 하는듯.. 시험기간 때는 사실상 유기하긴 했는데... 그래도 방학 때 다시 헬스 끊어서 일주일에 세 번씩은 하고 있습니다. 
- ❌ **수면** — 음... 최대한 오전 3시에서 4시 사이에 수면 했던 걸로 기억하긴 하는데...크아악

# 🎲 기타

> **2월 목표:** 블로그 글쓰기 / 뇌를 녹일 취미 찾기

- ✅ **블로그** — 그 정도로 많이 쓴 편은 아니고, 쓸려다가 만 게시글은 몇 개 좀 있습니다. 
- ❌ **취미** — 취미가 뭐죠...? ㅋㅋㅋㅋㅋ 예전에는 FL studio 만져 봤다면 요즘은 그냥 음악 듣기인듯.. 요즘 거의 일처리/원신만 하고 있네요..스네즈나야 겁나 기대된다

# 🍂 남은 반년 (가을학기)

반년을 돌아보니, 나쁘지 않게 산 거 같긴 한데 뭔가 항상 아쉬운..

연말에 `2026 연말 정산`으로 다시 점검해보죠.

읽어주셔서 감사합니다.
