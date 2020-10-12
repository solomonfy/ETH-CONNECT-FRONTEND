import React from "react";
import { Link } from "react-router-dom";
import { Form, Grid } from "semantic-ui-react";
import "./EventForm.css";

const EventForm = (props) => {
  // const [value, setValue] = useState("");

  let handleSubmit = (e) => {
    // debugger;
    e.preventDefault();
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        event: {
          name: e.target.name.value,
          description: e.target.description.value,
          location: e.target.location.value,
          date: e.target.date.value,
          event_type: e.target.e_type.value,
        },
      }),
    };
    fetch(props.eventsUrl, configObj)
      .then((res) => res.json())
      .then((newEvent) => console.log(newEvent));
    // props.histroy.push("/main");
    e.target.reset();
  };

  return (
    <div className="event-form">
      <Form size={"large"} onSubmit={(e) => handleSubmit(e)}>
        <Grid columns="equal">
          <Grid.Column width={16}>
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

            <Form.Input
              fluid
              label="Location"
              placeholder="location"
              name="location"
            />
            <Form.Input fluid type="date" label="Date" name="date" min={new Date().toISOString().split('T')[0]}/>

            <Form.Input
              fluid
              label="Event type"
              placeholder="event type"
              name="e_type"
            />
            <Form.TextArea
              label="Summary"
              placeholder="summary..."
              name="summary"
            />
            <Form.Button>Submit</Form.Button>
          </Grid.Column>
        </Grid>
      </Form>
      <Link to="/main">
        <Form.Button>Back</Form.Button>
      </Link>
    </div>
  );
};

export default EventForm;
