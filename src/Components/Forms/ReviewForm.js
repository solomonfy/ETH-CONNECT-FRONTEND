import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Button, Icon } from "semantic-ui-react";
import "./EventForm.css";

const ReviewForm = (props) => {
  const [description, setDescription] = useState("");

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
        },
      }),
    };
    fetch(props.announcementsUrl, configObj)
      .then((res) => res.json())
      .then((newAnn) => {
        props.setAnnouncements([...props.allAnnouncements, newAnn]);
        // console.log(newAnn);
        props.history.push("/main");
      });
    e.preventDefault();
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
              onChange={(e) => setDescription(e.target.value)}
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

export default ReviewForm;
