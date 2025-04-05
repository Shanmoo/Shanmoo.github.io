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
                I&apos;m an Aspiring biomedical engineer passionate about designing accessible healthcare solutions that serve marginalized and underrepresented communities.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={600}>
              <p className="text-lg text-gray-300">
                With a strong focus on human-centered design and system optimization, I&apos;m eager to join the product development space and grow into a product management role where innovation meets impact.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

