import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import NoteTaker from "../assets/img/note-maker.webp";
import docImg from "../assets/img/doc-appointemt-system.jpg";
import textImg from "../assets/img/text-utils.png";
import houseImg from "../assets/img/house-price-prediction.png";
import wheatherImg from "../assets/img/wheather-app.jpg";
import authImg from "../assets/img/authentication.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
import TrackVisibility from "react-on-screen";
import { EduCard } from "./EduCard";
import { Achivement } from "./Achivement";

export const Projects = () => {
  const projects = [
    {
      title: "BookMyDoctor",
      description: "Full stack MERN app for Docters Appointement System",
      imgUrl: docImg,
      srcUrl: "https://github.com/preshitroje/doc-appointment-system-mern",
    },
    {
      title: "Text Tune",
      description:
        "A React App to manipulate Text, we can add text by speech also",
      imgUrl: textImg,
      srcUrl: "https://github.com/preshitroje/text-tune",
    },
    {
      title: "Wheather App",
      description: "React app for wheather forcasting with real-time API data",
      imgUrl: wheatherImg,
      srcUrl: "https://weathernow-forcasting.netlify.app/",
    },
    {
      title: "PricePrediction",
      description:
        "Benguluru house price prediction using Data scienece and ML",
      imgUrl: houseImg,
      srcUrl: "https://github.com/preshitroje/PricePrediction-ML",
    },
    {
      title: "MERN-Auth",
      description: "MERN app for JWT authentication using Nodejs & expressJS",
      imgUrl: authImg,
      srcUrl: "https://github.com/preshitroje/authenticationSystem.github.io",
    },
    {
      title: "Note Taker",
      description:
        "Responsive Note kipper created using HTML , CSS , JS and Bootstrap",
      imgUrl: NoteTaker,
      srcUrl: "https://preshitroje.github.io/noteMaker.github.io/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About My Work</h2>
                  <p>
                    With a strong foundation in programming languages like HTML,
                    CSS, Javascript and expertise in web development
                    technologies such as ReactJS, NodeJS, and MongoDB. <br />I
                    created some project along with some of my key Achivements.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achivements</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <EduCard />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Achivement />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
// import projImg1 from "../assets/img/project-img1.png";
// import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// export const Project = () => {
//   const projects = [
//     {
//       title: "NoteTaker",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, expedita. Quo unde voluptas nisi delectus aliquam, esse sit consectetur incidunt reprehenderit maxime quidem suscipit ratione nam dolores molestias saepe enim?",
//       imgUrl: projImg1,
//     },
//     {
//       title: "NoteTaker",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, expedita. Quo unde voluptas nisi delectus aliquam, esse sit consectetur incidunt reprehenderit maxime quidem suscipit ratione nam dolores molestias saepe enim?",
//       imgUrl: projImg1,
//     },
//     {
//       title: "NoteTaker",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, expedita. Quo unde voluptas nisi delectus aliquam, esse sit consectetur incidunt reprehenderit maxime quidem suscipit ratione nam dolores molestias saepe enim?",
//       imgUrl: projImg1,
//     },
//     {
//       title: "NoteTaker",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, expedita. Quo unde voluptas nisi delectus aliquam, esse sit consectetur incidunt reprehenderit maxime quidem suscipit ratione nam dolores molestias saepe enim?",
//       imgUrl: projImg1,
//     },
//     {
//       title: "NoteTaker",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, expedita. Quo unde voluptas nisi delectus aliquam, esse sit consectetur incidunt reprehenderit maxime quidem suscipit ratione nam dolores molestias saepe enim?",
//       imgUrl: projImg1,
//     },
//   ];
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col>
//             <h2>Projects</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo
//               doloribus, laboriosam inventore dolores dolor repellendus, iure
//               provident commodi optio, et perferendis pariatur expedita
//               repellat.
//             </p>
//             <Tab.Container id="projects-tabs" defaultActiveKey="first">
//               <Nav
//                 variant="pills"
//                 className="nav-pills mb-5 justify-content-center align-items-center"
//                 id="pills-tab"
//               >
//                 <Nav.Item>
//                   <Nav.Link eventKey="first">Project</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="second">Education</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link eventKey="third">Achivments</Nav.Link>
//                 </Nav.Item>
//               </Nav>
//               <Tab.Content>
//                 <Tab.Pane eventKey="first">
//                   <Row>
//                     {projects.map((project, index) => {
//                       return <ProjectCard key={index} {...project} />;
//                     })}
//                   </Row>
//                 </Tab.Pane>
//                 <Tab.Pane eventKey="first">Lorem ipsum</Tab.Pane>
//                 <Tab.Pane eventKey="first">Lorem ipsum</Tab.Pane>
//               </Tab.Content>
//             </Tab.Container>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} />
//     </section>
//   );
// };
