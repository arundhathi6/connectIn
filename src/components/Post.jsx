import React from 'react'
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import PostImg from "../assets/bg-post.png"
const Post = () => {
    return (
        <div className='mx-5'>
            <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar of Jonathan Reinink" />
                <div class="text-sm">
                    <div className='flex w-[635px] justify-between border-2'>
                        <p class="text-gray-900 leading-none font-bold">Jonathan Reinink</p>
                        <div className='flex gap-4'>
                            <button className='flex bg-[#6b6efc] rounded-full w-5 h-5 justify-center items-center'><FiEdit2 color={"white"} size={10} /></button>
                            <button className='flex bg-[#6b6efc] rounded-full w-5 h-5 justify-center items-center'><RiDeleteBin6Line color={"white"} size={10} /></button>
                        </div>
                    </div>
                    <p class="text-gray-600 text-xs">14 min ago on <span className="text-sm text-gray-950 font-medium">Figma community</span> </p>
                    <p>What is the reason guys yesterday i uploaded some type of content and they approved it and and today i try to upload they say we no longer accept this</p>
                </div>
            </div>
            <div>

            </div>
            <div className='border-2 border-grey-500  h-60 my-3'>
               <img src={PostImg} alt="" />
            </div>
            <div className='border-2 w-1/4 flex justify-between mt-[60px]'>
                <div className='flex gap-1'>
                    <BiSolidLike color={"#6b6efc"} />
                    <p className='text-[#6b6efc] text-xs font-medium'>1.9k</p>
                </div>
                <div className='flex gap-1'>
                    <MdOutlineMessage color={"#"} />
                    <p className='text-gray-600 text-xs font-medium'>45</p>
                </div>
                <div className='flex gap-1'>
                    <BsSend color={"gray"} />
                </div>
            </div>
            <div className='border border-gray-400 my-10'></div>
            <div className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                    <div className='flex w-[635px] justify-between border-2'>
                        <p className="text-gray-900 leading-none font-bold">Jonathan Reinink</p>
                        <div className='flex gap-4'>
                            <button className='flex bg-[#6b6efc] rounded-full w-5 h-5 justify-center items-center'><FiEdit2 color={"white"} size={10} /></button>
                            <button className='flex bg-[#6b6efc] rounded-full w-5 h-5 justify-center items-center'><RiDeleteBin6Line color={"white"} size={10} /></button>
                        </div>
                    </div>
                    <p className="text-gray-600 text-xs">14 min ago on <span className="text-sm text-gray-950 font-medium">Figma community</span> </p>
                    <p>What is the reason guys yesterday i uploaded some type of content</p>
                    <div className='border-2 w-1/4 flex justify-between'>
                        <div className='flex gap-1'>
                            <p className='text-[#6b6efc] text-xs font-medium'>Likes . 5</p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='text-gray-600 text-xs font-medium'>Reply . 1 Reply</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <img className="w-8 h-8 rounded-full mr-4 my-2" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar of Jonathan Reinink" />
                        <p className="text-gray-900 leading-none font-bold mx-0 my-2">Jonathan Reinink</p>
                        <p className="text-gray-600 text-xs">14 min ago on</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post