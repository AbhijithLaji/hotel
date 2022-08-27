import React from 'react'
import './Home.css'
import brief from '../Assests/Images/briefcase.svg'
import exit from '../Assests/Images/exit.svg'
import account from '../Assests/Images/account.svg'
import up from '../Assests/Images/up.svg'
import down from '../Assests/Images/down.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const [select,setSelect]=useState(false)
  return (
    <div>
        
        <div className="container">
        <div className="head">
            <img src={brief} alt="logo" />
        <div className="Bookings">Bookings</div>
        </div>
        <div className="navbar">
        <div className="Homepage"><Link className='link' to="/">Homepage</Link></div>
            <div className="Room"><Link className='link' to='/rooms'>Room</Link></div>
            <div className="Booking">Booking
                <img src={select?up:down} alt="arrow" onClick={()=>{setSelect(!select)}} className="imgd"/>
                {select?<div className='use'><Link className='link' to='/bookings'>Booking</Link> <br/><Link className='link' to="/new_booking">New Booking</Link></div>:null}
            </div></div>
            <div className="admin">
                <img src={account} alt="user" />
                Adiministrator
                <img  className='logout'src={exit} alt="logout" />
                </div>
        
            

        </div>
    </div>
  )
}

export default Home