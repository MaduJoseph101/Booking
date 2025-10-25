import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

function HomePage() {
  let navigate = useNavigate();

  const handleBooking = () => {
    navigate('/slots');
  };

  const backgroundImageUrl = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <main
      className="relative h-screen bg-cover bg-blend-overlay bg-[#006ae465] bg-center flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})`}}>

      <div className="relative h-full flex justify-center w-full z-10 flex-col gap-6 items-center bg-blue-900/30 backdrop-blur-[2px] md:backdrop-blur-[2px] p-4">
        <h1 className='text-5xl/tight sm:text-5xl md:text-6xl/snug font-bold drop-shadow-lg'>Welcome to Booking.com</h1>

        <p className='text-lg sm:text-xl md:text-2xl italic drop-shadow-md'>Your gateway to amazing travel experiences.</p>

        <button onClick={handleBooking} className='mt-4 bg-white text-[#006CE4] hover:bg-transparent  border-2 border-white hover:text-white active:text-white  cursor-pointer font-bold py-3 px-8 rounded-full text-base md:text-lg duration-300 transform hover:scale-105 shadow-xl'>Book a Slot Now</button>
      </div>
    
    </main>
  )
}

export default HomePage