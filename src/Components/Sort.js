import React from "react";

const Sort = (props) => {
  let handleSort = (e) => {
    // console.log(e);
  };

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
        {/* <button onClick={(e) => props.sortEvents(e.target.value)}> Show </button> */}
      </div>
    </div>
  );
};

export default Sort;
