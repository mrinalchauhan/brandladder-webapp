import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animated } from 'react-spring';
import useSound from 'use-sound';

import useFadeInDownAnimation from '../../hooks/animations/useFadeInDownAnimation';

import { MdOutlineContacts } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { PiArrowLineLeftBold } from "react-icons/pi";
import { FaHome, FaRegBuilding } from "react-icons/fa";
import { GrServices, GrArticle } from "react-icons/gr";

import FullLogo from '../../assests/images/full-logo.png';
import PageFlipSound from '../../assests/sound/page-flip.mp3'

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [fadeInDownRef, fadeInDown] = useFadeInDownAnimation();
    const location = useLocation();

    const [play] = useSound(PageFlipSound);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setSticky(scrollPosition > 200);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = isSticky ?
        'navbar navbar-sticky z-50 bg-orange-2 transition-opacity duration-300 ease-in-out' :
        'navbar z-50 bg-orange-2 transition-opacity duration-300 ease-in-out';

    const navLinks = [
        {
            path: '/',
            title: 'Home',
            icon: <FaHome />,
        },
        {
            path: '/plans',
            title: 'Pricing',
            icon: <IoPricetagsOutline />,
        },
        {
            path: '/services',
            title: 'Services',
            icon: <GrServices />,
        },
        {
            path: '/insight',
            title: 'Insights',
            icon: <GrArticle />,
        },
        {
            path: '/about',
            title: 'AboutUs',
            icon: <FaRegBuilding />,
        },
        {
            path: '/contact',
            title: 'ContactUs',
            icon: <MdOutlineContacts />,
        },
    ];

    const closeDrawer = async () => {
        play()
        document.getElementById('drawer-left').checked = false;
    };

    return (
        // <header>
        <header className={navbarClass}>
            <div className="navbar-start">
                <Link to="/" className="navbar-item max-w-40">
                    <img src={FullLogo} alt="Brnadladder" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* visible on large screens */}
                {
                    navLinks.map((data, index) => (
                        <Link
                            key={index}
                            to={data.path}
                            className={`navbar-item text-black font-medium ${location.pathname === data.path ? 'text-orange-7' : ''} focus:text-orange-7 flex `}
                            onClick={async () => {
                                play();
                                closeDrawer();
                            }}
                        >
                            {data.icon && React.cloneElement(data.icon, { className: 'my-auto mx-1' })}
                            {data.title}
                        </Link>
                    ))
                }
            </div>
            <div className="navbar-end">
                <button className="cursor-pointer btn btn-outline text-orange-2 border-none bg-orange-6 shadow-xl transition duration-300 ease-in-out hover:shadow-2xl hover:bg-orange-2 hover:text-orange-6 focus:text-orange-7">
                    SignIn
                </button>
            </div>

            {/* Responsive Menu */}
            <input type="checkbox" id="drawer-left" className="drawer-toggle lg:hidden" />

            <label htmlFor="drawer-left" className="lg:hidden mx-4">
                <IoMdMenu className='text-orange-6' />
            </label>
            <label className="overlay" htmlFor="drawer-left"></label>
            <div className="drawer bg-orange-2">
                <div className="drawer-content h-full min-w-100">
                    <div className="flex justify-between">
                        <img src={FullLogo} alt="" className='max-w-52' />
                        <label htmlFor="drawer-left" className="btn btn-xl btn-circle btn-ghost text-orange-7">
                            <PiArrowLineLeftBold />
                        </label>
                    </div>
                    <div className="w-100 flex flex-col justify-center align-middle overflow-scroll h-4/5">
                        {
                            navLinks.map((data, index) => (
                                <div key={index} className="badge bg-orange-1 border-none w-100 my-3 active:text-orange-7">
                                    <Link
                                        to={data.path}
                                        className={`navbar-item text-orange-7 mx-auto text-lg flex ${location.pathname === data.path ? 'text-orange-7' : ''}`}
                                        onClick={closeDrawer}
                                    >
                                        {data.icon && React.cloneElement(data.icon, { className: 'my-auto mx-2' })}
                                        {data.title}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
        // </header>
    );
};

export default Navbar;
