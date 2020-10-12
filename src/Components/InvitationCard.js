import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

const InvitationCard = (props) => {
  const myInvitation = props.myInvitations.event;
  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              // floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />
            <Card.Header>
              Host:{" "}
              {myInvitation.host.first_name + " " + myInvitation.host.last_name}
            </Card.Header>
            <Card.Meta>{myInvitation.name}</Card.Meta>
            <Card.Meta>
              <strong>Date: </strong> {myInvitation.date}
            </Card.Meta>
            <Card.Meta>Location: {myInvitation.host.location}</Card.Meta>
            <Card.Description>
              <h1>{myInvitation.description}</h1>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Accept
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default InvitationCard;
