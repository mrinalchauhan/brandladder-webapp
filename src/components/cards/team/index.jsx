import React from 'react'
import { Link } from 'react-router-dom';

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const TeamCard = ({ image, name, designation, twitterLink, emailLink, instaLink, facebookLink, linkedinLink }) => {
    return (
        <div className='card p-6 bg-orange-3'>
            <div className="card-content">
                <div className="grid grid-cols-5 gap-0">
                    <div className="w-48 h-64 col-span-4 overflow-hidden">
                        <img src={image} alt="" className='h-full w-full ' />
                    </div>
                    <div className="col-span-1 flex flex-row">
                        <div className='flex flex-col justify-end items-end'>
                            <div className="divider divider-vertical h-20 m-0"></div>
                        </div>
                        <div className='flex flex-col justify-end items-start space-y-4'>
                            <Link to={twitterLink} className='text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800'>
                                <BsTwitterX />
                            </Link>
                            <Link to={emailLink} className='text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800'>
                                <MdOutlineMailOutline />
                            </Link>
                            <Link to={instaLink} className='text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800'>
                                <FaInstagram />
                            </Link>
                            <Link to={facebookLink} className='text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800'>
                                <TbBrandFacebook />
                            </Link>
                            <Link to={linkedinLink} className='text-gray-500 shadow-2xl transition-all ease-in-out duration-300 hover:text-gray-800'>
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-black'>{name}</p>
                    <small className='text-black'>{designation}</small>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
