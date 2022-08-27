import React from 'react'
import Home from './Home'
import './Home.css'
import room from '../Assests/Images/hotel.jpg'
import icon from '../Assests/Images/exi.svg'
import Button from './Button'
const Body = () => {
  return (
    <div><Home/>
        <div className="home">
            <img src={room} alt="background" />
        </div>
        <div className="mai_n">
            <div className="check_in"> 
        <img className="image"src={icon} alt=''/> Checking in Today
        <div className="chec_details">
          <div className="detail">
           <div className="name">Silva,Francisco</div>
           <div className="rnum">202</div>
          <Button btn="check In"/>
          </div>
        </div>
        </div>
        <div className="check_out">
        <img className="image"src={icon} alt=''/> Checking Out Today
        <div className="chec_details">
          <div className="detail">
            <div className="name">Silva,Francisco</div>
           <div className="rnum">202</div>
          <Button btn="check Out"/></div>
        
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Body