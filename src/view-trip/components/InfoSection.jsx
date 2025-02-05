import { Button } from '@/components/ui/button'
import { getPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { IoIosSend } from "react-icons/io";



function InfoSection({ trip }) {

    const [photoUrl, setPhotoUrl] = useState();
    useEffect(() => {
        trip && GetPlacePhoto();
    }, [trip])

    const GetPlacePhoto = async () => {

        const data = {
            textQuery: trip?.userChoice?.location?.label + 'city'
        }
        const result = await getPlaceDetails(data).then(resp => {
            console.log(resp.data.places[0].photos[3].name);
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }

    return (
        <div>
            <img src={photoUrl ? photoUrl : '/placeholder.jpg'} className='h-[340px] w-full object-cover rounded-xl' />
            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-3xl'>
                        {trip?.userChoice?.location?.label}
                    </h2>
                    <div className='flex gap-5'>
                        <h2 className=' p-1 px-3 bg-gray-200 rounded-full font-semibold text-gray-800 text-md md:text-lg'>📅{trip?.userChoice?.noOfDays} Day</h2>
                        <h2 className=' p-1 px-3 bg-gray-200 rounded-full font-semibold text-gray-800 text-md md:text-lg'>🪙{trip?.userChoice?.budget} Budget</h2>
                        <h2 className=' p-1 px-3 bg-gray-200 rounded-full text-gray-800 font-semibold text-md md:text-lg'>🧳No. of travellers:  {trip?.userChoice?.traveller}</h2>
                    </div>
                </div>
                <Button><IoIosSend /></Button>
            </div>
        </div>
    )
}

export default InfoSection