import { useState } from "react";
// import contactImg from "../assets/img/contact-img.svg";
import contactImg from "../assets/img/connect-us.svg";
import { Container, Row, Col } from "react-bootstrap";
export const Contact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("send");

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    setButtonText("sending...");
    const { firstName, lastName, email, phone, message } = user;

    if (firstName && lastName && email && phone && message) {
      const res = await fetch(
        "https://contact-us-968d2-default-rtdb.firebaseio.com/contactus.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
          }),
        }
      );
      setButtonText("Send");
      if (res) {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
      alert("Data sent sussess ");
    } else {
      alert("Oops Please fill all details");
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form method="POST">
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    placeholder="First Name"
                    onChange={getUserData}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    placeholder="Last Name"
                    onChange={getUserData}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    placeholder="Phone No"
                    onChange={getUserData}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="abc@gmail.com"
                    onChange={getUserData}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    name="message"
                    value={user.message}
                    placeholder="Message"
                    onChange={getUserData}
                  ></textarea>
                  <br />
                  <button type="submit" onClick={postData}>
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// import { useState } from "react";
// // import contactImg from "../assets/img/contact-img.svg";
// import contactImg from "../assets/img/connect-us.svg";
// import { Container, Row, Col } from "react-bootstrap";
// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);

//   const [buttonText, setButtonText] = useState("send");
//   const [status, setStatus] = useState({});
//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: "Message sent successfully" });
//     } else {
//       setStatus({
//         succes: false,
//         message: "Something went wrong, please try again later.",
//       });
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col md={6}>
//             <img src={contactImg} />
//           </Col>
//           <Col md={6}>
//             <h2>Get In Touch</h2>
//             <form onSubmit={handleSubmit}>
//               <Row>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) => onFormUpdate("firstName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.lastName}
//                     placeholder="Last Name"
//                     onChange={(e) => onFormUpdate("lastName", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone No"
//                     onChange={(e) => onFormUpdate("phone", e.target.value)}
//                   />
//                 </Col>
//                 <Col sm={6} className="px-1">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="abc@gmail.com"
//                     onChange={(e) => onFormUpdate("email", e.target.value)}
//                   />
//                 </Col>
//                 <Col>
//                   <textarea
//                     rows="6"
//                     value={formDetails.message}
//                     placeholder="Message"
//                     onChange={(e) => onFormUpdate("message", e.target.value)}
//                   ></textarea>
//                   <button type="submit">
//                     <span>{buttonText}</span>
//                   </button>
//                 </Col>
//                 {status.message && (
//                   <Col>
//                     <p
//                       className={
//                         status.success === false ? "danger" : "success"
//                       }
//                     >
//                       {status.message}
//                     </p>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
