import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Button, Icon } from "semantic-ui-react";
import "./Forms.css";

const EditEvent = (props) => {
  let eventToBeEdited = props.location.eventToBeEdited;
  const [id, setId] = useState(eventToBeEdited.id);
  const [name, setName] = useState(eventToBeEdited.name);
  const [description, setDescription] = useState(eventToBeEdited.description);
  const [location, setLocation] = useState(eventToBeEdited.location);
  const [date, setDate] = useState(eventToBeEdited.date);
  const [event_type, setEventType] = useState(eventToBeEdited.event_type);
  const [event_card, setEventCard] = useState(eventToBeEdited.event_card);
  const [summary, setSummary] = useState(eventToBeEdited.summary);

  useEffect(() => {
    // setName()
  });

  return (
    <div className="event-form">
      <Form
        size={"large"}
        onSubmit={(e) => {
          props.editEvent(e, id);
        }}
      >
        <Grid columns="equal">
          <Grid.Column width={16}>
            <input type="hidden" id="id" value={id} />
            <Form.Input
              required
              fluid
              label="Event name"
              placeholder="Event name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.TextArea
              required
              label="Description"
              placeholder="..."
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Form.Input
              required
              fluid
              label="Location"
              placeholder="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Form.Input
              required
              fluid
              type="date"
              label="Date"
              name="date"
              value={date}
              // min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
            />

            <Form.Input
              fluid
              label="Event type"
              placeholder="event type"
              value={event_type}
              name="event_type"
              onChange={(e) => setEventType(e.target.value)}
            />
            <Form.Input
              fluid
              label="Event Card"
              placeholder="card url..."
              value={event_card}
              name="event_card"
              onChange={(e) => setEventCard(e.target.value)}
            />
            {/* <Form.TextArea
              label="Summary"
              placeholder="summary..."
              value={summary}
              name="summary"
              onChange={(e) => setSummary(e.target.value)}
            /> */}
            <Form.Button primary>Update</Form.Button>
            <br />
          </Grid.Column>
        </Grid>
      </Form>
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
    </div>
  );
};

export default EditEvent;
