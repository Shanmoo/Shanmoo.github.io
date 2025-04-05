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
          <ScrollAnimationWrapper delay={600}>
            <div className="md:w-full mb-8 md:mb-0 flex justify-center">
              <Image
                src="/me.jpeg?height=300&width=300"
                alt="Your Name"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </ScrollAnimationWrapper>
          <div className="md:w-full md:pl-12">
            <ScrollAnimationWrapper delay={800}>
              <p className="text-lg text-gray-300 mb-6">
                I&apos;m an aspiring biomedical engineer passionate about designing accessible healthcare solutions that serve marginalized and underrepresented communities.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={1000}>
              <p className="text-lg text-gray-300 mb-6">
                I&apos;m currently finishing my Master&apos;s in Biomedical Engineering at{" "}
				<span style={{ color: "#9bcbff" }}>Columbia University</span>, graduating in December 2025. I&apos;m proud to have had the privilege to complete my Bachelor&apos;s at{" "}
				<span style={{ color: "#9bcbff" }}>UNC Chapel Hill</span>, and to have had the opportunity to work in the Biomedical industry at{" "}
				<span style={{ color: "#9bcbff" }}>Fujifilm Healthcare</span> in RTP. 
              </p>
            </ScrollAnimationWrapper>
			<ScrollAnimationWrapper delay={1200}>
              <p className="text-lg text-gray-300 mb-6">
                With a strong focus on human-centered design and system optimization, I&apos;m eager to join the product development space where innovation meets impact.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

