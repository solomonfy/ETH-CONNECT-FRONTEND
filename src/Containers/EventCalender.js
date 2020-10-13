// import React, { useState, useEffect } from "react";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import "../CSS/Calendar.css";
// import "@fullcalendar/daygrid/main.css";
// import { propTypes } from "react-bootstrap/esm/Image";

// const EventCalender = (props) => {
//   const [events, setEvents] = useState([]);

//   let handleDateClick = (arg) => {
//     alert(arg.dateStr);
//   };

//   // console.log(props);
//   useEffect(() => {
//     fetch(props.eventsUrl)
//       .then((resp) => resp.json())
//       .then((allEvents) => setEvents(allEvents));
//   }, []);

//   // const formatEvents = () => {
//   //   console.log(props.allEvents);
//   //   props.allEvents.map((e_vent) => {
//   //     const { name, date } = e_vent;
//   //     let eventDate = new Date(date);
//   //     return {
//   //       name,
//   //       start: eventDate,
//   //     };
//   //   });
//   // };

//   return (
//     <div className="event_calendar">
//       <FullCalendar
//         initialView="dayGridMonth"
//         plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//         headerToolbar={{
//           left: "prev,next",
//           center: "title",
//           right: "dayGridMonth,timeGridWeek,timeGridDay",
//         }}
//         editable={true}
//         // weekends={false}
//         // eventDrop={this.handleEventDrop}
//         eventClick={null}
//         // events={formatEvents()}
//         // weekends={false}
//         // events={[{ title: events.map((e) => e.name), date: "2020-10-12" }]}
//         dateClick={handleDateClick}
//       />
//     </div>
//   );
// };

// export default EventCalender;
