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
    const [selectedOption, setSelectedOption] = useState('All');

    const [fadeInDownRef, fadeInDown] = useFadeInDownAnimation()
    const bounceAnimationProps = useBounceAnimation();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    let serviceList;
    let sectionTitle;
    switch (selectedOption) {
        case 'Technical':
            serviceList = techServices;
            sectionTitle = 'Technical';
            break;
        case 'Digital Marketing':
            serviceList = digitalServices;
            sectionTitle = 'Digital Services';
            break;
        case 'CA & Registration':
            serviceList = caServices;
            sectionTitle = 'CA & Registration';
            break;
        default:
            serviceList = [...techServices, ...digitalServices, ...caServices];
            sectionTitle = '.............................';
            break;
    }

    const filteredServices = serviceList.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div {...bounceAnimationProps} className='p-5 bg-orange-2'>
            {/* searchbar */}
            <animated.section className='my-5' ref={fadeInDownRef} style={fadeInDown}>
                <div className='py-0 border-2 mx-auto border-orange-6 max-w-xl flex flex-col md:flex-row justify-center items-center rounded-3xl'>
                    <select
                        className="select border-none max-w-56 text-orange-6 mx-auto text-center"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Technical">Technical</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="CA & Registration">CA & Registration</option>
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

            <div className="my-10">
                <ServiceSection serviceList={filteredServices} sectionTitle={sectionTitle} />
            </div>
        </motion.div>
    )
}

export default Services;
