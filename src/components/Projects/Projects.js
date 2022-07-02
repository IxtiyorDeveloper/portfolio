import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import akbarconsulting from "../../Assets/Projects/akbarconsulting.PNG";
import dtmtrucking from "../../Assets/Projects/dtmtrucking.PNG";
import editor from "../../Assets/Projects/codeEditor.png";
import daftar from "../../Assets/Projects/daftar.PNG";
import dubaibest from "../../Assets/Projects/dubaibest.PNG";
import bonus from "../../Assets/Projects/bonus.PNG";

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
              imgPath={daftar}
              isBlog={false}
              title="Daftar.uz"
              description="Point of sales system which is developed in order to manage sale system in big markets in Tashkent.It has many benefits for customers and sellers."
              demoLink="daftar.uz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonus}
              isBlog={false}
              title="Bonus system"
              description="It was created in order to give and take bonuses for point of sales system.It is really big system like daftar.uz and they perform great action together."
              demoLink="bonus-daftar.uz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="EverbestLab"
              description="EverbestLab's official website which gives detailed information about the company and projects"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akbarconsulting}
              isBlog={false}
              title="Akbar consulting official website"
              description="Official website for consulting company named Akbar consulting, it is really famous in Uzbekistan and helped many pupils to become students"
              demoLink="https://akbarconsulting.uz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dubaibest}
              isBlog={false}
              title="Website for car business company"
              description="This website helps people to gain essential information about the company and its services"
               demoLink="https://www.dubaibestcars.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dtmtrucking}
              isBlog={false}
              title="Dtm trucking company"
              description="Trucking logistics company in the USA asked us to develop official website and we've done this to visualize their services"
              demoLink="https://dtmtruckinginc.us"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
