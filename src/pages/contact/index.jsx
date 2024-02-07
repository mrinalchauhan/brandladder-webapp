import React from 'react'
import { motion } from "framer-motion";

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import { IoMailOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";

import ContactIMg from '../../assests/images/feature-img/contact.jpg'

const Contact = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    return (
        <motion.section {...bounceAnimationProps} className='bg-orange-2 md:p-10 p-0'>
            <h2 className='my-4 md:block hidden'>..... Get In Touch</h2>
            <div className="flex flex-col-reverse md:flex-row justify-evenly ">
                <aside className='md:block hidden mx-2'>
                    <img src={ContactIMg} alt="" className='mb-5 rounded-lg' />
                    <div className="flex flex-col justify-between rounded-xl p-10 bg-orange-3">
                        <aside className='flex justify-evenly items-center bg-white py-2 rounded-lg mb-5' >
                            <IoMailOutline className='text-5xl' />
                            <div className="flex flex-col text-black">
                                <h3 className='text-xl font-medium'>Email</h3>
                                <small>info@brandladder.co.in</small>
                            </div>
                        </aside>
                        <aside className='flex justify-evenly items-center bg-white py-2 rounded-lg' >
                            <BiPhoneCall className='text-5xl' />
                            <div className="flex flex-col text-black">
                                <h3 className='text-xl font-medium'>Contact No.</h3>
                                <small>0987654321</small>
                            </div>
                        </aside>
                    </div>
                </aside>
                <aside className='bg-orange-3 md:p-10 p-2 rounded-xl mx-2 space-y-10'>
                    <div className='space-y-4'>
                        <h1 className='text-black text-3xl md:text-5xl font-medium md:font-bold'>
                            Get In <span className='text-orange-8'> Touch</span>
                        </h1>
                        <p className='text-black text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn
                        </p>
                    </div>

                    <div className='space-y-4 my-auto' >
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Name"
                            type='text'
                        />
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Email"
                            type='email'
                        />
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Phone No"
                            type='tel'
                        />
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Confirm Phone No"
                            type='tel'
                        />
                        <textarea
                            className="textarea-ghost textarea border-inherit text-orange-10 max-w-full bg-white  input"
                            placeholder="Leave Us Message"
                        />
                    </div>
                </aside>
            </div>
        </motion.section>
    )
}

export default Contact
