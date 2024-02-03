import React from 'react'

import Pricing from '../../components/sections/pricing'

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
        <Pricing featureList1={featureList1} featureList2={featureList2} featureList3={featureList1} />
    )
}

export default Plans
