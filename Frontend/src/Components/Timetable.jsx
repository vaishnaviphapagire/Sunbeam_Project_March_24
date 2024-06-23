function Timetable() {
    return (
        <div className="container-fluid mt-3 mb-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:00 AM - 9:00 AM</td>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Physics</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Physical Training</td>
                    </tr>
                    <tr>
                        <td>9:00 AM - 10:00 AM</td>
                        <td>Physics</td>
                        <td>Chemistry</td>
                        <td>Physics</td>
                        <td>English</td>
                        <td>Maths</td>
                        <td>Physical Training</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default Timetable