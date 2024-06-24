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
    },
    {
      id: 3,
      name: 'Physics Midterm',
      course: 'Physics',
      scheduledDate: '2023-03-15T00:00:00Z',
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
   
         <Container className=" mt-5 mt-3">
      <h2 className='heading'>Completed Quiz</h2>
      <Row className='mt-4'>
        {quiz.map((quiz, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="exam-card shadow mb-4 ms-2" >
              <Card.Body>
                <Card.Title><h4>{quiz.name}</h4></Card.Title>
                <hr />
                <Card.Text>
                  <strong>Course : </strong> {quiz.course}<br />
                  <strong>Scheduled : </strong> {new Date(quiz.scheduledDate).toLocaleDateString()}<br />
                  <strong>Added by : </strong> {quiz.addedBy}
                </Card.Text>
                {/* <Button variant="primary" onClick={() => viewQuestions(quiz.id)}>
                  View Questions
                </Button>  */}
                 <Link className="btn btn-bd-primary me-2" to="/QuizDetails">View Questions</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  
 
  );
};

export default CompletedQuiz;