import React from 'react'

import {refreshGetReq} from '../../store/refresh'
import {useDispatch} from 'react-redux'


export default function Element(props) {
	const dispatch = useDispatch()

	const handleDelete = (props) => {
		console.log("DELETE:", props.id)
		fetch('/delete', {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({id: props.id})
		}).then(response => response.json())

		dispatch(refreshGetReq())

	}
	const handleUpdate = () => {
		console.log("UPDATE:", props)

		const updatedTitle = prompt("Enter New Title: ")
		const updatedDesc = prompt("Enter New Title: ")
		const updatedUrl = prompt("Enter New Title: ")

		fetch('/put', {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(
				{
					id: props.id,
					title: updatedTitle,
					description: updatedDesc,
					url: updatedUrl
				}
			)
		}).then(response => response.json())

		dispatch(refreshGetReq())


	}
  return (
    <div id="Element">
		<div className="info-container">
			<h2>{props.title}</h2>
			<h3>{props.id}</h3>
			<h4>{props.desc}</h4>
			<h4>{props.url}</h4>
		</div>
		<div className="button-container">
			<button onClick={() => handleDelete(props)}>Delete</button>
			<button onClick={() => handleUpdate(props)}>Update</button>
		</div>
    </div>
  )
}
