import { Mail, GitlabIcon as GitHub, Linkedin } from "lucide-react"
import ScrollAnimationWrapper from "./scroll-animation-wrapper"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl font-bold mb-10 text-center">Contact</h2>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={400}>
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:surya.s@columbia.edu"
              className="text-columbia-blue hover:text-blue-400 transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Shanmoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-columbia-blue hover:text-blue-400 transition-colors"
            >
              <GitHub className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/surishan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-columbia-blue hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={600}>
          <p className="text-center text-gray-300">
            Email:{" "}
            <a href="mailto:surya.s@columbia.edu" className="text-columbia-blue hover:underline">
              surya.s@columbia.edu
            </a>
          </p>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}

