import React from 'react'

export default function TitleComponent(props) {
  return (
    <div>

        <div className="title-container">
        	<h1>{props.title}</h1> 
		</div>
        

        <style global jsx>{`

        .title-container{
            width: 100%;
            height: 50px;
            background: #545454;
            background: grey;
            color: white;
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
