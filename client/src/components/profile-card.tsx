import { Badge } from "@/components/ui/badge"
import headshot from "@/assets/headshots/random_headshot.webp"

export default function ProfileCard() {
  return (
    <div className="w-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white/80 bg-white">
      <img
        src={headshot}
        alt="headshot"
        className="w-full h-64 object-cover rounded-2xl"
      />

      <div className="p-2 text-black">
        <h3 className="text-xl font-bold">Jason "Duck Guy" Ngu</h3>
        <p className="text-muted-foreground font-medium">President</p>

        <div className="mt-4">
          <h3 className="text-sm font-semibold">Hobbies:</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="secondary">Poetry</Badge>
            <Badge variant="secondary">Biking</Badge>
            <Badge variant="secondary">Polaroid + Fujifilm Photography</Badge>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold">Random Fact:</h3>
          <p className="text-sm text-muted-foreground">
            Is the UCalgary Duck Guy & a Certified Mental Health Ambassador
          </p>
        </div>
      </div>
    </div>
  )
}
