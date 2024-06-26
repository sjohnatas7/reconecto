"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = React.useState(false) // State for mobile menu visibility
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const handleMenuToggle = () => {
    setIsOpen(!isOpen) // Toggle menu state on button click
  }

  return (
    <div className=" z-10 flex size-full justify-between gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          width={30}
          height={60}
          alt="logo"
          src="/imagens/Logo Fundo Lavender 1.png"
          className="size-full"
        />
      </Link>

      {items?.length ? (
        <>
          <nav className="hidden gap-6  md:flex">
            {items?.map(
              (item, index) =>
                item.href && (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </button>
                )
            )}
          </nav>
          <button
            className={`flex items-center text-sm font-medium text-muted-foreground md:hidden ${
              isOpen ? "rounded-md bg-gray-200 px-2 py-1" : ""
            }`}
            onClick={handleMenuToggle}
          >
            {isOpen ? "Close" : "Menu"}
          </button>

          {/* Mobile navigation links (shown on hover or click) */}
          <div
            className={`absolute inset-x-0 top-full bg-white shadow-md transition duration-200 ease-in-out ${
              isOpen ? "z-0 block animate-slide-in-right" : "hidden"
            }`} // Toggle visibility based on isOpen state
          >
            <ul className="flex flex-col gap-2 p-4">
              {items.map(
                (item, index) =>
                  item.href && (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-sm font-medium hover:underline"
                      >
                        {item.title}
                      </button>
                    </li>
                  )
              )}
            </ul>
          </div>
        </>
      ) : null}
    </div>
  )
}
