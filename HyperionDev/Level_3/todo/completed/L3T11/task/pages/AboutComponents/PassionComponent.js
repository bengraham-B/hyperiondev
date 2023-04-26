import React from 'react'

export default function PassionComponent() {
  return (
    <div className="passion-container">

        <div className="title-container">
            <h3>What I am Passionate About</h3>
        </div>

        <div className="para-container">
            <p>
                I am passionate about writing software which is both useful to users, attractivley styled and in the latest technology.
                This will include writting sotware in the latest technologies, such as React, NextJS and MongoDB.
                I am busy studying a Bacheloer of Commerce in Strategic Management, which I plan on combining with my software skills to create cutting edge enterprise applications.
            </p>
            <p>

            </p>
        </div>
        
        <style jsx>
            {`

            .passion-container{
                min-height: 200px;
                height: auto;
                background: #545454;
                color: white;

            }

            .title-container {
                background: grey;
                color: white;
                font-size: 1.6em;

            }

            .para-container {
                padding: 10px;
                font-size: 1.4em;
            }
            
            
            `}
        </style>
    </div>
  )
}
