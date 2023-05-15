/*
 * In This React component, all the cars from the data base will be displayed her
 */

// ~ Import redux into this file.
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { refresh } from '../store/redux'


export default function Cars() {
  	const dispatch = useDispatch()

  	const handleClick = () => {
    	dispatch(refresh())
  	}


  return (
    <div><button onClick={handleClick}>Click</button></div>
  )
}
