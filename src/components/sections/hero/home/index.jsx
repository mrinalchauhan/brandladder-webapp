import React from 'react'

import { FaArrowDownLong } from "react-icons/fa6";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import FeatureCard from '../../../cards/feature/counting'

import HeroImg from '../../../../assests/images/feature-img/hero-main.png';

const HomeHeroSection = () => {
    return (
        <div>

            <div className="grid grid-cols-2 gap-2">
                <div className='flex flex-col' >
                    <div>
                        <small>........ Digital Agency</small>
                    </div>
                    <h1 className='text-black text-5xl font-bold my-8 leading-tight'>
                        Build, Grow Your Digital marketing, CA services and Technological services
                    </h1>
                    <div className="flex">
                        <button className="btn btn-sm btn-outline-secondary text-orange-6 border-orange-6 shadow-xl hover:text-orange-2 hover:bg-orange-6 mx-2">
                            Play Video
                        </button>
                        <button className="btn btn-sm btn-secondary bg-orange-6 shadow-xl hover:bg-orange-2 hover:text-orange-6 mx-2">
                            Signup
                        </button>
                    </div>
                    <div className="flex mt-10 items-end">
                        <FaArrowDownLong className='my-auto mx-2' />
                        <small>Scroll down to Explore</small>
                    </div>
                </div>
                <div className='mx-auto' >
                    <img src={HeroImg} alt="" className='max-h-dvh' />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-10 px-5' >
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='350 ' text='Project completed' />
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='325 ' text='Project Running' />
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='150 ' text='Happy clients' />
                <FeatureCard icon={<HiOutlineClipboardDocumentList />} count='60 ' text='Services' />
            </div>
        </div>
    )
}

export default HomeHeroSection
