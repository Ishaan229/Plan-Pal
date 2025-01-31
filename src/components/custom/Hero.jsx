import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='flex flex-col items-center justify-center mx-56 gap-9' >
            <h1
                className='font-extrabold text-[50px] text-center mt-16'
            >Leave the Planning to Us, <span
                className='text-[#ff8c00]'>Explorer!</span></h1>
            <p className='text-[30px] text-gray-500 text-center '>PlanPal has your itinerary covered.</p>
            <Link to={'/create-trip'}>
                <Button>Get Started, It's Free</Button>
            </Link>
        </div>
    )
}

export default Hero