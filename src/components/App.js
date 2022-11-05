import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";



const API = "http://localhost:3001/sushis";

function App() {
  const [sushies, setSushies] = useState([])
  const [wallet, setWallet] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then((sushies) =>{
      const updatedSushies = sushies.map((sushi) => {
        return {...sushi, eaten: false }; //Here we are ADDING a property IN the second arguement!!!! Woaw. If only they taught such things . . . 
      })
          setSushies(updatedSushies)
    })
  }, []);

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushies = sushies.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushies(updatedSushies);

      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸, bish");
    }
  }

  const eatenSushies = sushies.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushies={sushies} onEatSushi={handleEatSushi}/>
      <Table plates={eatenSushies} wallet={wallet}/>
    </div>
  );
}

export default App;
