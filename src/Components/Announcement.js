import React from "react";
import { Button, Icon } from "semantic-ui-react";
import moment from "moment";

const Announcement = (props) => {
  const { description, created_at, member, id } = props.anAnnouncement;

  return (
    <div>
      <h3>
        <Icon name="quote left" />
        {" " + description + " "}
        <Icon name="quote right" />
      </h3>
      {!member ? null : (
        <>
          <strong style={{ textAlign: "right" }}>{member.first_name}</strong>
          {`${" " + " " + " ( "}`}
          {moment(created_at).format("YYYY-MM-DD")}
          {`${" " + " " + " )" + " "}`}
          {member.id === props.currentMember.id ? (
            <span>
              <Icon
                name="remove"
                color="red"
                size="large"
                onClick={() => props.deleteAnnouncement(id)}
              />
              <Icon name="edit" color="green" size="large" onClick={null} />
            </span>
          ) : (
            <span>
              <Icon
                name="heart"
                color="green"
                size="large"
                inverted
                onClick={null}
              />
            </span>
          )}
        </>
      )}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Announcement;
