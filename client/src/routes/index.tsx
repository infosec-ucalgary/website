import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  const OFFERS = [
    {
      title: "Workshops",
      description: "Hands-on training in ethical hacking, Linux, cryptography, and more."
    },
    {
      title: "CTFs",
      description: "Join our Magpies team to compete with us in local and international Capture The Flag competitions."
    },
    {
      title: "Speakers",
      description: "Industry professionals share insights and career advice through engaging talks."
    }
  ]
  return (
    <div className="relative bg-neutral-950 text-white">
      <div className="relative h-[80vh] flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            University of Calgary CyberSec Club
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-4 text-center relative">
            The UCalgary Cybersecurity Club is a student-led group passionate about digital security,
            ethical hacking, and building real-world skills through competitions, workshops, and collaboration.
          </p>
        </div>
        <BackgroundBeams />
      </div>

      <section className="py-16">
        <h2 className="text-3xl text-center font-bold mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {OFFERS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-neutral-500 text-lg md:mb-8 mb-4">
                <span>[</span>
                <span>{(index + 1).toString().padStart(2, '0')}</span>
                <span>]</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-neutral-400 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8 mx-auto max-w-xl bg-neutral-700" />

      <section className="py-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
        <p className="text-neutral-400 mb-4">We're open to students of all backgrounds -- no experience needed!</p>
        <Button size="lg" asChild>
          <a href="https://discord.gg/2Sadtk5Cbg" target="_blank" rel="noreferrer">
            Join our Discord
          </a>
        </Button>
      </section>
    </div >
  )
}
