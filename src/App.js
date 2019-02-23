import React, { Component } from 'react';
import "./App.css";
import Box from './Box';


class App extends Component {
  render() {
 
    
    return (
      <div>
       <header>
         </header> 
          <div>
           <h1>Notre Equipe</h1>

           </div>
<div style={{margin:"auto", display:"inline"}}>
  <Box image={"/s1.jpg"} job={"student"} nom={"sabri"}/>
<Box gendre={"F"} image={"/s2.jpg"} job={"chef"} nom={"mohamed"} />
<Box  gendre={"M"}image={"/s3.jpg"} job={"Ceo"} nom={"saber"} />
<Box gendre={"F"} image={"/s4.jpg"} job={"dircteur"} nom={"ali"}/>
</div></div>
    );
  }
}

export default App;
