import React, { useState } from 'react'

import ServiceSection from '../../components/sections/service'
import TitleBg from '../../assests/images/feature-img/title-bg.png'

import { CiSearch } from "react-icons/ci";

const Services = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Implement your search logic here
        console.log('Search for:', searchQuery);
    };

    const serviceList = [
        {
            cardTitle: 'Web services',
            cardDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores pariatur error aliquam? Illo, consequuntur delectus ',
            pricing: '99',
            cardLink: '/services',
        },
        {
            cardTitle: 'Android App services',
            cardDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores pariatur error aliquam? Illo, consequuntur delectus ',
            pricing: '99',
            cardLink: '/services',
        },
        {
            cardTitle: 'Desktop App services',
            cardDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores pariatur error aliquam? Illo, consequuntur delectus ',
            pricing: '99',
            cardLink: '/services',
        },
        {
            cardTitle: 'IOS App services',
            cardDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores pariatur error aliquam? Illo, consequuntur delectus ',
            pricing: '99',
            cardLink: '/services',
        },
    ]

    return (
        <div className='p-5 bg-orange-2'>
            {/* searchbar */}
            <section className='my-5'>
                <div className='py-0 border-2 mx-auto border-orange-6 max-w-lg flex flex-col-reverse md:flex-row justify-center items-center rounded-3xl'>
                    <select className="select border-none max-w-44 text-orange-6">
                        <option>Technical </option>
                        <option>Digital Maketing</option>
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
                    <CiSearch className='my-auto w-20 hidden md:block' />
                </div>
            </section>
            <div className="my-6">
                <ServiceSection serviceList={serviceList} sectionTitle='Tech Seervice' />
            </div>
            <div className="my-6">
                <ServiceSection serviceList={serviceList} sectionTitle='Digital Marketing Seervice' />
            </div>
            <div className="my-6">
                <ServiceSection serviceList={serviceList} sectionTitle='CA & Registration Seervice' />
            </div>
        </div>
    )
}

export default Services
