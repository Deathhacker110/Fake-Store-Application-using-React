import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div>
          <h1 className="about_head">NEVER comes if you VISIT once.</h1>
          <button id="b1"> <i className="fa-solid fa-bag-shopping" id="bag"></i><b>Order Now</b></button><br /><br />
          <button id="b2"><b>Explore More</b></button>
          </div>
          <div id="shop">
            <img src="https://th.bing.com/th/id/OIP.5lyDFDCdl1xmBIUhRgS2OwHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
          </div>
        </div>
      </>
    );
    }
}