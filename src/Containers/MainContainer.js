import React from "react";
import "../CSS/Maincontainer.css";
import AnnouncementContainer from "./AnnouncementContainer";
import CalendarContainer from "./EventCalender";
import EventContainer from "./EventContainer";

import { Grid, Sticky } from "semantic-ui-react";
import Invitations from "../Components/Invitations";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      {/* <Grid container columns={2}> */}
      {/* <Grid.Column> */}
      {/* {props.logged_in} */}
      {/* <AnnouncementContainer /> */}
      <EventContainer eventsUrl={props.eventsUrl} />
      {/* </Grid.Column> */}

      {/* <Grid.Column> */}
      <Invitations currentMember={props.currentMember} />
      {/* </Grid.Column> */}
      <Sticky><CalendarContainer eventsUrl={props.eventsUrl} /></Sticky>
      {/* <Grid.Column></Grid.Column> */}
      {/* </Grid> */}
    </div>
  );
};

export default MainContainer;
