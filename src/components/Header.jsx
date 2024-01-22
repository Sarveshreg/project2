import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-row flex-wrap justify-center  place-content-center gap-6 bg-orange-600 h-fit lg:p-2 '>
      <h1 className='  font-bold text-black-500 text-3xl items-center'>Puppy Bowl 2024</h1>
      <span className=' ml-36 flex flex-row flex-wrap gap-4 place-content-end font-bold text-lg items-center'>
        <Link to="/">Home</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
      </span>
    </div>
  )
}

export default Header