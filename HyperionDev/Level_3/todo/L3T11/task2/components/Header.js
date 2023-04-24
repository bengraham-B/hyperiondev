import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header">
        <div className="header-container">
            <div className="header-title">
                <h1>Ben Graham</h1>
            </div>

            <div className="link-container">
                <Link className="link" href="/about">About</Link>
                <Link className="link" href="/projects">Projects</Link>
                <Link className="link" href="/contact">Contact</Link>
            </div>
        </div>



        <style global jsx>{`

            .header {
                width: 100%;
                min-height: 120px;
                max-height: auto;
                background: #545454;


                
            }
            .header-container{
                width: 100%;
                height: 100px;
                background: #545454;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                color: white;
                font-size: 1.3em;
            }

            h1{
                font-size: 2.5em;


            }

            .link-container {
                width: 100%;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content:center;
            }
            .link{
                color: white;
                margin: 5px;
                text-decoration: none;
                font-size: 1.4em;
            }
            
            .link:hover {
                color: red;
                margin: 5px;
                text-decoration: none;
                font-size: 1.4em;
            }
        
        `}</style>
    </div>
  )
}
