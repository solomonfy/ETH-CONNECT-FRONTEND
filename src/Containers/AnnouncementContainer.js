import React from "react";
import Announcement from "../Components/Announcement";
import { Grid, Container, Divider, List, Button } from "semantic-ui-react";

const AnnouncementContainer = (props) => {
  // console.log(props.currentMember);
  // console.log(props.allAnnouncements);

  const announcement = props.allAnnouncements.map((anAnnouncement) => (
    <li>
      <Announcement
        anAnnouncement={anAnnouncement}
        key={anAnnouncement.id}
        currentMember={props.currentMember}
        deleteAnnouncement={props.deleteAnnouncement}
      />
    </li>
  ));

  return (
    <div className="announcement-card">
      <br />
      <h2>Announcements</h2>
      <br />
      {announcement}
    </div>
  );
};

export default AnnouncementContainer;
