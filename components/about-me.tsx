import Image from "next/image"
import ScrollAnimationWrapper from "./scroll-animation-wrapper"

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        </ScrollAnimationWrapper>
        <div className="flex flex-col md:flex-row items-center">
          <ScrollAnimationWrapper delay={200}>
            <div className="md:w-full mb-8 md:mb-0 flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Your Name"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </ScrollAnimationWrapper>
          <div className="md:w-full md:pl-12">
            <ScrollAnimationWrapper delay={400}>
              <p className="text-lg text-gray-300 mb-6">
                I&apos;m a passionate software engineer with a focus on creating immersive web experiences. With expertise in
                frontend development and 3D graphics, I strive to push the boundaries of what&apos;s possible on the web.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={600}>
              <p className="text-lg text-gray-300">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities to recharge my creative energy.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

