'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Hero } from '@/components/ui/animated-hero'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import { AnimatedBg } from '@/components/ui/animated-bg'

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let frame = 0
    const total = 60
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((frame / total) * target))
      if (frame >= total) clearInterval(timer)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target])
  return <span ref={ref}>{count}{suffix}</span>
}

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
    image: '/founders/noe.jpg',
    bio: "Passionné par l'intersection du design et de la technologie, Noé pilote la vision créative de VOID. Il croit que la beauté et la performance sont indissociables.",
  },
  {
    initials: 'AB',
    name: 'Arthur Bugajski',
    image: '/founders/arthur.jpg',
    bio: "Architecte des solutions techniques de VOID, Arthur transforme les idées les plus ambitieuses en produits concrets. Son obsession : des systèmes robustes qui s'effacent derrière l'expérience.",
  },
  {
    initials: 'MG',
    name: 'Marwan Granert',
    image: null,
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

const STATS = [
  { value: 10, suffix: '+', label: 'Projets livrés' },
  { value: 3, suffix: '', label: 'Co-fondateurs' },
  { value: 100, suffix: '%', label: 'Clients satisfaits' },
  { value: 24, suffix: '/7', label: 'Support IA' },
]

const TECH_ROW_1 = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'OpenAI', 'Vercel']
const TECH_ROW_2 = ['Framer Motion', 'PostgreSQL', 'Supabase', 'Stripe', 'GitHub', 'Docker', 'Figma', 'GraphQL']

const MARQUEE_ITEMS = [
  'Sites Web Premium', 'Chatbots IA', 'Automatisation',
  'Design Premium', 'Interfaces Intelligentes', 'Expériences Digitales',
  'SEO & Performance', 'UX/UI Design',
]

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className={`inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] uppercase mb-5 ${dark ? 'text-primary' : 'text-primary'}`}>
      <motion.span
        className="block h-0.5 bg-primary shrink-0"
        initial={{ width: 0 }}
        animate={inView ? { width: 20 } : { width: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </div>
  )
}

function FounderImg({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const base = src.replace(/\.[^.]+$/, '')
  const formats = [src, `${base}.png`, `${base}.jpeg`, `${base}.webp`]
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  const tryNext = () => {
    if (idx + 1 < formats.length) setIdx(idx + 1)
    else setFailed(true)
  }

  if (failed) return <span className="font-display text-xl font-extrabold text-primary">{initials}</span>
  return (
    <img
      key={formats[idx]}
      src={formats[idx]}
      alt={alt}
      className="w-full h-full object-cover object-top"
      onError={tryNext}
    />
  )
}

function TypingURL() {
  const url = 'void.agency'
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    let forward = true
    const tick = () => {
      if (forward) {
        i++
        setDisplayed(url.slice(0, i))
        if (i >= url.length) { forward = false; setTimeout(tick, 1800); return }
      } else {
        i--
        setDisplayed(url.slice(0, i))
        if (i <= 0) { forward = true }
      }
      setTimeout(tick, forward ? 90 : 55)
    }
    const t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [])
  return (
    <span className="text-[10px] font-mono text-white/60 flex items-center gap-0.5">
      {displayed}
      <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-px h-3 bg-primary/80" />
    </span>
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

      {/* ── SCROLL SHOWCASE ── */}
      <section className="bg-white overflow-hidden relative">
        <AnimatedBg />
        <ContainerScroll
          titleComponent={
            <div className="mb-8">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary mb-4">
                Nos réalisations
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold text-ink leading-tight">
                Des sites qui <span className="text-primary">impressionnent</span>
              </h2>
              <p className="text-base text-light-muted mt-4 max-w-xl mx-auto">
                Chaque projet est une expérience unique, conçue pour convertir et marquer les esprits.
              </p>
            </div>
          }
        >
          <iframe
            src="https://dreamy-starlight-f8f45b.netlify.app/"
            className="w-full h-full border-0 rounded-2xl"
            title="R'Padel"
          />
        </ContainerScroll>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-light px-8 md:px-16 py-28 relative" id="services">
        <AnimatedBg />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="flex flex-col items-center text-center mb-16">
            <SectionLabel>Services</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Nos expertises pour votre<br />succès digital
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
              <motion.div
                className="bg-light-card rounded-2xl p-8 border border-light-border hover:border-primary/30 transition-colors duration-300 group h-full relative overflow-hidden"
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(124,58,237,0.10)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Hover shimmer line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.15, backgroundColor: 'rgba(124,58,237,0.18)' }}
                  transition={{ duration: 0.25 }}
                >
                  <s.Icon />
                </motion.div>
                <h3 className="font-display text-lg font-extrabold text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-light-muted leading-relaxed mb-5">{s.desc}</p>
                <motion.a
                  href="#contact"
                  className="text-[12px] font-semibold text-primary inline-flex items-center gap-1"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  En savoir plus <ArrowIcon className="w-3 h-3 stroke-primary" />
                </motion.a>
              </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="bg-white px-8 md:px-16 py-28 border-t border-light-border relative" id="portfolio">
        <AnimatedBg />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <SectionLabel>Réalisations</SectionLabel>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-ink leading-tight">
                Nos derniers projets
              </h2>
            </div>
            <a href="#contact" className="text-[12px] font-bold text-primary hover:underline shrink-0">
              Démarrer votre projet →
            </a>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden border border-light-border cursor-pointer"
                whileHover={{ y: -6, boxShadow: '0 28px 56px rgba(124,58,237,0.13)', borderColor: 'rgba(124,58,237,0.35)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => p.href !== '#' && setActiveProject(p)}
              >
                <div className={`w-full aspect-[16/9] bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                  {p.image ? (
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 opacity-40">
                      <motion.div
                        className="w-16 h-12 border-2 border-primary rounded-lg"
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      />
                      <div className="text-[11px] font-semibold tracking-widest uppercase text-primary">
                        Aperçu disponible
                      </div>
                    </div>
                  )}
                  {/* Hover overlay */}
                  {p.href !== '#' && (
                    <motion.div
                      className="absolute inset-0 bg-ink/0 flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(15,15,26,0.45)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span
                        className="bg-white text-ink text-[12px] font-bold px-5 py-2.5 rounded-full flex items-center gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        Voir en direct <ArrowIcon className="w-3.5 h-3.5 stroke-ink" />
                      </motion.span>
                    </motion.div>
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
              </motion.div>
              </FadeIn>
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
      <section className="bg-light-card px-8 md:px-16 py-28 border-t border-light-border relative" id="about">
        <AnimatedBg />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
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

      {/* ── STATS ── */}
      <section className="bg-light border-t border-light-border px-8 md:px-16 py-16 relative overflow-hidden">
        <AnimatedBg />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="font-display text-5xl md:text-6xl font-extrabold text-primary mb-2 tabular-nums">
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-light-muted">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white px-8 md:px-16 py-28 border-t border-light-border relative" id="process">
        <AnimatedBg />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left: browser mockup illustration */}
          <FadeIn>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0d0f1a] border border-white/10 shadow-2xl">

            {/* Glow behind browser */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-violet-900/10 pointer-events-none" />

            {/* Browser window */}
            <div className="absolute inset-4 rounded-xl overflow-hidden border border-white/10 flex flex-col shadow-xl">

              {/* Browser chrome */}
              <div className="bg-[#1a1c2e] px-3 py-2.5 flex items-center gap-2.5 border-b border-white/10 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                {/* URL bar */}
                <div className="flex-1 bg-[#0d0f1a] rounded-md px-3 py-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <TypingURL />
                </div>
              </div>

              {/* Website content inside browser */}
              <div className="flex-1 bg-white overflow-hidden">

                {/* Mini nav */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
                  <div className="w-8 h-2 bg-primary/60 rounded-full" />
                  <div className="flex gap-2">
                    {[40, 32, 36].map((w, i) => (
                      <motion.div key={i} className="h-1.5 bg-gray-200 rounded-full"
                        style={{ width: w }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </div>
                  <div className="w-14 h-5 bg-primary rounded-full" />
                </div>

                {/* Hero block */}
                <motion.div
                  className="mx-3 mt-3 rounded-lg overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)', height: 64 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-1">
                    <div className="w-24 h-2 bg-white/70 rounded-full" />
                    <div className="w-16 h-1.5 bg-white/40 rounded-full" />
                  </div>
                </motion.div>

                {/* Cards row */}
                <div className="grid grid-cols-3 gap-2 px-3 mt-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="rounded-lg border border-gray-100 bg-gray-50 p-2"
                      style={{ height: 44 }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                    >
                      <div className="w-4 h-4 rounded bg-primary/20 mb-1" />
                      <div className="w-full h-1.5 bg-gray-200 rounded-full" />
                    </motion.div>
                  ))}
                </div>

                {/* Text lines */}
                <div className="px-3 mt-3 space-y-1.5">
                  {[80, 65, 72].map((w, i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 bg-gray-100 rounded-full"
                      style={{ width: `${w}%` }}
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 1 + i * 0.12 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating "Livré ✓" badge */}
            <motion.div
              className="absolute bottom-7 right-7 bg-white rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg border border-white/20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[11px] font-bold text-ink">Livré ✓</span>
            </motion.div>

            {/* Floating cursor */}
            <motion.div
              className="absolute w-3 h-3 pointer-events-none"
              style={{ top: '52%', left: '48%' }}
              animate={{ x: [0, 18, 10, 24, 0], y: [0, -8, 12, 4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 12 12" className="w-4 h-4 drop-shadow">
                <path d="M1 1l4 10 1.5-3.5L10 6z" fill="white" stroke="#0d0f1a" strokeWidth="0.8" />
              </svg>
            </motion.div>

          </div>
          </FadeIn>

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
                <FadeIn key={i} delay={i * 0.15}>
                <div className="flex gap-4 items-start relative">
                  {i < PROCESS.length - 1 && (
                    <motion.div
                      className="absolute left-5 top-10 w-px bg-primary/30 z-0"
                      initial={{ height: 0 }}
                      whileInView={{ height: 40 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                    />
                  )}
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-sm z-10 ${
                      i < PROCESS.length - 1
                        ? 'bg-primary text-white'
                        : 'border-2 border-light-border text-light-muted'
                    }`}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.num}
                  </motion.div>
                  <div className={i < PROCESS.length - 1 ? 'pb-9' : ''}>
                    <motion.a
                      href="#contact"
                      className="font-display font-bold text-ink text-base mb-1 hover:text-primary transition-colors block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.name}
                    </motion.a>
                    <p className="text-sm text-light-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="bg-light px-8 md:px-16 py-28 relative overflow-hidden" id="founders">
        <AnimatedBg />
        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="flex flex-col items-center text-center mb-16">
            <SectionLabel>Fondateurs</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-ink">
              L&apos;équipe derrière VOID
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((f, i) => (
              <FadeIn key={f.name} delay={i * 0.12}>
              <motion.div
                className="bg-light-card rounded-2xl p-8 border border-light-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default h-full"
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 mb-6 flex items-center justify-center bg-primary/10 shrink-0"
                  animate={{ boxShadow: ['0 0 0px #7c3aed00', '0 0 20px #7c3aed33', '0 0 0px #7c3aed00'] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8 }}
                >
                  {f.image ? (
                    <FounderImg src={f.image} alt={f.name} initials={f.initials} />
                  ) : (
                    <span className="font-display text-xl font-extrabold text-primary">{f.initials}</span>
                  )}
                </motion.div>
                <h3 className="font-display text-xl font-extrabold text-ink mb-1">{f.name}</h3>
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary font-semibold mb-4">
                  Co-fondateur
                </div>
                <p className="text-sm text-light-muted leading-relaxed">{f.bio}</p>
              </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="px-8 md:px-16 py-28 flex flex-col items-center text-center relative overflow-hidden"
        id="contact"
        style={{ background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 50%, #4c1d95 100%)' }}
      >
        {/* Animated orbs */}
        {[
          { w: 400, h: 400, top: '-15%', left: '-10%', delay: 0 },
          { w: 300, h: 300, top: '60%', right: '-8%', delay: 2 },
          { w: 200, h: 200, top: '20%', right: '20%', delay: 1 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orb.w, height: orb.h,
              top: orb.top, left: (orb as any).left, right: (orb as any).right,
              background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
          />
        ))}
        {/* Floating stars */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30 pointer-events-none"
            style={{ top: `${10 + Math.random() * 80}%`, left: `${5 + Math.random() * 90}%` }}
            animate={{ opacity: [0.1, 0.7, 0.1], y: [0, -12, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: (i * 0.3) % 3 }}
          />
        ))}
        <div className="relative z-10 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/60 mb-8"
          >
            Démarrons ensemble
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight max-w-3xl mb-6"
          >
            Votre prochain site<br />commence ici.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-white/65 max-w-md mb-10 leading-relaxed"
          >
            Prenez contact dès aujourd&apos;hui pour un devis gratuit et sans engagement.
          </motion.p>
          <motion.a
            href="mailto:hello@void.agency"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-primary text-[12px] font-bold tracking-wide px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Prendre contact
            <ArrowIcon className="w-4 h-4" />
          </motion.a>
        </div>
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
