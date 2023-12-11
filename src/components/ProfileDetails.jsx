
import React from 'react'
import Tabs from './Tab'
import Post from './Post';
import ExperienceForm1 from './exppage';
import AboutSection from './aboutsection';

const ProfileDetails = () => {
    const tabs = [
        { label: 'About', content: <AboutSection/> },
        { label: 'Skills & Certificates', content: "" },
        { label: 'Posts', content: <Post /> },
        { label: 'Spaces', content: <ExperienceForm1 /> },
        // Add more tabs as needed
    ];
    return (
        <div className=" w-2/3 h-96">
            <div className=''>
                <Tabs tabs={tabs} />
            </div>
        </div>
    )
}

export default ProfileDetails