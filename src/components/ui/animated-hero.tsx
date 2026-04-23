"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <div className="w-full bg-white">
      <div className="container mx-auto px-6">
        <div className="flex gap-8 py-24 lg:py-40 items-center justify-center flex-col">

          <a href="#services">
            <Button variant="secondary" size="sm" className="gap-3 rounded-full text-[11px] font-semibold tracking-wide uppercase">
              Découvrir nos services <MoveRight className="w-4 h-4" />
            </Button>
          </a>

          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tight text-center font-extrabold text-ink">
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
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-light-muted max-w-xl text-center mt-2">
              Faites l&apos;expérience d&apos;une agence digitale unique où créativité et technologie se rencontrent. Votre vision, transformée en réalité numérique.
            </p>
          </div>

          <div className="flex flex-row gap-3">
            <Button size="lg" variant="outline" className="gap-3" asChild>
              <a href="mailto:hello@void.agency">
                Prendre contact <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3" asChild>
              <a href="#contact">
                Démarrer un projet <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Hero }
