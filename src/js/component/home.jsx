import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  
  const [ selectedcolor, setselectedcolor ] = useState("red");
  
  return (


  <div>
  <div class="traffic-stick"></div>
  <div class="traffic-light">

      <div onClick={() => setselectedcolor("red")} class={"light red"+((selectedcolor === "red") ? " glowing" : "" )}></div>
      <div onClick={() => setselectedcolor("yellow")} class={"light yellow"+((selectedcolor === "yellow") ? " glowing" : "" )}></div>
      <div onClick={() => setselectedcolor("green")} class={"light green"+((selectedcolor === "green") ? " glowing" : "" )}></div>
    </div>
  </div>
  

  );
};

export default Home;
