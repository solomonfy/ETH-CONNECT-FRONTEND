import React, { useState, useEffect } from "react";
// import { Calendar } from '@fullcalendar/core';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../CSS/Calendar.css";
import "@fullcalendar/daygrid/main.css";
import { propTypes } from "react-bootstrap/esm/Image";

const EventCalender = (props) => {
  // const [events, setEvents] = useState([]);

  let handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  let eventsArray = props.allEvents;

  const formatEvents = () => {
    return eventsArray.map((anEvent) => {
      const { name, date } = anEvent;
      let hostName = anEvent.host.first_name;
      return {
        title: name,
        date,
        hostName,
        extendedProps: {
          hostName: hostName,
        },
        backgroundColor: "green",
        borderColor: "green",
      };
    });
  };

  // calendar.setOption("height", 700);

  return (
    <div className="event_calendar">
      <FullCalendar
      
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "today prev,next prevYear nextYear",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={true}
        weekNumbers={true}
        // weekends={false}
        // eventDrop={this.handleEventDrop}
        eventClick={null}
        events={formatEvents()}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default EventCalender;
