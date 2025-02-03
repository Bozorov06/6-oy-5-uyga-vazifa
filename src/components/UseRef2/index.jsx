import React, { useRef, useState } from "react";
import "./index.module.css";
import UseRef1 from "../UseRef1";

function UseRef2() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");

  function handleSubmit2(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setError("Iltimos! Email va parollingizni to'ldirishingiz kerak");
      return;
    } else {
      console.log("Email:", email);
      console.log("Email:", password);
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
    setError("");
  }

  return (
    <>
      <strong>UseRefni 2-masalasi</strong>
      <div>
        <form  onSubmit={handleSubmit2}>
          <input
            ref={emailRef}
            type="email"
            placeholder="Emailingizni kiritng"
          />
          <input
            ref={passwordRef}
            type="passsword"
            placeholder="Parolni kiriting"
          />
          {error && <p>{error}</p>}
          <button>Save</button>
        </form>
      </div>
    </>
  );
}

export default UseRef2;
