import React, { useState, useRef } from "react";
import './index.css'


function UseRef1() {
  const [error, setError] = useState("");
  const nameRef = useRef();
  const lastNameRef = useRef();

  function handleSubmitt(event) {
    event.preventDefault();

    const name = nameRef.current.value;
    const lastNamee = lastNameRef.current.value;

    if (!name || !lastNamee) {
      setError(" Ism va familyangizni kiritishingiz kerak");
      return;
    } else {
      console.log("Name:", name);
      console.log("Lastname:", lastNamee);
    }

    nameRef.current.value = "";
    lastNameRef.current.value = "";
    setError("");
  }

  return (
    <>
      <strong>UseRefni 1-masalasi</strong>
      <div>
        <form className="form3" onSubmit={handleSubmitt}>
          <input ref={nameRef} type="text" placeholder="Ismingizni kiriting" />
          <input
            ref={lastNameRef}
            type="text"
            placeholder="Familyangizni kiriting"
          />
          {error && <p>{error}</p>}
          <button>Save</button>
        </form>
      </div>
    </>
  );
}

export default UseRef1;
