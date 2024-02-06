import React from 'react'

import PageHeader from '../../headers/page-header'
import PricingCard from '../../cards/pricing'

const Pricing = ({ featureList1, featureList2, featureList3 }) => {

    return (
        <div className='bg-orange-2 mb-10 py-10 lg:px-10 px-2 w-full'>
            <div className="my-4">
                <PageHeader title='Pricing' subtitle='Save your 20% on anual package' />
            </div>
            <div className='text-center mb-10' >
                <div className="inline-flex rounded-lg border border-gray-100 bg-orange-4 p-2 shadow-xl">
                    <button
                        className="transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 md:text-lg text-sm text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl"
                    >
                        Monthly
                    </button>
                    <button
                        className="transition duration-500 ease-in-out inline-flex items-center gap-2 rounded-md px-4 py-2 lg:text-lg text-sm text-gray-500 hover:text-gray-900 focus:bg-orange-2 focus:text-black focus:font-semibold focus:shadow-2xl"
                    >
                        Yearly
                    </button>

                </div>
            </div>
            <div className="flex flex-wrap lg:justify-evenly justify-center items-center">
                <div className="my-4">
                    <PricingCard
                        palnType='Silver plan'
                        totalPrice='12.99'
                        monthlyPrice='17'
                        featureList={featureList1}
                    />
                </div>
                <div className="my-4">
                    <PricingCard
                        palnType='Silver plan'
                        totalPrice='12.99'
                        monthlyPrice='17'
                        featureList={featureList2}
                        prime={true}
                    />
                </div>
                <div className="my-4">
                    <PricingCard
                        palnType='Silver plan'
                        totalPrice='12.99'
                        monthlyPrice='17'
                        featureList={featureList3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pricing
