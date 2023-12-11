import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaDropbox } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaSlackHash } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CircularProgressbar, CircularProgressbarWithChildren ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from './RadialSeparators';
const Profile = () => {

  return (
    <div className=' w-1/3 h-auto bg-white relative'>
      <div className="absolute left-[33%] top-[-70px]">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with your actual image URL
          alt="Avatar"
          className="h-32 w-32 rounded-full border-4 border-white"
        />

      </div>
      <div className=' mt-16'>
        <div className='text-center'>
          <p className='text-lg '>Ayaat Khanna</p>
          <p className='text-sm text-slate-500'>UI/UX Designer</p>
          <div className='flex gap-1 justify-center'>
            <IoIosPeople size={20} />
            <p className='text-sm'>21 followers</p>
            <p className='text-sm'>43 following</p>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='flex gap-4 px-5'>
          <p className='text-base font-medium'>Make my profile visible to employees</p>
          <div class="inline-flex items-center">
            <div class="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input defaultChecked id="switch-1" type="checkbox"
                class="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-slate-400 checked:bg-[#6b6efc] peer-checked:border-[#6b6efc] peer-checked:before:bg-[#6b6efc]" />
              <label htmlFor="switch-1"
                class="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-[#6b6efc] peer-checked:before:bg-[#6b6efc]">
                <div class="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"></div>
              </label>
            </div>
          </div>
        </div>
        <p className='text-xs text-slate-500 px-5'>Your profile and career goals will appear when employers search our database for candidates</p>
      </div>
      <div className=''>
        <div className='flex gap-4 px-5'>
          <p className='text-base font-medium'>Online Links</p>
          <IoIosAddCircle size={25} color={"#6b6efc"} />
        </div>
        <p className='text-xs text-slate-500 px-5'>Add your online portfolio links to increase your profile strength</p>
      </div>
      <div className="flex rounded bg-[#f6f9ff] h-10 w-80 mx-5 mt-5 px-5 gap-5 justify-center py-3">
        <FaDropbox color={"#3f8aff"} />
        <BiLogoMediumOld color={"#00d271"} />
        <FaSlackHash color={"#d6475d"} />
      </div>
      <div className="rounded bg-[#f6f9ff] w-80 h-64 mx-5 mt-5 px-5 gap-5 justify-center py-3 ">
        <div className='flex justify-center'>
          <p className='text-md font-medium'> Wheel of Opportunities </p>
          <div className='mt-1'>
            <IoMdInformationCircleOutline color={"#bebebf"} size={20}/>
          </div>
        </div>
        <div className='w-[150px] mx-[20%] my-5'>
          <CircularProgressbarWithChildren
            value={40}
            strokeWidth={10}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: "#696cff",
              textColor: '#27277c',
              trailColor: '#dedeff',
              backgroundColor: '#3e98c7',
            })}
          >
            <div className='text-center'>
              <p className='text-[25px] font-bold text-[#27277c]'>350</p>
              <p className='text-xs font-medium'>Sphere Rating</p>
            </div>
            <RadialSeparators
              count={10}
              style={{
                background: "#fff",
                width: "2px",
                // This needs to be equal to props.strokeWidth
                height: `${10}%`
              }}
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className='px-5 py-10 text-center'>
        <div className="w-80 py-1 px-1 h-6 mb-4 bg-gray-200 rounded-full dark:bg-[#f5f5ff] ">
          <div className="h-4 bg-gradient-to-r from-[#6b6efc] to-[#800080] rounded-full  w-48"></div>
        </div>
        <p >Hurry! You are in top <span className='text-lg font-bold text-[#6b6efc]'>27%</span></p>
      </div>
    </div>
  )
}

export default Profile


