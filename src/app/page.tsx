'use client'

import { useState, useEffect } from 'react'
import { Hero } from '@/components/ui/animated-hero'

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )
}


function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 21h8M12 17v4" />
    </svg>
  )
}

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m-6 6l-4 4h4v-4z" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
    </svg>
  )
}

const SERVICES = [
  {
    Icon: MonitorIcon,
    title: 'Sites Web Sur Mesure',
    desc: 'Design premium et développement full-stack, pensé pour convertir et marquer les esprits. Chaque pixel a un rôle.',
  },
  {
    Icon: BotIcon,
    title: 'Chatbots & IA',
    desc: 'Assistants virtuels entraînés sur votre contenu. Répondent 24/7, qualifient les leads, automatisent le support.',
  },
  {
    Icon: ZapIcon,
    title: 'Automatisation Intelligente',
    desc: "Connectez vos outils, automatisez vos flux métier. L'IA travaille pendant que vous vous concentrez sur l'essentiel.",
  },
  {
    Icon: RefreshIcon,
    title: 'Refonte & Optimisation',
    desc: 'Audit complet de votre présence digitale. Refonte ciblée, performances décuplées, identité renforcée.',
  },
  {
    Icon: PenIcon,
    title: 'UX/UI Design',
    desc: 'Une interface intuitive et captivante. Nous concevons des expériences utilisateur qui convertissent et fidélisent.',
  },
  {
    Icon: SearchIcon,
    title: 'Référencement SEO',
    desc: 'Optimisation naturelle pour atteindre les premières positions Google et générer du trafic qualifié en continu.',
  },
]

const PROCESS = [
  {
    num: '1',
    name: 'Contact et définition des besoins',
    desc: "Immersion dans votre univers. Analyse de votre marché, de vos concurrents et de vos objectifs business.",
  },
  {
    num: '2',
    name: 'Production et itérations',
    desc: "Design, développement, intégration IA. Chaque décision justifiée par la data et l'UX. Tests rigoureux.",
  },
  {
    num: '3',
    name: 'Livraison conforme à vos attentes',
    desc: "Déploiement soigné, monitoring post-launch, itérations basées sur les comportements réels de vos utilisateurs.",
  },
]

const FOUNDERS = [
  {
    initials: 'NC',
    name: 'Noé Célarier',
    bio: "Passionné par l'intersection du design et de la technologie, Noé pilote la vision créative de VOID. Il croit que la beauté et la performance sont indissociables.",
  },
  {
    initials: 'AB',
    name: 'Arthur Bugajski',
    bio: "Architecte des solutions techniques de VOID, Arthur transforme les idées les plus ambitieuses en produits concrets. Son obsession : des systèmes robustes qui s'effacent derrière l'expérience.",
  },
  {
    initials: 'MG',
    name: 'Marwan Granert',
    bio: "Expert en growth et acquisition digitale, Marwan connecte les projets VOID aux bonnes audiences. Sa mission : transformer chaque site en machine à générer des opportunités.",
  },
]

const PROJECTS = [
  {
    name: "R'Padel",
    category: 'Site vitrine',
    desc: 'Centre de padel moderne — réservations en ligne, animations et design premium.',
    image: '/projects/rpadel.png',
    href: 'https://dreamy-starlight-f8f45b.netlify.app/',
    color: 'from-violet-500/20 to-purple-600/20',
  },
  {
    name: 'Projet 2',
    category: 'Site vitrine',
    desc: 'Design premium et développement full-stack pour une expérience utilisateur optimale.',
    image: null,
    href: '#',
    color: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    name: 'Projet 3',
    category: 'Site vitrine',
    desc: 'Interface intelligente avec chatbot IA intégré et automatisation des processus.',
    image: null,
    href: '#',
    color: 'from-fuchsia-500/20 to-pink-600/20',
  },
  {
    name: 'Projet 4',
    category: 'Site vitrine',
    desc: "Refonte complète de l'identité digitale avec performances décuplées.",
    image: null,
    href: '#',
    color: 'from-purple-500/20 to-violet-600/20',
  },
]

const TECH_ROW_1 = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'OpenAI', 'Vercel']
const TECH_ROW_2 = ['Framer Motion', 'PostgreSQL', 'Supabase', 'Stripe', 'GitHub', 'Docker', 'Figma', 'GraphQL']

const MARQUEE_ITEMS = [
  'Sites Web Premium', 'Chatbots IA', 'Automatisation',
  'Design Premium', 'Interfaces Intelligentes', 'Expériences Digitales',
  'SEO & Performance', 'UX/UI Design',
]

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 ${dark ? 'text-primary' : 'text-primary'}`}>
      <span className="block w-5 h-0.5 bg-primary shrink-0" />
      {children}
    </div>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeProject])

  return (
    <main className="overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-light-border' : 'bg-white border-b border-light-border'
      }`}>
        <a href="#">
          <img src="/logo.png" alt="VOID" className="h-10 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: 'Services', href: '#services' },
            { label: 'À propos', href: '#about' },
            { label: 'Processus', href: '#process' },
            { label: 'Fondateurs', href: '#founders' },
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-[12px] font-medium text-light-muted hover:text-ink transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-[12px] font-bold bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary-hover transition-colors"
        >
          Démarrer un projet
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-16" id="home">
        <Hero />
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-light border-y border-light-border py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-dark-muted px-10">
                    {item}
                  </span>
                  <span className="text-primary text-xs">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="bg-light px-8 md:px-16 py-28" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Nos expertises pour votre<br />succès digital
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-light-card rounded-2xl p-8 border border-light-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <s.Icon />
                </div>
                <h3 className="font-display text-lg font-extrabold text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-light-muted leading-relaxed mb-5">{s.desc}</p>
                <a href="#contact" className="text-[12px] font-semibold text-primary hover:underline">
                  En savoir plus →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-white px-8 md:px-16 py-28 border-t border-light-border" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <SectionLabel>Réalisations</SectionLabel>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink leading-tight">
                Nos derniers projets
              </h2>
            </div>
            <a href="#contact" className="text-[12px] font-bold text-primary hover:underline shrink-0">
              Démarrer votre projet →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-light-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => p.href !== '#' && setActiveProject(p)}
              >
                <div className={`w-full aspect-[16/9] bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center gap-3 opacity-40">
                      <div className="w-16 h-12 border-2 border-primary rounded-lg" />
                      <div className="text-[11px] font-semibold tracking-widest uppercase text-primary">
                        Aperçu disponible
                      </div>
                    </div>
                  )}
                  {/* Hover overlay */}
                  {p.href !== '#' && (
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-ink text-[12px] font-bold px-5 py-2.5 rounded-full flex items-center gap-2">
                        Voir en direct <ArrowIcon className="w-3.5 h-3.5 stroke-ink" />
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-extrabold text-ink">{p.name}</h3>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-sm text-light-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL IFRAME ── */}
      {activeProject && (
        <div className="fixed inset-0 z-[100] flex flex-col" onClick={() => setActiveProject(null)}>
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />
          <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto w-full p-4">
            {/* Modal header */}
            <div className="flex items-center justify-between bg-white rounded-t-2xl px-6 py-4" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-3">
                <span className="font-display font-extrabold text-ink">{activeProject.name}</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {activeProject.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-bold text-primary hover:underline flex items-center gap-1.5"
                >
                  Ouvrir dans un onglet <ArrowIcon className="w-3.5 h-3.5 stroke-primary" />
                </a>
                <button
                  onClick={() => setActiveProject(null)}
                  className="w-8 h-8 rounded-full bg-light border border-light-border flex items-center justify-center hover:bg-light-border transition-colors text-ink font-bold text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
            {/* iframe */}
            <div className="flex-1 bg-white rounded-b-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
              <iframe
                src={activeProject.href}
                className="w-full h-full border-0"
                title={activeProject.name}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── ABOUT ── */}
      <section className="bg-light-card px-8 md:px-16 py-28 border-t border-light-border" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Agence Digitale Créative</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-6">
              Nous avons réalisé des projets ambitieux
            </h2>
            <p className="text-sm text-light-muted leading-relaxed mb-4">
              VOID est une agence fondée sur une conviction simple : chaque entreprise mérite un site à la hauteur de ses ambitions. Pas un template, pas une solution générique — une expérience digitale pensée de A à Z.
            </p>
            <p className="text-sm text-light-muted leading-relaxed mb-8">
              Nous intégrons l&apos;intelligence artificielle non pas comme un gadget, mais comme un levier de croissance réel. Notre approche : comprendre votre marché, challenger vos idées, livrer un produit qui surpasse vos attentes.
            </p>
            <a
              href="#contact"
              className="inline-block text-[12px] font-bold bg-primary text-white px-7 py-3.5 rounded-full hover:bg-primary-hover transition-colors"
            >
              Contactez-nous
            </a>
          </div>
          {/* Tech stack scrolling rows */}
          <div className="space-y-3 overflow-hidden select-none">
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {[...TECH_ROW_1, ...TECH_ROW_1].map((tech, i) => (
                <span key={i} className="shrink-0 px-4 py-2 bg-light rounded-lg text-[12px] font-medium text-light-muted border border-light-border">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 whitespace-nowrap" style={{ animation: 'marquee 38s linear infinite reverse' }}>
              {[...TECH_ROW_2, ...TECH_ROW_2].map((tech, i) => (
                <span key={i} className="shrink-0 px-4 py-2 bg-light rounded-lg text-[12px] font-medium text-light-muted border border-light-border">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 animate-marquee-slow whitespace-nowrap">
              {[...TECH_ROW_1.slice(4), ...TECH_ROW_2.slice(4), ...TECH_ROW_1.slice(4), ...TECH_ROW_2.slice(4)].map((tech, i) => (
                <span key={i} className="shrink-0 px-4 py-2 bg-light rounded-lg text-[12px] font-medium text-light-muted border border-light-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white px-8 md:px-16 py-28 border-t border-light-border" id="process">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: abstract visual */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-light border border-light-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 p-8 grid grid-cols-3 gap-3 opacity-50">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={`border border-light-border rounded-lg bg-white ${i % 3 === 0 ? 'col-span-2' : ''}`} />
              ))}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-light-border rounded-lg bg-white" />
              ))}
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="h-2 bg-light-border rounded-full mb-2 w-3/4" />
              <div className="h-2 bg-light-border rounded-full mb-2 w-1/2" />
              <div className="h-2 bg-primary/40 rounded-full w-2/3" />
            </div>
          </div>

          {/* Right: steps */}
          <div>
            <SectionLabel>Notre Processus de Création</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-4">
              Votre site web, en seulement quelques étapes
            </h2>
            <p className="text-sm text-light-muted mb-10 leading-relaxed">
              Sollicitez notre expertise pour obtenir un devis sur mesure, entièrement adapté à vos attentes et sans engagement.
            </p>
            <div className="bg-light border border-light-border rounded-2xl p-6">
              {PROCESS.map((step, i) => (
                <div key={i} className="flex gap-4 items-start relative">
                  {i < PROCESS.length - 1 && (
                    <div className="absolute left-5 top-10 w-px h-10 bg-light-border z-0" />
                  )}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm z-10 ${
                    i < PROCESS.length - 1
                      ? 'bg-primary text-white'
                      : 'border-2 border-light-border text-light-muted'
                  }`}>
                    {step.num}
                  </div>
                  <div className={i < PROCESS.length - 1 ? 'pb-9' : ''}>
                    <a href="#contact" className="font-display font-bold text-ink text-base mb-1 hover:text-primary transition-colors block">
                      {step.name}
                    </a>
                    <p className="text-sm text-light-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="bg-light px-8 md:px-16 py-28" id="founders">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionLabel>Fondateurs</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink">
              L&apos;équipe derrière VOID
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((f) => (
              <div key={f.name} className="bg-light-card rounded-2xl p-8 border border-light-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display text-lg font-extrabold text-primary mb-6">
                  {f.initials}
                </div>
                <h3 className="font-display text-xl font-extrabold text-ink mb-1">{f.name}</h3>
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary font-semibold mb-4">
                  Co-fondateur
                </div>
                <p className="text-sm text-light-muted leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="px-8 md:px-16 py-28 flex flex-col items-center text-center"
        id="contact"
        style={{ background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 50%, #4c1d95 100%)' }}
      >
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mb-8">
          Démarrons ensemble
        </p>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight max-w-3xl mb-6">
          Votre prochain site<br />commence ici.
        </h2>
        <p className="text-base text-white/65 max-w-md mb-10 leading-relaxed">
          Prenez contact dès aujourd&apos;hui pour un devis gratuit et sans engagement.
        </p>
        <a
          href="mailto:hello@void.agency"
          className="inline-flex items-center gap-3 bg-white text-primary text-[12px] font-bold tracking-wide px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Prendre contact
          <ArrowIcon className="w-4 h-4" />
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-dark border-t border-dark-border px-8 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display text-base font-extrabold tracking-widest text-white">VOID</div>
        <p className="text-[11px] text-dark-muted">© 2026 VOID. Tous droits réservés.</p>
        <ul className="flex gap-8 list-none">
          {[
            { label: 'Contact', href: 'mailto:hello@void.agency' },
            { label: 'Services', href: '#services' },
            { label: 'Équipe', href: '#founders' },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[11px] text-dark-muted uppercase tracking-wider hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  )
}
