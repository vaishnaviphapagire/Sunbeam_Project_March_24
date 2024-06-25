import React, { useState } from 'react';

export default function AddAnnouncement() {
    const [eventType, setEventType] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [eventDesc, setEventDesc] = useState('');

    const handleEvent = (e) => {
        e.preventDefault(); // Prevent form submission refresh

        const newEvent = {
            type: eventType,
            title: eventTitle,
            desc: eventDesc,
        };

        console.log(newEvent); // Log the new event (or send it to a backend)

        setEventType('');
        setEventTitle('');
        setEventDesc('');
        alert('Event Added');
    };

    const eventTypes = ['Event', 'Holiday', 'Announcement'];

    return (
        <div className="container py-4">
            <h2 className="heading">Add Announcement</h2>
            <form onSubmit={handleEvent}>
                <div className="mb-3">
                    <label htmlFor="EventType" className="form-label">Event Type:</label>
                    <select
                        className="form-control"
                        id="EventType"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                    >
                        <option value="" disabled>Select event type</option>
                        {eventTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>

                </div>
                <div className="mb-3">
                    <label htmlFor="EventTitle" className="form-label">Event Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="EventTitle"
                        placeholder="Enter event title"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="EventDesc" className="form-label">Event Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="EventDesc"
                        placeholder="Enter event description"
                        value={eventDesc}
                        onChange={(e) => setEventDesc(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary me-2">Add Event</button>
            </form>
        </div>
    );
}
