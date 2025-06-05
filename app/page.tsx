import Hero from "@/components/hero"
import ComputeVisualization from "@/components/compute-visualization"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#211f08] text-amber-50">
      <Hero />
      <ComputeVisualization />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
