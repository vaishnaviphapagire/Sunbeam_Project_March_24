import React from 'react';
import Timetable from '../Components/Timetable';
import ResLinechart from '../Components/ResLinechat';

function TeacherDashboard() {
    return (
        <div className="container-fluid">
            <div className="row shadow mt-3">
                <h3 className="heading">Progress Report</h3> 
                <div> 
                    <ResLinechart></ResLinechart> 
                 </div> 
            </div>
            <div style={{ border: "1px solid black", padding: "10px" }}>
                <h3>Weekly Timetable</h3>
                <Timetable />
            </div>
        </div>
    );
}

export default TeacherDashboard;

