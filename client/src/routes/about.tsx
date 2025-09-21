import ProfileCard from "@/components/profile-card"
import { PROFILE_CARDS } from "@/data/profileCards"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="flex flex-wrap justify-center p-8">
      {PROFILE_CARDS.map((card, index) => (
        <div className="w-1/4 p-2" key={index}>
          <ProfileCard
            name={card.name}
            role={card.role}
            roleDetails={card.roleDetails}
            fact={card.fact}
            src={card.headshot}
            hobbies={card.hobbies}
          />
        </div>
      ))}
    </div>
  )
}
