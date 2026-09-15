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
    .footer-center{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 12px;align-items:center}
    .footer-center a{color:var(--muted);text-decoration:none;font-size:11px;font-weight:750}
    .footer-center a:hover{color:var(--text)}
    .release-callout{margin:20px 0 0;padding:17px 18px;border:1px solid rgba(255,64,89,.22);border-radius:14px;background:linear-gradient(90deg,rgba(255,64,89,.07),rgba(79,131,255,.04));color:var(--muted);font-size:13px}
    .release-callout strong{color:var(--text)}
    .community-inline{margin-top:24px;display:flex;flex-wrap:wrap;gap:9px}
    .community-inline a{padding:8px 11px;border:1px solid var(--line);border-radius:999px;text-decoration:none;color:var(--muted);font-size:11px;font-weight:800;background:rgba(255,255,255,.02)}
    .community-inline a:hover{color:var(--text);border-color:var(--line-strong)}
    .live-release-tag{display:inline-flex;align-items:center;gap:7px;margin-top:12px;padding:7px 10px;border:1px solid rgba(79,131,255,.22);border-radius:999px;color:var(--blue-soft);font:700 9px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;letter-spacing:.07em;text-transform:uppercase}
    .live-release-tag::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--red);box-shadow:0 0 10px rgba(255,64,89,.5)}
    @media(max-width:980px){.social-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:700px){.footer-center{justify-content:flex-start}}
    @media(max-width:480px){.social-grid{grid-template-columns:1fr}.social-card{min-height:150px}}
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

function enhanceHomePage() {
  if (!document.getElementById('projects')) return;

  const statusPill = document.querySelector('.status-pill');
  if (statusPill) statusPill.innerHTML = '<span></span> Early-stage developer • actively growing';

  const heroText = document.querySelector('.hero-text');
  if (heroText) heroText.innerHTML = 'I’m <strong>SihleM</strong>, an early-stage game developer building independent projects under <strong>Poison Games</strong>. I use each project to improve my programming, game design, QA, UI and release skills through practical work.';

  const mmaShowcase = [...document.querySelectorAll('.showcase-row')].find(row => row.textContent.includes('Mobile MMA Sim'));
  const mmaShowcaseStatus = mmaShowcase?.querySelector('small');
  if (mmaShowcaseStatus) mmaShowcaseStatus.textContent = 'Google Play • itch.io';

  const mmaCard = [...document.querySelectorAll('.project-card')].find(card => card.querySelector('h3')?.textContent.trim() === 'Mobile MMA Sim');
  if (mmaCard) {
    const status = mmaCard.querySelector('.project-status');
    if (status) status.textContent = 'Available • actively updated';

    const releaseBlock = [...mmaCard.querySelectorAll('.detail-grid > div')].find(div => div.querySelector('strong')?.textContent.trim() === 'Release work');
    const releaseText = releaseBlock?.querySelector('p');
    if (releaseText) releaseText.textContent = 'Save migrations, versioned builds, itch.io releases and a public Google Play release.';

    const actions = mmaCard.querySelector('.project-actions');
    if (actions && !actions.querySelector(`[href="${LINKS.play}"]`)) {
      actions.insertAdjacentHTML('beforeend', `<a class="project-link blue-link" href="${LINKS.play}" ${externalAttrs}>Get it on Google Play <span aria-hidden="true">↗</span></a>`);
    }
  }

  const releaseTimeline = [...document.querySelectorAll('.timeline-item')].find(item => item.querySelector('small')?.textContent.trim() === 'RELEASE');
  const releaseTimelineText = releaseTimeline?.querySelector('p');
  if (releaseTimelineText) releaseTimelineText.textContent = 'I moved from browser and desktop builds into Android testing and a public Google Play release, learning store requirements, versioning, release tracks and device-level QA along the way.';

  const playCard = [...document.querySelectorAll('.publish-card')].find(card => card.querySelector('h3')?.textContent.trim() === 'Google Play');
  if (playCard) {
    const copy = playCard.querySelector('p');
    if (copy) copy.textContent = 'Mobile MMA Sim is now available on Google Play. I continue to learn Android App Bundles, release tracks, testing access and update workflows under SihleM.';
    if (!playCard.querySelector(`[href="${LINKS.play}"]`)) {
      playCard.insertAdjacentHTML('beforeend', `<a class="text-link" href="${LINKS.play}" ${externalAttrs}>View Mobile MMA Sim on Google Play ↗</a>`);
    }
  }

  const about = document.getElementById('about');
  if (about && !document.getElementById('community')) {
    about.insertAdjacentHTML('beforebegin', `
      <section id="community" class="section-shell social-section">
        <div class="section-intro reveal">
          <div>
            <p class="eyebrow">FOLLOW POISON GAMES</p>
            <h2>Games, updates and community.</h2>
          </div>
          <p>Follow development, see release updates, join the community or browse the projects directly. These are the official public links I currently use for Poison Games and SihleM.</p>
        </div>
        <div class="social-grid">
          <a class="social-card x reveal" href="${LINKS.x}" ${externalAttrs}><span class="social-mark">X</span><div><h3>X / Twitter</h3><p>Short development updates, announcements and release posts.</p></div><small>@PoisonGamesSM ↗</small></a>
          <a class="social-card facebook reveal" href="${LINKS.facebook}" ${externalAttrs}><span class="social-mark">f</span><div><h3>Facebook</h3><p>Poison Games posts, game updates and community-facing news.</p></div><small>Poison Games ↗</small></a>
          <a class="social-card discord reveal" href="${LINKS.discord}" ${externalAttrs}><span class="social-mark">D</span><div><h3>Discord</h3><p>Join the Poison Games community and follow development more closely.</p></div><small>Join server ↗</small></a>
          <a class="social-card itch reveal" href="${LINKS.itch}" ${externalAttrs}><span class="social-mark">IO</span><div><h3>itch.io</h3><p>Playable releases, demos, full editions and project devlogs.</p></div><small>Poison Games on itch.io ↗</small></a>
        </div>
        <div class="social-note reveal">For longer development notes and release history, use the <a class="text-link" href="blog.html">Poison Games devlog →</a></div>
      </section>`);
  }

  const closingDevlog = document.querySelector('.closing-actions a[href="blog.html"]');
  if (closingDevlog) closingDevlog.innerHTML = 'Read the devlog <span aria-hidden="true">→</span>';
}

function enhanceDevlog() {
  if (!document.querySelector('.blog-main')) return;

  document.title = 'Devlog | Poison Games — SihleM';
  const eyebrow = document.querySelector('.blog-hero .eyebrow');
  if (eyebrow) eyebrow.textContent = 'POISON GAMES / DEVLOG';

  const heroHeading = document.querySelector('.blog-hero h1');
  if (heroHeading) heroHeading.innerHTML = 'Release notes.<br><span>Development in motion.</span>';

  const heroIntro = document.querySelector('.blog-hero-copy > p:last-child');
  if (heroIntro) heroIntro.textContent = 'A separate space for release updates, development priorities, lessons and community news from my independent game-development journey as SihleM.';

  const panel = document.querySelector('.blog-hero-panel');
  const panelCopy = panel?.querySelector('p');
  if (panelCopy) panelCopy.textContent = 'I’m still early in game development. This devlog records real milestones, problems I’m working through and the lessons I can carry into the next build.';
  if (panel && !panel.querySelector('.community-inline')) {
    panel.insertAdjacentHTML('beforeend', `<div class="community-inline"><a href="${LINKS.x}" ${externalAttrs}>X / Twitter ↗</a><a href="${LINKS.facebook}" ${externalAttrs}>Facebook ↗</a><a href="${LINKS.discord}" ${externalAttrs}>Discord ↗</a></div>`);
  }

  const sectionHead = document.querySelector('.blog-section-head');
  const sectionEyebrow = sectionHead?.querySelector('.eyebrow');
  if (sectionEyebrow) sectionEyebrow.textContent = 'LATEST DEVLOG';

  const blogGrid = document.querySelector('.blog-grid');
  if (blogGrid && !blogGrid.querySelector('[data-post="google-play-release"]')) {
    blogGrid.insertAdjacentHTML('afterbegin', `
      <article class="blog-card featured reveal" data-post="google-play-release">
        <div class="blog-card-media"><img class="logo-contained" src="assets/projects/mobile-mma/icon-512.png" alt="Mobile MMA Sim official artwork" /></div>
        <div class="blog-card-body">
          <div class="blog-meta"><span>15 SEP 2026</span><i></i><span>RELEASE</span><i></i><span>GOOGLE PLAY</span></div>
          <h3>Mobile MMA Sim is now available on Google Play.</h3>
          <p>The Android build has moved beyond closed testing and is now available to players on Google Play. Reaching a public mobile release is a major milestone in my journey—from browser prototypes and local builds to store preparation, release tracks, real-device testing and updates after launch.</p>
          <div class="release-callout"><strong>Current focus:</strong> the game continues to evolve. I’m working on fight-engine balance, fair rules for player and AI fighters, more realistic amateur matchmaking, simulation reliability and career-flow improvements while protecting fixes that already work.</div>
          <a class="project-link primary-link" href="${LINKS.play}" ${externalAttrs}>View Mobile MMA Sim on Google Play ↗</a>
        </div>
      </article>

      <article class="blog-card reveal" data-post="fight-engine-balance">
        <div class="blog-card-body">
          <div class="blog-meta"><span>15 SEP 2026</span><i></i><span>DEVELOPMENT</span><i></i><span>MOBILE MMA SIM</span></div>
          <h3>Balancing the fight engine without hidden advantages.</h3>
          <p>My next development pass is focused on making fighting styles feel distinct without letting grappling or wrestling dominate every matchup. Matchmaking also needs to make sense for amateur records and ability levels without turning progression into an easy path.</p>
          <p>The same stamina rules, techniques, limitations and fight logic should apply to the player and AI. I’m also checking simulation flow for repeated fights and protecting earlier fixes through regression testing before each public build.</p>
          <a class="project-link" href="${LINKS.mmaFull}" ${externalAttrs}>Follow Mobile MMA Sim on itch.io ↗</a>
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
