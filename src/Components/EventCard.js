import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Icon,
  Image,
  Modal,
  Button,
  Header,
  Input,
} from "semantic-ui-react";
import ReviewForm from "./Forms/ReviewForm";

const EventCard = (props) => {
  const {
    name,
    description,
    location,
    date,
    event_type,
    host,
    id,
    reviews,
  } = props.anEvent;

  // compare event date with todays date

  // const onClick = () => setshowForm(true);

  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {/* {host ? ( */}
      <Card color="green">
        {/* <Image
          src="https://c8.alamy.com/comp/A06AXM/traditional-ethiopian-dance-painting-ethiopia-A06AXM.jpg"
          wrapped
          ui={false}
        /> */}
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {props.anEvent.host
            ? " " +
              props.anEvent.host.first_name +
              " " +
              props.anEvent.host.last_name
            : null}
        </Card.Content>

        <div>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button positive>Detail</Button>}
          >
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content image>
              <Image
                size="medium"
                src="https://ethiopianairlines.ca/rrm/wp-content/uploads/2018/09/40026370_1921028777981823_5062009800359936_o-1-1080x628.jpg"
                wrapped
              />
              <Modal.Description>
                <Header>
                  Host:
                  {props.anEvent.host
                    ? " " + host.first_name + " " + host.last_name
                    : null}
                </Header>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <p>
                  <strong>Event type:</strong> {event_type}
                </p>
                <p>
                  <strong>Location:</strong> {location}
                </p>
                {/* {reviews.length > 0 ? <strong>Reviews:</strong> : null} */}
                {reviews
                  ? reviews.map((rv) => <li>{rv.description}</li>)
                  : null}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              {props.anEvent.host && host.id === props.currentMember.id ? (
                <>
                  <Link to="/new_invitation">
                    <Button primary>Invite members</Button>
                  </Link>
                  <Button primary onClick={null}>
                    Edit Event
                  </Button>
                  <Button
                    // negative onClick={() => setOpen(false)}
                    negative
                    onClick={() => props.deleteEvent(props.anEvent)}
                  >
                    Delete Event
                  </Button>
                </>
              ) : (
                <>
                  <div>
                    {/* <Button
                      content="Add review"
                      labelPosition="right"
                      icon="checkmark"
                      onClick={() => getForm(id)} // send the event id to add review for the event
                      positive
                    /> */}
                    <Input
                      type="submit"
                      value="Add review"
                      positive
                      onClick={onClick}
                    />
                    {showResults ? (
                      <ReviewForm
                        addReviewToEvent={props.addReviewToEvent}
                        reviewsUrl={props.reviewsUrl}
                        event_id={id}
                        setReviews={props.setReviews}
                        allReviews={props.allReviews}
                      />
                    ) : null}
                  </div>
                </>
              )}
            </Modal.Actions>
          </Modal>
          <br />
          <br />
        </div>
      </Card>
      {/* ) : null} */}
    </div>
  );
};

export default EventCard;
