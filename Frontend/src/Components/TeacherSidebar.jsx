
import { Link, useNavigate } from 'react-router-dom';

export default function TeacherSidebar() {
  const navigate = useNavigate();

  const navigateToCompletedQuiz = () => {
    navigate('/completed-quiz');
  };

  return (
    <div>
      <div className="sidebar-content" style={{ marginTop: '30px' }}>
        <Link to="/TeacherDashboard" className="btn btn-lg btn-sidebar">Dashboard</Link>
      </div>
      <div className="sidebar-content">
        {/* Accordion for Quiz */}
        <div className="accordion accordion-flush" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button btn-sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Quiz
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <Link className="btn btn-lg btn-sidebar" to="/completed-quiz" onClick={navigateToCompletedQuiz}>Completed Quiz</Link>
                <Link className="btn btn-lg btn-sidebar" to="/ScheduledQuiz">Scheduled Quiz</Link>
                <Link className="btn btn-lg btn-sidebar" to="/AddQuiz">Add Quiz</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-content">
        <Link to="/TeachResult" className="btn btn-lg btn-sidebar">Result</Link>
      </div>
      <div className="sidebar-content">
        <Link to="/help" className="btn btn-lg btn-sidebar">Help</Link>
      </div>
    </div>
  );
}


{/*export default function TeacherSidebar() {

    return (
        <div>           
            <div className="sidebar-content " style={{ marginTop: '30px' }}>
                <Link className="btn btn-lg  btn-sidebar">Dashboard</Link>                
            </div>            
            <div className="sidebar-content">
                Accordian for Quiz 
                <div className="accordion accordion-flush" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button btn-sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Quiz
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <button className="btn btn-lg  btn-sidebar" to >Completed Quiz</button>
                                <button className="btn btn-lg  btn-sidebar">Scheduled Quiz</button>
                                <button className="btn btn-lg  btn-sidebar">Add Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>            
            <div className="sidebar-content">
                <Link className="btn btn-lg  btn-sidebar">Result</Link>                
            </div>           
            <div className="sidebar-content">
                <button className="btn btn-lg  btn-sidebar">Help</button>
            </div> 
        </div>
    )
}
*/}

