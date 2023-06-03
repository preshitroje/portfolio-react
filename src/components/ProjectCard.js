import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const ProjectCard = ({ title, description, imgUrl, srcUrl }) => {
  const handleClick = () => {
    window.open(srcUrl, "_blank");
  };
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <button className="project-src" onClick={handleClick}>
            Git
          </button>
        </div>
      </div>
    </Col>
  );
};
