'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/basics', label: 'Basics' },
    { href: '/intermediate', label: 'Intermediate' },
    { href: '/advanced', label: 'Advanced' },
    { href: '/techniques', label: 'Techniques' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        ◆
        <span>PromptCraft</span>
      </Link>

      {/* Desktop Menu */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <a href="/basics" className="nav-cta">Get Started</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 text-sm font-medium hover:bg-paper3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
