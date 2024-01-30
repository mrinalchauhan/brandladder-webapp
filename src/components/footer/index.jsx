import React from 'react'
import { Link } from 'react-router-dom';

import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

import Logo1 from '../../assests/images/logo1.png'

const Footer = () => {
    return (
        <div>
            <div className='px-6 py-12 bg-orange-4'>
                <div className="container grid grid-cols-5 mx-auto">
                    <div className="flex flex-col col-span-2 mx-auto">
                        <div className="flex">
                            <img src={Logo1} alt="BrandLadder" />
                            <h1 className='my-auto text-5xl font-bold' >BrandLadder</h1>
                        </div>
                        <h4 className='text-xl font-semibold my-2' >Get weekly offers delivered to your inbox directly</h4>
                        <p className='text-sm' >
                            At BrandLadder, we are more than just a digital media company; we are your partners in achieving a prominent digital presence.
                        </p>
                    </div>
                    <div className="flex flex-col  col-span-1 mx-auto">
                        <h3 className='text-xl font-semibold' >Quick Links</h3>
                        <ul>
                            <li>
                                <Link to='/insight' >
                                    Insight
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    About us
                                </Link>
                            </li>
                            <li>Gallery</li>
                            <li>Sign in</li>
                        </ul>
                    </div>
                    <div className="flex flex-col  col-span-2 mx-auto">
                        <h3 className='text-xl font-semibold' >Made with love in India</h3>
                        <ul>
                            <li className='flex' >
                                <AiTwotoneMail className='my-auto mx-2' /> contact@brandladder.co.in
                            </li>
                            <li className='flex' >
                                <FiPhone className='my-auto mx-2' /> +91 9391523930
                            </li>
                            <li className='flex' >
                                < IoLocationOutline className='my-auto mx-2' />
                                High line Complex, <br /> Banjarahills Hyderabad, 500034, Telangana, <br /> INDIA
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-orange-3 py-3 mx-auto text-center'>
                <h4 className='font-semibold text-sm' >© 2023 Brandladder™. All Rights Reserved.</h4>
            </div>
        </div>
    )
}

export default Footer
