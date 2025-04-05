"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"
import ScrollAnimationWrapper from "./scroll-animation-wrapper"

const projects = [
  {
    title: "Custom Robot",
    description: "Designed, 3D printed, and assembled a full custom robot that can walk.",
    image: "/robot.jpg?height=300&width=400",
    link: "https://example.com/project1",
  },
  {
    title: "Zeromouse",
    description: "Designed and Manufactured the lightest mouse in the world",
    image: "/zeromouse_portfolio.png?height=300&width=400",
    link: "https://example.com/project2",
  },
  {
    title: "Rigid Symmetry Device (Senior Design Project)",
    description: "Created a rehabillitation device to address ACL injury",
    image: "/rsd.png?height=300&width=400",
    link: "https://example.com/project3",
  },
  {
    title: "Helping Hands Project",
    description: "Designed, Printed, and Shipped prosthetic hands for children",
    image: "/hhp.png?height=300&width=400",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

