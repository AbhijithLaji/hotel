import React from 'react'
import Home from '../Home'
import { useState ,useEffect } from 'react'
import './details.css'
import Comp from './Comp'
const Details = () => {
    const [newData, setNewData] = useState([]);
    useEffect(() => {
        const userData = async () => {
          const response = await GetData();
          setNewData(response);
        };
        userData();
      }, []);
      async function GetData(e) {
        const response = await fetch("https://localhost:7217/booking", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        return response.json();
      }
  return (
    <div className='body'><Home/>
        <h2>Bookings</h2>
        <div className="box2">
        <div className='headings'>
            <input className="txt"type="text" placeholder='(use guest name)'/>
            <select name="options" id="options">
                <option value="">-Any Status-</option>
            </select>
            <button className="search">Search</button>
            </div>
            
            <div className="rooms1">
        <div className="columns1">
          <Comp 
            a={"Guest Last Name"}
            b={"Guest First Name"}
            c={"Check In Date"}
            d={"Check Out Date"}
            e={"Adult Capacity"}
            f={"Child Capacity"}
          />
          {newData.map((value, index) => (
            <Comp
              a={value.guestLastName}
              b={value.guestFirstName}
              c={value.checkInDate}
              d={value.checkOutDate}
              e={value.numberAdults}
              f={value.numberChild}
            />
          ))}
        </div>
      </div>
        </div>
        
    </div>
  )
}

export default Details