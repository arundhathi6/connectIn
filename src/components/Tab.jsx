// Tabs.js

import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="flex justify-between pr-44 pl-6 w-auto border-b-2 border-gray-300">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer p-4 ${activeTab === index ? 'border-b-2 border-blue-500' : ''
                            }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="mt-4">{tabs[activeTab].content}</div>
        </div>
    );
};

export default Tabs;
