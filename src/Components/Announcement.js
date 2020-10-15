import React from "react";
import MovingText from "react-moving-text";
import {
  Grid,
  Container,
  Divider,
  Card,
  List,
  Button,
} from "semantic-ui-react";
// import { Card } from "react-bootstrap";

const Announcement = (props) => {
  const { description, created_at, member } = props.anAnnouncement;

  return (
    // <MovingText
    //   type="animation_type"
    //   duration="1000ms"
    //   delay="0s"
    //   direction="normal"
    //   timing="ease"
    //   iteration="infinite"
    //   fillMode="none"
    // >
    //   <h2>{description}</h2>
    //   <br />
    // </MovingText>
    <div>
      <li>
        <h3>{description}</h3>
      </li>
      {/* <br /> */}
      <strong>{member.first_name}</strong>
      <br />
      {/* {created_at} */}
      {member.id === props.currentMember.id ? (
        <span>
          <Button.Group>
            <Button>Delete</Button>
            <Button>Edit</Button>
          </Button.Group>
        </span>
      ) : (
        <span>
          <Button.Group>
            <Button>Like</Button>
          </Button.Group>
        </span>
      )}

      <br />
      <br />
    </div>
  );
};

export default Announcement;
