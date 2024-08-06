import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ScheduledQuiz = () => {

  const user = useSelector((state) => state.user);

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
    //depending on role display different quizes for student and teacher
    <Container className=" mt-3">
      <h2 className="heading">Scheduled Quiz</h2>
      <Row className='mt-4'>
        {exams.map((exam, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="exam-card shadow mb-4 ms-2">
              <Card.Body>
                <Card.Title><h4>{exam.name}</h4></Card.Title>
                <hr />
                <Card.Text>
                  <strong>Course : </strong> {exam.course}<br />
                  <strong>Scheduled : </strong> {new Date(exam.scheduledDate).toLocaleDateString()}<br />
                  <strong>Min Marks : </strong> {exam.minMarks}<br />
                  <strong>Max Marks : </strong> {exam.maxMarks}
                </Card.Text>
                <div className='d-flex'>
                  {user.loginRole === "Student" ?
                    (
                      <div>
                        <Button className="btn-light me-2 update" onClick={() => updateExam(exam.id)}>Attemp Quiz</Button>
                      </div>
                    ) : (
                      <div>
                        <Link className="btn btn-bd-primary me-2" to={`/view-questions/${exam.id}`}>View Questions</Link>

                        <Button className="btn-light me-2 update" onClick={() => updateExam(exam.id)}>
                       Update
                        </Button>
                        <Button className='btn-light update' onClick={() => deleteExam(exam.id)}>Delete</Button>
                      </div>
                    )

                  }
                </div>


              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ScheduledQuiz;
