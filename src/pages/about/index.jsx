import React from 'react'

import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

import TeamCard from '../../components/cards/team';

import AboutImg from '../../assests/images/feature-img/about-4.jpg'
import Founder from '../../assests/images/feature-img/founder-img.png'

const About = () => {
    return (
        <section className='bg-orange-2'>
            <div className="grid grid-cols-2 gap-4 px-5 py-10">
                <aside>
                    <h1 className='text-black text-5xl font-semibold'>We are here to make your project easier </h1>
                </aside>
                <aside>
                    <p className='my-auto'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </aside>
            </div>

            <img src={AboutImg} alt="" className='h-96 min-w-full' />

            <div className="grid grid-cols-2">
                <img src={Founder} alt="" />
                <aside className='text-black flex flex-col gap-10 my-auto'>
                    <div>
                        <h1 className='text-black text-4xl font-semibold' >Uday Kiran</h1>
                        <small>Founder of BRANDLADDER</small>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className='flex justify-between w-2/3 border border-orange-10 rounded-3xl px-6 py-4'>
                        <BsTwitterX className='text-3xl text-orange-10 font-semibold' />
                        <MdOutlineMailOutline className='text-3xl text-orange-10' />
                        <FaInstagram className='text-3xl text-orange-10 font-semibold' />
                        <TbBrandFacebook className='text-3xl text-orange-10 font-semibold' />
                        <FaLinkedinIn className='text-3xl text-orange-10 font-semibold' />
                    </div>
                </aside>
            </div>

            <div className='p-10'>
                <h2>Meet Our Team</h2>
                <div className="grid grid-cols-3 gap-8">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>
        </section>
    )
}

export default About
