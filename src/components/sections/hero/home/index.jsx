import React from 'react';
import { animated } from 'react-spring';

import useFadeInLeftAnimation from '../../../../hooks/animations/useFadeInLeftAnimation'
import useFadeInRightAnimation from '../../../../hooks/animations/useFadeInRightAnimation'
import useFadeInUpAnimation from '../../../../hooks/animations/useFadeInUpAnimation'

import { FaArrowDownLong } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import FeatureCard from '../../../cards/feature/counting'

import TextReplacementAnimation from '../../../../assests/animation/typeing'
import { Link } from 'react-router-dom';

const HomeHeroSection = ({ currentUser }) => {
    const [fadeInLeftRef, fadeInLeft] = useFadeInLeftAnimation();
    const [fadeInRightRef, fadeInRight] = useFadeInRightAnimation();
    const [fadeInUpRef, fadeInUpAnimation] = useFadeInUpAnimation();

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2">
                <animated.div
                    className='flex flex-col my-auto'
                    ref={fadeInRightRef}
                    style={fadeInRight}
                >
                    <div>
                        <small>........ Digital Agency</small>
                    </div>
                    <TextReplacementAnimation />
                    <div className="flex">
                        <button className="btn btn-sm btn-outline-secondary text-orange-6 border-orange-6 shadow-xl hover:text-orange-2 hover:bg-orange-6 mx-2">
                            Play Video
                        </button>
                        {
                            !currentUser && (
                                <Link to='/signup' >
                                    <button className="btn btn-sm btn-secondary bg-orange-6 shadow-xl hover:bg-orange-2 hover:text-orange-6 mx-2">
                                        Join Us
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                    <div className="flex mt-10 items-end">
                        <div className='my-auto p-2 animate-bounce border-2 border-orange-5 rounded-full'>
                            <FaArrowDownLong className='m-auto' />
                        </div>
                        <small className='my-auto mx-2'>Scroll down to Explore</small>
                    </div>
                </animated.div>
                <animated.div
                    className='mx-auto'
                    ref={fadeInLeftRef}
                    style={fadeInLeft}
                >
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2Fhero-main.png?alt=media&token=4c0fb10f-01ef-4c89-8307-96de0ddb03e5"
                        alt=""
                        className='max-h-dvh' />
                </animated.div>
            </div>
            <animated.div
                className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-5'
                ref={fadeInUpRef}
                style={fadeInUpAnimation}
            >
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='60 ' text='Project completed' />
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='25 ' text='Project Running' />
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='50 ' text='Happy clients' />
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='40 ' text='Services' />
            </animated.div>
        </div>
    )
}

export default HomeHeroSection
