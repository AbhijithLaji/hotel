import React, { useState, useEffect } from "react";
import Home from "../Home";
import "./Room101.css";
import Room101 from "./Room101";
import Input from "../Booking/Input";
const Rooms = () => {
  const [popUp, setPopUp] = useState(false);
  const [newData, setNewData] = useState([]);
  const [open, setOpen] = useState({
    roomno: "",
    adults: "",
    children: "",
    price: "",
  });
  useEffect(() => {
    const userData = async () => {
      const response = await GetData();
      setNewData(response);
    };
    userData();
  }, []);
  async function GetData(e) {
    const response = await fetch("https://localhost:7106/rooms", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.json();
  }
  const onChange = (key, value) => {
    console.log(key, value);
    setOpen((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  async function Signup(e) {
    e.preventDefault();
    try {
      console.log(open);
      let result = await fetch("https://localhost:7106/rooms", {
        method: "POST",
        body: JSON.stringify(open),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await result.json();
      setPopUp(!popUp);
      alert("User saved");
      setOpen({
        roomno: "",
        adults: "",
        children: "",
        price: "",
      });
      console.log("Hello");
    } catch {
      alert("Error");
    }
  }

  return (
    <div>
      <Home />
      <div className="headin">
        <h2>Rooms</h2>
        <h3
          onClick={() => {
            setPopUp(!popUp);
          }}
        >
          CreateRooms
        </h3>
      </div>

      <div className="rooms">
        <div className="columns">
          <Room101 
            a={"Room Number"}
            b={"Adult Capacity"}
            c={"Children Capacity"}
            d={"Price"}
          />
          {newData.map((value, index) => (
            <Room101
              a={value.roomno}
              b={value.adults}
              c={value.children}
              d={value.price}
            />
          ))}
        </div>
      </div>

      {popUp ? (
        <div className="box">
          <h2>Room 101</h2>
          <form onSubmit={Signup}>
            <Input
              label="Room Number"
              type="number"
              onchange={(value) => onChange("roomno", value)}
              value={open.roomno}
            />
            <Input
              label="Adult Capacity"
              type="number"
              onchange={(value) => onChange("adults", value)}
              value={open.adults}
            />
            <Input
              label="Children capacity"
              type="number"
              onchange={(value) => onChange("children", value)}
              value={open.children}
            />
            <Input
              label="Price"
              type="number"
              onchange={(value) => onChange("price", value)}
              value={open.price}
            />
            <button className="save">Save</button>
            or Cancel
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Rooms;
