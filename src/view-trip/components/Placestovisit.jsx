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
                                <PlaceCardItem key={`${dayKey}-place-${idx}`} dayKey={dayKey} place={place} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Placestovisit
