import React from "react";
import Logo from "../Images/ETHIO-CONNECT2.png";

import {
  List,
  Grid,
  Header,
  Segment,
  Container,
  Icon,
  Divider,
  Image,
  Button,
} from "semantic-ui-react";

const Footer = () => {
  var phantom = {
    display: "block",
    padding: "1px",
    height: "40%",
    width: "100%",
    // position: "fixed",
    left: "0",
    bottom: "150",
  };

  return (
    <div style={phantom}>
      <br />
      <br />
      <Segment inverted vertical style={{ padding: "1em 1em" }}>
        <br />
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header inverted as="h4" content="Contact" />
                {/* <Icon loading name="spinner" /> */}
                <List horizontal inverted divided link size="small">
                  {/* <p style={{ display: "inline-block" }}>GitHub</p> */}
                  <Icon name="github" inverted size={"big"} />
                  <List link inverted>
                    <List.Item as="a">GitHub</List.Item>
                  </List>
                  <br />
                  {/* <p style={{ display: "inline-block" }}>Linkedin</p> */}
                  <Icon name="linkedin" inverted size={"big"} />
                  <List link inverted>
                    <List.Item as="a">LinkedIn</List.Item>
                  </List>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">How To use the application</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider inverted section />
          {/* <Image  size="mini" src="/logo.png" /> */}
          <Image centered src={Logo} size="small" />

          <Icon name="copyright outline" />
          <p style={{ display: "inline-block" }}>2020 ETHIO-CONNECT INC.</p>
          <br />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
