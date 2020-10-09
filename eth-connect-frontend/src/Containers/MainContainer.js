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
      {props.logged_in}
      <AnnouncementContainer />
      {/* <Invitations currentMember={props.currentMember} /> */}

      {/* <Grid container columns={2}>
        <Grid.Column> */}
      <EventContainer eventsUrl={props.eventsUrl} />
      {/* </Grid.Column> */}
      {/* <Grid.Column> */}
      {/* <Sticky><CalendarContainer eventsUrl={props.eventsUrl} /></Sticky> */}
      {/* </Grid.Column> */}
      {/* </Grid> */}
    </div>
  );
};

export default MainContainer;
