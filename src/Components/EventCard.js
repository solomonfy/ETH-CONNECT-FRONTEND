import React from "react";
import { Card, Icon, Image, Modal, Button, Header } from "semantic-ui-react";
// import { Link } from "react-router-dom";

const EventCard = (props) => {
  const { name, description, location, date, event_type, host } = props.e_vent;
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {/* <Card.Group itemsPerRow={2}> */}
      <Card color="green">
        <Image
          src="https://c8.alamy.com/comp/A06AXM/traditional-ethiopian-dance-painting-ethiopia-A06AXM.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{date}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {" " + host.first_name + " " + host.last_name}
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
                  {" " + host.first_name + " " + host.last_name}
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
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              {host.id === props.currentMember.id ? (
                <Button negative onClick={() => setOpen(false)}>
                  Delete Event
                </Button>
              ) : (
                <Button
                  content="Yep"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                />
              )}
            </Modal.Actions>
          </Modal>
          <br />
          <br />
        </div>
      </Card>
      {/* </Card.Group> */}
    </div>
  );
};

export default EventCard;
