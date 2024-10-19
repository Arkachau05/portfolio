import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import MovieWorld from "../assets/projects/MovieWorld.png"
import WeatherApp from "../assets/projects/WeatherApp.png"
import Serenityspace from "../assets/projects/SerenitySpace.png"
import chatapp from "../assets/projects/WhisperNest.png"
import projectimg from "../assets/projects/project.jpeg"
import feedhunger from "../assets/projects/feedhunger.png"
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MovieWorld}
              isBlog={false}
              title="MovieWorld"
              description="This is a Movie Streaming website where user can select their favourite Movie or series and can see the information and details about it. Features:
Real-time movies and series using API,
User Authentication."
              ghLink="https://github.com/Arkachau05/MovieWorld"
              demoLink="https://movieworld-05.onrender.com/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="WeatherApp"
              description="Stay updated with real-time weather information using our React weather app, powered by a reliable REST API. Experience an intuitive interface that makes tracking the weather simple and enjoyable, wherever you are!"
              ghLink="https://github.com/Arkachau05/WeatherApp"
              demoLink="https://weatherforecast-arkadyuti.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Serenityspace}
              isBlog={false}
              title="SerenitySpace"
              description="A website which will reduce your stress and depression. It will basically include AI driven support,community support and motivated resources in form of qoutes,reels and tedtalks.
              Features
• Talk to Esmo, our AI chatbot.

• Get videos and and quotes which will hunt down your depression.

• Join our discord community and meet new people.

• Contact us for further help.

"
              ghLink="https://github.com/Arkachau05/Serenityspace"
              demoLink="https://serenityspaceorg.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChattingApp-WhisperNest"
              description="This ChatApp is a modern chat application designed to facilitate real-time communication between users. It features one-on-one messaging, group chats, and a user-friendly interface. Built with [MERN stack], ChatApp offers a seamless and engaging chat experience. Features Real-time messaging One-on-one and group chats User authentication and management File sharing Emoji and media support Notifications!"
              ghLink="https://github.com/Arkachau05/ChattingApp"
              demoLink="https://chattingapp-whispernest.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={feedhunger}
              isBlog={false}
              title="FeedHunger"
              description="Join the fight against hunger with our donation platform, where every contribution makes a difference. Together, we can create a hunger-free community and empower lives through compassion and generosity, turning hope into action!"
              ghLink="https://github.com/Arkachau05/Donation-FeedHunger"
              demoLink="https://donation-feed-hunger.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectimg}
              isBlog={false}
              title="Jobseeking-LookJobber"
              description="Uncover your next career opportunity or connect with the ideal candidate on our dynamic job-seeking platform, crafted with the MERN stack. Enjoy a seamless experience that brings job seekers and employers together in one intuitive space!
              Discover your next opportunity or find the perfect candidate on our job-seeking platform, built with the MERN stack. Connect seamlessly with job seekers and employers in one easy-to-use site!"
              ghLink="https://github.com/Arkachau05/JOB-Seeking-Website"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  )
}

export default Projects