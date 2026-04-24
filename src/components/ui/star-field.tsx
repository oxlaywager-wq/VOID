'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
  color: string
}

interface ShootingStar {
  x: number
  y: number
  len: number
  speed: number
  opacity: number
  angle: number
  active: boolean
}

export function StarField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#ffffff', '#e8e0ff', '#c4b5fd', '#a78bfa', '#ffffff', '#ffffff']
    const stars: Star[] = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.025 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    const shootingStars: ShootingStar[] = Array.from({ length: 3 }, () => ({
      x: 0, y: 0, len: 0, speed: 0, opacity: 0, angle: 0, active: false,
    }))

    const launchShootingStar = (s: ShootingStar) => {
      s.x = Math.random() * canvas.width * 0.7
      s.y = Math.random() * canvas.height * 0.4
      s.len = Math.random() * 120 + 60
      s.speed = Math.random() * 6 + 4
      s.opacity = 1
      s.angle = Math.PI / 6 + Math.random() * 0.3
      s.active = true
    }

    // Launch shooting stars at intervals
    const intervals = shootingStars.map((s, i) =>
      setInterval(() => launchShootingStar(s), 3000 + i * 2500)
    )

    let animFrame: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed
        const twinkle = Math.sin(star.twinklePhase) * 0.35 + 0.65
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.opacity * twinkle
        ctx.fill()
      })

      // Draw shooting stars
      shootingStars.forEach((s) => {
        if (!s.active) return
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.opacity -= 0.018

        if (s.opacity <= 0) { s.active = false; return }

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len
        )
        grad.addColorStop(0, `rgba(255,255,255,${s.opacity})`)
        grad.addColorStop(1, 'rgba(255,255,255,0)')

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len)
        ctx.strokeStyle = grad
        ctx.globalAlpha = s.opacity
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      animFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animFrame)
      intervals.forEach(clearInterval)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}
