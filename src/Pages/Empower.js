import React, { useState } from "react";
import "../css/Empower.css";
import Headerimg from "../Images/Headerimg.jpg";
const Empower = () => {
  const data = [
    {
      id: 1,
      heading: "What We Do",
      linea:
        "We provide a platform for start-ups to connect,innovate and collaborate",
      lineb:
        "We facilitate partnership that drive success in the start up world",
      img: require("../Images/Headerimg.jpg"),
    },
    {
      id: 2,
      heading: "Who We Do It For ",
      linea:
        "Start ups and Aspiring Entrepreneurship seeking valuable connection",
      lineb:
        "Business looking to estabilish themselves as key industry players",
      linec: "Entrepreneurs in search for like minded Cofouders",
      img: require("../Images/Headerimg.jpg"),
    },
    {
      id: 3,
      heading: "What You Get",
      linea:
        "Access to vibrant Start-up communicate and Network Opportunities for collaboration and partnerships",
      lineb: "Resoureces and tools accelerate growth and success",
      img: require("../Images/Headerimg.jpg"),
    },
  ];
  const [toggel, setToggle] = useState();
  return (
    <div>
      <div className="main-empower-container">
        <div className="empower-box">
          {data.map(({ heading, linea, lineb, linec, img, id }) => {
            return (
              <div>
                {toggel === id ? (
                  <div className="main-starup-conatiner">
                    <div className="startup-image">
                      <img src={img} alt="" />
                    </div>
                    <div className="startup-text">
                      <h1>{heading}</h1>
                      <ul>
                        <li>{linea}</li>
                        <li>{lineb}</li>
                        <li>{linec}</li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="empower-side-btns">
          {data.map(({ heading, id }) => {
            return (
              <div>
                <button onClick={() => setToggle(id)}>{heading}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Empower;
