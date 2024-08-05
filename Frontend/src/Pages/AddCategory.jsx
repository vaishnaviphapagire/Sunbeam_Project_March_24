import React, { useState } from 'react';

export default function AddCategory() {
    const [CategoryName, setCategoryName] = useState('');
    const [CategoryDesc, setCategoryDesc] = useState('');
    

    const handleCategory = (e) => {
        e.preventDefault(); // Prevent form submission refresh

        const newEvent = {
            name: CategoryName,
            desc: CategoryDesc,
        };

        console.log("new category"); // Log the new event (or send it to a backend)
        
        setCategoryName('');
        setCategoryDesc('');
        alert('Category Added');
    };

    return (
        <div className="container py-4">
            <h2 className="heading">Add Category</h2>
            <form onSubmit={handleCategory}>
                <div className="mb-3">
                    <label htmlFor="CategoryName" className="form-label">Category Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="CategoryName"
                        placeholder="Enter category name"
                        value={CategoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="CategoryDesc" className="form-label">Category Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="CategoryDesc"
                        placeholder="Enter Category Description"
                        value={CategoryDesc}
                        onChange={(e) => setCategoryDesc(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Add Category</button>
            </form>
        </div>
    );
}
