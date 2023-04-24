"use client"

import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import LoadingPage from './loading'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'

export default function HomePage() {

	const [courses, setCourses] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() =>{
		const fetchCourses = async () => {
			const res = await fetch('/api/courses')
			const data = await res.json()
			setCourses(data)
			setLoading(false)
		}

		fetchCourses()
	}, [])

	if (loading){
		return <LoadingPage/>
	}
  return (
	<div>
		<h1>Welcome to NextJS 13🦖</h1>
		{/* Passing data up from the compent so it can be used in thr Courses compoent */}
		<CourseSearch getSearchResults={(results) => setCourses(results)}/>
		<Courses courses={courses} />

		
	</div>
  )
}
