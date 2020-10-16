import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import moment from "moment";

import "./CSS/App.css";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import EditAccount from "./Components/EditAccount";
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
  // var myDateVariable = moment("2019-01-01").format("dddd Do MMMM YYYY");
  // console.log(myDateVariable);
  // var date = moment("2020-10-15").format("YYYY-MM-DD");
  // var now = moment().format("YYYY-MM-DD");

  // if (now > date) {
  //   console.log("date is past");
  // } else if (now === date) {
  //   console.log("the day is today");
  // } else {
  //   console.log("date is future");
  // }

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
      .then((announcementsArray) => setAnnouncements(announcementsArray));

    fetch(reviewsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((reviewsArray) => setReviews(reviewsArray));
  }, []);

  const deleteEvent = (foundEvent) => {
    fetch(eventsUrl + `${foundEvent.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then(setEvents(allEvents.filter((ev) => ev.id !== foundEvent.id)));
  };

  const deleteAnnouncement = (selectedId) => {
    // console.log(selectedId);
    fetch(announcementsUrl + `${selectedId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then(
      setAnnouncements(
        allAnnouncements.filter((announc) => announc.id !== selectedId)
      )
    );
  };

  const sortEvents = (type) => {
    switch (type) {
      case "upcoming":
        // console.log(
        //   allEvents.filter(
        //     (ev) =>
        //       moment(ev.date).format("YYYY-MM-DD") >=
        //       moment(new Date()).format("YYYY-MM-DD")
        //   )
        // );
        setEvents(
          allEvents.filter(
            (ev) =>
              moment(ev.date).format("YYYY-MM-DD") >=
              moment(new Date()).format("YYYY-MM-DD")
          )
        );
        break;
      case "past":
        // console.log(
        //   allEvents.filter(
        //     (ev) =>
        //       moment(ev.date).format("YYYY-MM-DD") <
        //       moment(new Date()).format("YYYY-MM-DD")
        //   )
        // );
        setEvents(
          allEvents.filter(
            (ev) =>
              moment(ev.date).format("YYYY-MM-DD") <
              moment(new Date()).format("YYYY-MM-DD")
          )
        );

        break;
      case "name":
        // console.log(allEvents)
        // console.log(allEvents.sort((a, b) => a.name.localeCompare(b.name)));
        setEvents((allEvents) =>
          allEvents.sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "date":
        break;

      default:
        setEvents(allEvents);
        break;
    }
  };

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
              reviewsUrl={reviewsUrl}
              allEvents={allEvents}
              allAnnouncements={allAnnouncements}
              deleteAnnouncement={deleteAnnouncement}
              allReviews={allReviews}
              setReviews={setReviews}
              setEvents={setEvents}
              deleteEvent={deleteEvent}
              sortEvents={sortEvents}

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
              setCurrentMember={(member) => setCurrentMember(member)}
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
            <SignUp {...routerProps} membersUrl={membersUrl} />
          )}
        />
      </Switch>
      {/* <header className="App-header"></header> */}
    </div>
  );
};

export default withRouter(App);
