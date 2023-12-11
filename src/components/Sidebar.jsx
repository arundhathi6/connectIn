import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineWork } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TbWheel } from "react-icons/tb";
const Sidebar = ({ isOpen }) => {
    const sidebarClasses = isOpen
        ? 'bg-white text-white w-64 min-h-screen'
        : 'hidden';
    return (
        <aside className={sidebarClasses}>
            {/* Your Sidebar content */}
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2 border-2 mx-3 hover:bg-[#BABBE7]'><FaHome color='#6B6EFC' /><span className='text-black font-medium'>Home</span></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2 border-2 mx-3 hover:bg-[#BABBE7]'><MdOutlineWork color='#6B6EFC' /><span className='text-black font-medium'>Job Invites</span></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2 border-2 mx-3 hover:bg-[#BABBE7]'><BsGraphUpArrow color='#6B6EFC' /><span className='text-black font-medium'>Analytics</span></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2 border-2 mx-3 hover:bg-[#BABBE7]'><CgProfile color='#6B6EFC' /><span className='text-black font-medium'>My Profile</span></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2 border-2 mx-3 hover:bg-[#BABBE7]'><TbWheel color='#6B6EFC' /><span className='text-black font-medium'>Explore</span></div>
            <div className='border-2 w-half mx-5 my-8 border-b-slate-400'></div>
            <div className='text-black font-semibold text-lg md-10 mx-2'>Communities feed</div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2  mx-3 hover:bg-[#BABBE7]'><img className='w-12 h-12 rounded-full mx-2' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with your actual image URL
                alt="Avatar" /><div><span className='text-black font-medium'>Indonesia UI designer</span><p className='text-xs text-gray-500'>734 members</p></div></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2  mx-3 hover:bg-[#BABBE7]'><img className='w-12 h-12 rounded-full mx-2' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with your actual image URL
                alt="Avatar" /><div><span className='text-black font-medium'>Indonesia UX Researcher</span><p className='text-xs text-gray-500'>125 members</p></div></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2  mx-3 hover:bg-[#BABBE7]'><img className='w-12 h-12 rounded-full mx-2' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with your actual image URL
                alt="Avatar" /><div><span className='text-black font-medium'>Prototyping club</span><p className='text-xs text-gray-500'>824 members</p></div></div>
            <div className='flex gap-2 cursor-pointer items-center my-2 py-2 px-2  mx-3 hover:bg-[#BABBE7]'><img className='w-12 h-12 rounded-full mx-2' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" // Replace with your actual image URL
                alt="Avatar" /><div><span className='text-black font-medium'>Indonesia UI designer</span><p className='text-xs text-gray-500'>345 members</p></div></div>        </aside>
    );
};
export default Sidebar;