import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage.jsx'
import Booking from './Booking.jsx'
import Slots from './Slots.jsx'
import Confirmation from './Confirmation.jsx'

import './Booking.css'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='slots' element={<Slots />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
