import React from 'react';
import { motion } from "framer-motion";
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'
import useFadeInLeftAnimation from '../../hooks/animations/useFadeInLeftAnimation'
import useFadeInRightAnimation from '../../hooks/animations/useFadeInRightAnimation'
// import useFadeInUpAnimation from '../../hooks/animations/useFadeInUpAnimation'

const Investment = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();
    const [fadeInLeftRef, fadeInLeft] = useFadeInLeftAnimation();
    const [fadeInRightRef, fadeInRight] = useFadeInRightAnimation();
    // const [fadeInUpRef, fadeInUpAnimation] = useFadeInUpAnimation();

    return (
        <motion.div {...bounceAnimationProps}>
            <section className='grid grid-1 md:grid-cols-2 gap-4 px-2 py-4 md:p-4' >
                <animated.aside
                    className='col-span-1 md:col-span-1 space-y-14 text-center md:text-left '
                    ref={fadeInRightRef}
                    style={fadeInRight}
                >
                    <div className='w-full md:w-3/5' >
                        <div className='bg-gradient-to-br from-orange-3 to-orange-1 py-2 text-center text-sm rounded-md'>
                            Welcome to Brandladder investment
                        </div>
                    </div>
                    <h1 className='text-black text-5xl md:text-6xl font-semibold'>
                        Start Investing  and earn money
                    </h1>
                    <p className='text-black text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, velit eos pariatur vel blanditiis dolore. Adipisci eum consequatur quisquam, unde rerum non fuga molestias voluptatum incidunt sunt, laborum inventore accusantium!</p>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-3/5">
                        <Link to='/insight'>
                            <button
                                className="btn bg-orange-6 text-black shadow-md transition-all ease-in-out duration-500  hover:text-orange-1 hover:shadow-2xl hover:border-orange-6 w-full">
                                Quick Quote
                            </button>
                        </Link>
                        <button
                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                            Schedule  call
                            {/* <MdArrowOutward className='mx-2 text-xl' /> */}
                        </button>
                    </div>
                </animated.aside>
                <aside
                    className='md:col-span-1 hidden md:block my-auto'
                    ref={fadeInLeftRef}
                    style={fadeInLeft}
                >
                    <div className='grid gap-10 grid-cols-2 animate-bounce'>
                        {[...Array(4)].map((_, index) => (
                            <img
                                key={index}
                                src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2F4a1f71083453edcd68a079a61f381054.png?alt=media&token=5a0c5690-048b-40dd-bc6d-7447ecc386e9"
                                alt=""
                                loading='lazy'
                                className='w-20 h-20 mx-auto my-5'
                            />
                        ))}
                    </div>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/brandladder-webapp.appspot.com/o/general%2F70bd5fe339b9352c6e042f37a7222cd1.png?alt=media&token=3f048bc8-c78a-4809-acb6-1b6eb4f625ab"
                        alt=""
                        loading='lazy'
                        className='mx-auto absolute top-20 right-56 h-4/5' />
                </aside>
            </section>

        </motion.div>
    )
}

export default Investment
