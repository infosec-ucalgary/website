import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"
import { Menu } from "lucide-react"

import wordmark from "@/assets/wordmark.png"
import logo from "/logo.svg"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const TABS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ]

  return (
    <div className="flex items-center justify-between py-2 px-8 w-full text-white">
      <Link to="/" className="flex items-center">
        <img className="h-12 w-12 mr-2" src={logo} />
        <img className="h-8" src={wordmark} />
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-4">
          {TABS.map((tab, index) => (
            <NavigationMenuLink key={index} asChild>
              <Link to={tab.href}>{tab.name}</Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-40 flex flex-col gap-2 p-2 md:hidden bg-background text-foreground"
        >
          {TABS.map((tab, index) => (
            <Link
              key={index}
              to={tab.href}
              onClick={() => setOpen(false)}
              className="hover:text-primary"
            >
              {tab.name}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}
