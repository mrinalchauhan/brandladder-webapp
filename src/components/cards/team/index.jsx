import React from 'react'
import { Link } from 'react-router-dom';
import FounderImg from '../../../assests/images/feature-img/founder-img.png'

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const TeamCard = ({ navlink }) => {
    return (
        <div className='card p-6 bg-inherit'>
            <div className="card-content">
                <div className="grid grid-cols-7 gap-0">
                    <div className="w-56 h-72 col-span-6 border-2 overflow-hidden">
                        <img src={FounderImg} alt="" className='h-full w-full ' />
                    </div>
                    <div className="col-span-1 flex flex-row">
                        <div className='flex flex-col justify-end items-end'>
                            <div className="divider divider-vertical h-20 m-0"></div>
                        </div>
                        <div className='flex flex-col justify-end items-start'>
                            <Link to={navlink} className='text-gray-400 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-600 mb-2'>
                                <BsTwitterX />
                            </Link>
                            <Link to={navlink} className='text-gray-400 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-600 my-2'>
                                <MdOutlineMailOutline />
                            </Link>
                            <Link to={navlink} className='text-gray-400 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-600 my-2'>
                                <FaInstagram />
                            </Link>
                            <Link to={navlink} className='text-gray-400 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-600 my-1'>
                                <TbBrandFacebook />
                            </Link>
                            <Link to={navlink} className='text-gray-400 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-600 mt-2'>
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-black'>name</p>
                    <small className='text-black'>designation</small>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
