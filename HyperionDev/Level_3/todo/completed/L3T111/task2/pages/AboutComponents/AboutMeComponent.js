import React from 'react'

export default function AboutMe() {
  return (
    <div className="passion-container">

        <div className="title-container">
            <h3>About Me</h3>
        </div>

        <div className="para-container">
            <p>
                I am a hardworking and passionate team player, who is willing to collaborate with a team. I 
                have a eye for detail which has aided me greatly in creating effecient applications.
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
