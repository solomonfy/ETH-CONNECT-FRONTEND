import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Button, Icon } from "semantic-ui-react";
import "./Forms.css";

const EventForm = (props) => {
  const [anEvent, setNewEvent] = useState({});

  // console.log(props.histroy.push());
  let handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let description = e.target.description.value;
    let event_type = e.target.event_type.value;
    // debugger;
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        event: {
          name:
            // name,
            name[0].toUpperCase() + name.slice(1),
          description:
            // description,
            description[0].toUpperCase() + description.slice(1),
          location: e.target.location.value,
          date: e.target.date.value,
          event_type: event_type,
          // event_type[0].toUpperCase() + event_type.slice(1),
          event_card: e.target.event_card.value,
        },
      }),
    };
    fetch(props.eventsUrl, configObj)
      .then((res) => res.json())
      .then((newEvent) => {
        props.setEvents([...props.allEvents, newEvent]);
        // console.log(newEvent);
      });
    props.history.push("/main");
    e.target.reset();
    // window.location.reload();
  };

  return (
    <div className="event-form">
      <fieldset>
        <legend>Host event</legend>
        <br />
        <Form size={"large"} onSubmit={(e) => handleSubmit(e)}>
          <Grid columns="equal">
            <Grid.Column width={16}>
              <Form.Input
                fluid
                required
                label="Event name"
                placeholder="Event name"
                name="name"
              />
              <br />
              <Form.TextArea
                label="Description"
                required
                placeholder="event description"
                name="description"
              />
              <br />
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  required
                  label="Location"
                  placeholder="location"
                  name="location"
                />
                <Form.Input
                  fluid
                  required
                  type="date"
                  label="Date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                />
              </Form.Group>
              <br />

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Event type"
                  placeholder="event type"
                  name="event_type"
                />
                <Form.Input
                  fluid
                  label="Event Card"
                  placeholder="card url..."
                  name="event_card"
                />
              </Form.Group>
              <br />
              {/* <Form.TextArea
              label="Summary"
              placeholder="summary..."
              name="summary"
            /> */}
              <br />
            </Grid.Column>
          </Grid>
          <Button primary>Add event</Button>
        </Form>
        <br />
        <Link to="/main">
          <Button animated secondary>
            <Button.Content visible>Cancel</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>
        </Link>
        <br />
        <br />
      </fieldset>
    </div>
  );
};

export default EventForm;
