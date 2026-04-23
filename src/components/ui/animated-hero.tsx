"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { StarField } from "@/components/ui/star-field"

const Astronaut3D = dynamic(
  () => import("@/components/ui/astronaut-3d").then((m) => ({ default: m.Astronaut3D })),
  { ssr: false }
)

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(
    () => ["premium", "moderne", "intelligent", "sur mesure", "performant"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full relative overflow-hidden" style={{ background: '#0a0b14', minHeight: '100vh' }}>

      {/* Star field canvas */}
      <StarField className="absolute inset-0 w-full h-full" />

      {/* 3D Astronaut */}
      <Astronaut3D />

      {/* Purple nebula glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6" style={{ zIndex: 20 }}>
        <div className="flex gap-8 py-24 lg:py-44 items-center justify-center flex-col">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="secondary" size="sm"
              className="gap-3 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-sm"
              asChild
            >
              <a href="#services">
                Découvrir nos services <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <div className="flex gap-4 flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-7xl max-w-3xl tracking-tight text-center font-extrabold text-white"
            >
              <span>Nous créons des sites</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-extrabold text-primary"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
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
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed text-white/60 max-w-xl text-center mt-2"
            >
              Faites l&apos;expérience d&apos;une agence digitale unique où créativité et technologie se rencontrent. Votre vision, transformée en réalité numérique.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-row gap-3"
          >
            <Button size="lg" variant="outline"
              className="gap-3 border-white/25 text-white hover:border-white/60 hover:bg-white/5 hover:text-white"
              asChild
            >
              <a href="mailto:hello@void.agency">
                Prendre contact <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3" asChild>
              <a href="#contact">
                Démarrer un projet <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export { Hero }
