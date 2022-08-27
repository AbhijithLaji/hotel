import React from 'react'
import './Booking.css'
const Input = ({label,type="text" ,onchange,value}) => {
  return (
    <div className='labels'>
        <label className='nl'>{label} </label>
        <input className="nt" type={type} onChange={(e)=>onchange(e.target.value,e)} value={value} />
    </div>
  )
}

export default Input