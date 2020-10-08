import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

const EventContainer = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(props.eventsUrl)
      .then((resp) => resp.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div>
      {events.map((e_vent) => (
        <EventCard e_vent={e_vent} key={e_vent.id} />
      ))}
    </div>
  );
};

export default EventContainer;
