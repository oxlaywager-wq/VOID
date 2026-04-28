"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { StarField } from "@/components/ui/star-field"
import { HeroScene3D } from "@/components/ui/hero-3d-scene"

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["premium", "moderne", "intelligent", "sur mesure", "performant"],
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
        background: 'linear-gradient(160deg, #06031a 0%, #0d0430 35%, #130740 65%, #0a0420 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Starfield canvas */}
      <StarField className="absolute inset-0 w-full h-full" />

      {/* 3D scene — crystals, rings, gems, particles */}
      <HeroScene3D />

      {/* Violet nebula glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.16) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-6" style={{ zIndex: 20 }}>
        <div className="flex gap-8 py-28 lg:py-48 items-center justify-center flex-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase backdrop-blur-sm transition-all"
              style={{
                background: 'rgba(124,58,237,0.12)',
                border: '1px solid rgba(167,139,250,0.25)',
                color: '#c4b5fd',
              }}
            >
              Découvrir nos services <MoveRight className="w-3.5 h-3.5" />
            </a>
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
              style={{ color: 'rgba(255,255,255,0.52)' }}
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
                color: 'rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(167,139,250,0.5)'
                ;(e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)'
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'
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

          {/* Mini stats */}
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
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.22)' }}>
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

      {/* Bottom fade — hero to white */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(6,3,26,0.6))',
          zIndex: 15,
        }}
      />
    </div>
  )
}

export { Hero }
