import { getPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {

    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        hotel && GetPlacePhoto();
    }, [hotel])

    const GetPlacePhoto = async () => {

        const data = {
            textQuery: hotel?.hotelName
        }
        const result = await getPlaceDetails(data).then(resp => {
            console.log(resp.data.places[0].photos[3].name);
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + ',' + hotel?.hotelAddress} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={photoUrl ? photoUrl : '/placeholder.jpg'} className='rounded-lg h-[300px] w-full object-cover' />
                <div className='my-2 flex flex-col'>
                    <h2 className='font-semibold text-xl'>{hotel?.hotelName}</h2>
                    <h2 className='text-gray-500 font-normal'>{hotel?.hotelAddress}</h2>
                    <h2 className='my-2 text-lg'>⭐{hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCardItem