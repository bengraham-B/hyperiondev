import React from 'react'

export default function EducationHistory() {
  return (
    <div>

        <div className="intro-container">

            <div className="intro-title">
                <h3>Education History</h3>

            </div>

            <div className="intro-para">
                <ul className='intro-list'>
                    <p>
                       1. Matriculated in 2020 from Parel Vallei High School
                    </p>
                    <p>
                       2. IIE Vasity College: 2nd Year, 2022
                    </p>
                    <p>
                        3. Currently In 3rd year, 2023
                    </p>
                    <p>
                        4. HyperionDev, currently level 3, 2023
                    </p>
                   
                </ul>
            </div>

        </div>


        <style jsx>{`
            .intro-container{
                width: 400px;
                height: 200px;
                max-height: auto;

                display: flex;
                flex-wrap: wrap;

                background: grey;
                color: white;
            }

            .intro-title{
                width: inherit;
                height: 75px;
                font-size: 1.7em;

                display: flex;
                align-items: center;
                justify-content: center;

            }
            
            .intro-para {
                width: 100%;
                padding: 7.5px;
                height: 100%;
                font-size: 1.4em;
                background: #545454;

                display: inline;
                align-items: center;
                justify-content: center;


            }

            .intro-list {
                display: inline;
                // flex-direction: column;
                // // align-items: center;
                // justify-content: center;

            }

            p {
                margin: 10px;
                text-align: center;
            }


        
        `}</style>
    </div>
  )
}
