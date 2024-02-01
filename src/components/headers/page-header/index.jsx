import React from 'react'
import PropTypes from 'prop-types';

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className=" text-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 lg:px-8">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col sm:text-center">
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="font-sans text-7xl font-semibold leading-none tracking-tight my-2">
                            {title}
                        </h2>
                        <p className="text-orange-9 lg:text-base my-2">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default PageHeader
