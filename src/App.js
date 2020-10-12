import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./CSS/App.css";
import LogIn from "./Components/LogIn";
import MainContainer from "./Containers/MainContainer";
import SignUp from "./Components/SignUp";
import NavBar from "./Containers/NavBar";
import EventForm from "./Components/Forms/EventForm";
import InvitationForm from "./Components/Forms/InvitationForm";
import Accounts from "./Components/Accounts";
// import SideBar from "./Components/SideBar";
import InvitationContainer from "./Containers/InvitationsContainer";
import EventCalender from "./Containers/EventCalender";
// import InvitationCard from "./Components/InvitationCard";

let baseUrl = "http://localhost:3000/";
let membersUrl = baseUrl + "members/";
let logInUrl = baseUrl + "login/";
let eventsUrl = baseUrl + "events/";
let invitationsUrl = baseUrl + "invitations/";

const App = () => {
  const [logged_in, setLogged_in] = useState(localStorage.token ? true : false);

  // const status = () => {
  //   setLogged_in(localStorage.token ? true : false);
  // };

  const [currentMember, setCurrentMember] = useState({});
  const [allMembers, setAllMembers] = useState(() => []);
  const [allEvents, setEvents] = useState([]);

  useEffect(() => {
    fetch(membersUrl + `${localStorage.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((foundMember) => setCurrentMember(foundMember));

    fetch(membersUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((allMembers) => setAllMembers(() => allMembers));

    fetch(eventsUrl)
      .then((resp) => resp.json())
      .then((allEvents) => setEvents(() => allEvents));
  }, []);

  // console.log(allEvents)

  return (
    <div className="App">
      {localStorage.token ? (
        <>
          <NavBar
            logInUrl={logInUrl}
            currentMember={currentMember}
            // status={status}
            // logged_in={logged_in}
          />
        </>
      ) : null}
      <Switch>
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
        <Route
          exact
          path="/new_invitation"
          render={(routerProps) => (
            <InvitationForm
              {...routerProps}
              allMembers={allMembers}
              allEvents={allEvents}
              currentMember={currentMember}
              invitationsUrl={invitationsUrl}

              // status={status} logged_in={logged_in}
            />
          )}
        />
        <Route
          exact
          path="/invitations"
          render={(routerProps) => <InvitationContainer {...routerProps} />}
        />
        <Route
          exact
          path="/calendar"
          render={(routerProps) => <EventCalender {...routerProps} />}
        />
        <Route
          exact
          path="/main"
          render={(routerProps) => (
            <MainContainer
              {...routerProps}
              eventsUrl={eventsUrl}
              logInUrl={logInUrl}
              currentMember={currentMember}
              invitationsUrl={invitationsUrl}
              // status={status}
              // logged_in={logged_in}
            />
          )}
        />
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
        />

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
      </Switch>
      {/* <header className="App-header"></header> */}
    </div>
  );
};

export default withRouter(App);
