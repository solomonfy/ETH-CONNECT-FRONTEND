import React, { useState } from "react";
import "../CSS/Maincontainer.css";
import AnnouncementContainer from "./AnnouncementContainer";
import EventCalender from "./EventCalender";
import EventContainer from "./EventContainer";
import Test from "../Components/Forms/Test";
import Sort from "../Components/Sort";

import { Grid } from "semantic-ui-react";
import { Card } from "react-bootstrap";

const MainContainer = (props) => {
  const [state, setState] = useState(false);

  return (
    <div className="main-container">
      {/* <Test /> */} {/* // react validation */}
      <Sort sortEvents={props.sortEvents} />
      <br/>
      <br/>
      <Grid celled="internally"></Grid>
      <Grid.Row>
        <EventContainer
          eventsUrl={props.eventsUrl}
          currentMember={props.currentMember}
          allEvents={props.allEvents}
          deleteEvent={props.deleteEvent}
          addReviewToEvent={props.addReviewToEvent}
          reviewsUrl={props.reviewsUrl}
          allReviews={props.allReviews}
          setReviews={props.setReviews}
        />
      </Grid.Row>
      <br />
      <br />
      <br />
      <Grid.Row>
        <AnnouncementContainer
          currentMember={props.currentMember}
          allAnnouncements={props.allAnnouncements}
          deleteAnnouncement={props.deleteAnnouncement}
        />
      </Grid.Row>
    </div>
  );
};

export default MainContainer;
