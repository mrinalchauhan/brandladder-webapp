import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const TimeLine = ({ timeList }) => {
    return (
        <section>

            {/* {
                timeList.map((data, index) => {
                    return (
                        <> */}
            <div className='grid grid-cols-10' >
                <div className="ml-auto my-auto col-span-1">
                    <div className="step-circle">1</div>
                </div>
                <div className="col-span-1 mx-auto my-auto">
                    <FaArrowRight />
                </div>
                <div className='col-span-8 mr-auto my-auto'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
            <div className='grid grid-cols-10 my-2' >
                <div className="my-auto ml-auto col-span-1">
                    <div className="divider divider-vertical h-24 w-2 rounded-lg bg-orange-5"></div>
                </div>
                <div className="col-span-1 mx-auto">
                </div>
                <div className='col-span-8 mr-auto'>
                </div>
            </div>
            {/* </>
                    )
                })
            } */}
        </section>
    )
}

export default TimeLine
