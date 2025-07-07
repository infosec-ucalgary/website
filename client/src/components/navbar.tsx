import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "@tanstack/react-router"

import wordmark from "@/assets/wordmark.png"
import logo from "/logo.svg"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-2 px-8 w-full text-white">
      <Link to="/" className="flex items-center">
        <img className="h-12 w-12 mr-2" src={logo} />
        <img className="h-8" src={wordmark} />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
