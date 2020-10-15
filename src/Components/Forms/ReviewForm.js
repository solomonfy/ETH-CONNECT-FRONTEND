import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Grid, Button, Icon, Input } from "semantic-ui-react";
import "./EventForm.css";

const ReviewForm = (props) => {
  const [description, setDescription] = useState("");

  // console.log(props.event_id);
  let handleSubmit = (e) => {
    // debugger;
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        announcement: {
          description: e.target.description.value,
          event_id: props.event_id,
        },
      }),
    };
    fetch(props.reviewsUrl, configObj)
      .then((res) => res.json())
      .then((data) => {
        props.setReviews([...props.allReviews, data]);
        // console.log(data);
      });
      e.preventDefault();
      props.history.push("/main");
    e.target.reset();
  };

  return (
    <div className="ann-form">
      <Form size={"large"} onSubmit={(e) => handleSubmit(e)}>
        <Grid columns="equal">
          <Grid.Column width={16}>
            <Form.TextArea
              label="Description"
              placeholder="description"
              name="description"
              // onChange={(e) =>
              //   setDescription(e.target.value, (ev_id) => props.event_id)
              // }
            />

            <Form.Button>Submit</Form.Button>
          </Grid.Column>
        </Grid>
      </Form>
      <Link to="/main">
        <Button animated primary>
          <Button.Content visible>Back</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
};

export default withRouter(ReviewForm);
