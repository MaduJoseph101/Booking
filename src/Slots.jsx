import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BackButton from './BackButton';

const slotsData = [
  {
    id: 1,
    room: "Standard Room",
    description: "Comfortable room with essential amenities for a pleasant stay.",
    price: 120,
    image: 'standard_room.jpg'
  },

  {
    id: 2,
    room: "Deluxe Suite",
    description: "Spacious suite with premium furnishings and a city view.",
    price: 250,
    image: 'deluxe_suite.jpg'
  },

  {
    id: 3,
    room: "Executive Apartment",
    description: "Fully equipped apartment, perfect for extended stays.",
    price: 400,
    image: 'executive_suite.jpg'
  },

  {
    id: 4,
    room: "Presidential Villa",
    description: "Luxurious villa with private pool and personalized service.",
    price: 1200,
    image: 'presidential_villa.jpg'
  },
  {
    id: 5,
    room: "Family Room",
    description: "Spacious room designed for families, with multiple beds.",
    price: 150,
    image: 'family_room.jpg'
  },

  {
    id: 6,
    room: "Single Room",
    description: "Cozy room ideal for solo travelers.",
    price: 90,
    image: 'single_room.jpg'
  },

  {
    id: 7,
    room: "Double Room",
    description: "Comfortable room with a double bed for two guests.",
    price: 800,
    image: 'double_room.jpg'
  },

  {
    id: 8,
    room: "Honeymoon Suite",
    description: "Romantic suite with special amenities for couples.",
    price: 600,
    image: 'honeymoon_suite.jpg'
  }
];

function Slots() {

  let navigate = useNavigate();

  const handleSlotClick = (slot) => {
    navigate('/booking', { state: { selectedSlot: slot } });
  }

  return (
    <main className='relative min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4'>
      <BackButton to={"/"} />

      <h1 className='text-4xl font-bold text-[#006CE4] mb-10'>Available Slots</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 max-w-6xl w-full'>
        {
        slotsData.map((slot) => (
          <div
            key={slot.id}
            onClick={() => handleSlotClick(slot)}
            className='w-full rounded-lg shadow-lg overflow-hidden bg-white duration-300 ease-in-out hover:scale-[1.05] cursor-pointer flex flex-col'
          >
            <div className='h-[200px] bg-center bg-contain bg-gray-200'>
              <img src={slot.image} alt={slot.room} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className='p-4 flex flex-col gap-2 grow'>
              <h2 className='text-xl font-bold text-[#006CE4]'>{slot.room}</h2>

              <p className='text-gray-700 text-sm grow'>{slot.description}</p>

              <div className='flex justify-between items-baseline mt-2'>

                <p className='text-lg font-semibold text-gray-900'>Price:</p>
                <p className='text-2xl font-bold text-[#006CE4]'>${slot.price}</p>
              </div>

            </div>

          </div>

        ))}
      </div>
    </main>
  )
}

export default Slots