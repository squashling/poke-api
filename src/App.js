import "./App.css";
import { AppTitle } from "assets/title";
import { Button } from "components/Button";

function App() {
  return (
    <div className="App">
      <AppTitle />
      <Button label="Hello" id="1" onClick={() => console.log("click")} />
    </div>
  );
}

export default App;
