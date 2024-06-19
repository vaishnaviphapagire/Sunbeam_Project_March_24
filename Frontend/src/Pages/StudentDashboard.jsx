import Linechart from "../Components/Linechart"
import Timetable from "../Components/Timetable"

function StudentDashboard() {

    return (
        <div className="container-fluid">

            <div className="row shadow mt-3">
                <h3 className="heading">Progress Report</h3>
                <div>
                    <Linechart></Linechart>
                </div>
            </div>

            <div class="table-responsive row shadow mt-3" >
                <h3 className="heading">Weekly Timetable</h3>
                <Timetable></Timetable>
            </div>
        </div>
    )
}
export default StudentDashboard

