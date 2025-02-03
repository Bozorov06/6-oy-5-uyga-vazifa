import React, { useEffect, useState } from "react";
import "./index.css";

function UseEffect2() {
  const [counter, setCounter] = useState(0);
  function handleCount() {
    setCounter(counter + 1);
  }
  useEffect(
    function () {
      console.log(`Yangilangan hisob: ${counter}`);
    },
    [counter]
  );

  return (
    <>
    <strong>UseEffectni 2-masalasi</strong>
      <div className="card">
        <h1>{counter}</h1>
        <button onClick={handleCount}>Qo'shish</button>
      </div>
    </>
  );
}

export default UseEffect2;
