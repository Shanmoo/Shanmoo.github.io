import { Box, SquareCode, ShieldCheck, HeartPulse } from "lucide-react"
import ScrollAnimationWrapper from "./scroll-animation-wrapper"

const skills = [
  { name: "Programming", icon: SquareCode, description: "Python, MATLAB, C, C++, Java, R" },
  { name: "3D Design", icon: Box, description: "SOLIDWORKS, Autodesk, AutoCAD, Fusion360, Blender" },
  { name: "Certifications", icon: ShieldCheck, description: "Six Sigma White Belt, Green Belt, Black Belt, Greenlight Guru QMS" },
  { name: "Medical Device Standards", icon: HeartPulse, description: "ISO 13485, ISO 9001, ISO 10993, IEC 60601"},
]

export default function Skillset() {
  return (
    <section id="skillset" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl font-bold mb-10 text-center">Skillset</h2>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <ScrollAnimationWrapper key={skill.name} delay={index * 200}>
              <div className="bg-gray-900 p-6 rounded-lg">
                <skill.icon className="w-12 h-12 mb-4 text-columbia-blue" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

