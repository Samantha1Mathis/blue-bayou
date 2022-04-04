import React from "react";
import { Container, FormGroup } from "react-bootstrap";
import { NavbarCustom } from "../components/navbar.js";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <>
      <NavbarCustom />
      <h1>HELLO</h1>
      <Container>
        <Form>
          <FormGroup>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="name" placeholder="Enter first name" />
          </FormGroup>

          <FormGroup>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="name" placeholder="Enter last name" />
          </FormGroup>

          <FormGroup>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </FormGroup>

          <FormGroup>
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Enter subject" />
          </FormGroup>

          <FormGroup>
            <Form.Label>Message</Form.Label>
            <Form.Control type="msg" placeholder="Enter message" as="textarea" rows={5}/>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}
