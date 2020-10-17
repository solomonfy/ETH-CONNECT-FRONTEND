import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import { Grid } from "semantic-ui-react";

const EventContainer = (props) => {
  // console.log(props.allEvents);

  return (
    <div>
      <h1>
        All Community Events ({!props.allEvents ? null : props.allEvents.length}
        )
      </h1>
      <Grid celled="internally">
        <Grid.Row>
          {!props.allEvents
            ? null
            : props.allEvents.map((anEvent) => (
                <Grid.Column width={3}>
                  <EventCard
                    anEvent={anEvent}
                    key={anEvent.id}
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
