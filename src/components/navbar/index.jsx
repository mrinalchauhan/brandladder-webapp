import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useSound from 'use-sound';
import { useNavigate } from 'react-router-dom';

import useEmailAuth from '../../hooks/auth/useEmailAuth'
import ScrollProgressBar from '../progress-bar/ScrollProgress';
import CartModal from '../modal/cart'

import { RxAvatar } from "react-icons/rx";
import { MdOutlineContacts, MdKeyboardArrowDown, MdOutlineEmojiEvents } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { PiArrowLineLeftBold } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { GrServices, GrArticle } from "react-icons/gr";

import PageFlipSound from '../../assests/sound/page-flip.mp3'

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const { currentUser, handleSignOut } = useEmailAuth()

    const [play] = useSound(PageFlipSound);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setSticky(scrollPosition > 200);
    };

    const handleLogout = async () => {
        try {
            await handleSignOut();
            navigate('/login')
        } catch (error) {
            console.error("Error while logout: ", error);
        }
    }

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
        // {
        //     path: '/',
        //     title: 'Home',
        //     icon: <FaHome />,
        // },
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
            path: '/events',
            title: 'Events',
            icon: <MdOutlineEmojiEvents />,
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
            <ScrollProgressBar />
            <div className="navbar-start">
                <Link to="/" className="navbar-item max-w-40">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6"
                        alt="Brnadladder"
                        loading='lazy'
                    />
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

                {
                    currentUser ? (
                        <div className="dropdown dropdown-hover">
                            <label className="" tabIndex="0">
                                <div className="border-2 border-none p-2 rounded-full hover:bg-orange-10 hover:text-orange-1 shadow-2xl transition-all duration-300 cursor-pointer flex">
                                    <RxAvatar className='text-2xl' />
                                    <MdKeyboardArrowDown className='my-auto text-xl' />
                                </div>
                            </label>
                            <div className="dropdown-menu bg-white text-orange-10 space-y-2">
                                <label className="cursor-pointer dropdown-item text-sm hover:bg-orange-1" htmlFor="modal-3">My Bag</label>
                                <Link to='/services' className="dropdown-item text-sm hover:bg-orange-1">Services</Link>
                                {/* <div className="divider"></div> */}
                                <button className="btn btn-outline-error" onClick={handleLogout} >Logout</button>
                            </div>
                            <CartModal />
                        </div>
                    ) : (
                        <Link to='/login'>
                            <button className="cursor-pointer btn btn-outline text-orange-2 border-none bg-orange-6 shadow-xl transition duration-300 ease-in-out hover:shadow-2xl hover:bg-orange-2 hover:text-orange-6 focus:text-orange-7">
                                SignIn
                            </button>
                        </Link>
                    )
                }
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
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Ffull-logo.png?alt=media&token=5a963339-c8d7-42f1-9b21-fc29358196e6"
                            alt="BrandLadder"
                            className='max-w-52'
                        />
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
