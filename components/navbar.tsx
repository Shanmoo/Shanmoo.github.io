"use client"

import type React from "react"

import { useState, useEffect } from "react"

const navItems = [
  { name: "SKILLSET", href: "#skillset" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "ABOUT ME", href: "#about" },
  { name: "CONTACT", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [showNavbar, setShowNavbar] = useState(true)
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const introSection = document.getElementById("intro")



      // Check if we've scrolled past the intro section
      if (introSection) {
        const introBottom = (introSection as HTMLElement).offsetTop + (introSection as HTMLElement).offsetHeight

        // Add a smoother transition by considering scroll direction
        if (currentScrollY < introBottom - 100) {
          setShowNavbar(true)
        } else if (currentScrollY > introBottom + 100) {
          setShowNavbar(false)
        }
      }

      // Check if we're in any other section (for bottom navbar)
      const sections = navItems.map((item) => document.querySelector(item.href))
      let inSection = false

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section && (section as HTMLElement).offsetTop <= currentScrollY + 100) {
          setActiveSection(navItems[i].href)
          inSection = true
        }
      }

      setIsBottom(inSection && !showNavbar)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showNavbar])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Top navbar with improved animation */}
      <nav
        className={`fixed top-0 left-0 right-0 p-4 z-10 bg-black bg-opacity-80 transition-all duration-500 ease-in-out ${
          showNavbar ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-full"
        }`}
      >
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-full px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium hover:text-[#9bcbff] transition-colors duration-300 ${
                  activeSection === item.href ? "text-[#9bcbff]" : "text-white"
                }`}
                style={{ color: activeSection === item.href ? "#9bcbff" : "white" }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom navbar with improved animation */}
      <nav
        className={`fixed bottom-0 left-0 right-0 p-4 z-10 bg-black bg-opacity-80 transition-all duration-500 ease-in-out ${
          isBottom ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"
        }`}
      >
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-full px-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-medium hover:text-[#9bcbff] transition-colors duration-300 ${
                  activeSection === item.href ? "text-[#9bcbff]" : "text-white"
                }`}
                style={{ color: activeSection === item.href ? "#9bcbff" : "white" }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

