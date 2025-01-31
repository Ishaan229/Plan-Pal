import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-2xl mt-8'>Hotel Recommendations</h2>
            <div className='my-8 grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-14'>
                {trip?.tripData?.hotelOptions?.map((hotel, index) => (
                    <Link
                        key={hotel?.id || index}  // ✅ Added unique key 
                        to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ',' + hotel?.hotelAddress}
                        target='_blank'
                    >
                        <div className='hover:scale-105 transition-all cursor-pointer'>
                            <img src='/placeholder.jpg' className='rounded-lg' />
                            <div className='my-2 flex flex-col'>
                                <h2 className='font-semibold text-xl'>{hotel?.hotelName}</h2>
                                <h2 className='text-gray-500 font-normal'>{hotel?.hotelAddress}</h2>
                                <h2 className='my-2 text-lg'>⭐{hotel?.rating}</h2>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Hotels