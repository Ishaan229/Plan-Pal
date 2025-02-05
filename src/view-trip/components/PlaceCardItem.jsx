import { getPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PlaceCardItem({ dayKey, place }) {

    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        place && GetPlacePhoto();
    }, [place])

    const GetPlacePhoto = async () => {

        const data = {
            textQuery: place?.placeName
        }
        const result = await getPlaceDetails(data).then(resp => {
            console.log(resp.data.places[0].photos[3].name);
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }
    return (
        <div key={`${dayKey}-place-${place.placeName}`}>
            <h2 className="mt-1 text-orange-500 font-semibold">{place.timeSlot}</h2>
            <Link
                to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName}
                target='_blank'
            >
                <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:border-cyan-500 hover:cursor-pointer transition-all'>
                    <img src={photoUrl ? photoUrl : '/placeholder.jpg'} className='w-[130px] h-[130px] rounded-xl object-cover' />
                    <div>
                        <h2 className='font-bold text-xl mt-3'>{place.placeName}</h2>
                        <p className='text-base text-gray-500 font-medium'>{place.placeDetails}</p>
                        <h2 className='mt-10'>🕙 {place.timeToTravel}</h2>
                        <h2 className='mt-1'>🎟️ {place.ticketPricing}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PlaceCardItem
