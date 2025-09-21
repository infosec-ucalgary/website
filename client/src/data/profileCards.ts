import jason from "@/assets/headshots/jason.webp"
import liam from "@/assets/headshots/liam.webp"
import mohammad from "@/assets/headshots/mohammad.webp"
import salsa from "@/assets/headshots/salsa.webp"
import martin from "@/assets/headshots/martin.webp"
import gabe from "@/assets/headshots/gabe.webp"
import royce from "@/assets/headshots/royce.webp"
import nick from "@/assets/headshots/nick.webp"

export interface ProfileCard {
  name: string
  role: string
  roleDetails: string[],
  fact: string
  headshot: string
  hobbies: string[]
}

export const PROFILE_CARDS: ProfileCard[] = [
  {
    name: "Jason \"Duck Guy\" Ngu",
    role: "President",
    roleDetails: [
      "Head of Club Governance & Leadership",
      "Key Connector & Relationship Strategist",
      "Architect of Long Term Vision & Impact"
    ],
    fact: "Is the UCalgary Duck Guy & A Certified Mental Health Ambassador",
    headshot: jason,
    hobbies: ["Poetry", "Biking", "Polaroid + Fujifilm Photography"]
  },
  {
    name: "Liam \"¯\\_(ツ)_/¯\" Major",
    role: "Vice President",
    roleDetails: [
      "Head of Academics and Curriculum",
      "Captain of Team Magpies (CTF Team)",
      "Architect of Long Term Vision & Impact"
    ],
    fact: "Is a transfer student from Ontario",
    headshot: liam,
    hobbies: ["Hacking", "Gym", "Languages & Linguistics"]
  },
  {
    name: "Mohammed \"Dubi\" Hashmi",
    role: "Vice President - Operations",
    roleDetails: [
      "Head of Event & Operation Organization",
      "Oversee Logistics & Internal Coordination",
      "Ensure Smooth Overall Functioning of Club"
    ],
    fact: "Bit his sister when they both were kids because \
      she didn't buy him ice cream",
    headshot: mohammad,
    hobbies: ["Working Out", "Multiplayer Games", "Camping"]
  },
  {
    name: "Salma \"Salsa\" Aboulnaga",
    role: "Club Treasurer",
    roleDetails: [
      "Head of Club Finances and Budgeting",
      "\"Make sure the club doesn't go broke over stickers\"",
      "Ensures that our spreadsheets remain beautiful & legible"
    ],
    fact: "Has over five years of childcare experience",
    headshot: salsa,
    hobbies: ["Reading", "Running", "Literary Analysis"]
  },
  {
    name: "Martin \"Deikas\" Mosquera",
    role: "Vice President - Technical (Infrastructure)",
    roleDetails: [
      "Head of Infrastructure Development & Maintenance",
      "CTF Development (Website, Testing, Maintenance)",
      "Mentor & Advance Skills of Junior Executives"
    ],
    fact: "Sleeps too much",
    headshot: martin,
    hobbies: ["Climbing", "Drawing", "Calisthenics"]
  },
  {
    name: "McVeigth \"Gato Matematico\" Ojeda",
    role: "Vice President - Technical (Organization)",
    roleDetails: [
      "Head of CTF Development & Maintenance",
      "Oversee Internal Tooling to Streamline Operatoins",
      "Mentor & Advance Skills of Junior Executives"
    ],
    fact: "Self Proclaimed \"Root Beer Connoisseur\"",
    headshot: martin,
    hobbies: ["Biking", "Learning Languages", "Writing Poetry"]
  },
  {
    name: "Gabriel \"Gabe\" Moises",
    role: "Vice President - Technical (Development)",
    roleDetails: [
      "Head of Web Development & Maintenance",
      "Architect Secure Solutions for Club Initiatives",
      "Mentor & Advance Skills of Junior Executives"
    ],
    fact: "A Permanent Insomniac",
    headshot: gabe,
    hobbies: ["Video Games", "Reading", "Learning Languages"]
  },
  {
    name: "Daphne \"Daph\" Choong",
    role: "Vice President - Marketing",
    roleDetails: [
      "Head of Club Marketing & Communication",
      "Draw Cute Birbs + Other CYBERSEC-adjacent Things",
      "Ensure Promotional Material Meets Internal Standards"
    ],
    fact: "Favorite artists are Hieromymus Bosch, Vincent Van Gogh, Claude Monet, & Zdzisław Beksiński",
    headshot: martin,
    hobbies: ["Travelling", "Art History", "Squishmallows"]
  },
  {
    name: "Royce \"Bad Opsec\" K.",
    role: "Director - CTF Development",
    roleDetails: [
      "Direct & Advise CTF Development",
      "Mentor & Advance Skills of Junior Executives",
      "\"Complain to me about CTF's and Meowmix\""
    ],
    fact: "[Redacted]",
    headshot: royce,
    hobbies: ["[Redacted]", "[Redacted]", "[Redacted]"]
  },
  {
    name: "Nicholas \"Nick\" MacKinnon",
    role: "Director - Technical Development",
    roleDetails: [
      "Head of Technical Web Development",
      "Mentor & Advance Skills of Junior Executives",
      "\"Pushes buttons to make buttons\""
    ],
    fact: "Taller than you",
    headshot: nick,
    hobbies: ["Web-Dev", "Learning Italian", "Rock Climbing"]
  },
  {
    name: "Marianna \"Ferrari\" Ferreira",
    role: "Director of Outreach",
    roleDetails: [
      "Connect & Coordinate with External Organizations",
      "Foster Relationships to Support CYBERSEC",
      "Mentor & Advance Skills of Junior Executives"
    ],
    fact: "Loves Formula 1 (Forza Ferrari!)",
    headshot: martin,
    hobbies: ["Drawing", "Writing", "Lending a helping hand"]
  }
]
