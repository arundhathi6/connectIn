// src/components/ExperienceForm.js
import React, { useState, useEffect } from 'react';

const ExperienceForm1 = () => {
    const [experiences, setExperiences] = useState([]);
    console.log('experiences:', experiences)
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [isCurrentJob, setIsCurrentJob] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const storedExperiences = JSON.parse(localStorage.getItem('experiences')) || [];
        setExperiences(storedExperiences);
    }, []);

    const handleSave = () => {
        const newExperience = {
            id: Date.now(),
            companyName,
            location,
            isCurrentJob,
            startDate,
            endDate: isCurrentJob ? 'Present' : endDate,
            description,
        };

        const updatedExperiences = [...experiences, newExperience];
        setExperiences(updatedExperiences);
        localStorage.setItem('experiences', JSON.stringify(updatedExperiences));

        // Reset form fields
        setCompanyName('');
        setLocation('');
        setIsCurrentJob(false);
        setStartDate('');
        setEndDate('');
        setDescription('');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold mb-4">Add Experience</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                        className="mt-1 p-2 border w-full rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-1 p-2 border w-full rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={isCurrentJob}
                            onChange={() => setIsCurrentJob(!isCurrentJob)}
                            className="mr-2"
                        />
                        Currently working here
                    </label>
                </div>

                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-600">
                        Start Date
                    </label>
                    <input
                        type="month"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1 p-2 border w-full rounded-md"
                    />
                </div>

                {!isCurrentJob && (
                    <div className="mb-4">
                        <label htmlFor="endDate" className="block text-sm font-medium text-gray-600">
                            End Date
                        </label>
                        <input
                            type="month"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="mt-1 p-2 border w-full rounded-md"
                        />
                    </div>
                )}

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 border w-full rounded-md"
                    ></textarea>
                </div>

                <button
                    type="button"
                    onClick={handleSave}
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default ExperienceForm1;
