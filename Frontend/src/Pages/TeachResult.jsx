import React, { useState, useEffect } from 'react';
import Piechart from '../Components/PieChart';

function TeachResult() {
    const [attempted, setAttempted] = useState(0);
    const [notAttempted, setNotAttempted] = useState(0);
    const [averagePercentage, setAveragePercentage] = useState(0);

    // Simulated data (replace with actual fetching logic)
    useEffect(() => {
        // Simulate fetching data from database or API
        // For demo purpose, using setTimeout to mimic async operation
        setTimeout(() => {
            // Replace with actual data fetching logic
            const studentsData = [
                { name: "Pass", value: 15 },
                { name: "Fail", value: 5 },
                { name: "Not Attempted", value: 10 }
            ];

            const totalStudents = studentsData.reduce((acc, curr) => acc + curr.value, 0);
            const attemptedStudents = studentsData.find(item => item.name === "Pass").value + studentsData.find(item => item.name === "Fail").value;
            const notAttemptedStudents = studentsData.find(item => item.name === "Not Attempted").value;

            setAttempted(attemptedStudents);
            setNotAttempted(notAttemptedStudents);

            // Calculate average percentage (assuming a fixed percentage for demo)
            const totalMarks = 100; // Assuming total marks are 100
            const passMarks = 40; // Assuming pass marks are 40
            const average = (passMarks / totalMarks) * 100;

            setAveragePercentage(average.toFixed(2)); // Round to 2 decimal places
        }, 1000); // Simulating delay for fetching data
    }, []);

    return (
        <div className="container-fluid mt-3">
            <div className="row">
            <h2 className='heading'>Class Result</h2>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Students Attempted Quiz</h5>
                            <p className="card-text">{attempted}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Students Not Attempted Quiz</h5>
                            <p className="card-text">{notAttempted}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Average Percentage</h5>
                            <p className="card-text">{averagePercentage}%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <Piechart />
                </div>
            </div>
        </div>
    );
}

export default TeachResult;
