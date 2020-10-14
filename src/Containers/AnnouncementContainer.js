import React from "react";
import Announcement from "../Components/Announcement";
import { Grid, Container, Divider, List } from "semantic-ui-react";

const AnnouncementContainer = (props) => {
  console.log(props.currentMember);
  console.log(props.allAnnouncements);

  const announcement = props.allAnnouncements.map((ann) => (
    <Announcement
      ann={ann}
      key={ann.id}
      name={props.currentMember.first_name}
    />
  ));

  return (
    <div>
      <List divided relaxed>
        <List.Item>
          <List.Icon name="thumbtack" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header as="a"> {announcement}</List.Header>
            <List.Description as="a"></List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
};

export default AnnouncementContainer;
