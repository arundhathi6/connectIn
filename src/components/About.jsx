import React from 'react'
import { FiEdit2 } from 'react-icons/fi'

const About = () => {
    return (
        <div>
            <div className='flex justify-between px-5'>
                <p className="text-sm border-2  border-blue-700 w-[97%]">
                  
                </p>
                <button className='flex bg-[#6b6efc] rounded-full w-5 h-5 justify-center items-center'><FiEdit2 color={"white"} size={10} /></button>
            </div>
        </div>
    )
}

export default About