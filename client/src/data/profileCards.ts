import jason from "@/assets/headshots/random_headshot.webp"
export interface ProfileCard {
  name: string
  role: string
  fact: string
  headshot: string
  hobbies: string[]
}

export const PROFILE_CARDS: ProfileCard[] = [
  {
    name: "Jason Ngu",
    role: "President",
    fact: "Is the UCalgary Duck Guy & A Certified Mental Health Ambassador",
    headshot: jason,
    hobbies: ["Poetry", "Biking", "Polaroid + Fujifilm Photography"]
  },
]
