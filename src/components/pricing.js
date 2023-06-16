import React, { useState } from "react";
import "../css/Pricing.css";
import imgage from "../components/images/bg-top.svg";
import image from "../components/images/bg-bottom.svg";
import Toggle from "./toggle";

const Pricing = () => {
  const [price, setPrice] = useState("$19.99");
  const [price2, setPrice2] = useState("$24.99");
  const [price3, setPrice3] = useState("$39.99");
  const [isChecked, setIsChecked] = useState(true);

  const toggle = () => {
    setIsChecked(!isChecked);
    if (price === "$19.99" && price2 === "$24.99" && price3 === "$39.99") {
      setPrice("$199.99");
      setPrice2("$249.99");
      setPrice3("$399.99");
    } else {
      setPrice("$19.99");
      setPrice2("$24.99");
      setPrice3("$39.99");
    }
  };

  return (
    <div>
      <img className="topimg" src={imgage} alt="img" />

      <div className="pri">Our Pricing</div>
      <div className="an_mo">
        <div className="monthly">Annually</div>
        <Toggle checked={isChecked} onChange={toggle} />
        <div className="annually">Monthly</div>
      </div>

      <div className="container">
        <div className="basic">
          <p className="head">Basic</p>
          <div id="price" className="price">
            {price}
          </div>
          <p className="sto">500 GB Storage</p>
          <p className="users">2 Users Allowed</p>
          <p className="data">Send up to 3 GB</p>
          <button className="btn">LEARN MORE</button>
        </div>
        <div className="professional">
          <p className="head2">Professional</p>
          <div id="price2" className="price2">
            {price2}
          </div>
          <p className="sto2">1 TB Storage</p>
          <p className="user2">5 Users Allowed</p>
          <p className="data2">Send up to 10 GB</p>
          <button id="btn">LEARN MORE</button>
        </div>
        <div className="master">
          <p className="head">Master</p>
          <div id="price3" className="price">
            {price3}
          </div>
          <p className="sto">2 TB Storage</p>
          <p className="users">10 Users Allowed</p>
          <p className="data">Send up to 20 GB</p>
          <button className="btn">LEARN MORE</button>
        </div>
      </div>
      <img className="bottomimg" src={image} alt="img" />
    </div>
  );
};

export default Pricing;
