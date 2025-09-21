import { EXEC_CARDS } from "@/data"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="w-full">
      {Object.entries(EXEC_CARDS).map(([role, execs], index) => (
        <div key={index} className="pb-12">
          <h1 className="text-magpie-lavender text-4xl font-bold mb-8 text-center">
            {role}
          </h1>
          <div className="flex flex-wrap justify-center gap-12">
            {execs.map((exec, i) => (
              <div className="max-w-sm">
                <img
                  key={i}
                  src={exec.src}
                  alt={`Card for ${exec.firstName} ${exec.lastName}`}
                  className="w-full h-auto object-cover border-2 border-magpie-lavender rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
