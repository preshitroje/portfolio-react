import Card from "react-bootstrap/Card";

export const EduCard = () => {
  return (
    <>
      <Card className="educard">
        <Card.Header as="h5">B.Tech</Card.Header>
        <Card.Body>
          <Card.Title>
            Jan 21 - May 24
            <br />
            Passionate B.Tech student with a focus on Information Technology,
            currently pursuing my degree with a CGPA of 9.27/10 from Pimpri
            Chinchwad College of Engineering, Pune.
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="educard">
        <Card.Header as="h5">HSC</Card.Header>
        <Card.Body>
          <Card.Title>
            Apr 18 - Feb 20
            <br />
            Passed HSC Board Exam from Ichalkaranji high school and junior
            college (DKTE) with 87.54 %
          </Card.Title>
        </Card.Body>
      </Card>

      <Card className="educard">
        <Card.Header as="h5">SSC</Card.Header>
        <Card.Body>
          <Card.Title>
            Jun 17 - March 18
            <br />
            Passed SSC Board Exam from Shirati Highschool Shirati with 95.00%
            Secured 2nd Rank at Board center
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
