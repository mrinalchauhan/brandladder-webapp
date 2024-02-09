import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import useFadeInUpAnimation from '../../../hooks/animations/useFadeInUpAnimation';
import useFadeInLeftAnimation from '../../../hooks/animations/useFadeInLeftAnimation';
import useFadeInRightAnimation from '../../../hooks/animations/useFadeInRightAnimation';

import PageHeader from '../../headers/page-header';
import PricingCard from '../../cards/pricing';

const Pricing = ({ featureList1, featureList2, featureList3 }) => {
    const [selectedTab, setSelectedTab] = useState('featureList1');

    const [fadeInUpRef, fadeInUp] = useFadeInUpAnimation();
    const [fadeInLeftRef, fadeInLeft] = useFadeInLeftAnimation();
    const [fadeInRightRef, fadeInRight] = useFadeInRightAnimation();

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <section className='bg-orange-2 mb-10 py-10 lg:px-10 px-2 w-full'>
            <div className="my-4" ref={fadeInUpRef} style={fadeInUp}>
                <PageHeader title='Pricing' subtitle='Save your 20% on annual package' />
            </div>
            <div className='text-center mb-10' >
                <div className="inline-flex rounded-lg border border-gray-100 bg-orange-4 p-2 shadow-xl">
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'featureList1' ? 'text-black font-semibold' : 'text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('featureList1')}
                    >
                        Montlhy
                    </button>
                    <button
                        className={`transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 ${selectedTab === 'featureList2' ? 'text-black font-semibold' : 'text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl'}`}
                        onClick={() => handleTabChange('featureList2')}
                    >
                        Yearly
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <AnimatePresence mode="wait">
                    {selectedTab === 'featureList1' && (
                        <>
                            <motion.div
                                key="featureList1"
                                className="my-auto"
                                ref={fadeInRightRef}
                                style={fadeInRight}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                            >
                                <PricingCard
                                    planType='DIGITAL ESSENTIALS'
                                    monthlyPrice='34999'
                                    featureList={featureList1}
                                    prime={false}
                                />
                            </motion.div>
                            <motion.div
                                key="featureList2"
                                className="my-auto"
                                ref={fadeInUpRef}
                                style={fadeInUp}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -100 }}
                            >
                                <PricingCard
                                    planType='GROWTH ACCELERATORS'
                                    monthlyPrice='65000'
                                    featureList={featureList2}
                                    prime={true}
                                />
                            </motion.div>
                            <motion.div
                                key="featureList3"
                                className="my-auto"
                                ref={fadeInLeftRef}
                                style={fadeInLeft}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                            >
                                <PricingCard
                                    planType='DOMINANCE SUITE'
                                    monthlyPrice='49000'
                                    featureList={featureList3}
                                    prime={false}
                                />
                            </motion.div>
                        </>
                    )}
                    {selectedTab === 'featureList2' && (
                        <motion.div
                            key="featureList2"
                            className="my-auto"
                            ref={fadeInUpRef}
                            style={fadeInUp}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                        >
                            <PricingCard
                                planType='DIGITAL ESSENTIALS'
                                monthlyPrice='12.99'
                                featureList={featureList1}
                                prime={false}
                            />
                        </motion.div>

                    )}
                    {selectedTab === 'featureList2' && (
                        <motion.div
                            key="featureList2"
                            className="my-auto"
                            ref={fadeInUpRef}
                            style={fadeInUp}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                        >
                            <PricingCard
                                planType='GROWTH ACCELERATORS'
                                monthlyPrice='12.99'
                                featureList={featureList2}
                                prime={true}
                            />
                        </motion.div>

                    )}
                    {selectedTab === 'featureList2' && (
                        <motion.div
                            key="featureList2"
                            className="my-auto"
                            ref={fadeInUpRef}
                            style={fadeInUp}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                        >
                            <PricingCard
                                planType='DOMINANCE SUITE'
                                monthlyPrice='12.99'
                                featureList={featureList3}
                                prime={false}
                            />
                        </motion.div>

                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Pricing;
