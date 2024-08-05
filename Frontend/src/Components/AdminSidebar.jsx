// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function AdminSidebar() {
//     const navigate=useNavigate();

//     const navigateToAnnouncement=()=>{
//         navigate('/AddAddAnnouncement')
//     }
//     const navigateToCategory=()=>{
//         navigate('/AddCategory')
//     }

//     return (
//         <div>           
//             <div className="sidebar-content " style={{ marginTop: '30px' }}>
//             <Link className="btn btn-lg  btn-sidebar" to='/AdminDashboard'>Dashboard</Link>                   
//             </div>            
//             <div className="sidebar-content">
//                 {/* Accordian for Quiz */}
//                 <div className="accordion accordion-flush" id="accordionExample" >
//                     <div className="accordion-item">
//                         <h2 className="accordion-header">
//                             <button className="accordion-button btn-sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 Registration
//                             </button>
//                         </h2>
//                         <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
//                             <div className="accordion-body" >
//                             <Link className="btn btn-lg  btn-sidebar" to=''>Teacher</Link>
//                             <Link className="btn btn-lg  btn-sidebar" to=''>Student</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>               
//             </div> 
//             <div className="sidebar-content">
//                 <Link className="btn btn-lg  btn-sidebar" to="/AddAnnouncement" onClick={navigateToAnnouncement}>Add Announcement</Link>                
//             </div>  
//             <div className="sidebar-content">
//                 <Link className="btn btn-lg  btn-sidebar" to="" >Add Timetable</Link>                
//             </div>  
//             <div className="sidebar-content">
//                 <Link className="btn btn-lg  btn-sidebar" to="/AddCategory" onClick={navigateToCategory}>Add Category</Link>                
//             </div>            
//         </div>
//     )
// }

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const navigateToRegister = (role) => {
        navigate('/Register', { state: { role } });
    };

    return (
        <div>           
            <div className="sidebar-content" style={{ marginTop: '30px' }}>
                <Link className="btn btn-lg btn-sidebar" to='/AdminDashboard'>Dashboard</Link>                   
            </div>            
            <div className="sidebar-content">
                <div className="accordion accordion-flush" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button btn-sidebar" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Registration
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <button className="btn btn-lg btn-sidebar" onClick={() => navigateToRegister('Teacher')}>Teacher</button>
                                <button className="btn btn-lg btn-sidebar" onClick={() => navigateToRegister('Student')}>Student</button>
                            </div>
                        </div>
                    </div>
                </div>               
            </div> 
            <div className="sidebar-content">
                <Link className="btn btn-lg btn-sidebar" to="/AddAnnouncement">Add Announcement</Link>                
            </div>  
            <div className="sidebar-content">
                <Link className="btn btn-lg btn-sidebar" to="/AddTimeTable">Add Timetable</Link>                
            </div>  
            <div className="sidebar-content">
                <Link className="btn btn-lg btn-sidebar" to="/AddCategory">Add Category</Link>                
            </div>    
            <div className="sidebar-content">
                <Link className="btn btn-lg btn-sidebar" to="/AddBatch">Add Batch</Link>                
            </div>   
            <div className="sidebar-content">
                <Link className="btn btn-lg btn-sidebar" to="/BatchDetails">View Batch Details</Link>                
            </div>      
        </div>
    );
}
