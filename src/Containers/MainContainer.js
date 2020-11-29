import React, { useState, useEffect } from "react";
import "../CSS/Maincontainer.css";
import AnnouncementContainer from "./AnnouncementContainer";
import EventCalender from "./EventCalender";
import EventContainer from "./EventContainer";
import Test from "../Components/Forms/Test";
import Sort from "../Components/Sort";
import { useHistory } from "react-router-dom";
import moment from "moment";

import { Grid } from "semantic-ui-react";

let BASE_URL = "http://localhost:3000/";
let membersUrl = BASE_URL + "members/";
// let logInUrl = BASE_URL + "login/";
let eventsUrl = BASE_URL + "events/";
let invitationsUrl = BASE_URL + "invitations/";
let announcementsUrl = BASE_URL + "announcements/";
let reviewsUrl = BASE_URL + "reviews/";
let photosUrl = BASE_URL + "photos/";

const MainContainer = (props) => {
  const [state, setState] = useState(false);
  let currentMember = props.currentMember;

  // const [logged_in, setLogged_in] = useState(localStorage.token ? true : false);
  // const status = () => {
  //   setLogged_in(localStorage.token ? true : false);
  const history = useHistory();

  const [allEvents, setEvents] = useState([]);
  const [allAnnouncements, setAnnouncements] = useState([]);
  const [allReviews, setReviews] = useState([]);
  const [displayEvents, setDisplayEvents] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  // const [deleteEvent, setDeleteEvent] = useState([]);

  useEffect(() => {
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
        console.log(displayEvents);
        console.log(allEvents);
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
      .then((image) => {
        setAllPhotos(image);
      });
  }, []);

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

  const deleteEvent = (foundEvent) => {
    fetch(eventsUrl + `${foundEvent.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then(
      setDisplayEvents(allEvents.filter((ev) => ev.id !== foundEvent.id))
    );
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
        setDisplayEvents(
          allEvents.sort((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "my_events":
        setDisplayEvents(
          allEvents.filter((ev) => ev.host.id === currentMember.id)
        );
        break;

      default:
        // setDisplayEvents(allEvents);
        break;
    }
  };

  return (
    <div className="main-container">
      {/* <Test /> */} {/* // react validation */}
      <Sort sortEvents={sortEvents} />
      <br />
      <br />
      <Grid celled="internally"></Grid>
      <Grid.Row>
        <EventContainer
          currentMember={props.currentMember}
          allEvents={displayEvents}
          setEvents={setEvents}
          allReviews={allReviews}
          deleteEvent={deleteEvent}
          addReviewToEvent={props.addReviewToEvent}
          reviewsUrl={props.reviewsUrl}
          setReviews={props.setReviews}
        />
      </Grid.Row>
      <br />
      <br />
      <br />
      <Grid.Row>
        <AnnouncementContainer
          currentMember={props.currentMember}
          allAnnouncements={allAnnouncements}
          deleteAnnouncement={deleteAnnouncement}
        />
      </Grid.Row>
    </div>
  );
};

export default MainContainer;
