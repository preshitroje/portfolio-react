import logo from "../assets/img/logo-pvr-removebg-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/whatsapp.svg";
import navIcon5 from "../assets/img/gmail.svg";
import { Col, Row, Container } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/preshit-roje-819933220/"
                target="_blank"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a
                href="https://www.instagram.com/preshit_roje_23/"
                target="_blank"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://github.com/preshitroje" target="_blank">
                <img src={navIcon2} alt="Git" />
              </a>
              <a href="https://wa.me/+917350606273" target="_blank">
                <img src={navIcon4} alt="Whatsapp" />
              </a>
              <a href="mailto:preshit2322@gmail.com" target="_blank">
                <img src={navIcon5} alt="Gmail" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
