import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: [],
    };
  }

  handleAddContact = (contact) => {
    this.setState({ contactList: [...this.state.contactList, contact] });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ContactForm onAddContact={this.handleAddContact} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContactList contacts={this.state.contactList} />
          </Col>
        </Row>
      </Container>
    );
  }
}