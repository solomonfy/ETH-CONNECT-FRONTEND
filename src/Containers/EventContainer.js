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
      <Grid celled="internally">
        <Grid.Row>
          {events.map((e_vent) => (
            <Grid.Column width={8}>
              <EventCard e_vent={e_vent} key={e_vent.id} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default EventContainer;
