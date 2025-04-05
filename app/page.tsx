import Navbar from "@/components/navbar"
import StarBackground from "@/components/star-background"
import Skillset from "@/components/skillset"
import ExperienceEducation from "@/components/experience-education"
import Projects from "@/components/projects"
import AboutMe from "@/components/about-me"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"
import SectionDivider from "@/components/section-divider"
import { FileText } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <StarBackground />
      <Navbar />
      <SocialLinks />
      <div id="intro" className="flex-grow flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">I&apos;m Surya Shanmugam</h1>
          <h2 className="text-4xl font-semibold mb-4" style={{ color: "#9bcbff" }}>
            Biomedical Engineer.
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Engineering accessible healthcare through human-centered design.
          </p>

          {/* Resume + Scroll text */}
          <div className="mt-10 flex flex-col items-center space-y-6">

            {/* Resume Icon */}
            <a
              href="/SuryaShanmugam.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform duration-300 ease-in-out animate-wiggle-slow hover:scale-110 flex flex-col items-center"
            >
              <FileText className="w-8 h-8" />
              <span className="text-xs mt-1">Resume</span>
            </a>

            {/* Scroll to explore */}
            <div className="animate-bounce text-gray-400 text-sm flex flex-col items-center">
              <span>Scroll to explore</span>
              <svg
                className="w-5 h-5 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
      <Skillset />

      <SectionDivider />
      <ExperienceEducation />

      <SectionDivider />
      <Projects />

      <SectionDivider />
      <AboutMe />

      <SectionDivider />
      <Contact />
    </main>
  )
}
