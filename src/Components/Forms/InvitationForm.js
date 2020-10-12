import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Grid, Dropdown, Input } from "semantic-ui-react";
import "./EventForm.css";

class InvitationForm extends React.Component {
  state = {};

  handleChange = (e) => {
    // debugger;
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    debugger;
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
    // fetch(this.props.invitationsUrl, configObj)
    //   .then((res) => res.json())
    //   .then((newInvitation) => console.log(newInvitation));
    // // this.props.histroy.push("/main");
    // e.target.reset();
  };

  render() {
    let allMembers = this.props.allMembers;
    let allEvents = this.props.allEvents;
    return (
      <div className="invitation-form">
        <Form
          size={"large"}
          onSubmit={(e) => this.handleSubmit(e)}
          // onChange={(e) => this.handleChange(e)}
        >
          {/* <Form.Input
          // onChange={(e) => this.handleChange(e)}
          // value={selectedMember}
          > */}
            <Dropdown
              onChange={(e) => this.handleChange(e)}
              // value={selectedMember}
              label="Attendee"
              placeholder="Select Attendee"
              fluid
              name="attendee"
              selection
              search
              options={
                !allMembers
                  ? null
                  : allMembers.map((member) => {
                      return {
                        key: `${member.first_name}`,
                        text: `${member.first_name + " " + member.last_name}`,
                        value: `${member.id}`,
                        image: {
                          avatar: true,
                          src: `${member.image}`,
                        },
                      };
                    })
              }
            />
          {/* </Form.Input> */}
          <Dropdown
            label="Event"
            placeholder="Select Event"
            fluid
            name="event"
            selection
            options={
              !allEvents
                ? null
                : allEvents.map((ev) => {
                    return {
                      key: `${ev.name}`,
                      text: `${ev.name}`,
                      value: `${ev.id}`,
                      image: {
                        avatar: true,
                        src: `${ev.image}`,
                      },
                    };
                  })
            }
          />

          <Form.Button>Submit</Form.Button>
        </Form>
        <Link to="/main">
          <Form.Button>Back</Form.Button>
        </Link>
      </div>
    );
  }
}

export default InvitationForm;
