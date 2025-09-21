import ProfileCard from "@/components/profile-card"
import { PROFILE_CARDS } from "@/data/profileCards"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 min-[96rem]:grid-cols-4 gap-4 p-8">
      {PROFILE_CARDS.map((card, index) => (
        <ProfileCard
          key={index}
          name={card.name}
          role={card.role}
          roleDetails={card.roleDetails}
          fact={card.fact}
          src={card.headshot}
          hobbies={card.hobbies}
        />
      ))}
    </div>
  )
}
