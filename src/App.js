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

import EventForm from "./Components/Forms/EventForm";
import EditEvent from "./Components/Forms/EditEvent";
import InvitationForm from "./Components/Forms/InvitationForm";
import ReviewForm from "./Components/Forms/ReviewForm";
import AnnouncementForm from "./Components/Forms/AnnouncementForm";
import AddNewPhoto from "./Components/Forms/AddNewPhoto";

import Photo from "./Components/Photo";
import Footer from "./Components/Footer";
import SideNavBar from "./Components/SideNavBar";
import AllPhotos from "./Containers/AllPhotos";

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
      .then((image) => {
        setAllPhotos(image);
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

  const editEvent = (e) => {
    // debugger;
    let event_id = e.target.id.value;
    // console.log(event_id);
    e.preventDefault();
    let name = e.target.name.value;
    let description = e.target.description.value;
    let event_type = e.target.event_type.value;

    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        event: {
          name: name,
          // name[0].toUpperCase() + name.slice(1),
          description: description,
          // description[0].toUpperCase() + description.slice(1),
          location: e.target.location.value,
          date: e.target.date.value,
          event_type: event_type,
          // event_type[0].toUpperCase() + event_type.slice(1),
          event_card: e.target.event_card.value,
          // summary: e.target.summary.value,
        },
      }),
    };
    fetch(eventsUrl + `${event_id}`, configObj)
      .then((res) => res.json())
      .then((editedEvent) => {
        setEvents([...allEvents, editedEvent]);
        // console.log(editedEvent);
        setDisplayEvents([...allEvents, editedEvent]);
      });
    history.push("/main");
    window.location.reload();
    e.target.reset();
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
          path="/calendar"
          render={() => (
            <EventCalender
              allEvents={allEvents}
              currentMember={currentMember}
              eventsUrl={eventsUrl}
              // deleteEvent={deleteEvent}
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
              currentMember={currentMember}
              allEvents={allEvents}
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
          path="/edit-event"
          render={(routerProps) => (
            <EditEvent
              {...routerProps}
              eventsUrl={eventsUrl}
              setEvents={(value) => {
                setEvents(value);
                setDisplayEvents(value);
              }}
              allEvents={allEvents}
              editEvent={(e) => editEvent(e)}
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
              // allEvents={displayEvents}
              // allReviews={allReviews}
              // setReviews={setReviews}
              // setEvents={setEvents}
              // deleteEvent={deleteEvent}
              // deleteAnnouncement={deleteAnnouncement}
              // sortEvents={sortEvents}

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
      {/* <AllPhotos allPhotos={allPhotos} /> */}
      {localStorage.token ? <Footer /> : null}
    </div>
  );
};

export default withRouter(App);
