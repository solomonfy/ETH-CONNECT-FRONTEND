import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Grid, Dropdown, Input } from "semantic-ui-react";
import "./EventForm.css";

const InvitationForm = (props) => {
  setTimeout(() => {
    let allMembers = props.allMembers.map((m) => m);
    console.log(allMembers);
  }, 100);

  // const friendOptions = allMembers
  // console.log(friendOptions)

  const friendOptions = [
    {
      key: "Jenny Hess",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
    },
    {
      key: "Christian",
      text: "Christian",
      value: "Christian",
      image: { avatar: true, src: "/images/avatar/small/christian.jpg" },
    },
    {
      key: "Matt",
      text: "Matt",
      value: "Matt",
      image: { avatar: true, src: "/images/avatar/small/matt.jpg" },
    },
    {
      key: "Justen Kitsune",
      text: "Justen Kitsune",
      value: "Justen Kitsune",
      image: { avatar: true, src: "/images/avatar/small/justen.jpg" },
    },
  ];

  let handleSubmit = (e) => {
    console.log(e.target[0].value);
    // debugger;
    e.preventDefault();

    // let configObj = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     Authorization: `Bearer ${localStorage.token}`,
    //   },
    //   body: JSON.stringify({
    //     invitation: {
    //       attendee_id: e.target.attendee,
    //       description: e.target.event,

    //     },
    //   }),
    // };
    // fetch(props.invitationsUrl, configObj)
    //   .then((res) => res.json())
    //   .then((newInvitation) => console.log(newInvitation));
    // props.histroy.push("/main");
    // e.target.reset();
  };

  let handleChange = (e) => {
    // debugger
    console.log(e);
  };

  return (
    <div className="invitation-form">
      <Form size={"large"} onSubmit={(e) => handleSubmit(e)}>
        <Form.Input onChange={(e) => handleChange(e)}>
          <Dropdown
            label="Attendee"
            placeholder="Select Attendee"
            fluid
            name="attendee"
            selection
            // multiple
            search
            selection
            options={friendOptions}
            // options={allMembers.map(member =>
            //   { return {key: member.id}},
            // )}
          />
        </Form.Input>
        <Dropdown
          label="Event"
          placeholder="Select Event"
          fluid
          name="event"
          selection
          // options={friendOptions}
        />

        <Form.Button>Submit</Form.Button>
      </Form>
      <Link to="/main">
        <Form.Button>Back</Form.Button>
      </Link>
    </div>
  );
};

export default InvitationForm;
