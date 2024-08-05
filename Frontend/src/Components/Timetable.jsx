export default function Timetable() {
    return (
        <div className="container-fluid mt-3 mb-3">
            <table className="table table-striped">

                <thead>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </thead>
                <tbody>
                    {/* render the data from timetable table in database */}
                    <tr>
                        <td>8:00 AM - 9:00 AM</td>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Physics</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Physicsl Training</td>
                    </tr>

                    <tr>
                        <td>9:00 AM - 10:00 AM</td>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Physics</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Physicsl Training</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}