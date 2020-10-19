import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
import AddNewPhoto from "./Components/Forms/AddNewPhoto";

import Photo from "./Components/Photo";

let BASE_URL = "http://localhost:3000/";
let membersUrl = BASE_URL + "members/";
let logInUrl = BASE_URL + "login/";
let eventsUrl = BASE_URL + "events/";
let invitationsUrl = BASE_URL + "invitations/";
let announcementsUrl = BASE_URL + "announcements/";
let reviewsUrl = BASE_URL + "reviews/";
let photosUrl = BASE_URL + "photos/";

const App = () => {
  // const [logged_in, setLogged_in] = useState(localStorage.token ? true : false);
  // const status = () => {
  //   setLogged_in(localStorage.token ? true : false);
  const history = useHistory();

  const [currentMember, setCurrentMember] = useState({});
  const [allMembers, setAllMembers] = useState(() => []);
  const [allEvents, setEvents] = useState([]);
  const [allAnnouncements, setAnnouncements] = useState([]);
  const [allReviews, setReviews] = useState([]);
  const [displayEvents, setDisplayEvents] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
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
      .then((eventsArray) => {
        setEvents(eventsArray);
        setDisplayEvents(eventsArray);
      });

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

    fetch(photosUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAllPhotos(data);
        // console.log(data);
      });
  }, []);

  const editMemberAccount = (e) => {
    e.preventDefault();
    // debugger;
    // console.log(e.target);
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        member: {
          username: e.target.username.value,
          first_name: e.target.first_name.value,
          last_name: e.target.last_name.value,
          email: e.target.email.value,
          address: e.target.address.value,
          image: e.target.image.value,
          family_size: e.target.family_size.value,
        },
      }),
    };
    fetch(membersUrl + `${localStorage.id}`, configObj)
      .then((res) => res.json())
      .then((updatedMember) => {
        setCurrentMember(updatedMember);
      });
    e.target.reset();
    history.push("/account");
  };

  const deleteEvent = (foundEvent) => {
    fetch(eventsUrl + `${foundEvent.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then(setEvents(allEvents.filter((ev) => ev.id !== foundEvent.id)));
    window.location.reload();
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
      case "all":
        setDisplayEvents(allEvents);
        break;
      case "upcoming":
        setDisplayEvents(
          allEvents.filter(
            (ev) =>
              moment(ev.date).format("YYYY-MM-DD") >=
              moment(new Date()).format("YYYY-MM-DD")
          )
        );
        break;
      case "past":
        setDisplayEvents(
          allEvents.filter(
            (ev) =>
              moment(ev.date).format("YYYY-MM-DD") <
              moment(new Date()).format("YYYY-MM-DD")
          )
        );
        break;
      case "name":
        setDisplayEvents(allEvents.sort((a, b) => (a.name > b.name ? 1 : -1)));
        break;
      case "my_events":
        setDisplayEvents(
          allEvents.filter((ev) => ev.host.id === currentMember.id)
        );
        break;

      default:
        setDisplayEvents(allEvents);
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
          path="/photo-gallery"
          render={(routerProps) => (
            <Photo
              {...routerProps}
              allPhotos={allPhotos}
              setAllPhotos={setAllPhotos}
            />
          )}
        />

        <Route
          exact
          path="/add-photo"
          render={(routerProps) => (
            <AddNewPhoto
              {...routerProps}
              allPhotos={allPhotos}
              setAllPhotos={setAllPhotos}
              photosUrl={photosUrl}
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
              setEvents={(value) => {
                setEvents(value);
                setDisplayEvents(value);
              }}
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
          path="/edit_account"
          render={(routerProps) => (
            <EditAccount
              {...routerProps}
              allMembers={allMembers}
              currentMember={currentMember}
              // setCurrentMember={(value) => setCurrentMember(value)}
              setCurrentMember={setCurrentMember}
              editMemberAccount={(e) => editMemberAccount(e)}
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
              currentMember={currentMember}
              eventsUrl={eventsUrl}
              logInUrl={logInUrl}
              invitationsUrl={invitationsUrl}
              reviewsUrl={reviewsUrl}
              allEvents={displayEvents}
              allAnnouncements={allAnnouncements}
              allReviews={allReviews}
              setReviews={setReviews}
              setEvents={setEvents}
              deleteEvent={deleteEvent}
              deleteAnnouncement={deleteAnnouncement}
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
