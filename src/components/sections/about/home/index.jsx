import React from 'react'
import { animated } from 'react-spring';

import useFadeInRightAnimation from '../../../../hooks/animations/useFadeInRightAnimation'
import useFadeInLeftAnimation from '../../../../hooks/animations/useFadeInLeftAnimation'
// import useUpDownAnimation from '../../../../hooks/animations/useUpDownAnimation'

import OutlineButton from '../../../buttons/outline'

import TitleBg from '../../../../assests/images/feature-img/title-bg.png'
import AboutImg1 from '../../../../assests/images/feature-img/about-1.png'
import AboutImg2 from '../../../../assests/images/feature-img/about-2.png'
import AboutImg3 from '../../../../assests/images/feature-img/about-3.png'

const HomeAboutSection = () => {

    const [fadeInRightRef1, fadeInRight1] = useFadeInRightAnimation();
    const [fadeInLeftRef1, fadeInLeft1] = useFadeInLeftAnimation();

    const [fadeInRightRef2, fadeInRight2] = useFadeInRightAnimation();
    const [fadeInLeftRef2, fadeInLeft2] = useFadeInLeftAnimation();

    const [fadeInRightRef3, fadeInRight3] = useFadeInRightAnimation();
    const [fadeInLeftRef3, fadeInLeft3] = useFadeInLeftAnimation();

    return (
        <section className='my-4'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-0">
                <h1 className='font-semibold md:font-bold text-black text-4xl md:text-5xl my-auto z-20'>
                    Prominent work of our Brandladder
                </h1>
                <img src={TitleBg} alt="Brandladder" className='max-h-52 relative right-56 z-10 hidden md:block' />
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-evenly'>
                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef1}
                    style={{ ...fadeInRight1, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Digital marketing
                    </h2>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                </animated.div>

                <animated.div
                    ref={fadeInLeftRef1}
                    style={{ ...fadeInLeft1, flexBasis: 0 }}
                    className='flex-grow' // Use flex-grow to evenly divide space
                >
                    <img
                        src={AboutImg1}
                        alt="BandLadder"
                        className='max-h-80 mx-auto '
                    />
                </animated.div>
            </div>

            <div className='flex flex-col md:flex-row justify-evenly my-5'>
                <animated.div
                    ref={fadeInRightRef2}
                    style={{ ...fadeInRight2, flexBasis: 0 }} // Add flexBasis: 0
                    className='flex-grow'
                >
                    <img src={AboutImg2} alt="BandLadder" className='max-h-80 mx-auto' />
                </animated.div>

                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInLeftRef2}
                    style={{ ...fadeInLeft2, flexBasis: 0 }} // Add flexBasis: 0
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        Technological services
                    </h2>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                </animated.div>
            </div>

            {/* <div className='flex flex-col-reverse md:flex-row justify-evenly mt-4'>
                <animated.div
                    className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef3}
                    style={{ ...fadeInRight3, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold z-10'>
                        CA And Finance services
                    </h2>
                    <p className='text-gray-500 z-10'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                    <img src={TitleBg} alt="" className='max-h-52 max-w-52 hidden md:block relative bottom-64 right-52 z-0' />
                </animated.div>
                <animated.div
                    ref={fadeInLeftRef3}
                    style={fadeInLeft3}
                >
                    <img src={AboutImg3} alt="BandLadder" className='max-h-80 mx-auto' />
                </animated.div>
            </div> */}

            <div className='flex flex-col-reverse md:flex-row justify-evenly'>
                <animated.div className='flex flex-col my-auto space-y-4 flex-grow'
                    ref={fadeInRightRef1}
                    style={{ ...fadeInRight1, flexBasis: 0 }}
                >
                    <h2 className='text-gray-600 text-3xl md:text-4xl font-normal md:font-semibold'>
                        CA And Finance services
                    </h2>
                    <p className='text-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptate ullam dignissimos voluptas veniam est aspernatur labore delectus asperiores cum? Culpa officia placeat consequuntur at magnam incidunt nostrum aperiam rem!
                    </p>
                    <OutlineButton text="Learn More" />
                </animated.div>

                <animated.div
                    ref={fadeInLeftRef1}
                    style={{ ...fadeInLeft1, flexBasis: 0 }}
                    className='flex-grow' // Use flex-grow to evenly divide space
                >
                    <img
                        src={AboutImg3}
                        alt="BandLadder"
                        className='max-h-80 mx-auto '
                    />
                </animated.div>
            </div>

        </section>
    )
}

export default HomeAboutSection
