import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import { Grid } from "semantic-ui-react";

const EventContainer = (props) => {
  return (
    <div>
      <Grid celled="internally">
        <Grid.Row>
          {!props.allEvents
            ? null
            : props.allEvents.map((anEvent) => (
                <Grid.Column width={5}>
                  <EventCard
                    anEvent={anEvent}
                    key={anEvent.id}
                    currentMember={props.currentMember}
                  />
                </Grid.Column>
              ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default EventContainer;
