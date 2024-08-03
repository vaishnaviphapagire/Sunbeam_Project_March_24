import React, { useState, useEffect } from 'react';

export default function BatchStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from backend API
    fetch('/api/students')
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching student data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Student List Batch /</h2>
     {/* here add id of batch/name */}
      <table className="table">
        <thead className="table-warning">
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No students available</td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.contactNo}</td>
                <td>{student.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
