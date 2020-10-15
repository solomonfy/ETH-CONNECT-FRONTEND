import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";
import { Grid } from "semantic-ui-react";

const EventContainer = (props) => {
  var todaysDate = new Date();

  var dates = {
    convert: function (d) {
      return d.constructor === Date
        ? d
        : d.constructor === Array
        ? new Date(d[0], d[1], d[2])
        : d.constructor === Number
        ? new Date(d)
        : d.constructor === String
        ? new Date(d)
        : typeof d === "object"
        ? new Date(d.year, d.month, d.date)
        : NaN;
    },
    compare: function (a, b) {
      return isFinite((a = this.convert(a).valueOf())) &&
        isFinite((b = this.convert(b).valueOf()))
        ? (a > b) - (a < b)
        : NaN;
    },
    inRange: function (d, start, end) {
      return isFinite((d = this.convert(d).valueOf())) &&
        isFinite((start = this.convert(start).valueOf())) &&
        isFinite((end = this.convert(end).valueOf()))
        ? start <= d && d <= end
        : NaN;
    },
  };

  return (
    <div>
      <h1>All Community Events</h1>
      <Grid celled="internally">
        {/* compare event date and todays date and display only the current event */}
        {/* <Grid.Row>
          {!props.allEvents
            ? null
            : props.allEvents.map((anEvent) => ( 
                <Grid.Column width={5}>
                  {dates.compare(anEvent.date, todaysDate) >= 0 ? (
                    <EventCard
                    anEvent={anEvent}
                    key={anEvent.id}
                    currentMember={props.currentMember}
                    deleteEvent={props.deleteEvent}
                    addReviewToEvent={props.addReviewToEvent}
                    />
                    ) 
                    
                    : "Past event"}
                </Grid.Column>
              ))}
        </Grid.Row> */}

        <Grid.Row>
          {!props.allEvents
            ? null
            : props.allEvents.map((anEvent) => (
                <Grid.Column width={5}>
                  <EventCard
                    anEvent={anEvent}
                    key={anEvent.id}
                    currentMember={props.currentMember}
                    deleteEvent={props.deleteEvent}
                    addReviewToEvent={props.addReviewToEvent}
                    reviewsUrl={props.reviewsUrl}
                  />
                </Grid.Column>
              ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default EventContainer;
