// Content.js

import React from 'react';
import Banner from './Banner';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';

const Content = () => {
    return (
        <div>
            {/* Your main content */}
            <div>
                <Banner />
            </div>
            <div className="p-2 flex gap-2" >
                <Profile />
                <ProfileDetails />
            </div>
        </div>
    );
};

export default Content;
