import React from "react"



export default function Post() {
	function postData(url, data){
		return fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
	}

  	const handlePOST = () => {
		//* ((1)https://www.w3schools.com)
		let id = Math.floor(Math.random() * 200000) + Math.floor(Math.random() * 300000)
		const title = document.getElementById("POST-input-title").value
		const desc = document.getElementById("POST-input-desc").value
		const url = document.getElementById("POST-input-url").value
		postData("/post", {id: id, title: title, description: desc, url: url})
	}

  return (

    <div id="POST">

		<div className="inputs-container">
			<div className="input-wrapper">
				<h1>Title</h1>
				<input type="text" id="POST-input-title" />
			</div>

			<div className="input-wrapper">
				<h1>Description</h1>
				<textarea name="" id="POST-input-desc" cols="30" rows="5"></textarea>
			</div>

			<div className="input-wrapper">
				<h1>URL</h1>
				<input type="text" id="POST-input-url" />
			</div>
			
			
			
		</div>

		<div className="button-container">
			<button onClick={handlePOST}>Submit</button>
		</div>
    </div>
  )
}


/*
* Resources Used: 
* (1) https://www.w3schools.com/js/js_random.asp : Information regarding Math.random()
*/