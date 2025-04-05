"use client"

import { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
  lifespan: number
  maxLife: number
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sunRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef({
    isScrolling: false,
    direction: 0,
    lastScrollY: 0,
    scrollTimeout: null as NodeJS.Timeout | null,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Star[] = []
    const colors = ["white", "cyan", "magenta", "yellow"]

    // Initial stars - increased count
    for (let i = 0; i < 150; i++) {
      addStar()
    }

    function addStar() {
      if (!canvas) return // Make sure canvas exists before accessing its width and height

      // 10% chance for colored stars
      const colorIndex = Math.random() < 0.10 ? Math.floor(Math.random() * 3) + 1 : 0

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: colors[colorIndex],
        lifespan: 0,
        maxLife: Math.random() * 10000 + 10000, // 10-20 seconds in ms
      })
    }

    function removeStar(index: number) {
      stars.splice(index, 1)
    }

    let lastTime = 0
    let spawnTimer = 0

    function animate(timestamp: number) {
      const deltaTime = timestamp - lastTime
      lastTime = timestamp

      if (!canvas || !ctx) return // Ensure canvas and ctx are available

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update spawn timer - increased spawn rate
      spawnTimer += deltaTime
      if (spawnTimer > 300) {
        // Every 300ms instead of 1000ms
        spawnTimer = 0
        // Increased chance to add new stars
        if (Math.random() < 0.75 && stars.length < 750) {
          // 75% chance instead of 20%
          addStar()
        }
      }

      // Update and draw stars
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i]

        // Update lifespan
        star.lifespan += deltaTime

        // Remove star if it's past its lifespan
        if (star.lifespan > star.maxLife) {
          removeStar(i)
          continue
        }

        // Calculate opacity based on lifespan
        let opacity = 1
        const fadeInTime = 1000 // 1 second fade in
        const fadeOutTime = 2000 // 2 second fade out

        if (star.lifespan < fadeInTime) {
          opacity = star.lifespan / fadeInTime
        } else if (star.lifespan > star.maxLife - fadeOutTime) {
          opacity = (star.maxLife - star.lifespan) / fadeOutTime
        }

        // Set fill style with opacity
        ctx.fillStyle =
          star.color === "white"
            ? `rgba(255, 255, 255, ${opacity})`
            : star.color === "cyan"
              ? `rgba(0, 255, 255, ${opacity})`
              : star.color === "magenta"
                ? `rgba(255, 0, 255, ${opacity})`
                : `rgba(255, 255, 0, ${opacity})`

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    // Handle scroll for sun rotation
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine scroll direction
      const direction = currentScrollY > scrollRef.current.lastScrollY ? 1 : -1

      scrollRef.current.isScrolling = true
      scrollRef.current.direction = direction
      scrollRef.current.lastScrollY = currentScrollY

      // Clear previous timeout
      if (scrollRef.current.scrollTimeout) {
        clearTimeout(scrollRef.current.scrollTimeout)
      }

      // Set timeout to detect when scrolling stops
      scrollRef.current.scrollTimeout = setTimeout(() => {
        scrollRef.current.isScrolling = false
      }, 150)
    }

    window.addEventListener("scroll", handleScroll)

    // Rotate sun based on scroll
    if (sunRef.current) {
      let angle = 0

      const rotateSun = () => {
        if (sunRef.current) {
          // Only rotate if scrolling
          if (scrollRef.current.isScrolling) {
            // Adjust rotation speed and direction based on scroll
            angle += scrollRef.current.direction * .75
          }

          sunRef.current.style.transform = `rotate(${angle}deg)`
          requestAnimationFrame(rotateSun)
        }
      }

      rotateSun()
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)

      // Capture scrollRef.current in a stable reference before cleanup
      const { scrollTimeout } = scrollRef.current
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
      <div ref={sunRef} className="fixed top-16 right-8 z-0 w-16 h-16 transition-transform duration-100 ease-linear">
        <div className="relative w-full h-full">
          {/* Removed the circle outline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-7 h-7 bg-white rounded-full"></div>
          </div>
          {/* Sun rays */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-6 bg-white"
              style={{
                left: "50%",
                top: "50%",
                transformOrigin: "center",
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-12px)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}
