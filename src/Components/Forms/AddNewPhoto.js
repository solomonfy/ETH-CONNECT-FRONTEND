import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Button, Dropdown } from "semantic-ui-react";
import "./Forms.css";

const AddNewPhoto = (props) => {
  const [event_id, setEventId] = useState();
  let handleEventChange = (event, data) => {
    const { value } = data;
    const { key } = data.options.find((o) => o.value === value);
    // debugger;
    // console.log(value);
    // console.log(key);
    setEventId({
      event_id: parseInt(value),
    });
  };

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
          member_id: props.currentMember.id,
          event_id: parseInt(Object.values(event_id).toString()),
        },
      }),
    };
    fetch(props.photosUrl, configObj)
      .then((resp) => resp.json())
      .then((newPhoto) => {
        props.setAllPhotos([...props.allPhotos, newPhoto]);
        console.log(newPhoto);
      });
    props.history.push("/photo-gallery");
    e.target.reset();
    // props.setAllPhotos();
  };

  return (
    <div className="photo-form">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Field>
          <label>Photo</label>
          <input placeholder="image url..." name="src" />
        </Form.Field>
        <br />
        <Dropdown
          onChange={handleEventChange}
          label="Event"
          placeholder="Select Event"
          fluid
          name="event_id"
          selection
          options={
            !props.allEvents
              ? null
              : props.allEvents.map((ev) => {
                  return {
                    key: `${ev.name}`,
                    text: `${ev.name}`,
                    value: `${ev.id}`,
                    image: {
                      avatar: true,
                      src: `${ev.event_card}`,
                    },
                  };
                })
          }
        />
        <br />
        <br />
        <Button primary type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <Link to="/photo-gallery">
        <Button animated secondary>
          <Button.Content visible>Cancel</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </div>
  );
};

export default AddNewPhoto;
