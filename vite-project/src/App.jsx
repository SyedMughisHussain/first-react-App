import { useState } from "react";

function MyButton() {
  let [count, setCount] = useState(0);

  function incrementValue() {
    setCount(count + 1);
  }

  function decrementValue() {
    if(count < 1){
      alert("You can't decrement value in minus.");
    }
    else{
    setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={incrementValue}>Increment Value: {count}</button>
      <br />
      <br />
      <button onClick={decrementValue}>Decrement Value: {count}</button>
    </>
  );
}

export function App() {
  return (
    <div>
      <h1>Counter Project</h1>
      <MyButton />
    </div>
  );
}
