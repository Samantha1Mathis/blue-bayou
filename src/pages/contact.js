import React from "react";
import { Container, FormGroup } from "react-bootstrap";
import { NavbarCustom } from "../components/navbar.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../index.css";

export default function Contact() {
  return (
    <>
      <NavbarCustom />
      <Container>
        <h1>Contact Us</h1>
        <div className="contact-page-div">
          <Form>
            <FormGroup className="contact-page-form-group">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter first name" />
            </FormGroup>

            <FormGroup className="contact-page-form-group">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter last name" />
            </FormGroup>

            <FormGroup className="contact-page-form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </FormGroup>

            <FormGroup className="contact-page-form-group">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="subject" placeholder="Enter subject" />
            </FormGroup>

            <FormGroup className="contact-page-form-group">
              <Form.Label>Message</Form.Label>
              <Form.Control type="msg" placeholder="Enter message" as="textarea" rows={5} />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}
