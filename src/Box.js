// @flow strict

import React from 'react';
import "./App.css";

 const Box = (props) => {
  let Border;
    if (props.gendre==="F") {Border={border:"1px solid red"}}else { Border={border:"1px solid yellow"}}
       return (
       <div  style={Border} className="box">
        <img src={props.image} width="200px" height="300px"/>
        <h4 style={{textAlign:"center"}}>my Name is {props.nom} </h4>
        <h4 style={{textAlign:"center"}}>{props.job}</h4>
      </div>
    );
};

export default Box;
