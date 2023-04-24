"use client"
import { useState } from "react"
export default  async function Home() {
	const data = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=8cab8cb01080bf4e81876455a158582f`)
	const res = await data.json()
	console.log(res)

  	return (
    	<main >
			<h1 className='text-lg py-2 m-5'>Hello next 13 🦖</h1>
			<h1 className='text-lg py-2 m-5'>Such a cool framework🪲</h1>
			{res.results.map((movie) => (
				<div>
					<h1>{movie.title}</h1>
				</div>
			))}

   	 	</main>
  )
}
