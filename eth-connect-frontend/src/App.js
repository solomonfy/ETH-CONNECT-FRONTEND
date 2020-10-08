import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

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
      <Route></Route>
      {localStorage.token ? <NavBar logInUrl={logInUrl} /> : null}

      <Switch>
        <Route
          exact
          path="/login"
          render={(routerProps) => (
            <LogIn
              {...routerProps}
              logInUrl={logInUrl}

              //status={status} logged_in={logged_in}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(routerProps) => (
            <SignUp {...routerProps} baseUrl={baseUrl} />
          )}
        />

        <Route
          exact
          path="/main"
          render={() => (
            <MainContainer
              eventsUrl={eventsUrl}
              logInUrl={logInUrl}
              // status={status}
              // logged_in={logged_in}
            />
          )}
        />
      </Switch>
      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
