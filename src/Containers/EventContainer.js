import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import { Grid, Card } from "semantic-ui-react";
import moment from "moment";

const EventContainer = (props) => {
  // let arrayOfEvents = props.allEvents;

  const [arrayOfEvents, setArrayOfEvents] = useState([]);

  useEffect(() => {
    setArrayOfEvents(props.allEvents);
  });

  const animation = (e) => {
    // console.log(e.pageX);
    let eventCard = document.querySelector(".event-card");
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    eventCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  return (
    // <div className="event-container" onMouseOver={(e) => animation(e)}>
    <div className="event-container">
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
        {/* <Grid.Row> */}
        <Grid.Row stretched>
          {!arrayOfEvents
            ? null
            : arrayOfEvents.map((anEvent) => (
                <Grid.Column width={4}>
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
      {/* <Card.Group>
        {arrayOfEvents.map((anEvent) => (
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
        ))}
      </Card.Group> */}
    </div>
  );
};

export default EventContainer;
