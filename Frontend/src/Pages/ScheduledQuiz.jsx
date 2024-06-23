import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


const ScheduledQuiz = () => {
  const exams = [
    {
      id: 1,
      name: 'Math Final Exam',
      course: 'Mathematics',
      scheduledDate: '2024-07-10T00:00:00Z',
      minMarks: 30,
      maxMarks: 100,
    },
    {
      id: 2,
      name: 'Physics Midterm',
      course: 'Physics',
      scheduledDate: '2024-08-15T00:00:00Z',
      minMarks: 25,
      maxMarks: 100,
    },
    // Add more exams as needed
  ];

  const viewQuestions = (examId) => {
    console.log(`Viewing questions for exam ID: ${examId}`);
  };

  const updateExam = (examId) => {
    console.log(`Updating exam ID: ${examId}`);
  };

  const deleteExam = (examId) => {
    console.log(`Deleting exam ID: ${examId}`);
  };

  return (
    <Container className="upcoming-exams mt-5">
      <h2 className="heading">Upcoming Exams</h2>
      <Row>
        {exams.map((exam, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="exam-card">
              <Card.Body>
                <Card.Title>{exam.name}</Card.Title>
                <Card.Text>
                  <strong>Course:</strong> {exam.course}<br />
                  <strong>Scheduled:</strong> {new Date(exam.scheduledDate).toLocaleDateString()}<br />
                  <strong>Min Marks:</strong> {exam.minMarks}<br />
                  <strong>Max Marks:</strong> {exam.maxMarks}
                </Card.Text>
                <Link className="btn btn-primary me-2" to={`/view-questions/${exam.id}`}>View Questions</Link>
                <Button variant="warning" className="me-2" onClick={() => updateExam(exam.id)}>Update</Button>
                <Button variant="danger" onClick={() => deleteExam(exam.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ScheduledQuiz;
