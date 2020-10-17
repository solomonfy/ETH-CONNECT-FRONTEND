import React from "react";
import { Dropdown } from "semantic-ui-react";

const Sort = (props) => {
  return (
    <div>
      <div>
        <label>Sort events by:</label>
        <select onChange={(e) => props.sortEvents(e.target.value)}>
          <option value="all" selected>
            All
          </option>
          <option value="upcoming">Upcoming events</option>
          <option value="past">Past events</option>
          <option value="name">Name</option>
          <option value="my_events">My Events</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
