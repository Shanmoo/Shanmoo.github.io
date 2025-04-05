"use client"

import { useEffect, useRef } from "react"

type SectionDividerProps = {
  id?: string
}

export default function SectionDivider({ id }: SectionDividerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 100

    const stars: { x: number; y: number; radius: number; opacity: number }[] = []

    // Create fewer stars for the divider
    for (let i = 0; i < 30; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    function animate() {
      if (!canvas || !ctx) return // Added null check for canvas as well

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Slowly change opacity for twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.01
        star.opacity = Math.max(0.1, Math.min(0.7, star.opacity))
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas || !ctx) return // Ensure canvas is not null on resize

      canvas.width = window.innerWidth
      // Redistribute stars
      stars.forEach((star) => {
        star.x = Math.random() * canvas.width
      })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div id={id} className="relative h-24 w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}
