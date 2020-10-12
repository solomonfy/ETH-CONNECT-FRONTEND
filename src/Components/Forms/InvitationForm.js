import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Grid, Dropdown, Input } from "semantic-ui-react";
import "./EventForm.css";

class InvitationForm extends React.Component {
  state = {
    attendee_id: "",
    event_id: "",
  };

  handleAttendeeChange = (event, data) => {
    const { value } = data;
    const { key } = data.options.find((o) => o.value === value);
    // debugger;
    // console.log(value);
    // console.log(key);
    this.setState({
      attendee_id: parseInt(value),
    });
  };
  handleEventChange = (event, data) => {
    const { value } = data;
    const { key } = data.options.find((o) => o.value === value);
    // debugger;
    // console.log(value);
    // console.log(key);
    this.setState({
      event_id: parseInt(value),
    });
  };

  handleSubmit = (e) => {
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
        invitation: {
          attendee_id: this.state.attendee_id,
          event_id: this.state.event_id,
        },
      }),
    };
    fetch(this.props.invitationsUrl, configObj)
      .then((res) => res.json())
      .then((newInvitation) => console.log(newInvitation));
    // this.props.histroy.push("/main");
    e.target.reset();
  };

  render() {
    let allMembers = this.props.allMembers;
    let allEvents = this.props.allEvents;
    return (
      <div className="invitation-form">
        <Form size={"large"} onSubmit={(e) => this.handleSubmit(e)}>
          {/* <Form.Input
          > */}
          <Dropdown
            onChange={this.handleAttendeeChange}
            label="Attendee"
            placeholder="Select Attendee"
            fluid
            name="attendee_id"
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
            onChange={this.handleEventChange}
            label="Event"
            placeholder="Select Event"
            fluid
            name="event_id"
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
