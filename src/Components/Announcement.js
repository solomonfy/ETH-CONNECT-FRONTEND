import React from "react";
import MovingText from "react-moving-text";
import { Grid, Container, Divider, List } from "semantic-ui-react";

const Announcement = (props) => {
  const { description, created_at, member } = props.ann;

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
      <List divided relaxed>
        <List.Item>
          <List.Icon name="thumbtack" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a"> {description}</List.Header>
            <List.Description as="a"></List.Description>
          </List.Content>
        </List.Item>
      </List>
      <br />
    </div>
  );
};

export default Announcement;
