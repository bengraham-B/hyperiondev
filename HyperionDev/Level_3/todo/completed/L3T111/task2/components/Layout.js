import React from 'react'

//^ Importing components
import Header from './Header'

export default function Layout(props) {
  return (
    <div>
        {/* <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nabla&family=Poppins:wght@200;300&display=swap" rel="stylesheet"/>
        </div> */}
        <div>
			<div className="title-container">
				<h1>Ben Graham</h1>
				<h2>Web Developer</h2>
			</div>
            {props.children}

			<style>
				{`

					* {
						padding: 0;
						margin: 0;


					}

					.title-container {
						width: 100%;
						height: 700px;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						background: #245454;
						color: white;

					}

					h1{
						font-size: 4em;
					}

					h2{
						font-size: 2.1em;
					}
				
				`}
			</style>
        </div>
    </div>
  )
}
