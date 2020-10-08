import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const EventCard = (props) => {
  const { name, description, location, date, event_type, host } = props.e_vent;

  const ethImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpfzN78ugCuDXidII4BEYJ5PsyMg8IayEznw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDgq2vSUy4ClYB0WoGDGr_wTCI3P-4kqomNw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdzJP-VTZBZkQh5bdPC3C-t9PG3ikYrDoi3Q&usqp=CAU",
    "https://c8.alamy.com/comp/A06AXM/traditional-ethiopian-dance-painting-ethiopia-A06AXM.jpg",
  ];

  const randomImage = () => {
    ethImages.map((img) => {
      return img;
    });
  };
  return (
    <div>
      <Card.Group itemsPerRow={4}>
        <Card color="green">
          {/* <Image src={randomImage} wrapped ui={false} /> */}
          <Image src='https://c8.alamy.com/comp/A06AXM/traditional-ethiopian-dance-painting-ethiopia-A06AXM.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="date">{date}</span>
            </Card.Meta>
            <Card.Description>Location: {location}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              Host:
              {" " + host.first_name + " " + host.last_name}
            </a>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default EventCard;
