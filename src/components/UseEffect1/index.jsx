import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");



  useEffect(
    // function () {
    //   if (firstName && lastName) {
    //     console.log(`Xush kelibsiz, ${firstName} ${lastName}`);
    //   }
    // },
    // [firstName, lastName]
  );
  return (
    <>
      {/* <strong>UseEffectni 1-masalasi</strong> */}
      <div>

      </div>
    </>
  );
}

export default UseEffect1;
