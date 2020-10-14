import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../CSS/Calendar.css";
import "@fullcalendar/daygrid/main.css";
import { propTypes } from "react-bootstrap/esm/Image";

const EventCalender = (props) => {
  const [events, setEvents] = useState([]);

  let handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  //   console.log(props.allEvents);
  //   useEffect(() => {
  //     fetch(props.eventsUrl)
  //       .then((resp) => resp.json())
  //       .then((allEvents) => setEvents(allEvents));
  //   }, []);

  const formatEvents = () => {
    // console.log(props.allEvents);
    props.allEvents.map((anEvent) => {
      const { name, date } = anEvent;
      //   console.log(name);
      //   console.log(date);
      return {
        title: name,
        date: date,
      };
    });
  };
  formatEvents();

  return (
    <div className="event_calendar">
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={true}
        // weekends={false}
        // eventDrop={this.handleEventDrop}
        eventClick={null}
        // events={formatEvents()}
        // weekends={false}
        events={[
          { title: props.allEvents.map((e) => e.name), date: "2020-10-20" },
        ]}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default EventCalender;
