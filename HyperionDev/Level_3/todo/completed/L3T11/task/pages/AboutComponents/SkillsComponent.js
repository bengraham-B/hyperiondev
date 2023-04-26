import React from 'react'


export default function SkillsComponent() {
    return (
        <div className="skills-wrapper">
			<div className="skills-wrapper-title">
                <h3>Skills</h3>
			</div>
            <div className="skills-wrapper-list">
                <ul>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>SASS</li>
                    <li>NextJS</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Github</li>
                    <li>Postman</li>
                </ul>
            </div>

            <style global jsx>
			{`

				@import url('https://fonts.googleapis.com/css2?family=Nabla&family=Poppins:wght@200;300&display=swap');
                
                .skills-wrapper{
                    width: 400px;
                    min-height: 200px;
                    max-height: auto;
                    background: blue;
                }
                .skills-wrapper-title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 50px;
                    width: 100%;
                    background: grey;
                    color: white;
                    font-size: 1.6em;


                }

                .skills-wrapper-list{
                    display: flex;
                    justify-content: center;
                    background: #545454;
                    width: 100%;
                    height: inherit;
                    color: white;
                    font-size: 1.4em;

                }

				




			
			
				*{
					margin: 0;
				}

			`}
		</style>
        </div>
        
  )
}
