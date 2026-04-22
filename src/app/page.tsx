'use client'

import { useState, useEffect } from 'react'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const SERVICES = [
  {
    num: '01',
    title: 'Sites Web\nSur Mesure',
    desc: 'Design premium et développement full-stack, pensé pour convertir et marquer les esprits. Chaque pixel a un rôle.',
  },
  {
    num: '02',
    title: 'Chatbots\n& IA',
    desc: 'Assistants virtuels entraînés sur votre contenu. Répondent 24/7, qualifient les leads, automatisent le support.',
  },
  {
    num: '03',
    title: 'Automatisation\nIntelligente',
    desc: "Connectez vos outils, automatisez vos flux métier. L'IA travaille pendant que vous vous concentrez sur l'essentiel.",
  },
  {
    num: '04',
    title: 'Refonte &\nOptimisation',
    desc: 'Audit complet de votre présence digitale. Refonte ciblée, performances décuplées, identité renforcée.',
  },
]

const PROCESS = [
  {
    num: '01',
    name: 'Découverte',
    desc: "Immersion dans votre univers. Analyse de votre marché, de vos concurrents, de vos objectifs business. On ne code rien avant de tout comprendre.",
  },
  {
    num: '02',
    name: 'Stratégie & Design',
    desc: "Architecture de l'information, wireframes, identité visuelle. Chaque décision est justifiée par la data et l'UX.",
  },
  {
    num: '03',
    name: 'Développement',
    desc: "Code propre, performant, scalable. Intégration IA sur mesure. Tests rigoureux à chaque étape.",
  },
  {
    num: '04',
    name: 'Lancement & Suivi',
    desc: "Déploiement soigné, monitoring post-launch, itérations basées sur les comportements réels de vos utilisateurs.",
  },
]

const MARQUEE_ITEMS = [
  'Sites Web Premium', 'Chatbots IA', 'Automatisation',
  'Design Premium', 'Interfaces Intelligentes', 'Expériences Digitales',
]

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[10px] font-medium tracking-[0.22em] uppercase text-accent mb-14">
      <div className="w-7 h-px bg-accent shrink-0" />
      {children}
    </div>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="bg-void-black text-void-white font-sans overflow-x-hidden">

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 py-6 transition-all duration-300 ${
          scrolled ? 'bg-void-black/85 backdrop-blur-xl border-b border-grey-mid/60' : ''
        }`}
      >
        <a href="#" className="font-display text-lg font-extrabold tracking-widest text-void-white">
          VOID
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          {['Services', 'À propos', 'Processus', 'Fondateurs'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(' ', '-').replace('à-propos', 'about').replace('processus', 'process').replace('fondateurs', 'founders')}`}
                className="text-[11px] font-medium tracking-[0.14em] uppercase text-grey-text hover:text-void-white transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-[11px] font-semibold tracking-wider uppercase bg-accent text-void-black px-5 py-2.5 rounded-full hover:opacity-85 transition-opacity"
        >
          Démarrer un projet
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen bg-void-black relative overflow-hidden" id="home">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        <div className="flex h-screen">
          {/* Left content */}
          <div className="flex-1 px-8 md:px-12 flex flex-col justify-end pb-16 relative z-10">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-7">
              Agence Web &amp; Intelligence Artificielle
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Sites qui<br />pensent.
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-grey-text max-w-xs md:max-w-sm">
              Nous concevons des expériences web sur mesure avec l&apos;IA intégrée au cœur — chatbots, automatisations, interfaces intelligentes.
            </p>
            <div className="flex justify-between items-end mt-10">
              <div className="flex items-center gap-3.5 text-[10px] tracking-widest uppercase text-grey-text">
                <div className="w-11 h-px bg-grey-text relative overflow-hidden">
                  <div className="scroll-line" />
                </div>
                Scroll
              </div>
              <div className="text-[10px] tracking-[0.14em] uppercase text-grey-text text-right leading-loose">
                Noé Célarier &amp; Arthur Bugajski<br />
                Paris, France
              </div>
            </div>
          </div>

          {/* Right — Spline 3D */}
          <div className="flex-1 relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-grey-mid py-4 overflow-hidden bg-grey">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((set) => (
            <div key={set} className="flex shrink-0">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="flex items-center">
                  <span className="font-display text-[11px] font-bold tracking-[0.22em] uppercase text-grey-text px-10">
                    {item}
                  </span>
                  <span className="text-accent text-xs">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="px-8 md:px-12 py-28" id="services">
        <SectionLabel>Services</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="bg-grey hover:bg-grey-mid p-10 md:p-12 relative group transition-colors cursor-default"
            >
              <div className="font-display text-[10px] font-bold tracking-[0.2em] text-accent mb-9">
                {s.num}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight mb-4">
                {s.title.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </h3>
              <p className="text-sm leading-relaxed text-grey-text max-w-xs">{s.desc}</p>
              <div className="absolute bottom-10 right-10 w-10 h-10 border border-grey-mid rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                <ArrowIcon className="w-3.5 h-3.5 stroke-grey-text group-hover:stroke-void-black transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="px-8 md:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center border-t border-grey-mid"
        id="about"
      >
        <div>
          <SectionLabel>À propos</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Le web<br />de demain,<br /><span className="text-accent">aujourd&apos;hui.</span>
          </h2>
          <div className="flex gap-10 mt-10">
            {[
              { num: '100%', label: 'Sur mesure' },
              { num: 'IA', label: 'Intégrée' },
              { num: '0', label: 'Template' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <span className="font-display text-4xl font-extrabold tracking-tight leading-none">
                  {stat.num}
                </span>
                <span className="text-[10px] tracking-[0.16em] uppercase text-grey-text">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-sm leading-relaxed text-grey-text">
            VOID est une agence fondée sur une conviction simple : chaque entreprise mérite un site à la hauteur de ses ambitions. Pas un template, pas une solution générique — une expérience digitale pensée de A à Z.
          </p>
          <p className="text-sm leading-relaxed text-grey-text">
            Nous intégrons l&apos;intelligence artificielle non pas comme un gadget, mais comme un levier de croissance réel. Chatbots conversationnels, recommandations personnalisées, automatisation des processus — l&apos;IA devient votre atout business.
          </p>
          <p className="text-sm leading-relaxed text-grey-text">
            Notre approche : comprendre votre marché, challenger vos idées, livrer un produit qui surpasse vos attentes.
          </p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-8 md:px-12 py-28 border-t border-grey-mid" id="process">
        <SectionLabel>Processus</SectionLabel>
        <div className="flex flex-col mt-4">
          {PROCESS.map((step, i) => (
            <div
              key={i}
              className={`grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr_1fr] gap-8 md:gap-12 py-8 border-b border-grey-mid ${
                i === 0 ? 'border-t border-grey-mid' : ''
              }`}
            >
              <div className="font-display text-[11px] font-bold tracking-[0.14em] text-accent pt-1">
                {step.num}
              </div>
              <div className="font-display text-xl md:text-2xl font-extrabold">{step.name}</div>
              <p className="text-sm leading-relaxed text-grey-text col-start-2 md:col-start-3 md:col-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="px-8 md:px-12 py-28 border-t border-grey-mid" id="founders">
        <SectionLabel>Fondateurs</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 mt-4">
          {[
            {
              initials: 'NC',
              name: 'Noé Célarier',
              bio: "Passionné par l'intersection du design et de la technologie, Noé pilote la vision créative de VOID. Il croit que la beauté et la performance ne sont pas incompatibles — elles sont indissociables.",
            },
            {
              initials: 'AB',
              name: 'Arthur Bugajski',
              bio: "Architecte des solutions techniques de VOID, Arthur transforme les idées les plus ambitieuses en produits concrets. Son obsession : des systèmes robustes qui s'effacent derrière l'expérience utilisateur.",
            },
          ].map((founder) => (
            <div key={founder.name} className="bg-grey p-12 md:p-14">
              <div className="w-16 h-16 rounded-full bg-grey-mid border border-grey-mid flex items-center justify-center font-display text-lg font-extrabold text-accent mb-8">
                {founder.initials}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-1.5">{founder.name}</h3>
              <div className="text-[10px] tracking-[0.18em] uppercase text-accent mb-6">Co-fondateur</div>
              <p className="text-sm leading-relaxed text-grey-text max-w-sm">{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="px-8 md:px-12 py-28 border-t border-grey-mid flex flex-col items-center text-center"
        id="contact"
      >
        <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-accent mb-10">
          Démarrons ensemble
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1] tracking-tight max-w-3xl mb-14">
          Votre prochain site<br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: '1px #f2f0eb' }}
          >
            commence ici.
          </span>
        </h2>
        <a
          href="mailto:hello@void.agency"
          className="inline-flex items-center gap-3.5 bg-accent text-void-black text-[11px] font-bold tracking-[0.12em] uppercase px-8 py-4 rounded-full hover:opacity-88 hover:-translate-y-0.5 transition-all"
        >
          Prendre contact
          <ArrowIcon className="w-4 h-4 stroke-void-black" />
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-grey-mid px-8 md:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        <div className="font-display text-base font-extrabold tracking-widest">VOID</div>
        <p className="text-[11px] text-grey-text tracking-wider">© 2026 VOID. Tous droits réservés.</p>
        <ul className="flex gap-8 list-none">
          {[
            { label: 'Contact', href: 'mailto:hello@void.agency' },
            { label: 'Services', href: '#services' },
            { label: 'Équipe', href: '#founders' },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[11px] text-grey-text uppercase tracking-wider hover:text-void-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  )
}
