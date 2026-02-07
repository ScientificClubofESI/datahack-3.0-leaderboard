'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import CountdownTimer from './CountdownTimer'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/challenges', label: 'Challenges' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/discord-bot', label: 'DiscordBot' },
    { href: '/workshops', label: 'Workshops' },
  ]

  const isActive = (href) => pathname === href

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <div className="relative w-42 h-16">
              <Image
                src="/images/logo.png"
                alt="DATA HACK Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-light tracking-wide pb-[6px] transition-colors ${
                  isActive(link.href)
                    ? 'text-[#E2BFFD]'
                    : 'text-white/80'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#E2BFFD]/60 transition-all duration-300 ease-out ${
                    isActive(link.href)
                      ? 'w-full'
                      : 'w-0'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <CountdownTimer />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`relative block text-base pb-[6px] transition-colors ${
                  isActive(link.href)
                    ? 'text-[#E2BFFD]'
                    : 'text-white/80'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#E2BFFD]/60 transition-all duration-300 ease-out ${
                    isActive(link.href)
                      ? 'w-full'
                      : 'w-0'
                  }`}
                ></span>
              </Link>
            ))}
            <div className="pt-4">
              <CountdownTimer />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}