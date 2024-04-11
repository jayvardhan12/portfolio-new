import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import hotel from "../../Assets/Projects/hotel.jpeg";
import land from "../../Assets/Projects/land registry.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Kaaj Hotel"
              description="Hotel management system is a Software that helps hotel owners and staff to manage various aspects of their business, such as
              reservation, check-in/check-out, billing, housekeeping, inventory, and more.
              Integrate with other systems, such as online booking engines, channel managers, revenue
              management tools, and guest feedback platforms, to streamline the hotel operations and increase
              efficiency, revenue, and guest satisfaction."
              ghLink="https://github.com/jayvardhan12/Hotel-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Most-dominant-color"
              description="Project aims to extract the most dominant colors from an image using K-means clustering, an unsupervised
              learning algorithm that partitions data into k groups based on similarity.
              The project involves the following steps:
               i) Read the image and convert it into an array of RGB values.
               ii) Scale the RGB values using standardization.
               iii) Apply K-means clustering on the scaled data and assign each pixel to a cluster.
               iv) Find the cluster centroids and their corresponding colors.
               v) Plot the original image and the segmented image with the dominant colors"
              ghLink="https://github.com/jayvardhan12/Most-Dominant-Color"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={land}
              isBlog={false}
              title="Land registry system using blockchain (Present)"
              description="Developed a decentralized application using Blockchain which could overcome the short-comings of the existing process of land registry. Through Blockchain, it is possible to keep track of how property changes hand to hand. For buyers, sellers and Government registrars, it is easier to transfer the land ownership from a seller to a new buyer without any intermediaries. It provides immutability, auditability, traceability, and anonymity features which attracts the people around the globe to implement its decentralization feature in the land registry process. It also accelerates the process of registration and provides transparency to the system."
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
