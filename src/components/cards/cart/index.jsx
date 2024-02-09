import React from 'react';
import { CiCircleMinus } from "react-icons/ci";

const CartCard = ({ title, desc, date }) => {

    const firstTenWords = desc?.split(' ').slice(0, 10).join(' ');

    return (
        <div className="card max-w-full bg-orange-2">
            <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className='col-span-4'>
                        <h2 className="card-header text-lg">
                            {title}
                        </h2>
                        <p className="text-sm text-black">
                            {firstTenWords}
                        </p>
                        <small className='xs' >
                            {date}
                        </small>
                    </div>
                    <div className="card-footer col-span-1">
                        <button className="btn-outline btn text-orange-10 hover:text-orange-3 hover:bg-orange-10 transition-all ease-in-out duration-300 border-none shadow-2xl">
                            <CiCircleMinus className='text-xl my-auto' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard
