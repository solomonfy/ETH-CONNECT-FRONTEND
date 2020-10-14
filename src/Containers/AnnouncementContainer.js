import React from "react";
import Announcement from "../Components/Announcement";

const AnnouncementContainer = (props) => {
  console.log(props.currentMember);
  console.log(props.allAnnouncements);


  const announcement = props.allAnnouncements.map((ann) => (
    <Announcement ann={ann} key={ann.id} />
  ));

  return <div>{announcement}</div>;
};

export default AnnouncementContainer;
