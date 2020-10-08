import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Grid } from "semantic-ui-react";
import "./EventForm.css";

const EventForm = (props) => {
  const options = [
    { key: "ny", text: "New year", value: "new-year" },
    { key: "hw", text: "House warming", value: "house-warming" },
    { key: "o", text: "Other", value: "other" },
  ];

  const [value, setValue] = useState("");

  let handleSubmit = (e) => {
    debugger;
    e.preventDefault();
  };
  return (
    <div className="event-form">
      <Grid columns={2} divided>
        <Form onSubmit={(e) => handleSubmit(e.target.value)}>
          <Grid.Column width={20}>
            <Form.Input
              fluid
              label="Event name"
              placeholder="Event name"
              name="name"
            />
            <Form.TextArea
              label="Description"
              placeholder="..."
              name="description"
            />
          </Grid.Column>

          <Grid.Column width={8}>
            <Form.Input
              fluid
              label="location"
              placeholder="location"
              name="location"
            />
            <Form.Input fluid label="Date" placeholder="" name="" />
            <Form.Select
              fluid
              label="Event type"
              options={options}
              placeholder="event type"
              name="event_type"
            />
          </Grid.Column>
          <Form.TextArea
            label="Summary"
            placeholder="summary..."
            name="summary"
          />

          <Form.Button>Submit</Form.Button>
        </Form>
      </Grid>
      <Link to="/main">
        <Form.Button>Back</Form.Button>
      </Link>
    </div>
  );
};

export default EventForm;
