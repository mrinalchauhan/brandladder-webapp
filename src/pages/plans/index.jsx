import React from 'react';
import Snowfall from 'react-snowfall';
import { motion } from "framer-motion";

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import useSmoothScroll from '../../hooks/general/useSmoothScroll'

import Pricing from '../../components/sections/pricing'
// import TitleBg from '../../assests/images/feature-img/title-bg.png'

const Plans = () => {
    useSmoothScroll();

    const bounceAnimationProps = useBounceAnimation();

    const featureList1 = [
        "Daily captivating designs",
        "4 reels per month",
        "SMM",
        "Content calandar",
        "Detail digital marketing plan",
        "One AI video"
    ]

    const featureList2 = [
        "Daily captivating designs",
        "4 reels per month",
        "SMM",
        "Content calandar",
        "Detail digital marketing plan",
        "One AI video",
        "Detail digital marketing plan",
        "One AI video",
    ]

    return (
        <motion.section {...bounceAnimationProps} className='bg-orange-2 relative'>
            <Pricing featureList1={featureList1} featureList2={featureList2} featureList3={featureList1} />
            <Snowfall
                color='#ffb8bb'
                snowflakeCount={20}
                radius={[0.5, 20]}
                speed={[0.5, 3]}
                wind={[-0.5, 0.5]}
                className="absolute top-0 left-0 w-full h-full opacity-80 shadow-2xl"
            />
        </motion.section>
    )
}

export default Plans
