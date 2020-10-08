import React from "react";
import AnnouncementContainer from "./AnnouncementContainer";
import CalendarContainer from "./CalendarContainer";
import EventContainer from "./EventContainer";

const MainContainer = (props) => {
  return (
    <div>
      {props.logged_in}
      <EventContainer eventsUrl={props.eventsUrl} />
      <AnnouncementContainer />
      <CalendarContainer />
    </div>
  );
};

export default MainContainer;
