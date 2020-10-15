import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Grid, Button, Icon, Modal } from "semantic-ui-react";
// import "./EventForm.css";

const ReviewForm = (props) => {
  const [description, setDescription] = useState("");
  const [open, setOpen] = React.useState(false);

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
    props.history.push("/calendar");
    e.target.reset();
  };

  return (
    <div className="ann-form">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Add Review</Button>}
      >
        <Modal.Header>Add Review</Modal.Header>
        <Modal.Content>
          <Form size={"large"} onSubmit={(e) => handleSubmit(e)}>
            <Grid columns="equal">
              <Grid.Column width={8}>
                <Form.TextArea
                  label="Description"
                  placeholder="description"
                  name="description"
                />

                <Form.Button>Submit</Form.Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpen(false)}>
            Back
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default withRouter(ReviewForm);
