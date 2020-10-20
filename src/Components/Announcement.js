import React from "react";
import { Button, Icon } from "semantic-ui-react";
import moment from "moment";

const Announcement = (props) => {
  const { description, created_at, member, id } = props.anAnnouncement;

  return (
    <div>
      <h3>
        <Icon name="quote left" />
        {description + " "}
        <Icon name="quote right" />
      </h3>
      {!member ? null : (
        <>
          <strong style={{ textAlign: 'right'  }}>
            {member.first_name}
          </strong>
          {`${" " + "--" + " "}`}
          {moment(created_at).format("YYYY-MM-DD")}
          {`${" " + " " + " "}`}
          {`${" " + " " + " "}`}
          {member.id === props.currentMember.id ? (
            <span>
              <Button
                basic
                color="red"
                size="mini"
                onClick={() => props.deleteAnnouncement(id)}
              >
                <Icon name="remove" />
              </Button>
              <Button color="green" size="mini" inverted onClick={null}>
                <Icon name="edit" />
              </Button>
            </span>
          ) : (
            <span>
              {/* <Button color="green" size="mini" inverted onClick={null}>
                <Icon name="heart" />
              </Button> */}
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
