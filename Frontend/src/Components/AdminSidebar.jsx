import { Link } from "react-router-dom";

export default function AdminSidebar() {

    return (
        <div>           
            <div className="sidebar-content " style={{ marginTop: '30px' }}>
            <Link className="btn btn-lg  btn-sidebar" to='/AdminDashboard'>Dashboard</Link>                   
            </div>            
            <div className="sidebar-content">
                {/* Accordian for Quiz */}
                <div className="accordion accordion-flush" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button btn-sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Registration
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                            <Link className="btn btn-lg  btn-sidebar" to=''>Teacher</Link>
                            <Link className="btn btn-lg  btn-sidebar" to=''>Student</Link>
                            </div>
                        </div>
                    </div>
                </div>               
            </div> 
            <div className="sidebar-content">
                <Link className="btn btn-lg  btn-sidebar">Add Announcement</Link>                
            </div>  
            <div className="sidebar-content">
                <Link className="btn btn-lg  btn-sidebar">Add Timetable</Link>                
            </div>  
            <div className="sidebar-content">
                <Link className="btn btn-lg  btn-sidebar">Add Category</Link>                
            </div>            
        </div>
    )
}