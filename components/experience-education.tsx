"use client"

import { useState } from "react"
import Image from "next/image"
import ScrollAnimationWrapper from "./scroll-animation-wrapper"

type Experience = {
  company: string
  logo: string
  position: string
  period: string
  description: string
  skills: string[]
}

type Education = {
  institution: string
  logo: string
  degree: string
  period: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    company: "zeromouse",
    logo: "/zeromouse.jpg",
    position: "Product Design Engineer",
    period: "2023 - 2024",
    description: "Designed, prototyped, tested, and manufactured mouse prototypes",
    skills: ["Design for Manufacturing (DFM)", "SOLIDWORKS", "Rapid Prototyping", "Product Testing & Validation", "Iterative Design"],
  },
  {
    company: "Fujifilm",
    logo: "/Fujifilm.jpg",
    position: "Software QA Engineer",
    period: "2021 - 2022",
    description: "Tested , reproduced and fixed bugs in PACS medical software",
    skills: ["Automated Testing", "Scrum", "Test Environment Setup", "Selenium"],
  },
  {
    company: "UNC Chapel-Hill",
    logo: "/chapel.png",
    position: "CAD Designer",
    period: "2019 - 2021",
    description: "3D Designed, Printed, and Shipped prosthetic hands for children",
    skills: ["SOLIDWORKS", "3D Printing", "Project Management", "Prosthetics"],
  },
  {
    company: "UNC Chapel-Hill",
    logo: "/chapel.png",
    position: "Instructor",
    period: "2019 - 2021",
    description: "Taught Anatomy and Tissue Engineering to 120+ students",
    skills: ["STEM Education", "Educational Leadership", "Curriculum Development", "Student Mentorship"],
  },
  {
    company: "UNC Chapel-Hill, Sode Lab",
    logo: "/chapel.png",
    position: "Research Assistant",
    period: "2019 - 2021",
    description: "Bioengineered GOx enzyme biosensors for glycemic control",
    skills: ["Enzyme Engineering", "Biosensors", "Research Presentation", "Polymer Engineering (PES)"],
  },
]

const education: Education[] = [
  {
    institution: "Columbia University",
    logo: "/columbia.jpg",
    degree: "Master of Science in Biomedical Engineering",
    period: "2024 - Present",
    description: "Focused on Biomedical Design and Innovation & Product Development",
    skills: ["Biomedical Innovation", "Human Centered Design", "Project Management", "Entrepreneurship"],
  },
  {
    institution: "UNC Chapel-Hill",
    logo: "/chapel.png",
    degree: "Bachelor of Science in Biomedical Engineering",
    period: "2017 - 2021",
    description: "Gained a strong foundation in Biomedical Design and Research and Development",
    skills: ["Python", "R&D", "Tissue Engineering", "Protein Engineering"],
  },
]

export default function ExperienceEducation() {
  const [showExperience, setShowExperience] = useState(true)
  const items = showExperience ? experiences : education

  function isExperience(item: Experience | Education): item is Experience {
    return (item as Experience).company !== undefined
  }

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-10 transition-all duration-700 transform translate-y-0 opacity-100">
          <h2 className="text-4xl font-bold text-center mb-4">{showExperience ? "Experience" : "Education"}</h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!showExperience ? "text-[#9bcbff]" : "text-white"}`}>Education</span>
            <button
              onClick={() => setShowExperience(!showExperience)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-800 transition-colors focus:outline-none"
              aria-pressed={showExperience}
              aria-labelledby="toggle-label"
            >
              <span className="sr-only" id="toggle-label">Toggle between Education and Experience</span>
              <span className={`absolute inset-0 rounded-full ${showExperience ? "bg-gray-600" : "bg-gray-800"} transition-colors`} />
              <span className={`absolute inset-0 flex items-center ${showExperience ? "justify-end pr-0.5" : "justify-start pl-0.5"}`}>
                <span className="h-5 w-5 transform rounded-full bg-white transition-transform duration-300" />
              </span>
            </button>
            <span className={`text-sm ${showExperience ? "text-[#9bcbff]" : "text-white"}`}>Experience</span>
          </div>
        </div>

        <div className="space-y-0">
          {items.map((item, index) => (
            <ScrollAnimationWrapper key={`${showExperience ? 'exp' : 'edu'}-${index}`} delay={index * 150}>
              <div
                className="flex flex-col md:flex-row items-start relative"
              >
                {/* Timeline connector */}
                {index < items.length - 1 && (
                  <div className="absolute left-[33px] top-[60px] w-0.5 h-[calc(100%+3rem)] bg-gray-700 z-0" />
                )}

                <div className="md:w-1/3 mb-4 md:mb-0 relative z-10 pb-12">
                  <div className="flex items-center space-x-4">
                    <div className="bg-black p-2 rounded-full flex-shrink-0">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={isExperience(item) ? item.company : item.institution}
                        width={50}
                        height={50}
                        className="rounded-full mb-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {isExperience(item) ? item.company : item.institution}
                      </h3>
                      <p style={{ color: "#9bcbff" }}>
                        {isExperience(item) ? item.position : item.degree}
                      </p>
                      <p className="text-gray-500">{item.period}</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 relative z-10">
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                        style={{ color: "#9bcbff" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
