import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    /* console.log(e.target[1].value) */
    this.props.onAddContact(Object.values(this.state));
  }

  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)} className="my-5">
        <Form.Group controlId="fullNameInput">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            name="name"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="fullNameInput">
          <Form.Label>Family:</Form.Label>
          <Form.Control
            name="lastName"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="fullNameInput">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="fullNameInput">
          <Form.Label>PhoneNumber:</Form.Label>
          <Form.Control
            name="phoneNumber"
            onChange={(e) => {
              this.handleChangeInput(e);
            }}
            type="number"
          />
        </Form.Group>
        <Button type="submit" className="my-3">
          Submit
        </Button>
      </Form>
    );
  }
}