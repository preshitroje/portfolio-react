import { Card } from "react-bootstrap";
import cises from "../assets/img/cises-certificate.png";
import tiaa from "../assets/img/tiaa.jpg";
import leetcode from "../assets/img/leetcode.png";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { BsFillPatchQuestionFill } from "react-icons/bs";
export const Achivement = () => {
  return (
    <>
      <div className="achivement-container">
        <Card style={{ width: "25rem" }} className="achivement-card">
          <Card.Img variant="top" src={cises} />
          <Card.Body>
            <Card.Title>Reserch Paper Publication</Card.Title>
            <p>
              A research paper on "Diabetic Retinopathy Detection in Machine
              Learning" that was accepted for publication at the CISES-2023
              conference.
            </p>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }} className="achivement-card">
          <Card.Img variant="top" src={tiaa} />
          <Card.Body>
            <Card.Title>Inter College Hackathon</Card.Title>
            <p>
              Inter College Hackathon winner 2023 held at TIAA GBS India.As we
              are leading Team PCCoE.
            </p>
          </Card.Body>
        </Card>
        <Card style={{ width: "25rem" }} className="achivement-card">
          <Card.Img variant="top" src={leetcode} />
          <Card.Body>
            <Card.Title>Competative Programming</Card.Title>
            <p>
              <SiLeetcode className="cp" /> 3<AiFillStar className="star" />{" "}
              1605 Rating
              <br />
              <SiCodechef className="cp" /> 2<AiFillStar className="star" />{" "}
              1426 Rating <br />
              <SiGeeksforgeeks className="cp" /> In TOP 50 Institute <br />
              <BsFillPatchQuestionFill className="cp" /> 500+ DSA que Solved
            </p>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
