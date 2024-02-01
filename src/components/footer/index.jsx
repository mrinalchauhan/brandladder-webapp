import React from 'react'
import { Link } from 'react-router-dom';

import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

import Logo1 from '../../assests/images/logo1.png'

const Footer = () => {
    return (
        <div className='mt-3' >
            <div className='flex my-2 justify-center lg:justify-end' >
                <small className='my-auto font-medium text-lg text-orange-8 hidden lg:block' >Connect With Our Social Apps</small>
                <div className="flex mx-3">
                    <div className='border-2 border-orange-3 border-solid rounded-full p-1 text-orange-5 mx-1' >
                        <FaLinkedinIn />
                    </div>
                    <div className='border-2 border-orange-3 border-solid rounded-full p-1 text-orange-5 mx-1' >
                        <FaInstagram />
                    </div>
                    <div className='border-2 border-orange-3 border-solid rounded-full p-1 text-orange-5 mx-1' >
                        <FaWhatsapp />
                    </div>
                    <div className='border-2 border-orange-3 border-solid rounded-full p-1 text-orange-5 mx-1' >
                        <FaFacebook />
                    </div>
                    <div className='border-2 border-orange-3 border-solid rounded-full p-1 text-orange-5 mx-1' >
                        <FaTwitter />
                    </div>
                </div>
            </div>
            <div className="px-5 py-10 mx-auto w-full md:px-24 lg:px-8 bg-orange-4">
                <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="sm:col-span-2">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src={Logo1} alt="brandladder" />
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                BRANDLADDER
                            </span>
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <h4 className="text-gray-800 font-semibold text-xl">
                                Get weekly offers delivered to your inbox directly
                            </h4>
                            <small className="mt-4 text-sm text-gray-800">
                                At BrandLadder, we are more than just a digital media company; we are your partners in achieving a prominent digital presence.
                            </small>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-gray-900">
                            Quick Links
                        </span>
                        <div className="flex flex-col mt-1 space-x-3">
                            <ul>
                                <Link to='/insight' className='my-2'>
                                    <li>Insight</li>
                                </Link>
                                <Link to='/about' className='my-2'>
                                    <li>About us</li>
                                </Link>
                                <Link to='/plans' className='my-2'>
                                    <li>Our Plans</li>
                                </Link>
                                <Link to='/' className='my-2'>
                                    <li>Gallery</li>
                                </Link>
                                <Link to='/' className='my-2'>
                                    <li>Sign in</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm sm:col-span-2 ml-10">
                        <p className="text-base font-bold tracking-wide text-gray-900">
                            Made with love in India
                        </p>
                        <div className="flex">
                            <a
                                href="+91 9391523930"
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                            >
                                <FiPhone className='my-auto mx-2' /> +91 9391523930
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                href="mailto:info@lorem.mail"
                                aria-label="Our email"
                                title="Our email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                            >
                                <AiTwotoneMail className='my-auto mx-2' /> info@brandladder.co.in
                            </a>
                        </div>
                        <div className="flex">
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 flex"
                            >
                                <IoLocationOutline className='my-auto mx-2' /> High line Complex,<br />
                                Banjarahills Hyderabad, 500034, Telangana, <br />
                                INDIA
                            </a>
                        </div>
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
