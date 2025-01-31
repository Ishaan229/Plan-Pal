import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import Placestovisit from '../components/Placestovisit';
import Footer from '../components/Footer';

function ViewTrip() {
    const { tripID } = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripID && getTripData();
    }, [tripID])
    const getTripData = async () => {
        const docRef = doc(db, 'AITrips', tripID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            //     console.log("Document:", docSnap.data());
            //     setTrip(docSnap.data());
            // }
            // else {
            //     console.log('No such document');
            //     toast('No trip found :(');
            // }
            let data = docSnap.data();

            // Check if tripData is a string and needs parsing
            if (data.tripData && typeof data.tripData === 'string') {
                try {
                    data.tripData = JSON.parse(data.tripData); // Parse the stringified JSON
                } catch (error) {
                    console.error("Error parsing tripData:", error);
                }
            }

            console.log("Parsed Document:", data);
            setTrip(data); // Set the parsed data
        } else {
            console.log('No such document');
            toast('No trip found :(');
        }
    }
    return (
        <div className='p-10 md:px-20 lg:p-34 xl:px-46'>
            {/* Information Section */}
            <InfoSection trip={trip} />
            {/* Recommended Hotels */}
            <Hotels trip={trip} />
            {/* Daily Plan */}
            <Placestovisit trip={trip} />
            {/* Footer */}
            <Footer trip={trip} />
        </div>
    )
}

export default ViewTrip