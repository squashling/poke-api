import { useState, useEffect } from "react";
import "./App.css";
import { AppTitle } from "assets/title";
import { Button } from "components/Button";
import PokeShop from "containers/PokeShop";

function App() {
  const [view, setView] = useState("pokeShop");

  useEffect(() => {
    renderView();
  }, [view]);

  const renderView = () => {
    switch (view) {
      case "pokeShop":
        return <PokeShop />;
      default:
        return <PokeShop />;
    }
  };

  const changeView = view => {
    setView(view);
  };

  return (
    <div className="App">
      <AppTitle />
      <Button label="Hello" id="1" onClick={() => console.log("click")} />
      {renderView()}
    </div>
  );
}

export default App;
