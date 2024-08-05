import React, { useState } from 'react';

const initialTimetable = [
    { time: '8:00 AM - 9:00 AM', Monday: '', Tuesday: 'Chemistry', Wednesday: 'Physics', Thursday: 'English', Friday: 'Maths', Saturday: 'Physical Training' },
    { time: '9:00 AM - 10:00 AM', Monday: 'Physics', Tuesday: 'Chemistry', Wednesday: 'Physics', Thursday: 'English', Friday: 'Maths', Saturday: 'Physical Training' },
];

export default function AddTimetable() {
    const [timetable, setTimetable] = useState(initialTimetable);

    const handleChange = (rowIndex, day, value) => {
        const newTimetable = timetable.map((row, index) => {
            if (index === rowIndex) {
                return { ...row, [day]: value };
            }
            return row;
        });
        setTimetable(newTimetable);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(timetable);
        alert('Timetable saved successfully!');
    };

    return (
        <div className="container">
            <h2 className="mt-4">Weekly Timetable</h2>
            <form onSubmit={handleSubmit}>
                <table className="table table-bordered mt-3">
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
                        {timetable.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{row.time}</td>
                                {Object.keys(row).map((day, colIndex) => {
                                    if (day === 'time') return null;
                                    return (
                                        <td key={colIndex}>
                                            <input
                                                type="text"
                                                value={row[day]}
                                                onChange={(e) => handleChange(rowIndex, day, e.target.value)}
                                                className="form-control"
                                            />
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="submit" className="btn btn-success mb-3">Save Timetable</button>
            </form>
        </div>
    );
}

