import React, { useState } from "react";
import "./CSS/App.css";
import LogIn from "./Components/LogIn";
import MainContainer from "./Containers/MainContainer";
import SignUp from "./Components/SignUp";
import NavBar from "./Containers/NavBar";

let baseUrl = "http://localhost:3000/";
let logInUrl = baseUrl + "login";
let eventsUrl = baseUrl + "events";
function App() {
  // const [logged_in, setLogged_in] = useState(localStorage.token ? true : false);

  // const status = () => {
  //   setLogged_in(localStorage.token ? true : false);
  // };

  return (
    <div className="App">
      <NavBar
      // logInUrl={logInUrl}
      />
      <LogIn
      // logInUrl={logInUrl} status={status} logged_in={logged_in}
      />
      {/* <SignUp baseUrl={baseUrl} status={status} /> */}
      <MainContainer
        eventsUrl={eventsUrl}
        logInUrl={logInUrl}
        // status={status}
        // logged_in={logged_in}
      />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
