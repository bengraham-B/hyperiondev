import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
   <header className="header">
        <div className="container">
            <div className="logo">
                <Link href="/">GOOSE_CPT</Link>
            </div>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/about/team">OutTeam</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </div>
   </header>
  )
}
