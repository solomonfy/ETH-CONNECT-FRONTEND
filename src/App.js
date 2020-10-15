import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./CSS/App.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Accounts from "./Components/Accounts";

import InvitationContainer from "./Containers/InvitationContainer";
import EventCalender from "./Containers/EventCalender";
import MainContainer from "./Containers/MainContainer";

import NavBar from "./Containers/NavBar";
import SideNavBar from "./Components/SideNavBar";

import EventForm from "./Components/Forms/EventForm";
import InvitationForm from "./Components/Forms/InvitationForm";
import ReviewForm from "./Components/Forms/ReviewForm";
import AnnouncementForm from "./Components/Forms/AnnouncementForm";

let BASE_URL = "http://localhost:3000/";
let membersUrl = BASE_URL + "members/";
let logInUrl = BASE_URL + "login/";
let eventsUrl = BASE_URL + "events/";
let invitationsUrl = BASE_URL + "invitations/";
let announcementsUrl = BASE_URL + "announcements/";
let reviewsUrl = BASE_URL + "reviews/";

const App = () => {
  // const [logged_in, setLogged_in] = useState(localStorage.token ? true : false);

  // const status = () => {
  //   setLogged_in(localStorage.token ? true : false);
  // };
  

  const [currentMember, setCurrentMember] = useState({});
  const [allMembers, setAllMembers] = useState(() => []);
  const [allEvents, setEvents] = useState([]);
  const [allAnnouncements, setAnnouncements] = useState([]);
  const [allReviews, setReviews] = useState([]);
  // const [deleteEvent, setDeleteEvent] = useState([]);

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

    fetch(eventsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((eventsArray) => setEvents(eventsArray));

    fetch(announcementsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setAnnouncements(data));
  }, []);

  const deleteEvent = (foundEvent) => {
    fetch(eventsUrl + `${foundEvent.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then(setEvents(allEvents.filter((ev) => ev.id !== foundEvent.id)));
  };

  const addReviewToEvent = (id) => {
    console.log(id);
    console.log(currentMember.id);

    let configObj = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        review: {
          event_id: id,
          description: "",
        },
      }),
    };
    fetch(reviewsUrl, configObj);
  };

  // console.log(currentMember.announcements);

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
          {/* <SideBar/> */}
          <SideNavBar />
        </>
      ) : null}
      <Switch>
        <Route
          exact
          path="/calendar"
          render={() => (
            <EventCalender
              allEvents={allEvents}
              currentMember={currentMember}
              eventsUrl={eventsUrl}
              deleteEvent={deleteEvent}
            />
          )}
        />

        <Route
          exact
          path="/new_event"
          render={(routerProps) => (
            <EventForm
              {...routerProps}
              eventsUrl={eventsUrl}
              setEvents={setEvents}
              allEvents={allEvents}

              // status={status} logged_in={logged_in}
            />
          )}
        />
        <Route
          exact
          path="/add_review"
          render={(routerProps) => (
            <ReviewForm
              {...routerProps}
              reviewsUrl={reviewsUrl}
              addReviewToEvent={addReviewToEvent}
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
          path="/new_announcement"
          render={(routerProps) => (
            <AnnouncementForm
              {...routerProps}
              // allMembers={allMembers}
              currentMember={currentMember}
              allAnnouncements={allAnnouncements}
              announcementsUrl={announcementsUrl}
              setAnnouncements={setAnnouncements}

              // status={status} logged_in={logged_in}
            />
          )}
        />
        <Route
          exact
          path="/invitations"
          render={(routerProps) => (
            <InvitationContainer
              {...routerProps}
              eventsUrl={eventsUrl}
              logInUrl={logInUrl}
              currentMember={currentMember}
              invitationsUrl={invitationsUrl}
            />
          )}
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
              allEvents={allEvents}
              allAnnouncements={allAnnouncements}
              setEvents={setEvents}
              deleteEvent={deleteEvent}
              addReviewToEvent={addReviewToEvent}
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
              currentMember={currentMember}
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
              setCurrentMember={setCurrentMember}
              // status={status}
              // logged_in={logged_in}
            />
          )}
        />
        <Route
          exact
          path="/signup"
          render={(routerProps) => (
            <SignUp {...routerProps} BASE_URL={BASE_URL} />
          )}
        />
      </Switch>
      {/* <header className="App-header"></header> */}
    </div>
  );
};

export default withRouter(App);
