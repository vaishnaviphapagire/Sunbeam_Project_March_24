import React, { useState } from 'react';


export default function AddBatch() {
    const [batchName, setBatchName] = useState('');
    const [batchCount, setBatchCount] = useState('');
  
    const handleEvent = (e) => {
        e.preventDefault(); // Prevent form submission refresh

        const newBatch = {
            name: batchName,
            count: batchCount,
        };

        console.log(newBatch); // Log the new event (or send it to a backend)

        setBatchCount('');
        setBatchName('');
        alert('Event Added');
    };

    const eventTypes = ['Event', 'Holiday', 'Announcement'];

    return (
        <div className="container py-4">
            <h2 className="heading">Add Batch</h2>
            <form onSubmit={handleEvent}>
            <div className="mb-3">
                    <label htmlFor="BatchName" className="form-label">Batch name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="BatchaName"
                        placeholder="Enter event title"
                        value={batchName}
                        onChange={(e) => setBatchName(e.target.value)}
                    />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="batchCount" className="form-label">Batch Count :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="BatchCount"
                        placeholder="Enter event title"
                        value={batchCount}
                        onChange={(e) => setBatchCount(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Add Batch</button>
            </form>
        </div>
    );
}
