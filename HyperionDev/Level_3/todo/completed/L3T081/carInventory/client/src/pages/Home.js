import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'



//^ Importing Components
import CarElement from '../components/CarElement/CarElement'
import Form from '../components/Form/Form'
import MultiDelete from '../components/MultiUpdate/MultiUpdate'

export default function Home() {

	//* Importing redux state variable 'refreshCount'
	const refreshCount = useSelector((state) => state.redux.refreshCount)
	console.log("REDUX from home",refreshCount)


    const [response, setResponse] = useState()

	//^ Using state to toggle between showing all cars and cars which are older ten fove years.
	const [fiveYears, setFiveYears] = useState()
	const [fiveYearButton, setFiveYearButton] = useState(true) //^ if true, it will display the button to show cars over five years and if false it will show the button to show all cars.

	const fetchDataVar = async () =>{
		await fetch('api/cars')
			.then(res => res.json())
			.then((data) => {
				console.log(data)
			})
			console.log(response)
	}

	const handleShowOlderThenFiveYears = () => {
		setResponse(fiveYears)
		setFiveYearButton(false)

		
	}
	const handleShowAllCars = () => {
		setFiveYearButton(true)
		fetch('api/cars')
		.then(res => res.json())
		.then((data) => {
			setResponse(data)
			console.log(data)
		})

	}

	

	useEffect(() =>{
		fetchDataVar()
		fetchData()
		async function fetchData(){
			await fetch('api/cars/fiveyears')
				  .then(res => res.json())
					  .then((data) => {
					  setFiveYears(data)
					  console.log(data)
					})
		}

	},[])




    useEffect(() => {
		fetchDataVar()
		console.count("Rendered")
		fetchData()
		async function fetchData(){
			await fetch('api/cars')
				  .then(res => res.json())
					  .then((data) => {
					  setResponse(data)
					  console.log(data)
					})
		}

		console.log(response)
	},[refreshCount])

  return (
    <div id="Home">
		<div className="top">
			<div className="multi-delete-container">
				<MultiDelete/>

			</div>
		</div>
			<div className="older-then-five-years-container">
				{fiveYearButton ?  <button onClick={handleShowOlderThenFiveYears}>Show Cars Older Then Five Years</button> : <button onClick={handleShowAllCars}>Show All Cars</button>}
			</div>
		<div className="bottom">
			<div className="left">
				{
					response?.cars && response.cars.map((car) => (
						<CarElement 
							id={car._id} //Passing the _id down which will be used for delete and edit methods.
							model={car.model} 
							make={car.make}
							owner={car.owner}
							registration={car.registration}
							address={car.address}
						/>
					))
				}
			</div>

			<div className="right">
				<Form/>

			</div>
		</div>

	</div>
    
  )
}
