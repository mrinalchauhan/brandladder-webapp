import React, { useState } from 'react';
import { motion } from "framer-motion";
import { animated } from 'react-spring';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useFadeInDownAnimation from '../../hooks/animations/useFadeInDownAnimation'
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import ServiceSection from '../../components/sections/service'

import { techServices, digitalServices, caServices } from '../../.data/servicelist';

const Services = () => {
    useSmoothScroll();

    const [searchQuery, setSearchQuery] = useState('');

    const [fadeInDownRef, fadeInDown] = useFadeInDownAnimation()
    const bounceAnimationProps = useBounceAnimation();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const allServices = [...techServices, ...digitalServices, ...caServices];

    const filteredServices = allServices.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div {...bounceAnimationProps} className='p-5 bg-orange-2'>
            {/* searchbar */}
            <animated.section className='my-5' ref={fadeInDownRef} style={fadeInDown}>
                <div className='py-0 border-2 mx-auto border-orange-6 max-w-lg flex flex-col md:flex-row justify-center items-center rounded-3xl'>
                    <select className="select border-none max-w-44 text-orange-6 mx-auto text-center">
                        <option>All</option>
                        <option>Technical</option>
                        <option>Digital Marketing</option>
                        <option>CA & Registration</option>
                    </select>
                    <div className="text-orange-6 hidden md:block text-2xl">|</div>
                    <input
                        type="text"
                        placeholder="Type here service you are looking for..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        className="px-4 py-2 rounded-l-md border-none focus:outline-none focus:ring bg-inherit w-full text-orange-8"
                    />
                </div>
            </animated.section>

            {/* <div>
                <TrendingCarousel />
            </div> */}

            <div className="my-10">
                <ServiceSection serviceList={filteredServices} sectionTitle='All' />
            </div>
            <div className="my-10">
                <ServiceSection serviceList={techServices} sectionTitle='Technical' />
            </div>
            <div className="my-10">
                <ServiceSection serviceList={digitalServices} sectionTitle='Digital Services' />
            </div>
            <div className="my-10">
                <ServiceSection serviceList={caServices} sectionTitle='CA & Registration' />
            </div>
        </motion.div>
    )
}

export default Services
