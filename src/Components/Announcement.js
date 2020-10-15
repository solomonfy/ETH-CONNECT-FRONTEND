import React from "react";
import { Button, Icon } from "semantic-ui-react";
// import { Card } from "react-bootstrap";

const Announcement = (props) => {
  const { description, created_at, member, id } = props.anAnnouncement;

  return (
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
          <Button
            basic
            color="red"
            onClick={() => props.deleteAnnouncement(id)}
          >
            <Icon name="remove" />
          </Button>
          <Button color="green" inverted onClick={null}>
            <Icon name="edit" />
          </Button>
        </span>
      ) : (
        <span>
          <Button color="green" inverted onClick={null}>
            <Icon name="heart" />
          </Button>
        </span>
      )}

      <br />
      <br />
    </div>
  );
};

export default Announcement;
