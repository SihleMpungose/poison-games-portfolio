const LINKS = {
  x: 'https://x.com/PoisonGamesSM',
  facebook: 'https://www.facebook.com/share/14o7RKUEV2E/',
  discord: 'https://discord.gg/B3WQaUgSg',
  itch: 'https://sihlem.itch.io/',
  play: 'https://play.google.com/store/apps/details?id=com.mobilemmasim.myapp',
  mmaDemo: 'https://sihlem.itch.io/mobilemmasim',
  mmaFull: 'https://sihlem.itch.io/mobilemmasim-full',
  meridian: 'https://sihlem.itch.io/unwritten-meridian'
};

const externalAttrs = 'target="_blank" rel="noopener noreferrer"';

function injectBrandStyles() {
  if (document.getElementById('poison-games-live-styles')) return;
  const style = document.createElement('style');
  style.id = 'poison-games-live-styles';
  style.textContent = `
    .snapshot-section{padding-top:82px;padding-bottom:30px}
    .snapshot-head{display:flex;justify-content:space-between;align-items:end;gap:24px;margin-bottom:24px}
    .snapshot-head h2{margin:0;font-size:clamp(32px,4vw,52px);letter-spacing:-.045em;line-height:1}
    .snapshot-date{padding:7px 10px;border:1px solid var(--line);border-radius:999px;color:var(--muted);font:700 9px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}
    .snapshot-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
    .snapshot-card{min-height:190px;padding:20px;display:flex;flex-direction:column;justify-content:space-between;gap:22px;border:1px solid var(--line);border-radius:18px;background:linear-gradient(145deg,rgba(18,26,33,.88),rgba(9,13,18,.95))}
    .snapshot-card small{color:var(--muted-2);font:750 8px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.11em;text-transform:uppercase}
    .snapshot-card h3{margin:6px 0 8px;font-size:18px;letter-spacing:-.025em}
    .snapshot-card p{margin:0;color:var(--muted);font-size:12px;line-height:1.58}
    .snapshot-card strong{font-size:11px;color:var(--text)}
    .snapshot-card.major{border-color:rgba(255,64,89,.22);background:linear-gradient(145deg,rgba(255,64,89,.07),rgba(10,15,19,.95))}
    .snapshot-card.story{border-color:rgba(79,131,255,.20)}
    .snapshot-card.alpha{border-color:rgba(116,162,255,.18)}
    .snapshot-card.music{border-color:rgba(255,113,132,.18)}

    .social-section{padding-top:86px;padding-bottom:96px}
    .social-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
    .social-card{min-height:178px;padding:22px;display:flex;flex-direction:column;justify-content:space-between;gap:18px;border:1px solid var(--line);border-radius:18px;background:linear-gradient(145deg,rgba(18,26,33,.88),rgba(10,15,19,.94));text-decoration:none;transition:transform .2s ease,border-color .2s ease,background .2s ease,box-shadow .2s ease}
    .social-card:hover{transform:translateY(-4px);border-color:var(--line-strong);background:linear-gradient(145deg,rgba(23,32,42,.94),rgba(10,15,19,.98));box-shadow:0 20px 50px rgba(0,0,0,.22)}
    .social-mark{width:42px;height:42px;display:grid;place-items:center;border-radius:12px;border:1px solid var(--line);background:rgba(255,255,255,.035);font:850 12px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.04em}
    .social-card h3{margin:0 0 5px;font-size:16px;letter-spacing:-.02em}
    .social-card p{margin:0;color:var(--muted);font-size:12px;line-height:1.55}
    .social-card small{color:var(--muted-2);font:700 8px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.1em;text-transform:uppercase}
    .social-card.x .social-mark,.social-card.facebook .social-mark{color:var(--blue-soft)}
    .social-card.discord .social-mark,.social-card.itch .social-mark{color:var(--red)}
    .social-note{margin-top:18px;padding:16px 18px;border:1px solid var(--line);border-radius:14px;color:var(--muted);background:rgba(255,255,255,.018);font-size:13px}

    .project-update{margin:18px 0 0;padding:14px 16px;border:1px solid var(--line);border-radius:13px;background:rgba(255,255,255,.018);color:var(--muted);font-size:12px;line-height:1.58}
    .project-update strong{color:var(--text)}
    .project-visual.visual-online{background:radial-gradient(circle at 24% 28%,rgba(79,131,255,.18),transparent 28%),radial-gradient(circle at 75% 70%,rgba(255,64,89,.12),transparent 34%),linear-gradient(145deg,#0b121e,#090c12)}
    .online-arena{position:absolute;left:50%;top:48%;width:170px;height:170px;transform:translate(-50%,-50%);border:1px solid rgba(116,162,255,.28);border-radius:50%;box-shadow:0 0 0 28px rgba(79,131,255,.025),0 0 60px rgba(79,131,255,.08)}
    .online-arena::before,.online-arena::after{content:"";position:absolute;border-radius:50%;background:var(--blue-soft);box-shadow:0 0 18px rgba(116,162,255,.45)}
    .online-arena::before{width:14px;height:14px;left:30px;top:68px}
    .online-arena::after{width:14px;height:14px;right:30px;top:68px;background:var(--red);box-shadow:0 0 18px rgba(255,64,89,.4)}
    .online-line{position:absolute;left:50%;top:48%;width:96px;height:1px;transform:translate(-50%,-50%);background:linear-gradient(90deg,var(--blue),var(--red));opacity:.65}
    .project-visual.visual-music{background:radial-gradient(circle at 58% 34%,rgba(255,64,89,.14),transparent 30%),linear-gradient(145deg,#16101a,#0b1019)}
    .music-bars{position:absolute;left:50%;top:47%;height:150px;width:230px;transform:translate(-50%,-50%);display:flex;align-items:end;justify-content:center;gap:9px}
    .music-bars i{display:block;width:12px;border-radius:8px 8px 2px 2px;background:linear-gradient(to top,var(--red-deep),var(--blue-soft));opacity:.72}
    .music-bars i:nth-child(1){height:38%}.music-bars i:nth-child(2){height:64%}.music-bars i:nth-child(3){height:86%}.music-bars i:nth-child(4){height:52%}.music-bars i:nth-child(5){height:100%}.music-bars i:nth-child(6){height:72%}.music-bars i:nth-child(7){height:44%}
    .release-callout{margin:20px 0 0;padding:17px 18px;border:1px solid rgba(255,64,89,.22);border-radius:14px;background:linear-gradient(90deg,rgba(255,64,89,.07),rgba(79,131,255,.04));color:var(--muted);font-size:13px}
    .release-callout strong{color:var(--text)}
    .community-inline{margin-top:24px;display:flex;flex-wrap:wrap;gap:9px}
    .community-inline a{padding:8px 11px;border:1px solid var(--line);border-radius:999px;text-decoration:none;color:var(--muted);font-size:11px;font-weight:800;background:rgba(255,255,255,.02)}
    .community-inline a:hover{color:var(--text);border-color:var(--line-strong)}
    .footer-center{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 12px;align-items:center}
    .footer-center a{color:var(--muted);text-decoration:none;font-size:11px;font-weight:750}
    .footer-center a:hover{color:var(--text)}

    @media(max-width:1050px){.snapshot-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:980px){.social-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:700px){.snapshot-head{align-items:flex-start;flex-direction:column}.footer-center{justify-content:flex-start}}
    @media(max-width:560px){.snapshot-grid,.social-grid{grid-template-columns:1fr}.snapshot-card,.social-card{min-height:150px}}
  `;
  document.head.appendChild(style);
}

function socialLinksMarkup(includePortfolio = false) {
  return `${includePortfolio ? '<a href="index.html">Portfolio</a>' : ''}
    <a href="${LINKS.x}" ${externalAttrs}>X</a>
    <a href="${LINKS.facebook}" ${externalAttrs}>Facebook</a>
    <a href="${LINKS.discord}" ${externalAttrs}>Discord</a>
    <a href="${LINKS.itch}" ${externalAttrs}>itch.io</a>`;
}

function enhanceNavigation() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const blogLink = [...nav.querySelectorAll('a')].find(a => (a.getAttribute('href') || '').endsWith('blog.html'));
  if (blogLink) blogLink.textContent = 'Devlog';

  if (document.getElementById('projects') && !nav.querySelector('a[href="#community"]')) {
    const aboutLink = nav.querySelector('a[href="#about"]');
    const link = document.createElement('a');
    link.href = '#community';
    link.textContent = 'Community';
    if (aboutLink) nav.insertBefore(link, aboutLink); else nav.appendChild(link);
  }

  if (document.querySelector('.blog-main') && !nav.querySelector('a[href="index.html#community"]')) {
    const aboutLink = nav.querySelector('a[href="index.html#about"]');
    const link = document.createElement('a');
    link.href = 'index.html#community';
    link.textContent = 'Community';
    if (aboutLink) nav.insertBefore(link, aboutLink); else nav.appendChild(link);
  }
}

function insertSnapshot() {
  if (!document.getElementById('projects') || document.getElementById('current-snapshot')) return;
  const ticker = document.querySelector('.ticker');
  if (!ticker) return;
  ticker.insertAdjacentHTML('afterend', `
    <section id="current-snapshot" class="section-shell snapshot-section">
      <div class="snapshot-head reveal">
        <div>
          <p class="eyebrow">CURRENT DEVELOPMENT SNAPSHOT</p>
          <h2>October 2026.</h2>
        </div>
        <span class="snapshot-date">Updated 02 Oct 2026</span>
      </div>
      <div class="snapshot-grid">
        <article class="snapshot-card major reveal"><div><small>MOBILE MMA SIM</small><h3>Launch-prep phase</h3><p>Google Play Early Access continues while I stabilise the current build and prepare the major v3.0 launch update.</p></div><strong>Launch target • 13 Oct 2026</strong></article>
        <article class="snapshot-card story reveal"><div><small>UNWRITTEN MERIDIAN</small><h3>Book One testing & release prep</h3><p>Book One is live on itch.io while the Android version continues through Google Play testing / Early Access preparation.</p></div><strong>Interactive fiction • Android • Web</strong></article>
        <article class="snapshot-card alpha reveal"><div><small>ONLINE MMA SIM</small><h3>Alpha preview stage</h3><p>The multiplayer-focused MMA project is now at an early Alpha preview stage, with online career and event flow being tested.</p></div><strong>No public launch date announced</strong></article>
        <article class="snapshot-card music reveal"><div><small>MUSIC CAREER SIM</small><h3>Realism pass in development</h3><p>An unnamed music-career / label simulation is being built around long-term career decisions, releases, live events and reputation.</p></div><strong>Working title • In development</strong></article>
      </div>
    </section>`);
}

function enhanceHomePage() {
  if (!document.getElementById('projects')) return;

  const statusPill = document.querySelector('.status-pill');
  if (statusPill) statusPill.innerHTML = '<span></span> Early-stage developer • shipping & learning';

  const heroText = document.querySelector('.hero-text');
  if (heroText) heroText.innerHTML = 'I’m <strong>SihleM</strong>, an early-stage game developer building independent projects under <strong>Poison Games</strong>. I now have public releases and Early Access builds while continuing to learn through active simulation, interactive-fiction, multiplayer and platform work.';

  const heroMeta = document.querySelectorAll('.hero-meta > div');
  if (heroMeta[0]) heroMeta[0].querySelector('strong').textContent = 'Simulation, narrative & systems';
  if (heroMeta[1]) heroMeta[1].querySelector('strong').textContent = 'Build → Test → Release → Improve';
  if (heroMeta[2]) heroMeta[2].querySelector('strong').textContent = 'Active releases + new projects';

  const showcase = document.querySelector('.showcase-projects');
  if (showcase) {
    showcase.innerHTML = `
      <div class="showcase-row active"><span>01</span><div><strong>Mobile MMA Sim</strong><small>Early Access • v3.0 launch prep</small></div><b>↗</b></div>
      <div class="showcase-row"><span>02</span><div><strong>Unwritten Meridian</strong><small>Book One • itch.io + Android testing</small></div><b>↗</b></div>
      <div class="showcase-row"><span>03</span><div><strong>Online MMA Sim</strong><small>Alpha preview stage</small></div><b>↗</b></div>
      <div class="showcase-row"><span>04</span><div><strong>Music Career Simulation</strong><small>Working title • In development</small></div><b>↗</b></div>
      <div class="showcase-row"><span>05</span><div><strong>Another Project</strong><small>In development</small></div><b>↗</b></div>
      <div class="showcase-row"><span>06</span><div><strong>3D Game Project</strong><small>In development</small></div><b>↗</b></div>`;
  }

  insertSnapshot();

  const projectsIntro = document.querySelector('#projects .section-intro > p');
  if (projectsIntro) projectsIntro.textContent = 'The portfolio now spans released games, Early Access testing, an online Alpha and new projects in development. I keep public descriptions focused on what players can understand without exposing unreleased internal game logic.';

  const mmaCard = [...document.querySelectorAll('.project-card')].find(card => card.querySelector('h3')?.textContent.trim() === 'Mobile MMA Sim');
  if (mmaCard) {
    const status = mmaCard.querySelector('.project-status');
    if (status) status.textContent = 'Early Access • Launch prep';
    const copy = mmaCard.querySelector('.project-content > p');
    if (copy) copy.textContent = 'My most developed project so far. Mobile MMA Sim has moved from browser prototypes into itch.io releases, Google Play Early Access and platform-focused builds, while I continue improving career flow, fight balance, realism and stability.';
    const releaseBlock = [...mmaCard.querySelectorAll('.detail-grid > div')].find(div => div.querySelector('strong')?.textContent.trim() === 'Release work');
    const releaseText = releaseBlock?.querySelector('p');
    if (releaseText) releaseText.textContent = 'Google Play Early Access, itch.io demo/full editions, versioned saves and Windows platform preparation.';
    const fightBlock = [...mmaCard.querySelectorAll('.detail-grid > div')].find(div => div.querySelector('strong')?.textContent.trim() === 'Fight systems');
    const fightText = fightBlock?.querySelector('p');
    if (fightText) fightText.textContent = 'Second-by-second simulation, tactics, judging, style identity, stamina, position changes and ongoing balance work.';
    const actions = mmaCard.querySelector('.project-actions');
    if (actions && !actions.querySelector(`[href="${LINKS.play}"]`)) {
      actions.insertAdjacentHTML('beforeend', `<a class="project-link blue-link" href="${LINKS.play}" ${externalAttrs}>View Google Play Early Access <span aria-hidden="true">↗</span></a>`);
    }
    if (!mmaCard.querySelector('.project-update')) {
      mmaCard.querySelector('.project-content')?.insertAdjacentHTML('beforeend', '<div class="project-update"><strong>Current milestone:</strong> stabilising Early Access and preparing the major v3.0.0.0 launch update for 13 October 2026, with Windows platform work continuing alongside the launch build.</div>');
    }
  }

  const meridianCard = [...document.querySelectorAll('.project-card')].find(card => card.querySelector('h3')?.textContent.includes('Unwritten Meridian'));
  if (meridianCard) {
    const status = meridianCard.querySelector('.project-status');
    if (status) status.textContent = 'Book One • Android testing';
    const copy = meridianCard.querySelector('.project-content > p');
    if (copy) copy.textContent = 'A branching interactive-fiction project focused on player choice, persistent consequences and continuity. Book One is publicly available on itch.io while I continue Android testing and Google Play release preparation.';
    if (!meridianCard.querySelector('.project-update')) {
      meridianCard.querySelector('.project-content')?.insertAdjacentHTML('beforeend', '<div class="project-update"><strong>Current milestone:</strong> Google Play testing / Early Access preparation, store assets and launch material for Book One.</div>');
    }
  }

  const projectGrid = document.querySelector('#projects .project-grid');
  if (projectGrid && !document.querySelector('[data-project="online-mma"]')) {
    const firstExisting = projectGrid.firstElementChild;
    firstExisting?.insertAdjacentHTML('afterend', `
      <article class="project-card reveal" data-project="online-mma">
        <div class="project-visual visual-online">
          <span class="project-number">03</span>
          <span class="project-status build">Alpha preview</span>
          <div class="online-arena" aria-hidden="true"></div><div class="online-line" aria-hidden="true"></div>
          <div class="visual-caption"><small>ONLINE • CAREER • EVENTS</small><strong>ON</strong></div>
        </div>
        <div class="project-content compact">
          <div class="project-kicker"><span>MULTIPLAYER PROJECT</span><span>Early Alpha</span></div>
          <h3>Online MMA Sim</h3>
          <p>A separate multiplayer-focused MMA simulation in early Alpha. Current work is centred on making player challenges, event scheduling, fight processing and shared progression feel coherent without slowing down online play.</p>
          <div class="tag-row"><span>Online</span><span>Simulation</span><span>Alpha</span><span>Systems</span></div>
          <div class="project-update"><strong>Current milestone:</strong> Alpha preview stage. No public launch date has been announced.</div>
        </div>
      </article>

      <article class="project-card reveal" data-project="music-career">
        <div class="project-visual visual-music">
          <span class="project-number">04</span>
          <span class="project-status warm">In development</span>
          <div class="music-bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="visual-caption"><small>CAREER • MUSIC • CONSEQUENCE</small><strong>MC</strong></div>
        </div>
        <div class="project-content compact">
          <div class="project-kicker"><span>WORKING TITLE</span><span>Career simulation</span></div>
          <h3>Music Career Simulation</h3>
          <p>An unnamed music-career and label simulation being developed around realistic planning, releases, live events, relationships and the way a player's reputation can shape later opportunities.</p>
          <div class="tag-row"><span>Simulation</span><span>Career</span><span>Management</span><span>Realism</span></div>
          <div class="project-update"><strong>Current milestone:</strong> improving realism, live-show feedback, project planning and long-term consequence systems without overcrowding the interface.</div>
        </div>
      </article>`);
  }

  const numberedCards = [...document.querySelectorAll('#projects .project-grid .project-card')];
  let nextNumber = 2;
  numberedCards.forEach(card => {
    const title = card.querySelector('h3')?.textContent.trim();
    const number = card.querySelector('.project-number');
    if (title === 'Unwritten Meridian — Book One') nextNumber = 2;
    else if (title === 'Online MMA Sim') nextNumber = 3;
    else if (title === 'Music Career Simulation') nextNumber = 4;
    else if (title === 'Another Project') nextNumber = 5;
    else if (title === '3D Game Project') nextNumber = 6;
    else return;
    if (number) number.textContent = String(nextNumber).padStart(2,'0');
  });

  const journeyItems = [...document.querySelectorAll('.timeline-item')];
  const releaseItem = journeyItems.find(item => item.querySelector('small')?.textContent.trim() === 'RELEASE');
  if (releaseItem) {
    const h = releaseItem.querySelector('h3');
    const p = releaseItem.querySelector('p');
    if (h) h.textContent = 'Learning what happens after a build is playable';
    if (p) p.textContent = 'Publishing has expanded into itch.io releases, Google Play testing and Early Access, store assets, versioning, save compatibility and Windows platform preparation.';
  }
  const expandItem = journeyItems.find(item => item.querySelector('small')?.textContent.trim() === 'EXPAND');
  if (expandItem) {
    const h = expandItem.querySelector('h3');
    const p = expandItem.querySelector('p');
    if (h) h.textContent = 'Expanding into multiplayer, narrative and new simulations';
    if (p) p.textContent = 'Unwritten Meridian introduced branching narrative state, Online MMA Sim adds multiplayer/event-flow challenges, and newer simulations are pushing me toward more persistent, believable game worlds.';
  }
  const nowItem = journeyItems.find(item => item.querySelector('small')?.textContent.trim() === 'NOW');
  if (nowItem) {
    const h = nowItem.querySelector('h3');
    const p = nowItem.querySelector('p');
    if (h) h.textContent = 'Launch preparation, platform work and better QA';
    if (p) p.textContent = 'My current focus is stabilising Mobile MMA Sim for its major October launch, progressing Unwritten Meridian on Android, preparing an Online MMA Alpha preview and improving the structure of newer projects.';
  }

  const skills = [...document.querySelectorAll('.skill-card')];
  if (skills[0]) {
    skills[0].querySelector('h3').textContent = 'Game systems & simulation';
    skills[0].querySelector('p').textContent = 'Career loops, progression, persistent reputation, rankings, contracts, events, attributes and connected consequences across different simulation projects.';
  }
  if (skills[1]) {
    skills[1].querySelector('h3').textContent = 'QA & release testing';
    skills[1].querySelector('p').textContent = 'Regression, smoke checks, bug isolation, edge cases, save migration, platform parity and gameplay-loop validation before public builds.';
  }
  if (skills[2]) {
    skills[2].querySelector('p').textContent = 'Growing practical experience with Java, HTML, CSS, JavaScript, SQL, web application logic and desktop/mobile integration work.';
  }
  if (skills[3]) {
    skills[3].querySelector('h3').textContent = 'Mobile, desktop & 3D';
    skills[3].querySelector('p').textContent = 'Android packaging and Play Console workflows, Windows builds/platform preparation, responsive UI work and continued early 3D development.';
  }

  const playCard = [...document.querySelectorAll('.publish-card')].find(card => card.querySelector('h3')?.textContent.trim() === 'Google Play');
  if (playCard) {
    const copy = playCard.querySelector('p');
    if (copy) copy.textContent = 'Mobile MMA Sim and Unwritten Meridian are part of my current Android publishing journey, covering testing tracks, Early Access, store preparation and update workflows.';
    if (!playCard.querySelector(`[href="${LINKS.play}"]`)) {
      playCard.insertAdjacentHTML('beforeend', `<a class="text-link" href="${LINKS.play}" ${externalAttrs}>View Mobile MMA Sim on Google Play ↗</a>`);
    }
  }
  const windowsCard = [...document.querySelectorAll('.publish-card')].find(card => card.querySelector('h3')?.textContent.trim() === 'Windows & Web');
  if (windowsCard) windowsCard.querySelector('p').textContent = 'Browser/PWA builds, downloadable Windows packages and platform-edition preparation, with Mobile MMA Sim currently the main Windows focus.';

  const closingCopy = document.querySelector('.closing-inner > p:not(.eyebrow)');
  if (closingCopy) closingCopy.textContent = 'The next stage is about turning active testing and Early Access work into stronger public releases while continuing to build new projects without rushing the fundamentals.';
  const closingDevlog = document.querySelector('.closing-actions a[href="blog.html"]');
  if (closingDevlog) closingDevlog.innerHTML = 'Read the devlog <span aria-hidden="true">→</span>';

  const about = document.getElementById('about');
  if (about && !document.getElementById('community')) {
    about.insertAdjacentHTML('beforebegin', `
      <section id="community" class="section-shell social-section">
        <div class="section-intro reveal">
          <div><p class="eyebrow">FOLLOW POISON GAMES</p><h2>Games, updates and community.</h2></div>
          <p>Follow development, see release updates, join the community or browse the playable projects directly through the official Poison Games channels.</p>
        </div>
        <div class="social-grid">
          <a class="social-card x reveal" href="${LINKS.x}" ${externalAttrs}><span class="social-mark">X</span><div><h3>X / Twitter</h3><p>Short development updates, announcements and release posts.</p></div><small>@PoisonGamesSM ↗</small></a>
          <a class="social-card facebook reveal" href="${LINKS.facebook}" ${externalAttrs}><span class="social-mark">f</span><div><h3>Facebook</h3><p>Poison Games posts, game updates and community-facing news.</p></div><small>Poison Games ↗</small></a>
          <a class="social-card discord reveal" href="${LINKS.discord}" ${externalAttrs}><span class="social-mark">D</span><div><h3>Discord</h3><p>Join the community and follow development more closely.</p></div><small>Join server ↗</small></a>
          <a class="social-card itch reveal" href="${LINKS.itch}" ${externalAttrs}><span class="social-mark">IO</span><div><h3>itch.io</h3><p>Playable releases, demos, full editions and project devlogs.</p></div><small>Poison Games on itch.io ↗</small></a>
        </div>
        <div class="social-note reveal">Player-facing YouTube content is also being prepared for gameplay showcases, trailers and development updates. Longer written progress stays in the <a class="text-link" href="blog.html">Poison Games devlog →</a></div>
      </section>`);
  }
}

function enhanceDevlog() {
  if (!document.querySelector('.blog-main')) return;

  document.title = 'Devlog | Poison Games — SihleM';
  const eyebrow = document.querySelector('.blog-hero .eyebrow');
  if (eyebrow) eyebrow.textContent = 'POISON GAMES / DEVLOG';

  const heroHeading = document.querySelector('.blog-hero h1');
  if (heroHeading) heroHeading.innerHTML = 'Release notes.<br><span>Development in motion.</span>';

  const heroIntro = document.querySelector('.blog-hero-copy > p:last-child');
  if (heroIntro) heroIntro.textContent = 'A public record of releases, testing milestones, new projects and lessons from my independent game-development journey as SihleM.';

  const panel = document.querySelector('.blog-hero-panel');
  const panelCopy = panel?.querySelector('p');
  if (panelCopy) panelCopy.textContent = 'I’m still early in game development, but the work is getting broader: public releases, Early Access, Android testing, Windows packaging, online systems and multiple games in active development.';
  if (panel && !panel.querySelector('.community-inline')) {
    panel.insertAdjacentHTML('beforeend', `<div class="community-inline"><a href="${LINKS.x}" ${externalAttrs}>X / Twitter ↗</a><a href="${LINKS.facebook}" ${externalAttrs}>Facebook ↗</a><a href="${LINKS.discord}" ${externalAttrs}>Discord ↗</a></div>`);
  }

  const sectionHead = document.querySelector('.blog-section-head');
  const sectionEyebrow = sectionHead?.querySelector('.eyebrow');
  if (sectionEyebrow) sectionEyebrow.textContent = 'LATEST DEVLOG';

  const blogGrid = document.querySelector('.blog-grid');
  if (blogGrid && !blogGrid.querySelector('[data-post="october-launch-prep"]')) {
    blogGrid.insertAdjacentHTML('afterbegin', `
      <article class="blog-card featured reveal" data-post="october-launch-prep">
        <div class="blog-card-media"><img class="logo-contained" src="assets/projects/mobile-mma/icon-512.png" alt="Mobile MMA Sim official artwork" /></div>
        <div class="blog-card-body">
          <div class="blog-meta"><span>02 OCT 2026</span><i></i><span>LAUNCH PREP</span><i></i><span>MOBILE MMA SIM</span></div>
          <h3>Mobile MMA Sim moves into major-launch preparation.</h3>
          <p>Mobile MMA Sim is still in Google Play Early Access while I work toward the major v3.0.0.0 launch target on 13 October. The focus is no longer just adding systems—it is stabilising the full career loop, protecting previous fixes and making the release feel consistent across the game.</p>
          <div class="release-callout"><strong>Current development focus:</strong> fight-engine realism and balance, career-flow stability, regression testing, save continuity, Android release preparation and the Windows platform edition.</div>
          <div class="community-inline"><a href="${LINKS.play}" ${externalAttrs}>Google Play ↗</a><a href="${LINKS.mmaDemo}" ${externalAttrs}>Free demo ↗</a><a href="${LINKS.mmaFull}" ${externalAttrs}>Full edition ↗</a></div>
        </div>
      </article>

      <article class="blog-card reveal" data-post="unwritten-android">
        <div class="blog-card-media"><img src="assets/projects/unwritten-meridian/cover-630x500.png" alt="Unwritten Meridian Book One cover artwork" /></div>
        <div class="blog-card-body">
          <div class="blog-meta"><span>02 OCT 2026</span><i></i><span>ANDROID</span><i></i><span>UNWRITTEN MERIDIAN</span></div>
          <h3>Unwritten Meridian continues its Android release path.</h3>
          <p>Book One is already available on itch.io, while the Android version continues through Google Play testing / Early Access preparation. This stage has pushed me further into store requirements, testing windows, release assets and making sure the same story experience remains readable and stable on mobile.</p>
          <a class="project-link blue-link" href="${LINKS.meridian}" ${externalAttrs}>View Book One on itch.io ↗</a>
        </div>
      </article>

      <article class="blog-card reveal" data-post="online-mma-alpha">
        <div class="blog-card-body">
          <div class="blog-meta"><span>02 OCT 2026</span><i></i><span>ALPHA</span><i></i><span>ONLINE MMA SIM</span></div>
          <h3>Online MMA Sim reaches an Alpha preview stage.</h3>
          <p>This is a separate multiplayer-focused project rather than an online mode for Mobile MMA Sim. The current Alpha work is about making challenge visibility, event scheduling, fight timing and player progression behave like one connected online system.</p>
          <div class="release-callout"><strong>Public status:</strong> Alpha preview stage. I have not announced a public launch date yet.</div>
        </div>
      </article>

      <article class="blog-card reveal" data-post="music-sim-progress">
        <div class="blog-card-body">
          <div class="blog-meta"><span>02 OCT 2026</span><i></i><span>IN DEVELOPMENT</span><i></i><span>NEW SIMULATION</span></div>
          <h3>A realistic music-career simulation is taking shape.</h3>
          <p>I’m also building an unnamed music-career / label simulation. The project is teaching me how to design a slower, more believable career loop where releases, live shows, professional relationships and past behaviour can matter later instead of everything being reduced to repeated clicks.</p>
          <div class="release-callout"><strong>Current focus:</strong> clearer mobile layouts, richer live-show feedback, project/release planning and long-term reputation without overloading the screen.</div>
        </div>
      </article>

      <article class="blog-card reveal" data-post="platform-growth">
        <div class="blog-card-body">
          <div class="blog-meta"><span>02 OCT 2026</span><i></i><span>DEVELOPMENT JOURNEY</span><i></i><span>PLATFORMS</span></div>
          <h3>The work is expanding beyond building the games themselves.</h3>
          <p>Recent development has included Android App Bundles and Play Console workflows, browser/PWA builds, Windows packaging, release QA, save/version migration, store artwork, social branding and preparation for player-facing YouTube videos. I’m still learning, but the projects now cover much more of the full path from idea to player.</p>
        </div>
      </article>

      <article class="blog-card reveal" data-post="google-play-early-access">
        <div class="blog-card-body">
          <div class="blog-meta"><span>15 SEP 2026</span><i></i><span>EARLY ACCESS</span><i></i><span>GOOGLE PLAY</span></div>
          <h3>Mobile MMA Sim entered Google Play Early Access.</h3>
          <p>Moving beyond local and browser testing introduced a new set of lessons around Android builds, testing tracks, store preparation, real-device behaviour and updating a game after players can actually access it.</p>
          <a class="project-link primary-link" href="${LINKS.play}" ${externalAttrs}>View Mobile MMA Sim on Google Play ↗</a>
        </div>
      </article>

      <article class="blog-card reveal" data-post="community-launch">
        <div class="blog-card-body">
          <div class="blog-meta"><span>15 SEP 2026</span><i></i><span>COMMUNITY</span><i></i><span>POISON GAMES</span></div>
          <h3>Poison Games now has official community channels.</h3>
          <p>I’m bringing the public side of Poison Games into one consistent identity across the portfolio, itch.io and social channels. X is for shorter development updates, Facebook for broader posts, and Discord is the place to join the community more directly.</p>
          <div class="community-inline"><a href="${LINKS.x}" ${externalAttrs}>Follow on X ↗</a><a href="${LINKS.facebook}" ${externalAttrs}>Facebook ↗</a><a href="${LINKS.discord}" ${externalAttrs}>Join Discord ↗</a></div>
        </div>
      </article>`);
  }
}

function enhanceFooter() {
  const footerCenter = document.querySelector('footer .footer-center');
  if (!footerCenter) return;
  footerCenter.innerHTML = socialLinksMarkup(Boolean(document.querySelector('.blog-main')));
}

injectBrandStyles();
enhanceNavigation();
enhanceHomePage();
enhanceDevlog();
enhanceFooter();

const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 45}ms`;
  revealObserver.observe(el);
});

const navLinks = [...document.querySelectorAll('.nav a')];
const sectionLinks = navLinks.filter(link => (link.getAttribute('href') || '').startsWith('#'));
const sections = sectionLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(entry => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

  if (!visible) return;
  sectionLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.1, 0.3] });

sections.forEach(section => sectionObserver.observe(section));

const progressBar = document.querySelector('.progress span');
const updateProgress = () => {
  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
