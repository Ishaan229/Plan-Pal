import React from 'react'

function PlaceCardItem(place) {
    return (
        <div className='border rounded-xl p-3 mt-2'>
            <img src='/placeholder.jpg'
                className='w-[130px] h-[130px] rounded-xl'
            />
            <div>
                <h2>{place.placeName}</h2>
            </div>
        </div>
    )
}

export default PlaceCardItem

// < h2 className = "text-lg font-medium" > { place.placeName }</h2 >
//                             <p>{place.placeDetails}</p>
//                             <img src={place.placeImageUrl} alt={place.placeName} className="w-full h-auto mt-2" />
//                             <p>Rating: {place.rating}</p>
//                             <p>Ticket Price: {place.ticketPricing}</p>
//                             <p>Time to Travel: {place.timeToTravel}</p>