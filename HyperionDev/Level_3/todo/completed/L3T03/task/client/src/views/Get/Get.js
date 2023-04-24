import { useEffect, useState } from "react";
import {refreshGetReq} from '../../store/refresh'
import {useDispatch, useSelector} from 'react-redux'



/*
^Importing the Element compoent in which items 
^from the GET request will be displayed and data 
^pased downt to the Element from the GET request so 
^itcan be either modifed (PUT) or deleted(DELTE)
*/ 
import Element from "../element/Element";


export default function Get() {

	const valueToUpdateGetPageOnButtonPress = useSelector((state) => state.refresh.refreshCount)
	console.log("valueToUpdateGetPageOnButtonPress", valueToUpdateGetPageOnButtonPress)
	const dispatch = useDispatch()
	const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
		fetch('/get')
			.then(response => response.json())
			.then((data) => setBackendData(data))
	},[valueToUpdateGetPageOnButtonPress])

	
  return (
    <div id="GET">
        {(typeof backendData === "undefined") ? (
			<div>
				<p>Loading..</p>
				<p>Typeof: {typeof backendData}</p>

			</div>
		):(
			backendData.map((project, i) => (

					<Element 
						index={i}
						id={project.id}
						title={project.title}
						desc={project.description}
						url={project.url}
					/>

					
			))
		)}
    </div>
  )
}
