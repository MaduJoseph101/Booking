import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();
    const details = location.state?.bookingDetails;

    let [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown <= 0) {
            navigate('/slots', { replace: true });
            return;
        }

        let timerId = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timerId);
    }, [countdown, navigate]);
    
    return (
        <main className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
            <div className="absolute top-4 right-4 bg-[#006CE4] text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg">
                Redirecting in {countdown}...
            </div>

            <div className='w-full max-w-md bg-white rounded-2xl shadow-2xl font-sans'>
                {/* Top Section */}
                <div className='p-8 text-center'>
                    <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                    <h1 className='text-3xl font-bold text-[#006CE4] mt-4'>Booking Confirmed!</h1>
                    <p className='text-gray-600 mt-2'>Your reservation has been successfully made.</p>
                </div>

                {/* Dashed Separator */}
                <div className='relative'>
                    <div className='absolute left-0 -top-4 bg-gray-100 w-8 h-8 rounded-full'></div>
                    <div className='border-t-2 border-dashed border-gray-300'></div>

                    <div className='absolute right-0 -top-4 bg-gray-100 w-8 h-8 rounded-full'></div>
                </div>

                {/* Bottom Section - Details */}
                <div className='p-8 space-y-4'>
                    <div className='pb-4 border-b border-gray-200'>
                        <h2 className='text-2xl font-bold text-[#006CE4]'>{details.room}</h2>
                        <p className='text-gray-500'>{details.description}</p>
                    </div>
                    <div className='flex justify-between items-center'><span className='font-semibold text-gray-700'>Booked for:</span><span className='font-bold text-gray-900'>{details.name}</span></div>

                    <div className='flex justify-between items-center'><span className='font-semibold text-gray-700'>Email:</span><span className='font-bold text-gray-900'>{details.email}</span></div>

                    <div className='flex justify-between items-center'><span className='font-semibold text-gray-700'>Phone:</span><span className='font-bold text-gray-900'>{details.phone}</span></div>

                     <div className='flex justify-between items-center'><span className='font-semibold text-gray-700'>Date:</span><span className='font-bold text-gray-900'>{details.duration}</span></div>

                    <div className='flex justify-between items-center text-2xl'><span className='font-semibold text-gray-700'>Total Price:</span><span className='font-bold text-[#006CE4]'>${details.price}</span></div>

                    
                </div>
            </div>
        </main>
    )
}

export default Confirmation