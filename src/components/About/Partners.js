import React from 'react'
import './About.css'

function Partners() {
  return (
    <div className="partners">
      <h4>Our Partners</h4>
      <p>
        We are glad to offer our visitors high-quality burgers and pizzas, but
        we also believe our whole business could not be successful without our
        partners.
      </p>
      <div className="partnersImg">
              <img src={require("../../images/brand1.png").default} alt="" />
              <img src={require("../../images/brand2.png").default} alt="" />
              <img src={require("../../images/brand3.png").default} alt="" />
              <img src={require("../../images/brand4.png").default} alt="" />
      </div>
    </div>
  );
}

export default Partners