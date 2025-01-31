import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, SelectBudgetOptions, SelectTravellerList } from '@/constants/options';
import { chatSession } from '@/service/aimodel';
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { toast } from 'sonner';
import { AiOutlineLoading3Quarters } from "react-icons/ai";



import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import { CodeSquare } from 'lucide-react';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { useNavigate } from 'react-router-dom';


function CreateTrip() {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleInputChange = (name, value) => {


        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        console.log([formData]);
    }, [formData])

    const login = useGoogleLogin({
        onSuccess: (codeResp) => getUserProfile(codeResp),
        onError: (error) => console.log(error)
    })

    const OnGenerateItinerary = async () => {

        const user = localStorage.getItem('user');
        if (!user) {
            setOpenDialog(true);
            return;
        }

        if (formData?.noOfDays > 10 && !formData?.location || !formData?.budget || !formData?.traveller) {
            toast("Please fill all the details")
            return;
        }
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location?.label)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{traveller}', formData?.traveller)
            .replace('{budgetType}', formData?.budget)
            .replace('{totalDays}', formData?.noOfDays)
        // console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);

        console.log(result.response?.text());
        setLoading(false);
        saveAiTrip(result.response?.text());
    }

    const saveAiTrip = async (TripData) => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        const docId = Date.now().toString()
        await setDoc(doc(db, "AITrips", docId), {
            userChoice: formData,
            tripData: TripData,
            useEmail: user?.email,
            id: docId
        });
        setLoading(false);
        navigate('/view-trip/' + docId)
    }
    const getUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: `Application/json`
            }
        }).then((resp) => {
            console.log(resp);
            localStorage.setItem('user', JSON.stringify(resp.data));
            setOpenDialog(false);
            OnGenerateItinerary();
        })
    }
    return (
        <div className='mx-auto sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 max-w-screen-xl'>
            <h2 className='font-bold text-6xl'>Tell us your travel preference</h2>
            <p className='mt-3 text-gray-500 text-2xl'>Just provide some basic information, and we will build the perfect itinerary for you &lt;3</p>

            <div className='mt-10 flex flex-col gap-3'>
                <div>
                    <h2 className='text-2xl my-3 font-semibold'>What is your destination?</h2>
                    <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                        selectProps={{
                            place,
                            onChange: (v) => { setPlace(v); handleInputChange('location', v) }
                        }}
                    />
                </div>
                <div>
                    <h2 className='text-2xl my-3 font-semibold'>How many days are you planning there trip?</h2>
                    <Input placeholder={'Ex. 3'} type="number"
                        onChange={(e) => handleInputChange('noOfDays', e.target.value)}
                    />

                </div>

                <div>
                    <h2 className='text-2xl my-3 font-semibold'>What is your budget type?</h2>
                    <div className='grid grid-cols-6 gap-5 mt-5'>
                        {SelectBudgetOptions.map((item, index) => (
                            <div key={index}
                                onClick={() => handleInputChange('budget', item.title)}
                                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
                                ${formData?.budget == item.title && 'shadow-lg border-black'}
                                `}>
                                <h2 className='text-2xl'>{item.icon}</h2>
                                <h2 className='text-2xl font-bold'>{item.title}</h2>
                                <h2 className='text-gray-500 text-sm font-medium'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl my-3 font-semibold'>Who are you travelling with?</h2>
                    <div className='grid grid-cols-6 gap-5 mt-5'>
                        {SelectTravellerList.map((item, index) => (
                            <div key={index}
                                onClick={() => handleInputChange('traveller', item.people)}
                                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg
                                ${formData?.traveller == item.people && 'shadow-lg border-black'}
                                `}>
                                <h2 className='text-2xl'>{item.icon}</h2>
                                <h2 className='text-2xl font-bold'>{item.title}</h2>
                                <h2 className='text-gray-500 text-sm font-medium'>{item.desc}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='my-20 flex justify-start'>
                    <Button disabled={loading} onClick={OnGenerateItinerary} className='text-lg'>
                        {loading ? <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Itinerary'}</Button>
                </div>
                <Dialog open={openDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <img src='/logo.svg' />
                                <h2 className='font-bold text-lg mt-7'>Sign in with Google</h2>
                                <p>Sign in to the app with google authentication securely</p>

                                <Button onClick={login} className='w-full mt-5 flex gap-3 items-center'><FcGoogle className='h-8 w-8' /> Sign In With Google</Button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}

export default CreateTrip