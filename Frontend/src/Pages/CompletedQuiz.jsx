import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const CompletedQuiz = () => {
  const quiz = [
    {
      id: 1,
      name: 'Math Final Exam',
      course: 'Mathematics',
      scheduledDate: '2023-05-21T00:00:00Z',
      addedBy: 'Prof. '
    },
    {
      id: 2,
      name: 'Physics Midterm',
      course: 'Physics',
      scheduledDate: '2023-03-15T00:00:00Z',
      addedBy: 'Prof. '
    }
  ];

  const viewQuestions = (quizId) => {
    console.log(`Viewing questions for exam ID: ${quizId}`);
  };

  return (
    <Container className="completed-exams mt-5">
      <h2 className='heading'>Completed Quiz</h2>
      <Row>
        {quiz.map((quiz, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="exam-card">
              <Card.Body>
                <Card.Title>{quiz.name}</Card.Title>
                <Card.Text>
                  <strong>Course:</strong> {quiz.course}<br />
                  <strong>Scheduled:</strong> {new Date(quiz.scheduledDate).toLocaleDateString()}<br />
                  <strong>Added by:</strong> {quiz.addedBy}
                </Card.Text>
                {/* <Button variant="primary" onClick={() => viewQuestions(quiz.id)}>
                  View Questions
                </Button>  */}
                 <Link className="btn btn-primary me-2" to="/QuizDetails">View Questions</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompletedQuiz;