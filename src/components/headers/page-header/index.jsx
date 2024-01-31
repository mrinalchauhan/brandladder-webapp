import React from 'react'

const PageHeader = () => {
    return (
        <div className=" text-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-14 lg:px-8 lg:py-10">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col sm:text-center sm:mb-0">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="mb-6 font-sans text-2xl lg:text-7xl font-semibold leading-none tracking-tight">
                            Pricing
                        </h2>
                        <p className="text-orange-9 lg:text-base">
                            Save your 20% on annual pakage
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader
