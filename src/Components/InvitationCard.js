import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import "../CSS/InvitationContainer.css";

const InvitationCard = (props) => {
  const myInvitation = props.myInvitations.event;
  // console.log(props.myInvitations);
  return (
    <div className="invitation-card">
      <br/>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              // floated="right"
              avatar
              size="small"
              src={myInvitation.host.image}
            />
            <Card.Header>
              <br />
              Host:{" "}
              {myInvitation.host.first_name + " " + myInvitation.host.last_name}
            </Card.Header>
            <Card.Meta>{myInvitation.name}</Card.Meta>
            <Card.Meta>
              <strong>Date: </strong> {myInvitation.date}
            </Card.Meta>
            <Card.Meta>Location: {myInvitation.location}</Card.Meta>
            <Card.Description>
              <h1>{myInvitation.description}</h1>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {/* <div className="ui two buttons">
              <Button basic color="green">
                Accept
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div> */}
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default InvitationCard;
