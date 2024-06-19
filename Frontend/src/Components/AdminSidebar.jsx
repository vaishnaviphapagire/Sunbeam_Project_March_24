import { Link } from "react-router-dom";

export default function AdminSidebar() {

    return (
        <div>           
            <div className="sidebar-content " style={{ marginTop: '30px' }}>
                <button className="btn btn-lg  btn-sidebar">Dashboard</button>                
            </div>            
            <div className="sidebar-content">
                {/* Accordian for Quiz */}
                <div className="accordion accordion-flush" id="accordionExample" >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Registration
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <button className="btn btn-lg  btn-sidebar">Teacher </button>
                                <button className="btn btn-lg  btn-sidebar">Student</button>
                            </div>
                        </div>
                    </div>
                </div>               
            </div> 
            <div className="sidebar-content">
                <button className="btn btn-lg  btn-sidebar">Add Announcement</button>                
            </div>  
            <div className="sidebar-content">
                <button className="btn btn-lg  btn-sidebar">Add Timetable</button>                
            </div>  
            <div className="sidebar-content">
                <button className="btn btn-lg  btn-sidebar">Add Category</button>                
            </div>            
        </div>
    )
}