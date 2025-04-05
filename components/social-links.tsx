"use client"

import { useState } from "react"
import { Linkedin, Mail, FileText } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  { icon: FileText, href: "/your-resume.pdf", label: "Resume" },
]

export default function SocialLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-4" style={{ right: "1rem" }}>
      {socialLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-columbia-blue transition-all"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <link.icon
            className={`w-6 h-6 transition-all ${hoveredIndex === index ? "scale-125" : ""}`}
            style={{ transform: hoveredIndex === index ? "scale(1.25)" : "scale(1)" }}
          />
        </a>
      ))}
    </div>
  )
}

