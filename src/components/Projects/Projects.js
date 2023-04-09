import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weather from "../../Assets/Projects/weatherapp.png";
import chatify from "../../Assets/Projects/chatify.png";
import filesharing from "../../Assets/Projects/filesharing.png";
import instaclone from "../../Assets/Projects/instaclone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaclone}
              isBlog={false}
              title="Instagram Clone"
              description="This is an Instagram clone app built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to post photos, follow other users, like and comment on posts, and view their profile and feed."
              ghLink="https://github.com/SashGoel/instagram-clone.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filesharing}
              isBlog={false}
              title="File Sharing App"
              description="This is a file sharing app built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app allows users to upload, download, and share files with other users."
              ghLink="https://github.com/SashGoel/file-sharing-app.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="weather app that uses HTML, CSS, and JavaScript to display the current weather information of the location, including temperature, weather condition, and wind speed."
              ghLink="https://github.com/SashGoel/weather-app.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
