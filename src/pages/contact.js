import React from "react";
import { Container, FormGroup } from "react-bootstrap";
import { NavbarCustom } from "../components/navbar.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/pages/contact.css";
import "../styles/pages/home.css"

export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const para = document.createElement("p");
    const msg = document.createTextNode("We will be in contact with you soon! Have a magical day!");
    para.appendChild(msg);

    para.style.fontSize = '45px';
    para.style.fontFamily = "blackPearl";

    const formDiv = document.getElementById("formDiv");
    formDiv.appendChild(para);

    const button = document.getElementById("submitButton");
    button.disabled = true;
  };

  return (
    <>
      <NavbarCustom />
      <div
        className="text-center"
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          className="home-page"
          style={{ height: "1000px", width: "5000px" }}
        >
          <div
            className="hours text-dark"
            style={{
              fontFamily: "blackPearl",
              textAlign: "center",
              position: "relative",
              marginTop: "15px",
              width: "auto",
              height: "900px",
            }}
          >
            <h1>Contact Us</h1>
            <div className="form" id="formDiv">
              <Form className="contact-form" onSubmit={submit}>
                <FormGroup className="contact-page-form-group">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter first name" required />
                </FormGroup>

                <FormGroup className="contact-page-form-group">
                  <Form.Label className="form-label">Last Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter last name" required />
                </FormGroup>

                <FormGroup className="contact-page-form-group">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </FormGroup>

                <FormGroup className="contact-page-form-group">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="subject" placeholder="Enter subject" required />
                </FormGroup>

                <FormGroup className="contact-page-form-group">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="msg" placeholder="Enter message" as="textarea" rows={5} required />
                </FormGroup>

                <Button variant="primary" type="submit" style={{ fontSize: "20px", width: "150px", marginLeft: "15px", marginBottom: "25px" }} id="submitButton">
                  Submit
                </Button>

              </Form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
