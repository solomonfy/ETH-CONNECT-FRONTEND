import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const EventCard = (props) => {
  console.log(props.e_vent);
  const { name, description, location, date, event_type, host } = props.e_vent;
  // const { id, name, img_url, price } = props.sushi

  return (
    <div>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Host:
            {" " + host.first_name + " " + host.last_name}
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default EventCard;
