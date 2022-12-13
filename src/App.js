import React, { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState("any text");
  const onChangeName = (event) => {
    console.log(event);
  };

  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
