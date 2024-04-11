import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jay Vardhan Chaudhary </span>
            from <span className="purple"> Pranveer Singh Institute Of Technology, Kanpur.</span>
            <br />
            I am currently pursuing bachelor of Technology in Information Technology.
            <br />
            I have done my schooling at St. Mary's Inter College, Etawah.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs and biography of  famous people
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My greatest competition is, only me".{" "}
          </p>
          <footer className="blockquote-footer">Jay Vardhan Chaudhary</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
