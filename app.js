 'use strict';
(function(){
  const main=document.getElementById('main');
  const iconMarkup={
    project:'<svg viewBox="0 0 56 56" aria-hidden="true"><rect x="7" y="9" width="42" height="37" rx="5"/><path d="M7 18h42M18 28l-6 5 6 5M38 28l6 5-6 5M31 25l-6 16"/></svg>',
    research:'<svg viewBox="0 0 56 56" aria-hidden="true"><path d="M8 9h17c5 0 8 3 8 8v31c0-5-3-8-8-8H8zM48 9H33v39c0-5 3-8 8-8h7z"/><path d="M14 17h11M14 24h11M39 18h4M39 25h4"/></svg>',
    awards:'<svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="23" r="13"/><path d="M21 35l-4 14 11-6 11 6-4-14M28 15l2.8 5.1 5.6.8-4 4 .9 5.6-5.3-2.8-5.2 2.8.9-5.6-4.1-4 5.7-.8z"/></svg>',
    certificate:'<svg viewBox="0 0 56 56" aria-hidden="true"><rect x="13" y="6" width="30" height="42" rx="4"/><path d="M20 18h16M20 26h16M20 34h7"/><circle cx="34" cy="35" r="5"/></svg>'
  };
  const categories={
    projects:{number:'01',eng:'PERSONAL PROJECTS',label:'개인 프로젝트',summary:'투자전략 연구·백테스트·자동매매와 재무데이터 기반 투자 분석',count:'2개 프로젝트',icon:'project',data:PORTFOLIO.projects},
    research:{number:'02',eng:'RESEARCH & PAPERS',label:'논문 및 연구',summary:'포트폴리오 연구, 주식 분류, 강화학습과 주가 예측',count:'6개 연구',icon:'research',data:PORTFOLIO.research},
    awards:{number:'03',eng:'CERTIFICATIONS & AWARDS',label:'자격증 및 수상',summary:'보유 자격증 4개와 학술·공모전 수상 2건',count:'자격증 4개 · 수상 2개',icon:'awards',data:PORTFOLIO.awards}
  };
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function wrap(type,id){return `#/${type}/${id}`;}
  function navigationControls(fallback, placement){
    const label=placement==='bottom'?'하단 이동':'상단 이동';
    const cls=placement==='bottom'?'page-navigation page-navigation--bottom':'page-navigation';
    return `<nav class="${cls}" aria-label="${label}"><button type="button" class="nav-back" data-go-back data-fallback="${esc(fallback)}"><span aria-hidden="true">←</span> 뒤로가기</button><a class="nav-home" href="#/"><span aria-hidden="true">⌂</span> 홈으로</a></nav>`;
  }
  function breadcrumb(items){
    const fallback=[...items].reverse().find(x=>x.href)?.href || '#/';
    const crumbs=items.map((x,i)=>`${i?'<span class="sep" aria-hidden="true">/</span>':''}${x.href?`<a href="${esc(x.href)}">${esc(x.text)}</a>`:`<span aria-current="page">${esc(x.text)}</span>`}`).join('');
    return `${navigationControls(fallback,'top')}<div class="breadcrumb" aria-label="현재 위치">${crumbs}</div>`;
  }
  function bottomNavigation(tokens){
    if(!tokens.length)return '';
    let fallback='#/';
    if(tokens[0]==='awards'){
      fallback=tokens.length>=3?'#/awards/recognition':(tokens.length===2?'#/awards':'#/');
    }else if(tokens[0]==='projects'&&tokens[1]==='quant'&&tokens[2]==='report'){
      fallback='#/projects/quant/reports';
    }else if(tokens[0]==='projects'&&tokens[1]==='quant'&&tokens[2]==='reports'){
      fallback='#/projects/quant';
    }else if((tokens[0]==='projects'||tokens[0]==='research')&&tokens.length>=2){
      fallback='#/'+tokens[0];
    }
    return navigationControls(fallback,'bottom');
  }
  function home(){
    const cards=Object.entries(categories).map(([key,c],i)=>`<a class="category-card motion-card ${key==='projects'?'category-card--recommended':''}" style="--stagger:${i}" href="#/${key}" aria-label="${esc(c.label)} 목록 보기"><div class="card-number"><span>${c.number} / ${c.eng}</span>${key==='projects'?'<span class="recommend-mark">추천</span>':'<span aria-hidden="true">↗</span>'}</div><div class="category-icon">${iconMarkup[c.icon]}</div><h3>${esc(c.label)}</h3><p>${esc(c.summary)}</p><div class="card-bottom"><span>${esc(c.count)}</span><span class="round-arrow" aria-hidden="true">→</span></div></a>`).join('');
    return `<section class="home-hero"><div><span class="eyebrow">PERSONAL PORTFOLIO</span><h1>최우성</h1><div class="latin-name">Useong Choe</div></div></section><section aria-labelledby="explore-title"><div class="section-bar"><h2 id="explore-title">경험 살펴보기</h2><p>원하는 항목을 선택해 상세 내용 확인</p></div><div class="category-grid">${cards}</div></section>`;
  }
  function pageHeader(eng,label,summary,count){return `<header class="page-head"><span class="eyebrow">${esc(eng)}</span><h1>${esc(label)}</h1><p>${esc(summary)}</p>${count?`<div class="page-count">${esc(count)}</div>`:''}</header>`;}
  function itemRows(items, key){return items.map((item,index)=>`<a class="list-item ${item.featured?'list-item--featured':''}" href="${wrap(key,item.id)}"><span class="list-index">${String(index+1).padStart(2,'0')}</span><div><h2 class="item-title">${item.featured?'<span class="featured-inline">대표 프로젝트 · 추천</span>':''}${esc(item.title)}</h2><p class="item-desc">${esc(item.short)}</p></div><div class="item-meta">${esc(item.date)}<br>${esc(item.affiliation)}</div><span class="list-arrow" aria-hidden="true">↗</span></a>`).join('');}
  function category(key){
    const c=categories[key];
    if(key==='awards')return awardsLanding();
    return `${breadcrumb([{text:'홈',href:'#/'},{text:c.label}])}${pageHeader(c.eng,c.label,c.summary,c.count)}<section class="item-list" aria-label="${esc(c.label)} 목록">${itemRows(c.data,key)}</section>`;
  }
  function subcard(id,icon,title,summary,count,index){return `<a class="sub-category-card motion-card" style="--stagger:${index}" href="#/awards/${id}"><div class="subcard-top"><span>${String(index+1).padStart(2,'0')} / ${esc(id.toUpperCase())}</span><span aria-hidden="true">↗</span></div><div class="subcard-icon">${iconMarkup[icon]}</div><h2>${esc(title)}</h2><p>${esc(summary)}</p><div class="subcard-footer"><span>${esc(count)}</span><span class="round-arrow" aria-hidden="true">→</span></div></a>`;}
  function awardsLanding(){return `${breadcrumb([{text:'홈',href:'#/'},{text:'자격증 및 수상'}])}${pageHeader('CERTIFICATIONS & AWARDS','자격증 및 수상','자격증 4개와 수상 2건','')}<div class="sub-category-grid" aria-label="자격증 또는 수상 선택">${subcard('certifications','certificate','자격증','취득 시기와 발급 기관','4개',0)}${subcard('recognition','awards','수상','학술 연구 및 공모전 수상','2개',1)}</div>`;}
  function certifications(){
    const rows=PORTFOLIO.certifications.map((it,i)=>`<div class="list-item cert-row"><span class="list-index">${String(i+1).padStart(2,'0')}</span><div><h2 class="item-title">${esc(it.title)}</h2><p class="item-desc">${esc(it.issuer)}</p></div><div class="item-meta">${esc(it.date)}</div></div>`).join('');
    return `${breadcrumb([{text:'홈',href:'#/'},{text:'자격증 및 수상',href:'#/awards'},{text:'자격증'}])}${pageHeader('CERTIFICATIONS','자격증','자격증 4개 · 취득 시기와 발급 기관','4개')}<section class="item-list" aria-label="자격증 목록">${rows}</section>`;
  }
  function recognition(){return `${breadcrumb([{text:'홈',href:'#/'},{text:'자격증 및 수상',href:'#/awards'},{text:'수상'}])}${pageHeader('AWARDS','수상','학술 연구 및 경제논문 공모전 수상 이력','2개')}<section class="item-list" aria-label="수상 목록">${itemRows(PORTFOLIO.awards,'awards/recognition')}</section>`;}
  function contentCard(c,index){return `<section class="detail-card"><div class="detail-card-heading"><h2>${esc(c.heading)}</h2><span>0${index+1}</span></div><ul class="bullet-group">${c.items.map(pair=>`<li><strong>${esc(pair[0])}</strong><p>${esc(pair[1])}</p></li>`).join('')}</ul></section>`;}
  function linkButtons(links){return links&&links.length?`<div class="detail-actions">${links.map(l=>`<a href="${esc(l.url)}" ${l.url.startsWith('#/')?'':'target="_blank" rel="noopener noreferrer"'}>${esc(l.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>`:'';}
  function detail(key,id){
    const c=categories[key], item=c?.data.find(i=>i.id===id);if(!item)return notFound();
    if(key==='awards'){
      const content=(item.details||[['관련 내용',item.short]]).map(([t,d])=>`<li><strong>${esc(t)}</strong><p>${esc(d)}</p></li>`).join('');
      const awardSummary=item.abstract?`<section class="abstract-panel award-abstract-panel" aria-labelledby="award-paper-summary"><div class="abstract-side"><h2 id="award-paper-summary">수상작 논문 요약</h2></div><div class="abstract-main"><p>${esc(item.abstract)}</p>${item.summarySource?`<p class="summary-source">${esc(item.summarySource)}</p>`:''}${linkButtons(item.links)}</div></section>`:'';
      return `${breadcrumb([{text:'홈',href:'#/'},{text:'자격증 및 수상',href:'#/awards'},{text:'수상',href:'#/awards/recognition'},{text:item.title}])}<header class="detail-head award-detail"><div class="detail-meta"><span>${esc(item.date)}</span><span>${esc(item.affiliation)}</span></div><h1>${esc(item.title)}</h1><p class="detail-intro">${esc(item.short)}</p></header><section class="award-panel award-detail"><h2>주요 내용</h2><ul class="bullet-group">${content}</ul></section>${awardSummary}`;
    }
    const abstract=key==='research'&&item.abstract?`<section class="abstract-panel" aria-labelledby="paper-summary"><div class="abstract-side"><h2 id="paper-summary">논문 요약</h2><span class="summary-method">논문집 수록 요약을 바탕으로 정리</span></div><div class="abstract-main"><p>${esc(item.abstract)}</p>${linkButtons(item.links)}</div></section>`:'';
    function visualFallback(v){
      let inside='';
      if(v.altSteps?.length){inside=`<div class="visual-placeholder-steps">${v.altSteps.map((s,i)=>`<div class="visual-placeholder-step"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(s)}</strong></div>`).join('')}</div>`;}
      else if(v.altMetrics?.length){inside=`<div class="visual-placeholder-metrics">${v.altMetrics.map(([k,val])=>`<div><span>${esc(k)}</span><strong>${esc(val)}</strong></div>`).join('')}</div>`;}
      return `<div class="fallback-context"><span class="fallback-overline">${v.kind==='architecture'?'구조 요약':'성과 지표'}</span>${inside}</div>`;
    }
    const visuals=key==='projects'&&Array.isArray(item.visuals)?`<section class="visual-section" aria-label="GitHub 공개 자료"><div class="visual-intro"><div><div class="overline">ORIGINAL MATERIALS</div><h2>GitHub 공개 자료</h2><p>${item.id==='quant'?'시스템 구조도와 시장별 백테스트 그래프':'공시 데이터 기반 투자전략의 백테스트 그래프'}</p></div><a href="${esc(item.links?.[0]?.url||'#')}" target="_blank" rel="noopener noreferrer">저장소 보기 ↗</a></div>${item.id==='quant'?'<p class="visual-disclaimer">아래 수익률은 개별 전략의 과거 백테스트 사례. Walk-Forward 수치는 기간별로 선택한 전략을 이후 구간에 적용해 평가한 연평균 수익률.</p>':''}<div class="visual-grid ${item.visuals.length===1?'visual-grid--single':''}">${item.visuals.map((v,i)=>`<figure class="visual-card ${i===0&&item.id==='quant'?'visual-card--wide':''}"><div class="visual-image ${v.kind==='architecture'?'visual-image--architecture':''}"><a class="original-image-link ${v.kind==='architecture'?'is-loaded':''}" href="${esc(v.src)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(v.title)} 원본 크게 보기"><img src="${esc(v.src)}" alt="${esc(v.title)} · 원본 그림" loading="lazy"></a><div class="visual-fallback" ${v.kind==='architecture'?'hidden':''}>${visualFallback(v)}</div></div><figcaption><strong>${esc(v.title)}</strong><span>${esc(v.description)}</span>${v.reportId?`<a class="visual-report-link" href="#/projects/quant/report/${esc(v.reportId)}">백테스트 상세 보고서 <span aria-hidden="true">→</span></a>`:`<span class="zoom-help">이미지를 클릭해 크게 보기</span>`}</figcaption></figure>`).join('')}</div></section>`:'';
    const process=key==='projects'&&item.processSteps?.length?`<section class="process-section" aria-labelledby="project-process-title"><div class="process-head"><div><div class="overline">DATA & WORKFLOW</div><h2 id="project-process-title">${esc(item.processTitle)}</h2><p>${esc(item.processSummary)}</p></div><span class="process-count">${item.processSteps.length}단계</span></div><ol class="process-grid">${item.processSteps.map(([title,description],i)=>`<li class="process-step"><span class="process-index">${String(i+1).padStart(2,'0')}</span><h3>${esc(title)}</h3><p>${esc(description)}</p></li>`).join('')}</ol></section>`:'';
    const skills=`<section class="skills-panel" aria-label="관련 기술과 경험"><h2>관련 기술 · 역량</h2><div class="skill-tags">${item.skills.map(x=>`<span>${esc(x)}</span>`).join('')}</div></section>`;
    const flow=item.flow?`<section class="flow-panel" aria-label="프로젝트 처리 흐름"><h2>${esc(item.extraTitle||'구성')}</h2><div class="flow-steps">${item.flow.map(s=>`<div class="flow-step">${esc(s)}</div>`).join('')}</div></section>`:'';
    return `${breadcrumb([{text:'홈',href:'#/'},{text:c.label,href:'#/'+key},{text:item.title}])}<header class="detail-head"><div class="detail-meta">${item.featured?'<span class="featured-detail-label">추천 · 대표 개인 프로젝트</span>':''}<span>${esc(item.date)}</span><span>${esc(item.affiliation)}</span>${item.conference?`<span>${esc(item.conference)}</span>`:''}</div><h1>${esc(item.title)}</h1><p class="detail-intro">${esc(item.intro)}</p>${key==='projects'?linkButtons(item.links):''}</header><section class="content-section" aria-label="${esc(item.title)} 주요 내용"><div class="overline">OVERVIEW</div><div class="detail-grid">${item.cards.map(contentCard).join('')}</div></section>${abstract}${process}${visuals}${skills}${item.processSteps?"":flow}`;
  }
  function reportIndexPage(){
  const reports=PORTFOLIO.quantReports||[];
  const cards=reports.map((r,i)=>`<a class="report-list-card" href="#/projects/quant/report/${esc(r.id)}"><span class="report-list-no">${String(i+1).padStart(2,'0')}</span><div><h2>${esc(r.title)}</h2><p>${esc(r.subtitle)}</p><span class="report-list-meta">${esc(r.period)} · 비교 기준: ${esc(r.benchmark)}</span></div><span class="report-list-arrow" aria-hidden="true">→</span></a>`).join('');
  return `${breadcrumb([{text:'홈',href:'#/'},{text:'개인 프로젝트',href:'#/projects'},{text:'퀀트 리서치·자동매매 시스템',href:'#/projects/quant'},{text:'백테스트 보고서'}])}<header class="page-head"><span class="eyebrow">BACKTEST & VALIDATION</span><h1>백테스트·검증 보고서</h1><p>전략별 매매 조건, 과거 성과, 통계적 검증 결과를 구분해 정리</p><div class="page-count">4개 전략 사례</div></header><section class="report-list" aria-label="전략별 백테스트 상세 보고서">${cards}</section><p class="report-index-note">수익률은 개별 전략의 과거 분석 사례이며 퀀트 시스템 전체 성과 또는 미래 수익을 나타내지 않음.</p>`;
}
  function reportDetailPage(id){
    const r=(PORTFOLIO.quantReports||[]).find(x=>x.id===id);
    if(!r)return notFound();
    const strategy=r.strategy.map(([k,v])=>`<div class="report-definition-row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    const metrics=r.metrics.map(([k,a,b])=>`<tr><th scope="row">${esc(k)}</th><td>${esc(a)}</td><td>${esc(b)}</td></tr>`).join("");
    const valid=r.validation.map(([k,v])=>`<div class="report-definition-row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
    const chartSrc=r.detailImage||r.image;
    const combinationFacts=Array.isArray(r.combinationFacts)?r.combinationFacts.map(([k,v])=>`<div class="report-definition-row"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join(""):"";
    const combinationSection=r.heatmap?`<section class="report-section"><h2>04. 조합 평가 · 주요 특성</h2><div class="report-performance-layout"><figure class="report-chart"><a href="${esc(r.heatmap)}" target="_blank" rel="noopener noreferrer" aria-label="72개 조합 히트맵 원본"><img src="${esc(r.heatmap)}" alt="72개 롱숏 조합의 CAGR 히트맵" loading="lazy"></a></figure><dl class="report-definitions report-compact-definitions">${combinationFacts}</dl></div></section>`:"";
    const source="https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/strategy_examples.md#"+r.sourceAnchor;
    return `${breadcrumb([{text:"홈",href:"#/"},{text:"개인 프로젝트",href:"#/projects"},{text:"퀀트 시스템",href:"#/projects/quant"},{text:"백테스트 보고서",href:"#/projects/quant/reports"},{text:r.title}])}
      <article class="quant-report">
        <header class="report-header"><span class="eyebrow">BACKTEST CASE STUDY</span><h1>${esc(r.title)}</h1><p class="report-subtitle">${esc(r.subtitle)}</p><div class="report-date">${esc(r.period)} · 비교 기준: ${esc(r.benchmark)}</div></header>
        <section class="report-section"><h2>01. 전략 명세</h2><dl class="report-definitions">${strategy}</dl></section>
        <section class="report-section"><h2>02. 백테스트 성과</h2>
          <div class="report-performance-layout">
            <figure class="report-chart"><a href="${esc(chartSrc)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(r.title)} 그래프 원본 보기"><img src="${esc(chartSrc)}" alt="${esc(r.title)} 과거 성과·낙폭 그래프" loading="lazy"></a></figure>
            <div class="report-performance-metrics"><div class="report-table-scroll"><table class="report-metrics"><thead><tr><th scope="col">지표</th><th scope="col">전략</th><th scope="col">${esc(r.benchmark)}</th></tr></thead><tbody>${metrics}</tbody></table></div></div>
          </div>
        </section>
        <section class="report-section"><h2>03. ${r.id==="futures"?"조합 평가":"전략 검증"} · 동일 기간 비교</h2><dl class="report-definitions">${valid}</dl>${r.interpretation?`<p class="report-interpretation">${esc(r.interpretation)}</p>`:""}</section>
        ${combinationSection}
        <div class="report-end-links"><a href="#/projects/quant/reports">← 다른 전략 보고서</a><a href="${esc(source)}" target="_blank" rel="noopener noreferrer">GitHub 상세 연구자료 ↗</a></div>
      </article>`;
  }
    function about(){
    const e=PORTFOLIO.profile.education, activities=PORTFOLIO.profile.activities.map((it,i)=>`<article class="activity-item"><div class="activity-year">${esc(it.period)}</div><div><h3>${esc(it.name)}</h3><div class="activity-type">${esc(it.kind)}</div><ul>${it.items.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div></article>`).join('');
    return `${breadcrumb([{text:'홈',href:'#/'},{text:'소개'}])}${pageHeader('ABOUT','학력 및 활동','학력 · 연구실 활동 · 동아리 활동','')}<div class="profile-layout"><section class="profile-box"><div class="overline">EDUCATION</div><h2>학력</h2><div class="education-school">${esc(e.school)}</div><div class="education-major">${esc(e.major)} · ${esc(e.doubleMajor)}</div><div class="education-gpa">학점 <strong>${esc(e.gpa)}</strong></div></section><section class="profile-box"><div class="overline">EXPERIENCE & ACTIVITIES</div><h2>학술·동아리 활동</h2><div class="activity-list">${activities}</div></section></div>`;
  }
  function notFound(){return `${breadcrumb([{text:'홈',href:'#/'},{text:'페이지 없음'}])}<header class="page-head"><h1>페이지를 찾을 수 없습니다.</h1><p><a href="#/">홈으로 돌아가기 →</a></p></header>`;}
  function route(){
    const hash=decodeURIComponent(location.hash.replace(/^#\/?/,''));const tokens=hash.split('/').filter(Boolean);
    let page,navKey='home',title='최우성 · Portfolio';
    if(tokens.length===0){page=home();}
    else if(tokens.length===1 && tokens[0]==='about'){navKey='about';page=about();title='소개 · 최우성';}
    else if(tokens.length===1 && categories[tokens[0]]){navKey=tokens[0];page=category(navKey);title=`${categories[navKey].label} · 최우성`;}
    else if(tokens[0]==='awards' && tokens[1]==='certifications' && tokens.length===2){navKey='awards';page=certifications();title='자격증 · 최우성';}
    else if(tokens[0]==='awards' && tokens[1]==='recognition' && tokens.length===2){navKey='awards';page=recognition();title='수상 · 최우성';}
    else if(tokens[0]==='awards' && tokens[1]==='recognition' && tokens.length===3){navKey='awards';page=detail('awards',tokens[2]);title='수상 · 최우성';}
    else if(tokens.length===3 && tokens[0]==='projects' && tokens[1]==='quant' && tokens[2]==='reports'){navKey='projects';page=reportIndexPage();title='백테스트·검증 보고서 · 최우성';}
    else if(tokens.length===4 && tokens[0]==='projects' && tokens[1]==='quant' && tokens[2]==='report'){navKey='projects';page=reportDetailPage(tokens[3]);title='백테스트 상세 보고서 · 최우성';}
    else if(tokens.length===2 && categories[tokens[0]] && tokens[0]!=='awards'){navKey=tokens[0];page=detail(navKey,tokens[1]);const it=categories[navKey].data.find(x=>x.id===tokens[1]);title=it?`${it.title} · 최우성`:title;}
    else {page=notFound();}
    main.innerHTML=page+bottomNavigation(tokens);main.classList.remove('page-enter');void main.offsetWidth;main.classList.add('page-enter');document.title=title;
    document.querySelectorAll('[data-nav]').forEach(link=>{if(link.dataset.nav===navKey)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
    window.scrollTo({top:0,behavior:'instant'});
  }
  document.addEventListener('load',event=>{const target=event.target;if(target?.tagName!=='IMG'||!target.closest('.visual-image'))return;target.closest('.original-image-link')?.classList.add('is-loaded');const fallback=target.closest('.visual-image').querySelector('.visual-fallback');if(fallback)fallback.hidden=true;},true);
  document.addEventListener('error',event=>{const target=event.target;if(target?.tagName!=='IMG'||!target.closest('.visual-image'))return;target.closest('.original-image-link')?.classList.remove('is-loaded');const fallback=target.closest('.visual-image').querySelector('.visual-fallback');if(fallback)fallback.hidden=false;},true);
  let inSiteNavigation=0;
  document.addEventListener('click',event=>{
    const btn=event.target.closest('[data-go-back]');
    if(!btn)return;
    event.preventDefault();
    if(inSiteNavigation>0 && history.length>1)history.back();
    else location.hash=btn.dataset.fallback||'#/';
  });
  window.addEventListener('hashchange',()=>{inSiteNavigation++;route();});route();
})();
