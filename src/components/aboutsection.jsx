import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';

const AboutSection = () => {
    const [aboutDetails, setAboutDetails] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        const storedAboutDetails = localStorage.getItem('aboutDetails') || '';
        setAboutDetails(storedAboutDetails);
    }, []);
    const handleSave = () => {
        if (aboutDetails){
            localStorage.setItem('aboutDetails', aboutDetails);
            setIsEditing(false);
        }
    };
    return (
        <>
        <p className='font-medium text-lg ml-5'>About me</p>
         <div className="w-[95%] mx-5 mt-5 p-4 border border-gray-300 rounded">
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
            <div className="flex justify-between">
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
                            className="flex bg-[#6B6EFC] rounded-full w-5 h-5 justify-center items-center hover:bg-blue-600"
                    >
                            <FiEdit2 color={"white"} size={10} />
                    </button>
                )}
            </div>
        </div></>
       
    );
};
export default AboutSection;