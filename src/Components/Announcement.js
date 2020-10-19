import React from "react";
import { Button, Icon } from "semantic-ui-react";
import moment from "moment";

// import { Card } from "react-bootstrap";

const Announcement = (props) => {
  const { description, created_at, member, id } = props.anAnnouncement;

  return (
    <div>
      <h3>{description}</h3>
      {!member ? null : (
        <>
          <strong>{member.first_name}</strong>
          <br />
          {moment(created_at).format("YYYY-MM-DD")}
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
        </>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Announcement;
