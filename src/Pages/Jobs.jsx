import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Amazon', location: 'New York' },
  { id: 3, title: 'Full Stack Developer', company: 'Microsoft', location: 'Seattle' }
];

const Jobs = () => {
  return (
    <Container className="mt-4">
      <h2>Available Jobs</h2>
      <Row>
        {jobs.map((job) => (
          <Col key={job.id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>{job.location}</Card.Text>
                <Button variant="primary">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Jobs;