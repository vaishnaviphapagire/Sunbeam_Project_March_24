import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from '../Features/UserSlice';
export default function StudentSidebar() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    // function OnDashboard(){
    //     navigate('/StudentDashboard')
    // }
    const onLogout = () => {
        dispatch(logoutAction());
        navigate('/Login');
    };
    return (
        <div>           
            <div className="sidebar-content " style={{ marginTop: '30px' }}>
            <Link className="btn btn-lg  btn-sidebar" to='/StudentDashboard'>Dashboard</Link>                               
            </div>            
            <div className="sidebar-content">
                {/* Accordian for Quiz */}
                <div className="accordion accordion-flush" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button btn-sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Quiz
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <Link className="btn btn-lg  btn-sidebar" to='/CompletedQuiz'>Completed Quiz</Link>
                                <Link className="btn btn-lg  btn-sidebar" to='/ScheduledQuiz'>Scheduled Quiz</Link>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>            
            <div className="sidebar-content">
                <Link className="btn btn-lg  btn-sidebar" to=''>Result</Link>                
            </div>           
            <div className="sidebar-content">
            <Link className="btn btn-lg  btn-sidebar" to='/Help'>Help</Link>                
            </div>

            <div className="sidebar-content">
                <button className="btn btn-lg btn-sidebar" style={{ color: 'black' }} onClick={onLogout}>Logout</button>

            </div>
        </div>
    )
}