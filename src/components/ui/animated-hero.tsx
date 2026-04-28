"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { StarField } from "@/components/ui/star-field"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["premium", "futuriste", "intelligent", "sur mesure", "performant"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2200)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #06031a 0%, #09022a 38%, #0d0432 68%, #06031a 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Starfield */}
      <StarField className="absolute inset-0 w-full h-full" />

      {/* Planet — large dark sphere, top-right */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: '-180px',
          right: '-130px',
          width: '680px',
          height: '680px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 32% 30%, #0b0326 0%, #06021a 48%, #020110 100%)',
          boxShadow: '18px -18px 72px rgba(124,58,237,0.52), 34px -34px 140px rgba(139,92,246,0.18), inset -8px 8px 32px rgba(124,58,237,0.06)',
          border: '1px solid rgba(124,58,237,0.22)',
          zIndex: 2,
        }}
      />

      {/* Small moon */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '26%',
          right: '24%',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 34% 34%, #100430 0%, #040118 100%)',
          boxShadow: '5px -5px 22px rgba(124,58,237,0.48)',
          border: '1px solid rgba(124,58,237,0.2)',
          zIndex: 2,
        }}
      />

      {/* Micro moon — top-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '22%',
          left: '9%',
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, #0e0430 0%, #040118 100%)',
          boxShadow: '3px -3px 12px rgba(124,58,237,0.42)',
          border: '1px solid rgba(124,58,237,0.18)',
          zIndex: 2,
        }}
      />

      {/* Nebula glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6" style={{ zIndex: 20 }}>
        <div className="flex gap-8 py-32 lg:py-52 items-center justify-center flex-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase"
              style={{
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(167,139,250,0.18)',
                color: '#c4b5fd',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Agence Digitale &amp; IA
            </div>
          </motion.div>

          {/* Heading */}
          <div className="flex gap-4 flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl max-w-3xl text-center font-extrabold text-white"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              <span>Nous créons des sites</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-extrabold"
                    style={{ color: '#a78bfa' }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 48, damping: 12 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg leading-relaxed max-w-xl text-center mt-2"
              style={{ color: 'rgba(255,255,255,0.42)' }}
            >
              Faites l&apos;expérience d&apos;une agence digitale unique où créativité et technologie se rencontrent. Votre vision, transformée en réalité numérique.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row gap-3"
          >
            <a
              href="mailto:hello@void.agency"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-semibold transition-all"
              style={{
                color: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(255,255,255,0.13)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(167,139,250,0.45)'
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.13)'
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.72)'
              }}
            >
              Prendre contact <PhoneCall className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[13px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)' }}
            >
              Démarrer un projet <MoveRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-10 mt-2"
          >
            {[
              { value: '10+', label: 'Projets livrés' },
              { value: '100%', label: 'Clients satisfaits' },
              { value: '24/7', label: 'Support IA' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <span className="text-2xl font-extrabold text-white" style={{ letterSpacing: '-0.02em' }}>
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(167,139,250,0.5)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-px h-8"
              style={{ background: 'linear-gradient(to bottom, rgba(167,139,250,0.4), transparent)' }}
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom fade to dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #06031a)',
          zIndex: 15,
        }}
      />
    </div>
  )
}

export { Hero }
