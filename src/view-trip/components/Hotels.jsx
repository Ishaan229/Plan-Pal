import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-2xl mt-8'>Hotel Recommendations</h2>
            <div className='my-8 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-14'>
                {trip?.tripData?.hotelOptions?.map((hotel, index) => (
                    <HotelCardItem hotel={hotel} />
                ))}
            </div>
        </div>
    )
}

export default Hotels