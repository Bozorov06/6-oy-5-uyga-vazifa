import React,{useState} from "react";

import "./index.module.css"

function Usestate1(){
    const [form, setForm] = useState({
        name: '',
        lastName:  '',
        email: ''
    });
    function handleSubmit1(event) {
      event.preventDefault();
      console.log(form);
    }

    return (
      <>
        <strong>UseStateni 1-masalasi</strong>
        <div>
          <form onSubmit={handleSubmit1}>
            <input
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              type="text"
              placeholder="Enter name"
            />
            <input
              value={form.lastName}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value });
              }}
              type="text"
              placeholder="Enter lastName"
            />
            <input
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              type="email"
              placeholder="Enter email"
            />
            <button>SAVE</button>
          </form>
        </div>
      </>
    );
}

export default Usestate1