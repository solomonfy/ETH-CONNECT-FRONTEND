import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../CSS/Calendar.css";

let handleDateClick = (arg) => {
  alert(arg.dateStr);
  // console.log("HEllo");
};

const EventCalender = (props) => {
  const [events, setEvents] = useState([]);

  

  useEffect(() => {
    fetch(props.eventsUrl)
      .then((resp) => resp.json())
      .then((allEvents) => setEvents(allEvents));
  }, []);

  const eachEvent = () => {
    
  }

  return (
    <div className="event_calendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // weekends={false}
        events={[{ title: events.map((e) => e.name), date: "2020-10-12" }]}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default EventCalender;
