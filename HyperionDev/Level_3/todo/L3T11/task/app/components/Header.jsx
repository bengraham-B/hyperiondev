"use client"
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
      <header className="header">
        <div className="title-container">
          <h1 className="title">Ben Graham</h1>
        </div>

        <div className="link-container">
            {/* Links to about.jsx, projects.jsx and contact.jsx */}
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </div>

      </header>

  )
}
