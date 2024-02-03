import React from 'react'

import Pricing from '../../components/sections/pricing'
import TitleBg from '../../assests/images/feature-img/title-bg.png'

const Plans = () => {

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
        <section className='bg-orange-2'>
            <Pricing featureList1={featureList1} featureList2={featureList2} featureList3={featureList1} />
            {/* <img src={TitleBg} alt="" className='max-w-72 absolute top-96 left-96' />
            <img src={TitleBg} alt="" /> */}
        </section>
    )
}

export default Plans
