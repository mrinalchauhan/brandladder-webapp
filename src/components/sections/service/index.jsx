import React from 'react';
import PropTypes from 'prop-types';

import ServiceCard from '../../cards/service';
import OutlineButton from '../../buttons/outline';

const ServiceSection = ({ serviceList, sectionTitle }) => {
    return (
        <>
            {
                serviceList !== null && (
                    <>
                        <div className="flex flex-col md:flex-row justify-between my-3">
                            <h2 className='text-black text-3xl font-semibold' >
                                {sectionTitle}
                            </h2>
                            <div className='max-w-sm'>
                                <OutlineButton text='See all' />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                            {
                                serviceList.map((data, index) => {
                                    return (
                                        <ServiceCard
                                            key={index}
                                            image='https://source.unsplash.com/random/300x200'
                                            title={data.cardTitle}
                                            desc={data.cardDesc}
                                            pricing={data.cardPricing}
                                            link={data.cardLink}
                                        />
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </>
    )
}

ServiceSection.propTypes = {
    serviceList: PropTypes.array.isRequired,
    sectionTitle: PropTypes.string.isRequired
}

export default ServiceSection
