import React from "react";
import MovingText from "react-moving-text";
import { Grid, Container, Divider, List } from "semantic-ui-react";
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
      {/* <Card body> */}
      <List divided relaxed>
        <List.Item>
          <List.Icon name="" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a"> {description}</List.Header>
            <span>{member.first_name}</span>
            {/* <span>{created_at}</span> */}
            <List.Description as="a"></List.Description>
          </List.Content>
        </List.Item>
      </List>
      {/* </Card> */}
      <br />
    </div>
  );
};

export default Announcement;
