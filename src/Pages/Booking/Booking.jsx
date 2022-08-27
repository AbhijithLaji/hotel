import React from "react";
import Input from "./Input";
import "./Booking.css";
import Button from "../Button";
import { useState } from "react";
import Home from "../Home";
const Booking = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState({
    guestLastName: "",
    guestFirstName: "",
    checkInDate: "",
    checkOutDate: "",
    numberAdults: "",
    numberChild: "",
  });
  const onChange = (key, value) => {
    console.log(key, value);
    setOpen((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  async function signUp(e) {
    e.preventDefault();
    try {
      console.log(open);
      let result = await fetch("https://localhost:7217/booking", {
        method: "POST",
        body: JSON.stringify(open),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      alert("User saved");
      setOpen({
        guestlastName: "",
        guestFirstName: "",
        checkInDate: "",
        checkOutDate: "",
        NumberAdults: "",
        NumberChild: "",
      });
      console.log("Hello");
    } catch {
      alert("Error");
    }
  }

  return (
    <div>
      <Home />
      <div className="new_booking">
        <h1>New Booking</h1>
        <div className="box">
          <form onSubmit={signUp}>
          <Input label="Guest last name" type="text" onchange={(value) => onChange("guestLastName", value)}
              value={open.guestLastName}/>
          <Input label="Guest first name" type="text" onchange={(value) => onChange("guestFirstName", value)}
              value={open.guestFirstName} />
          <Input label="Checked in Date" type="date" onchange={(value) => onChange("checkInDate", value)}
              value={open.checkInDate} />
          <Input label="Check out Date" type="date" onchange={(value) => onChange("checkOutDate", value)}
              value={open.checkOutDate}/>
          <Input label="Nuber of Adults" type="number" onchange={(value) => onChange("numberAdults", value)}
              value={open.NumberAdults} />
          <Input label="Number of Children" type="text" onchange={(value) => onChange("numberChild", value)}
              value={open.NumberChild} />
          <div className="cont">
            <Button
              className="gt"
              btn="Get Avialable Rooms"
              onClick={() => {
                setClick(!click);
              }}
            />
            <button className="bk_rooms">Book Rooms</button>
            <div className="back">Back</div>
          </div>
          <div className="gt_options">
            <div className="ch_in">{click && <Button btn="Check In" />}</div>
            <div className="ch_out">{click && <Button btn="Check Out" />}</div>
            <div className="cancel">{click && <Button btn="Cancel" />}</div>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Booking;
