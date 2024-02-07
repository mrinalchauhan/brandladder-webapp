import React from 'react'
import Wave from 'react-wavify'
import { Link } from 'react-router-dom';

import { VscSignIn } from "react-icons/vsc";
import { IoPricetagsOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding, FaLinkedinIn, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { GrServices, GrArticle } from "react-icons/gr";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

import Logo1 from '../../assests/images/full-logo.png'

const Footer = () => {

    const socials = [
        {
            link: '/',
            icon: <FaLinkedinIn />,
        },
        {
            link: '/',
            icon: <FaInstagram />,
        },
        {
            link: '/',
            icon: <FaWhatsapp />,
        },
        {
            link: '/',
            icon: <FaFacebook />,
        },
    ]

    return (
        <footer className='mt-5' >
            <div className="max-h-10 overflow-hidden">
                <Wave
                    fill='#ff969b'
                    paused={false}
                    style={{
                        display: 'flex'
                    }}
                    options={{
                        height: -1,
                        amplitude: 25,
                        speed: 0.25,
                        points: 3
                    }}
                />
            </div>
            <div className="px-5 py-10 mx-auto w-full md:px-24 lg:px-8 bg-orange-4">
                <div className="grid gap-10 row-gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="sm:col-span-2">
                        <Link
                            to='/'
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
                            <img src={Logo1} alt="brandladder" />
                        </Link>
                        <div className="mt-6 lg:max-w-sm">
                            <h4 className="text-gray-800 font-semibold text-xl">
                                Get weekly offers delivered to your inbox directly
                            </h4>
                            <small className="mt-4 text-sm text-gray-800">
                                At BrandLadder, we are more than just a digital media company; we are your partners in achieving a prominent digital presence.
                            </small>
                        </div>
                    </div>
                    <div className='my-auto hidden lg:block' >
                        <span className="text-base font-bold tracking-wide text-gray-900">
                            Quick Links
                        </span>
                        <div className="flex flex-col mt-1 space-x-3">
                            <ul>
                                <Link to='/insight' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <GrArticle className='my-auto mx-2' />
                                    <li>Insight</li>
                                </Link>
                                <Link to='/about' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <FaRegBuilding className='my-auto mx-2' />
                                    <li>About us</li>
                                </Link>
                                <Link to='/plans' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <IoPricetagsOutline className='my-auto mx-2' />
                                    <li>Our Plans</li>
                                </Link>
                                <Link to='/services' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <GrServices className='my-auto mx-2' />
                                    <li>Our Services</li>
                                </Link>
                                <Link to='/signup' className='my-2 flex link text-orange-10 transition-all ease-in-out duration-300 hover:text-orange-7'>
                                    <VscSignIn className='my-auto mx-2' />
                                    <li>Sign in</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="my-auto space-y-2 text-sm sm:col-span-2 mx-auto">
                        <div className='flex my-2 justify-evenly lg:justify-end' >
                            <small className='my-auto font-medium text-lg text-black hidden lg:block' >
                                Connect With Our <span className='text-orange-10'> Social Apps</span>
                            </small>
                            <div className="flex justify-around mx-3">
                                {
                                    socials.map((data, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className='border-2 text-xl border-orange-3 border-solid rounded-full p-1 text-orange-10 mx-1 shadow-2xl transition duration-500 ease-in-out hover:text-orange-1 hover:bg-orange-5' >
                                                <Link to={data.link}>
                                                    {data.icon}
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
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
        </footer>
    )
}

export default Footer
