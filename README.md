<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>VOID — Agence Web & IA</title>
  <meta name="description" content="VOID crée des sites web premium avec intelligence artificielle intégrée pour les entreprises ambitieuses." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #060608;
      --white: #f2f0eb;
      --accent: #c8ff00;
      --grey: #1a1a1f;
      --grey-mid: #2e2e36;
      --grey-text: #8b8b96;
      --font-display: 'Syne', sans-serif;
      --font-body: 'Inter', sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--black);
      color: var(--white);
      font-family: var(--font-body);
      font-weight: 300;
      cursor: none;
      overflow-x: hidden;
    }

    /* ── CURSOR ── */
    .cursor {
      position: fixed;
      top: 0; left: 0;
      pointer-events: none;
      z-index: 9999;
    }
    .cursor__dot {
      width: 6px; height: 6px;
      background: var(--accent);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    .cursor__ring {
      width: 36px; height: 36px;
      border: 1px solid rgba(200,255,0,.4);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width .3s, height .3s, border-color .3s;
    }
    .cursor.hover .cursor__ring {
      width: 60px; height: 60px;
      border-color: var(--accent);
    }

    /* ── NAV ── */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 28px 48px;
      mix-blend-mode: normal;
    }
    .nav__logo {
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 800;
      letter-spacing: .12em;
      color: var(--white);
      text-decoration: none;
    }
    .nav__links {
      display: flex;
      gap: 40px;
      list-style: none;
    }
    .nav__links a {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--grey-text);
      text-decoration: none;
      transition: color .25s;
    }
    .nav__links a:hover { color: var(--white); }
    .nav__cta {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--black);
      background: var(--accent);
      padding: 10px 22px;
      border-radius: 100px;
      text-decoration: none;
      transition: opacity .25s;
    }
    .nav__cta:hover { opacity: .85; }

    /* ── HERO ── */
    .hero {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 48px 72px;
      position: relative;
      overflow: hidden;
    }
    .hero__bg-number {
      position: absolute;
      top: 50%;
      right: -60px;
      transform: translateY(-50%);
      font-family: var(--font-display);
      font-size: clamp(320px, 38vw, 600px);
      font-weight: 800;
      color: transparent;
      -webkit-text-stroke: 1px rgba(255,255,255,.04);
      line-height: 1;
      pointer-events: none;
      user-select: none;
    }
    .hero__tag {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: .2em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 32px;
      opacity: 0;
    }
    .hero__title {
      font-family: var(--font-display);
      font-size: clamp(72px, 11vw, 168px);
      font-weight: 800;
      line-height: .92;
      letter-spacing: -.02em;
      overflow: hidden;
    }
    .hero__title span { display: block; transform: translateY(110%); }
    .hero__sub {
      margin-top: 40px;
      max-width: 420px;
      font-size: 15px;
      line-height: 1.7;
      color: var(--grey-text);
      opacity: 0;
    }
    .hero__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 64px;
    }
    .hero__scroll {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 11px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--grey-text);
      opacity: 0;
    }
    .hero__scroll-line {
      width: 48px;
      height: 1px;
      background: var(--grey-text);
      position: relative;
      overflow: hidden;
    }
    .hero__scroll-line::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--accent);
      animation: scrollLine 2s ease-in-out infinite;
    }
    @keyframes scrollLine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .hero__founders {
      font-size: 11px;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--grey-text);
      text-align: right;
      opacity: 0;
      line-height: 1.9;
    }

    /* ── MARQUEE ── */
    .marquee-wrapper {
      border-top: 1px solid var(--grey-mid);
      border-bottom: 1px solid var(--grey-mid);
      padding: 18px 0;
      overflow: hidden;
      background: var(--grey);
    }
    .marquee-track {
      display: flex;
      gap: 0;
      animation: marqueeScroll 22s linear infinite;
      white-space: nowrap;
    }
    .marquee-track span {
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--grey-text);
      padding: 0 48px;
    }
    .marquee-track span.accent { color: var(--accent); }
    @keyframes marqueeScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    /* ── SERVICES ── */
    .services {
      padding: 140px 48px;
    }
    .section-label {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 64px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .section-label::before {
      content: '';
      width: 32px;
      height: 1px;
      background: var(--accent);
    }
    .services__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
    }
    .service-card {
      background: var(--grey);
      padding: 56px 48px;
      position: relative;
      overflow: hidden;
      transition: background .3s;
    }
    .service-card:hover { background: var(--grey-mid); }
    .service-card__num {
      font-family: var(--font-display);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .2em;
      color: var(--accent);
      margin-bottom: 40px;
    }
    .service-card__title {
      font-family: var(--font-display);
      font-size: clamp(28px, 3vw, 40px);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 20px;
    }
    .service-card__desc {
      font-size: 14px;
      line-height: 1.75;
      color: var(--grey-text);
      max-width: 360px;
    }
    .service-card__arrow {
      position: absolute;
      bottom: 48px;
      right: 48px;
      width: 44px;
      height: 44px;
      border: 1px solid var(--grey-mid);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color .3s, background .3s;
    }
    .service-card:hover .service-card__arrow {
      border-color: var(--accent);
      background: var(--accent);
    }
    .service-card__arrow svg {
      width: 16px;
      height: 16px;
      stroke: var(--grey-text);
      transition: stroke .3s;
    }
    .service-card:hover .service-card__arrow svg { stroke: var(--black); }
    .service-card--wide {
      grid-column: span 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .service-card--wide .service-card__desc { max-width: 480px; }

    /* ── ABOUT ── */
    .about {
      padding: 140px 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 96px;
      align-items: center;
      border-top: 1px solid var(--grey-mid);
    }
    .about__big-text {
      font-family: var(--font-display);
      font-size: clamp(36px, 4.5vw, 64px);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -.02em;
    }
    .about__big-text em {
      font-style: normal;
      color: var(--accent);
    }
    .about__right p {
      font-size: 15px;
      line-height: 1.8;
      color: var(--grey-text);
      margin-bottom: 24px;
    }
    .about__right p:last-child { margin-bottom: 0; }
    .stat-row {
      display: flex;
      gap: 48px;
      margin-top: 48px;
    }
    .stat { display: flex; flex-direction: column; gap: 6px; }
    .stat__num {
      font-family: var(--font-display);
      font-size: 42px;
      font-weight: 800;
      letter-spacing: -.02em;
      line-height: 1;
    }
    .stat__label {
      font-size: 11px;
      letter-spacing: .16em;
      text-transform: uppercase;
      color: var(--grey-text);
    }

    /* ── PROCESS ── */
    .process {
      padding: 140px 48px;
      border-top: 1px solid var(--grey-mid);
    }
    .process__list {
      margin-top: 80px;
      display: flex;
      flex-direction: column;
    }
    .process__item {
      display: grid;
      grid-template-columns: 80px 1fr 1fr;
      align-items: start;
      gap: 48px;
      padding: 40px 0;
      border-bottom: 1px solid var(--grey-mid);
    }
    .process__item:first-child { border-top: 1px solid var(--grey-mid); }
    .process__num {
      font-family: var(--font-display);
      font-size: 13px;
      font-weight: 700;
      letter-spacing: .14em;
      color: var(--accent);
      padding-top: 4px;
    }
    .process__name {
      font-family: var(--font-display);
      font-size: 24px;
      font-weight: 800;
    }
    .process__desc {
      font-size: 14px;
      line-height: 1.75;
      color: var(--grey-text);
    }

    /* ── FOUNDERS ── */
    .founders {
      padding: 140px 48px;
      border-top: 1px solid var(--grey-mid);
    }
    .founders__grid {
      margin-top: 80px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
    }
    .founder-card {
      background: var(--grey);
      padding: 64px 48px;
      position: relative;
    }
    .founder-card__avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: var(--grey-mid);
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-size: 24px;
      font-weight: 800;
      color: var(--accent);
      border: 1px solid var(--grey-mid);
    }
    .founder-card__name {
      font-family: var(--font-display);
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 6px;
    }
    .founder-card__role {
      font-size: 11px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 24px;
    }
    .founder-card__bio {
      font-size: 14px;
      line-height: 1.75;
      color: var(--grey-text);
      max-width: 360px;
    }

    /* ── CTA ── */
    .cta-section {
      padding: 140px 48px;
      border-top: 1px solid var(--grey-mid);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .cta-section__eyebrow {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: .22em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 40px;
    }
    .cta-section__title {
      font-family: var(--font-display);
      font-size: clamp(56px, 8vw, 120px);
      font-weight: 800;
      line-height: .95;
      letter-spacing: -.03em;
      max-width: 900px;
      margin-bottom: 56px;
    }
    .cta-section__title em {
      font-style: normal;
      -webkit-text-stroke: 1px var(--white);
      color: transparent;
    }
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      background: var(--accent);
      color: var(--black);
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .12em;
      text-transform: uppercase;
      text-decoration: none;
      padding: 18px 36px;
      border-radius: 100px;
      transition: opacity .25s, transform .25s;
    }
    .cta-btn:hover { opacity: .88; transform: translateY(-2px); }
    .cta-btn svg { width: 16px; height: 16px; }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--grey-mid);
      padding: 40px 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    footer .logo {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 800;
      letter-spacing: .12em;
    }
    footer .copyright {
      font-size: 12px;
      color: var(--grey-text);
      letter-spacing: .08em;
    }
    footer .footer-links {
      display: flex;
      gap: 32px;
      list-style: none;
    }
    footer .footer-links a {
      font-size: 12px;
      color: var(--grey-text);
      text-decoration: none;
      letter-spacing: .1em;
      text-transform: uppercase;
      transition: color .25s;
    }
    footer .footer-links a:hover { color: var(--white); }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      nav { padding: 20px 24px; }
      .nav__links { display: none; }
      .hero { padding: 0 24px 56px; }
      .services { padding: 96px 24px; }
      .services__grid { grid-template-columns: 1fr; }
      .service-card--wide { grid-column: span 1; flex-direction: column; }
      .about { padding: 96px 24px; grid-template-columns: 1fr; gap: 48px; }
      .process { padding: 96px 24px; }
      .process__item { grid-template-columns: 48px 1fr; }
      .process__desc { grid-column: 2; }
      .founders { padding: 96px 24px; }
      .founders__grid { grid-template-columns: 1fr; }
      .cta-section { padding: 96px 24px; }
      footer { padding: 32px 24px; flex-direction: column; gap: 24px; text-align: center; }
    }
  </style>
</head>
<body>

  <div class="cursor" id="cursor">
    <div class="cursor__ring" id="cursorRing"></div>
    <div class="cursor__dot" id="cursorDot"></div>
  </div>

  <nav id="nav">
    <a href="#" class="nav__logo">VOID</a>
    <ul class="nav__links">
      <li><a href="#services">Services</a></li>
      <li><a href="#about">À propos</a></li>
      <li><a href="#process">Processus</a></li>
      <li><a href="#founders">Fondateurs</a></li>
    </ul>
    <a href="#contact" class="nav__cta">Démarrer un projet</a>
  </nav>

  <section class="hero" id="home">
    <div class="hero__bg-number" aria-hidden="true">V</div>
    <p class="hero__tag" id="heroTag">Agence Web & Intelligence Artificielle</p>
    <h1 class="hero__title">
      <span id="titleLine1">Sites qui</span>
      <span id="titleLine2">pensent.</span>
    </h1>
    <p class="hero__sub" id="heroSub">
      Nous concevons des expériences web sur mesure avec l'IA intégrée au cœur — chatbots, automatisations, interfaces intelligentes.
    </p>
    <div class="hero__bottom">
      <div class="hero__scroll" id="heroScroll">
        <div class="hero__scroll-line"></div>
        Scroll
      </div>
      <div class="hero__founders" id="heroFounders">
        Noé Célarier &amp; Arthur Bugajski<br />
        Paris, France
      </div>
    </div>
  </section>

  <div class="marquee-wrapper">
    <div class="marquee-track">
      <span>Sites Web Premium</span><span class="accent">✦</span>
      <span>Chatbots IA</span><span class="accent">✦</span>
      <span>Automatisation</span><span class="accent">✦</span>
      <span>Design Asymétrique</span><span class="accent">✦</span>
      <span>Interfaces Intelligentes</span><span class="accent">✦</span>
      <span>Expériences Digitales</span><span class="accent">✦</span>
      <span>Sites Web Premium</span><span class="accent">✦</span>
      <span>Chatbots IA</span><span class="accent">✦</span>
      <span>Automatisation</span><span class="accent">✦</span>
      <span>Design Asymétrique</span><span class="accent">✦</span>
      <span>Interfaces Intelligentes</span><span class="accent">✦</span>
      <span>Expériences Digitales</span><span class="accent">✦</span>
    </div>
  </div>

  <section class="services" id="services">
    <div class="section-label">Services</div>
    <div class="services__grid">
      <div class="service-card">
        <div class="service-card__num">01</div>
        <h3 class="service-card__title">Sites Web<br />Sur Mesure</h3>
        <p class="service-card__desc">Design premium et développement full-stack, pensé pour convertir et marquer les esprits. Chaque pixel a un rôle.</p>
        <div class="service-card__arrow">
          <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/></svg>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card__num">02</div>
        <h3 class="service-card__title">Chatbots<br />&amp; IA</h3>
        <p class="service-card__desc">Assistants virtuels entraînés sur votre contenu. Répondent 24/7, qualifient les leads, automatisent le support.</p>
        <div class="service-card__arrow">
          <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/></svg>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card__num">03</div>
        <h3 class="service-card__title">Automatisation<br />Intelligente</h3>
        <p class="service-card__desc">Connectez vos outils, automatisez vos flux métier. L'IA travaille pendant que vous vous concentrez sur l'essentiel.</p>
        <div class="service-card__arrow">
          <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/></svg>
        </div>
      </div>
      <div class="service-card">
        <div class="service-card__num">04</div>
        <h3 class="service-card__title">Refonte &amp;<br />Optimisation</h3>
        <p class="service-card__desc">Audit complet de votre présence digitale. Refonte ciblée, performances décuplées, identité renforcée.</p>
        <div class="service-card__arrow">
          <svg fill="none" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/></svg>
        </div>
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <div class="about__left">
      <div class="section-label">À propos</div>
      <h2 class="about__big-text">
        Le web<br />de demain,<br /><em>aujourd'hui.</em>
      </h2>
      <div class="stat-row">
        <div class="stat"><span class="stat__num">100%</span><span class="stat__label">Sur mesure</span></div>
        <div class="stat"><span class="stat__num">IA</span><span class="stat__label">Intégrée</span></div>
        <div class="stat"><span class="stat__num">0</span><span class="stat__label">Template</span></div>
      </div>
    </div>
    <div class="about__right">
      <p>VOID est une agence fondée sur une conviction simple : chaque entreprise mérite un site à la hauteur de ses ambitions. Pas un template, pas une solution générique — une expérience digitale pensée de A à Z.</p>
      <p>Nous intégrons l'intelligence artificielle non pas comme un gadget, mais comme un levier de croissance réel. Chatbots conversationnels, recommandations personnalisées, automatisation des processus — l'IA devient votre atout business.</p>
      <p>Notre approche : comprendre votre marché, challenger vos idées, livrer un produit qui surpasse vos attentes.</p>
    </div>
  </section>

  <section class="process" id="process">
    <div class="section-label">Processus</div>
    <div class="process__list">
      <div class="process__item">
        <div class="process__num">01</div>
        <div class="process__name">Découverte</div>
        <div class="process__desc">Immersion dans votre univers. Analyse de votre marché, de vos concurrents, de vos objectifs business. On ne code rien avant de tout comprendre.</div>
      </div>
      <div class="process__item">
        <div class="process__num">02</div>
        <div class="process__name">Stratégie & Design</div>
        <div class="process__desc">Architecture de l'information, wireframes, identité visuelle. Chaque décision est justifiée par la data et l'UX.</div>
      </div>
      <div class="process__item">
        <div class="process__num">03</div>
        <div class="process__name">Développement</div>
        <div class="process__desc">Code propre, performant, scalable. Intégration IA sur mesure. Tests rigoureux à chaque étape.</div>
      </div>
      <div class="process__item">
        <div class="process__num">04</div>
        <div class="process__name">Lancement & Suivi</div>
        <div class="process__desc">Déploiement soigné, monitoring post-launch, itérations basées sur les comportements réels de vos utilisateurs.</div>
      </div>
    </div>
  </section>

  <section class="founders" id="founders">
    <div class="section-label">Fondateurs</div>
    <div class="founders__grid">
      <div class="founder-card">
        <div class="founder-card__avatar">NC</div>
        <h3 class="founder-card__name">Noé Célarier</h3>
        <div class="founder-card__role">Co-fondateur</div>
        <p class="founder-card__bio">Passionné par l'intersection du design et de la technologie, Noé pilote la vision créative de VOID. Il croit que la beauté et la performance ne sont pas incompatibles — elles sont indissociables.</p>
      </div>
      <div class="founder-card">
        <div class="founder-card__avatar">AB</div>
        <h3 class="founder-card__name">Arthur Bugajski</h3>
        <div class="founder-card__role">Co-fondateur</div>
        <p class="founder-card__bio">Architecte des solutions techniques de VOID, Arthur transforme les idées les plus ambitieuses en produits concrets. Son obsession : des systèmes robustes qui s'effacent derrière l'expérience utilisateur.</p>
      </div>
    </div>
  </section>

  <section class="cta-section" id="contact">
    <p class="cta-section__eyebrow">Démarrons ensemble</p>
    <h2 class="cta-section__title">Votre prochain site<br /><em>commence ici.</em></h2>
    <a href="mailto:hello@void.agency" class="cta-btn">
      Prendre contact
      <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/></svg>
    </a>
  </section>

  <footer>
    <div class="logo">VOID</div>
    <p class="copyright">© 2026 VOID. Tous droits réservés.</p>
    <ul class="footer-links">
      <li><a href="mailto:hello@void.agency">Contact</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#founders">Équipe</a></li>
    </ul>
  </footer>

  <script>
    gsap.registerPlugin(ScrollTrigger);

    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    const dot = document.getElementById('cursorDot');
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      gsap.set(dot, { x: mx, y: my });
    });

    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      gsap.set(ring, { x: rx, y: ry });
      requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .service-card, .founder-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('#heroTag', { opacity: 1, y: 0, duration: .8, delay: .2 })
      .to(['#titleLine1', '#titleLine2'], { y: '0%', duration: 1, stagger: .12 }, '-=.4')
      .to('#heroSub', { opacity: 1, duration: .8 }, '-=.4')
      .to(['#heroScroll', '#heroFounders'], { opacity: 1, duration: .8, stagger: .1 }, '-=.4');

    gsap.from('#nav', { y: -20, opacity: 0, duration: .8, delay: .1, ease: 'power2.out' });

    gsap.utils.toArray('.service-card').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        opacity: 0, y: 40, duration: .7, delay: i * .08, ease: 'power2.out'
      });
    });

    gsap.from('.about__big-text', {
      scrollTrigger: { trigger: '.about', start: 'top 80%' },
      opacity: 0, x: -40, duration: .9, ease: 'power3.out'
    });

    gsap.from('.about__right', {
      scrollTrigger: { trigger: '.about', start: 'top 80%' },
      opacity: 0, x: 40, duration: .9, ease: 'power3.out'
    });

    gsap.utils.toArray('.stat').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: '.stat-row', start: 'top 88%' },
        opacity: 0, y: 20, duration: .6, delay: i * .1, ease: 'power2.out'
      });
    });

    gsap.utils.toArray('.process__item').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        opacity: 0, y: 24, duration: .6, delay: i * .06, ease: 'power2.out'
      });
    });

    gsap.utils.toArray('.founder-card').forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        opacity: 0, y: 36, duration: .7, delay: i * .12, ease: 'power2.out'
      });
    });

    gsap.from('.cta-section__title', {
      scrollTrigger: { trigger: '.cta-section', start: 'top 80%' },
      opacity: 0, y: 48, duration: 1, ease: 'power3.out'
    });

    window.addEventListener('scroll', () => {
      const nav = document.getElementById('nav');
      if (window.scrollY > 60) {
        nav.style.background = 'rgba(6,6,8,.85)';
        nav.style.backdropFilter = 'blur(16px)';
        nav.style.borderBottom = '1px solid rgba(46,46,54,.6)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.borderBottom = 'none';
      }
    });
  </script>
</body>
</html>
