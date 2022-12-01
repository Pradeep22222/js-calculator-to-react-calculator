import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  const [str, setStr] = useState("");
  const handleOnButtonClick = (value) => {
    setStr(str + value);
    console.log(value);

  }
  return (
    <div className="wrapper">
      <Display str={str}></Display>
      {/* <!-- correct way is to give different div to input and all the buttons --> */}
      <ButtonArea handleOnButtonClick={handleOnButtonClick}></ButtonArea>
    </div>
  );
}

export default App;
