import React from "react";
import Announcement from "../Components/Announcement";
import { Grid, Container, Divider, List, Button } from "semantic-ui-react";

const AnnouncementContainer = (props) => {
  // console.log(props.currentMember);
  // console.log(props.allAnnouncements);

  const announcement = props.allAnnouncements.map((anAnnouncement) => (
    <Announcement
      anAnnouncement={anAnnouncement}
      key={anAnnouncement.id}
      currentMember={props.currentMember}
    />
  ));

  return (
    <div className="announcement-card">
      <h2>Announcements</h2>
      {announcement}
    </div>
  );
};

export default AnnouncementContainer;
