import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"
import { Badge } from "@/components/ui/badge"
import cardBackground from "@/assets/card_background.png"

interface Props {
  name: string
  src: string
  role: string
  roleDetails: string[]
  fact: string
  hobbies: string[]
}

export default function ProfileCard(props: Props) {
  const { name, src, role, roleDetails, fact, hobbies } = props
  return (
    <MinimalCard
      className="m-2 w-full max-w-md pb-10 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${cardBackground})`,
      }}
    >
      <MinimalCardImage
        className="h-[320px]"
        src={src}
        alt={name}
      />
      <MinimalCardTitle className="text-white">{name}</MinimalCardTitle>
      <MinimalCardDescription>
        {role}
        <div>
          <div className="mt-2 flex flex-wrap gap-2">
            <ul>
              {roleDetails.map((detail, index) => (
                <li key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-sm text-white font-semibold">Hobbies:</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <Badge key={index} variant="secondary">{hobby}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm text-white font-semibold">Random Fact:</h3>
            <p className="text-sm text-muted-foreground w-3/4">
              {fact}
            </p>
          </div>
        </div>
      </MinimalCardDescription>
    </MinimalCard>
  )
}
