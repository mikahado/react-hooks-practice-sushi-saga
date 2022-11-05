import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer( {sushies, onEatSushi }) {

const [sushiIndex, setSushiIndex] = useState(0)

const sushiComponents = sushies
  .slice(sushiIndex, sushiIndex + 4)
  .map(sushi => (
    <Sushi 
      key={sushi.id}
      sushi={sushi}
      onEatSushi={onEatSushi}
      />
  ))

function moreSushiClick() {
  setSushiIndex((sushiIndex) => (sushiIndex + 4) % sushies.length);
}

  
  return (
    <div className="belt">
      {sushiComponents}
      <MoreButton onClickMore={moreSushiClick}/>
    </div>
  );
}

export default SushiContainer;
