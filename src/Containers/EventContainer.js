import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import { Grid } from "semantic-ui-react";
import moment from "moment";

const EventContainer = (props) => {
  // let arrayOfEvents = props.allEvents;

  const [arrayOfEvents, setArrayOfEvents] = useState([]);

  useEffect(() => {
    setArrayOfEvents(props.allEvents);
  });
  return (
    <div>
      <h1
        style={{
          backgroundColor: "white",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "black",
          alignSelf: "flex-start",
        }}
      >
        All Community Events - ክስተቶች (
        {!props.allEvents ? null : props.allEvents.length})
      </h1>
      <Grid celled="internally">
        <Grid.Row>
          {!arrayOfEvents
            ? null
            : arrayOfEvents.map((anEvent) => (
                <Grid.Column width={3}>
                  <EventCard
                    anEvent={anEvent}
                    key={anEvent}
                    currentMember={props.currentMember}
                    deleteEvent={props.deleteEvent}
                    addReviewToEvent={props.addReviewToEvent}
                    reviewsUrl={props.reviewsUrl}
                    setReviews={props.setReviews}
                    allReviews={props.allReviews}
                  />
                </Grid.Column>
              ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default EventContainer;
