import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./CSS/App.css";
import LogIn from "./Components/LogIn";
import MainContainer from "./Containers/MainContainer";
import SignUp from "./Components/SignUp";
import NavBar from "./Containers/NavBar";
import EventForm from "./Components/Forms/EventForm";
import Accounts from "./Components/Accounts";
import Invitations from "./Components/Invitations";

let baseUrl = "http://localhost:3000/";
let membersUrl = baseUrl + "members/";
let logInUrl = baseUrl + "login/";
let eventsUrl = baseUrl + "events/";

const App = () => {
  const [logged_in, setLogged_in] = useState(localStorage.token ? true : false);

  const status = () => {
    setLogged_in(localStorage.token ? true : false);
  };

  const [currentMember, setCurrentMember] = useState({});

  useEffect(() => {
    fetch(membersUrl + `${localStorage.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((foundMember) => setCurrentMember(foundMember));
  }, []);

  return (
    <div className="App">
      {/* <Route></Route>
      {localStorage.token ? (
      ) : null} */}
        <NavBar 
        logInUrl={logInUrl} 
        currentMember={currentMember} 
        // status={status} 
        // logged_in={logged_in}
        />
      <Switch>
        <Route
          exact
          path="/account"
          render={(routerProps) => (
            <Accounts 
            membersUrl={membersUrl} 
            {...routerProps} 
            // status={status} 
            // logged_in={logged_in}
            />
          )}
        ></Route>
        <Route
          exact
          path="/login"
          render={(routerProps) => (
            <LogIn
              {...routerProps}
              logInUrl={logInUrl}
              // status={status} 
              // logged_in={logged_in}
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
          path="/new_event"
          render={(routerProps) => (
            <EventForm
              {...routerProps}
              logInUrl={logInUrl}
              eventsUrl={eventsUrl}

              // status={status} logged_in={logged_in}
            />
          )}
        />
        <Route exact path="invitations" render={() => <Invitations />} />
        <Route
          exact
          path="/main"
          render={(routerProps) => (
            <MainContainer
              eventsUrl={eventsUrl}
              logInUrl={logInUrl}
              currentMember={currentMember}
              {...routerProps}
              // status={status}
              // logged_in={logged_in}
            />
          )}
        />
      </Switch>
      {/* <header className="App-header"></header> */}
    </div>
  );
};

export default App;
