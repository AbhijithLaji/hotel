import React from 'react'
import Body from './Body'
import Booking from './Booking/Booking'
import Room101 from './New Booking/Room101'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Details from './Bookings/Details'
import Rooms from './New Booking/Rooms'
import Train from '../Train'

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Body/>}/>
                <Route path='/new_booking' element={<Booking/>}/>
                <Route path="/room_101"  element={<Room101/>}/>
                <Route path="/bookings" element={<Details/>}/>
                <Route path='/rooms' element={<Rooms/>}/>
                <Route path="/train" element={<Train/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index