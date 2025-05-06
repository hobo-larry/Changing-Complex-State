import React, { useState } from "react";

function App() {
  let [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.lName} {fullName.fName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fullName.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
