"use client"
import React, {useState} from 'react'

function CourseSearch({getSearchResults}) {
	const [query, setQuery] = useState("")

	const handleSubmit = async (e) =>{
		e.preventDefault()
		const res = await fetch(`/api/courses/search?query=${query}`) //Passing data to backend
		const courses = await res.json()
		getSearchResults(courses)
	}
  return (
    <form onSubmit={handleSubmit} className='search-form'>
		<input type="text" class="search-input" placeholder='search...' value={query} onChange={(e) => setQuery(e.target.value)}/>
		<button className='search-button' type="submit">Search</button>

    </form>
  )
}

export default CourseSearch