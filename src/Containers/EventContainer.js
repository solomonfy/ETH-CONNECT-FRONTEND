import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import { Grid } from "semantic-ui-react";

const EventContainer = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(props.eventsUrl)
      .then((resp) => resp.json())
      .then((allEvents) => setEvents(allEvents));
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
