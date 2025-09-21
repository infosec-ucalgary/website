import { EXEC_CARDS } from "@/data"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="p-8">
      {Object.entries(EXEC_CARDS).map(([role, execs], index) => (
        <div key={index} className="mb-8">
          <h1 className="text-3xl text-white font-bold mb-4 text-center">{role}</h1>
          <div className="flex flex-wrap justify-center">
            {execs.map((exec, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 flex">
                <img
                  src={exec.src}
                  alt={`Card for ${exec.firstName} ${exec.lastName}`}
                  className="border-2 border-white rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
