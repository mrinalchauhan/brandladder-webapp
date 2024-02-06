import React from 'react'

import OutlineButton from '../../../buttons/outline'

import TitleBg from '../../../../assests/images/feature-img/title-bg.png'
import AboutImg1 from '../../../../assests/images/feature-img/about-1.png'
import AboutImg2 from '../../../../assests/images/feature-img/about-2.png'
import AboutImg3 from '../../../../assests/images/feature-img/about-3.png'

import { FaArrowRight } from "react-icons/fa";

const HomeAboutSection = () => {
    return (
        <>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-0">
                <h1 className='font-semibold md:font-bold text-black text-4xl md:text-5xl my-auto z-20'>
                    Prominent work of our Brandladder
                </h1>
                <img src={TitleBg} alt="" className='max-h-52 relative right-56 z-10 hidden md:block' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 ' >
                <aside className='flex flex-col my-auto space-y-4 flex-1'>
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Digital marketing
                    </h2>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                </aside>

                <aside>
                    <img src={AboutImg1} alt="BandLadder" className='max-h-80 mx-auto' />
                </aside>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4' >
                <aside>
                    <img src={AboutImg2} alt="BandLadder" className='max-h-80 mx-auto' />
                </aside>
                <div className='flex flex-col my-auto space-y-4 flex-1'>
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        {/* <FaArrowRight /> */}
                        Technological services
                    </h2>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                </div>
            </div>

            <div className='grid grid-co md:grid-cols-2 gap-4' >
                <div className='flex flex-col my-auto space-y-4 flex-1'>
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold z-10'>
                        Technological services
                    </h2>
                    <p className='text-gray-500 z-10'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                    <img src={TitleBg} alt="" className='max-h-52 max-w-52 hidden md:block relative bottom-64 right-52 z-0' />
                </div>
                <aside>
                    <img src={AboutImg3} alt="BandLadder" className='max-h-80 mx-auto' />
                </aside>
            </div>
        </>
    )
}

export default HomeAboutSection
