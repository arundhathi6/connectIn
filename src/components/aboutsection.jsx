// src/components/AboutSection.js
import React, { useState, useEffect } from 'react';

const AboutSection = () => {
    const [aboutDetails, setAboutDetails] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedAboutDetails = localStorage.getItem('aboutDetails') || '';
        setAboutDetails(storedAboutDetails);
    }, []);

    const handleSave = () => {
        localStorage.setItem('aboutDetails', aboutDetails);
        setIsEditing(false);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>

            {isEditing ? (
                <textarea
                    value={aboutDetails}
                    onChange={(e) => setAboutDetails(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows="4"
                ></textarea>
            ) : (
                <p className="mb-4">{aboutDetails}</p>
            )}

            <div className="flex justify-end">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white p-2 rounded-md mr-2 hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default AboutSection;
