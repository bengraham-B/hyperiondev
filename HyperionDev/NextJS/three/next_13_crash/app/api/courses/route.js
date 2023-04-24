import { NextResponse } from 'next/server'
import { v4 as uuid4 } from 'uuid'
import courses from './data.json'

//Using POSTMAN to get all the courses
export async function GET(request){
    return NextResponse.json(courses)

}

//Adding a course through POSTMAN
export async function POST(request){
    const { title, description, level, link } = await request.json()

    const newCourse  ={
        id: uuid4(),
        title,
        description,
        level,
        link
    }
    courses.push(newCourse)
    console.log(courses)

    return NextResponse.json(courses)
    // return NextResponse.json(course)

}