import React from "react";
import {  Button } from "react-bootstrap";

const Borderless= () => {
  return (

    <div style={{}}>
    <div style={{margin:'95px', backgroundColor:'#072a30',height:'580px', borderRadius:'20px', overflow: "hidden"}} >
      <div className="p-4">
        <div>
       

<div style={{ display: "flex", gap: "20px" , }}>

<div style={{marginTop:'173px', marginLeft:'60px'}}>


<p style={{ fontSize: "30px", width: "410px", color: "white" }}>
Send, spend, swap,</p>

<p style={{ fontSize: "36px", width: "600px", color: "white" }}>
The borderless way with Kriapay.
</p>
<button className="text-white" style={{backgroundColor:'#1B4F56', width:'138px', height:'49px', marginTop:'40PX', borderRadius:'8px', border:'none', marginBottom:'106px'}}>Get started</button>
</div>

<div style={{overflow: "hidden"}}>
<img
  src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741523154/Abuja_Landmark_1_exzagr.svg"
  alt="Abuja Landmark"
  style={{ width: "405px", height: "460px",   overflow:'hidden', marginTop:'110px'}}
/>
</div>
</div>

          
        </div>
      </div>
    </div>
    
  </div>
   
  );
};

export default Borderless;
