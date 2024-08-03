import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BatchDetails() {

    const navigate=useNavigate();
    const batches = [
        { id: 1, createdOn: '2023-01-01', batchName: 'Batch A', batchCount: 30 },
        { id: 2, createdOn: '2023-02-01', batchName: 'Batch B', batchCount: 25 },
        { id: 3, createdOn: '2023-03-01', batchName: 'Batch C', batchCount: 20 },
        // Add more batches as needed
    ];

    const handleEdit = (id) => {
        // Edit logic here
        console.log(`Edit batch with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Delete logic here
        console.log(`Delete batch with id: ${id}`);
    };

    const handleStudentList = (id) => {
        // View student list logic here
        console.log(`View student list for batch with id: ${id}`);
        navigate ('/BatchStudents',{ state: { id } })
    };

    return (
        <div className="container py-4">
            <h2 className="heading">Batch Details</h2>
            <div className="table-responsive">
                <table className="table table-bordered table-hover custom-table shadow">
                    <thead className="table-warning">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Created On</th>
                            <th scope="col">Batch Name</th>
                            <th scope="col">Batch Count</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {batches.map((batch) => (
                            <tr key={batch.id}>
                                <td>{batch.id}</td>
                                <td>{batch.createdOn}</td>
                                <td>{batch.batchName}</td>
                                <td>{batch.batchCount}</td>
                                <td>
                                    <button
                                        className="btn btn-warning  me-2"
                                        onClick={() => handleEdit(batch.id)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="btn btn-info me-2"
                                        onClick={() => handleDelete(batch.id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => handleStudentList(batch.id)}
                                    >
                                        Student List
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
