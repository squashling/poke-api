import { useState, useEffect } from "react";
import "./App.css";
import { AppTitle } from "assets/title";
import Home from "Home";

function App() {
  const [view, setView] = useState("home");

  useEffect(() => {
    renderView();
  }, [view]);

  const renderView = () => {
    switch (view) {
      case "home":
        return <Home />;
      default:
        return <Home />;
    }
  };

  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="App">
      <AppTitle />
      {renderView()}
    </div>
  );
}

export default App;
