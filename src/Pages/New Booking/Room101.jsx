import React from 'react'
import '../Booking/Booking.css'
const Room101 = ({a,b,c,d}) => {
  return (
    <div className='table_box'>
      <div className='content_box'>{a}</div>
      <div className='content_box'>{b}</div>
      <div className='content_box'>{c}</div>
      <div className='content_box'>{d}</div>
      
       
    </div>
  )
}

export default Room101