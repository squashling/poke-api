import { useState, useEffect } from "react";
import "./App.css";
import { AppTitle } from "assets/title";
import { Button } from "components/Button";
import PokeShop from "containers/PokeShop";
import PokePack from "containers/PokePack";
import PokeDetails from "containers/PokeDetails";
import Pokedex from "containers/Pokedex";
import Navbar from "components/Navbar";
function App() {
  const [view, setView] = useState("pokeShop");
  const [navItems] = useState([
    "pokeshop",
    "pokepack",
    "poke-details",
    "pokedex",
  ]);
  useEffect(() => {
    renderView();
  }, [view]);

  const renderView = () => {
    switch (view) {
      case "pokeShop":
        return <PokeShop />;
      case "pokepack":
        return <PokePack />;
      case "poke-details":
        return <PokeDetails />;
      case "pokedex":
        return <Pokedex />;
      default:
        return <PokeShop />;
    }
  };

  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="App">
      <Navbar navItems={navItems} changeView={changeView} />
      <AppTitle />

      <Button label="Hello" id="1" onClick={() => console.log("click")} />
      {renderView()}
    </div>
  );
}

export default App;
