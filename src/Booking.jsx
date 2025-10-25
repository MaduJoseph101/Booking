import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import BackButton from './BackButton';

function Booking() {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        duration: "",
    });

    // MODAL BOX
    const [showModal, setShowModal] = useState(false);

     const handleConfirmNo = () => {
        setShowModal(false);
    };

    const location = useLocation();
    const selectedSlot = location.state?.selectedSlot;

      let handleInputChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value });
    }

    let navigate = useNavigate();

    const handleConfirmYes = () => {
        navigate('/confirmation', { state: { bookingDetails: { ...formData, ...selectedSlot } } });
    };

   
    // SUBMIT FUNCTION
    let handleSubmit = (event) => {
        event.preventDefault();

        if (formData.phone.length < 11 || formData.phone.length > 11) {
            setNotification({ show: true, message: 'Phone number must be 11 digits.' });
            return;
        }
        setShowModal(true);
    }
    
    let [notification, setNotification] = useState({ show: false, message: 'Phone number must be 11 digits.' });

    useEffect(() => {
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ show: false, message: 'Phone number must be 11 digits.' });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification.show]);


    return (
        <>
            <main className='relative min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4'>

                {/* BACK BUTTON */}
                <BackButton to="/slots" />

                {/* CONFIRMATION POPUP*/}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
                        <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm w-full mx-4">
                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Confirm Your Booking</h2>
                            <p className="mb-6 text-gray-600">Are you sure you want to confirm this booking?</p>
                            <div className="flex justify-center gap-4">

                                <button
                                    onClick={handleConfirmYes}
                                    className="bg-[#006CE4] hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg transition duration-300 ease-in-out cursor-pointer transform hover:scale-105">Yes</button>

                                <button
                                    onClick={handleConfirmNo}
                                    className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-bold py-2 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* NOTIFICATION POPUP */}
                <div className={`fixed top-5 right-5 z-50 transition-transform duration-500 ease-in-out ${notification.show ? 'translate-x-0' : 'translate-x-[300px]'}`}>

                    <div className="bg-red-500 text-[12px] text-white font-bold rounded-lg shadow-lg p-4">
                        <p>{notification.message}</p>
                    </div>
                </div>

                <div className='w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 space-y-8'>                    
                             
                    <h1 className='text-3xl font-bold text-center text-[#006CE4]'>Complete Your Booking</h1>

                    <form onSubmit={handleSubmit} className='  flex flex-col gap-6'>

                        <div>
                            <label htmlFor="name" className='text-lg font-semibold text-gray-800'>Name</label>
                            <input type="text" id="name" name='name' onChange={handleInputChange} required
                                className='mt-2 capitalize w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-[#006ae491] focus:border-transparent transition duration-300 placeholder:text-gray-500'
                                placeholder="John Doe" />
                        </div>

                        <div>
                            <label htmlFor="email" className='text-lg font-semibold text-gray-800'>Email</label>
                            <input type="email" id="email" name='email' onChange={handleInputChange} required
                                className='mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-[#006ae491] focus:border-transparent transition duration-300 placeholder:text-gray-500'
                                placeholder="you@example.com" />
                        </div>


                        <div>
                            <label htmlFor="duration" className='text-lg font-semibold text-gray-800'>Date</label>
                            <input type="date" id="duration" name='duration' onChange={handleInputChange} required
                                className='mt-2 w-full border-2 border-gray-300 rounded-lg px-5 py-3 focus:outline-[#006ae491] focus:border-transparent transition duration-300 placeholder:text-gray-500'
                                 placeholder='date of departure'/>
                        </div>


                          <div>
                            <label htmlFor="phone" className='text-lg font-semibold text-gray-800'>Phone</label>
                            <input type="number" id="phone" name='phone' onChange={handleInputChange} required
                                className='mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-3  focus:outline-[#006ae491] focus:border-transparent transition duration-300 placeholder:text-gray-500'
                                placeholder="+234-567-890-123-45" />
                        </div>


                        <fieldset>
                            <legend className='text-lg font-semibold text-gray-800 mb-2'>Gender</legend>
                            <div className='flex items-center gap-8'>

                                <label htmlFor="male" className='flex items-center gap-2 text-lg cursor-pointer'>
                                  <input type="radio" id="male" name='gender' value='male' onChange={handleInputChange} required className='h-5 w-5 accent-[#006CE4] cursor-pointer' />Male</label>

                                <label htmlFor="female" className='flex  items-center gap-2 text-lg cursor-pointer'>
                                  <input type="radio" id="female" name='gender' value='female' onChange={handleInputChange} required className='h-5 accent-[#006CE4] w-5 cursor-pointer' />Female</label>
                            </div>
                        </fieldset>

                        <button type='submit' className='w-full bg-[#006CE4] text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 hover:cursor-pointer transition duration-300 text-lg mt-4'>Confirm Booking</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Booking