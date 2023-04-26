import React from 'react'

export default function ProjectOne() {
  return (
    <div className="project-container">
        <h1 className="title">Search Itunes API</h1>
        <div className="pic-place-holder">
            <img src="./project.png" alt="project One image" width={650} />
        </div>
        <div className="project-info-container">
            <div className="project-info-title-container">
                <p className="project-info-title">
                    This is a Capstone Project I completed in level 3 of my Hyperiondev bootcamp.
                </p>
            </div>
            <p className="project-info-para">
                This project makes use of the Itunes API to search for content related to the term the user specified. Th euser
                can select to search either all catergories, eBooks, Podcasts, Software and movies. The will be then be given a list of 
                items which display the title,, the country of origin, the type od media it is, the current retail price and 
                a link to the item on the offical iTunes website.
            </p>
            <p className="project-info-para">
                The user os also able to favourite an item returned from their search which will then be displayed on
                the favourites page, where the user can either refer back to that object at a later stage of delete it.
            </p>

            <div className="project-info-list-container">
                <h3 className="project-info-list-title">Technologies used</h3>
                <ul>
                    <li>ReactJS - Frontend</li>
                    <li>SASS - Frontend</li>
                    <li>Jest - Frontend Testing</li>
                    <li>Nodes - Backend</li>
                    <li>Express - Backend</li>
                    <li>Postman - Backend API testing</li>
                </ul>
            </div>

            <div className="link-container">
                <a href="https://github.com/bengraham-B/capstone-itunes-api">Link To Github</a>
            </div>
        </div>

        <style jsx>{`

            .project-container {
                width: 100%;

                height: auto;
                background: #245454;

                display: flex;
                align-items: center;
                flex-direction: column;
            }

            .title{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;
                height: 50px;
                font-szie: 1.6em;
                color: white;

            }

            // .pic-place-holder{
            //     width: 400px;
            //     height: 300px;
            //     background: red;
            // }

            .project-info-container {
                width: 700px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            .project-info-para {
                color: white;
                font-size: 1.4em;
            }

            .project-info-title {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .project-info-title {
                color: white;
                font-size: 1.5em;
            }

            .project-info-list-container{
                width: 800px;
                height: 200px;
                margin: 10px;
                color: white;

                display: flex;
                align-items: center;
                flex-direction: column
            }

            .project-info-list-title{
                font-size: 1.6em;
                margin: 10px;

            }

            li {
                font-size: 1.3em;

            }

            .link-container {
                margin: 25px;

            }

            a {
                color: white;
                text-decoration: none;
                font-size: 1.3em;   

            }
        
        
        `}</style>


        

    </div>
  )
}
