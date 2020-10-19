import React from "react";
import { Form, Grid, Input, Button, Icon } from "semantic-ui-react";
// import { Form, Button } from "react-bootstrap";

const AddNewPhoto = (props) => {
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
        photo: {
          src: e.target.src.value,
        },
      }),
    };
    fetch(props.photosUrl, configObj)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    // props.setAllPhotos();
  };

  return (
    <div className="new-photo">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Photo</label>
          <input placeholder="Last Name" name="src" />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddNewPhoto;
