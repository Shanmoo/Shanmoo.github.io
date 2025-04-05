"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import ScrollAnimationWrapper from "./scroll-animation-wrapper"

const projects = [
  {
    title: "Interactive 3D Portfolio",
    description: "A portfolio website showcasing 3D models and animations.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/project1",
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/project2",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets.",
    image: "/placeholder.svg?height=300&width=400",
    link: "https://example.com/project3",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimationWrapper key={index} delay={index * 200}>
              <div className="project-card rounded-lg overflow-hidden relative h-64">
                {/* Base image/video */}
                <div className="w-full h-full relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {/* Overlay that appears on hover */}
                <div className="project-overlay absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    style={{ color: "#9bcbff" }}
                  >
                    <ExternalLink className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

