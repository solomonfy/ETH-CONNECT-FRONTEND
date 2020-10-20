import React from "react";
import { Link } from "react-router-dom";
import { Form, Dropdown } from "semantic-ui-react";
import "./Forms.css";

class InvitationForm extends React.Component {
  state = {
    attendee_id: "",
    event_id: "",
    invitation: {},
    allInvitations: [],
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
          message: e.target.message.value,
          card: e.target.invitation_card.value,
        },
      }),
    };
    fetch(this.props.invitationsUrl, configObj)
      .then((res) => res.json())
      // .then((newInvitation) => console.log(newInvitation));
      .then((newInvitation) =>
        this.setState({
          allInvitations: [...this.state.allInvitations, newInvitation],
        })
      );
    this.props.history.push("/main");
    e.target.reset();
  };

  render() {
    let allMembers = this.props.allMembers.filter(
      (memb) => memb.id !== this.props.currentMember.id
    );
    let allEvents = this.props.allEvents.filter(
      (ev) => ev.host_id === this.props.currentMember.id
    );
    return (
      <div className="invitation-form">
        <Form size={"large"} onSubmit={(e) => this.handleSubmit(e)}>
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
          <br />
          <br />
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
                        src: `${ev.event_card}`,
                      },
                    };
                  })
            }
          />
          <br />
          <br />
          <Form.Input
            fluid
            label="Card"
            placeholder="card url..."
            name="invitation_card"
          />
          <br />
          <br />
          <Form.Input
            fluid
            label="Message"
            placeholder="message"
            name="message"
          />
          <br />
          <br />
          <Form.Button primary>Invite</Form.Button>
        </Form>
        <br />
        <Link to="/main">
          <Form.Button secondary>Cancel</Form.Button>
        </Link>
      </div>
    );
  }
}

export default InvitationForm;
