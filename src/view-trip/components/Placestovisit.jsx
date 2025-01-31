import React from 'react'
import PlaceCardItem from './PlaceCardItem';
import { Link } from 'react-router-dom';

function formatDayString(dayKey) {
    return dayKey.charAt(0).toUpperCase() + dayKey.slice(1, 3) + " " + dayKey.slice(3);
}



function Placestovisit({ trip }) {
    return (
        <div>
            <h2 className="font-bold text-2xl mt-8">Places to visit</h2>
            <div className=''>
                {/* Iterate over itinerary keys */}
                {Object.keys(trip.tripData?.itinerary || {}).map((dayKey, index) => (
                    <div key={dayKey}> {/* Use `dayKey` as the key */}
                        {/* Display the day */}
                        <h2 className="font-medium mt-5 text-lg">{formatDayString(dayKey)}</h2>

                        {/* Display the plan for the day */}
                        <div className='grid grid-cols-2 gap-5'>
                            {trip.tripData.itinerary[dayKey].plan.map((place, idx) => (
                                <Link
                                    key={`${dayKey}-${idx}`}  // ✅ Added unique key
                                    to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName}
                                    target='_blank'
                                >
                                    <div className='my-8'>
                                        <h2 className="mt-1 text-orange-500 font-semibold">{place.timeSlot}</h2>
                                        <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:border-cyan-500 hover:cursor-pointer transition-all'>
                                            <img src='/placeholder.jpg' className='w-[130px] h-[130px] rounded-xl' />
                                            <div>
                                                <h2 className='font-bold text-xl mt-3'>{place.placeName}</h2>
                                                <p className='text-base text-gray-500 font-medium'>{place.placeDetails}</p>
                                                <h2 className='mt-10'>🕙 {place.timeToTravel}</h2>
                                                <h2 className='mt-1'>🎟️ {place.ticketPricing}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default Placestovisit