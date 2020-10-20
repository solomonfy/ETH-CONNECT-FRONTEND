import React, { useState } from "react";
import { Form, Grid, Input, Button, Dropdown } from "semantic-ui-react";
// import { Form, Button } from "react-bootstrap";

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
          event_id: event_id,
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
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddNewPhoto;