import React, { useState, useEffect } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { IoMdAdd } from "react-icons/io";
import { IoBagHandleSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
const AboutSection = () => {
    const [aboutDetails, setAboutDetails] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        const storedAboutDetails = localStorage.getItem('aboutDetails') || '';
        setAboutDetails(storedAboutDetails);
    }, []);
    const handleSave = () => {
        if (aboutDetails) {
            localStorage.setItem('aboutDetails', aboutDetails);
            setIsEditing(false);
        }
    };
    return (
        <div>
            <div className="w-[95%] mx-5  mt-[-10px] p-4   bg-white rounded">
                {isEditing ? (
                    <textarea
                        value={aboutDetails}
                        onChange={(e) => setAboutDetails(e.target.value)}
                        className="w-full p-2  rounded-md"
                        rows="4"
                    ></textarea>
                ) : (""
                    // <p className="mb-4">{aboutDetails}</p>
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
                        <div className='flex justify-between px-5 w-full'>
                            <p className="  w-full">
                                {aboutDetails?aboutDetails:'Ayaat Khanna UI/UX Designer 21 followers 43 following Make my profile visible to employees Your profile and career goals will appear when employers search our database for candidates'}
                            </p>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="flex bg-[#6B6EFC] rounded-full w-5 h-5 justify-center items-center hover:bg-blue-600"
                            >
                                <FiEdit2 color={"white"} size={10} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className='mx-5  text-lg font-bold text-[#161649] p-3 '>
                Experience
            </div>
            <div className='rounded bg-white gap-2 flex mx-5 p-4'>
                <div className='  w-[80px] flex justify-center '>
                    <div className='rounded-full bg-[#D9DAFF] flex justify-center items-center w-11 h-11'>
                        <IoBagHandleSharp color={"#6B6EFC"} size={30} />
                    </div>
                </div>
                <div className='  w-full'>
                    <p className='pr-3 text-lg font-bold'>Crisis Intrevention Specialist</p>
                    <p className='pr-3 text-sm font-semibold'>January 2023 - present</p>
                    <p className='pr-3 text-xs text-gray-400'> icoders - Ahmedabad, India</p>
                    <p className='pr-3 text-sm font-semibold'>Work with clients and web studios as freelancer. Work Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda porro magnam, nostrum, a temporibus deleniti aut itaque commodi placeat fugiat eaque nam tenetur hic blanditiis voluptatum tempore, earum deserunt.</p>
                </div>
                <div className='  w-[80px] flex gap-2'>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex bg-[#6B6EFC] rounded-full w-5 h-5 justify-center items-center hover:bg-blue-600"
                    >
                        <IoMdAdd color={"white"} size={15} />
                    </button>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex bg-[#6B6EFC] rounded-full w-5 h-5 justify-center items-center hover:bg-blue-600"
                    >
                        <FiEdit2 color={"white"} size={10} />
                    </button>
                </div>
            </div>
            <div className='mx-5 text-lg font-bold text-[#161649] p-3 '>
                Education
            </div>
            <div className=' bg-white gap-2 flex mx-5 rounded p-4'>
                <div className='  w-[80px] flex justify-center '>
                    <div className='rounded-full bg-[#D9DAFF] flex justify-center items-center w-11 h-11'>
                        <FaGraduationCap color={"#6B6EFC"} size={30} />
                    </div>
                </div>
                <div className='  w-full'>
                    <p className='pr-3 text-lg font-bold'>B.E- electronics & Telecommunication Engg. </p>
                    <p className='pr-3 text-sm font-semibold'>Aug 2015 - June 2029</p>
                    <p className='pr-3 text-xs text-gray-400'>SBJITMR -Nagpur, India</p>
                    {/* <p className='text-sm font-semibold'>Work with clients and web studios as freelancer. Work Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda porro magnam, nostrum, a temporibus deleniti aut itaque commodi placeat fugiat eaque nam tenetur hic blanditiis voluptatum tempore, earum deserunt.</p> */}
                </div>
                <div className='  w-[80px] flex gap-2'>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex bg-[#6B6EFC] rounded-full w-5 h-5 justify-center items-center hover:bg-blue-600"
                    >
                        <IoMdAdd color={"white"} size={15} />
                    </button>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex bg-[#6B6EFC] rounded-full w-5 h-5 justify-center items-center hover:bg-blue-600"
                    >
                        <FiEdit2 color={"white"} size={10} />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AboutSection;