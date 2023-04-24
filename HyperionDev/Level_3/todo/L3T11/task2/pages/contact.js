import React from 'react'

//^Importing Components
import Header from '../components/Header'
import TitleComponent from '../components/TitleComponent'

//^Importing Components from ContactComponets
//^ These componets will make up the page
import Details from './ContactComponents/Details'


export default function contactPage() {
  return (
    <div>
        <Header/>

        <TitleComponent title={"Contact"}/>

		<div className="component-container">
			<Details/>
		</div>


        <div>
            
        </div>

        <style global jsx>{`

			.component-container{
				width: 100%;
				height: auto;

				background: #245454;


				display: flex;
				align-items: center;
				justify-content: center;

			}

            *{
                margin:0;
                padding:0;
            }

        `}</style>
    </div>
  )
}
