import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn === true ? <h1> Hello</h1> : <Login />}
    </div>
  );
}

export default App;
