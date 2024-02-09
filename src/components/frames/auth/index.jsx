import React from 'react';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

import useSmoothScroll from '../../../hooks/general/useSmoothScroll'

import { MdArrowBackIosNew } from "react-icons/md";

const AuthFrame = ({ children, topic }) => {
    useSmoothScroll();

    return (
        <section className="pb-6 flex items-center justify-center bg-orange-2">
            <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md ">
                <div className="flex justify-between mb-4">
                    <div className='flex'>
                        <Link to='/' className='my-auto'>
                            <MdArrowBackIosNew className='my-auto text-2xl text-orange-7' />
                        </Link>
                        <h2 className="text-2xl font-semibold text-center text-orange-7">{topic}</h2>
                    </div>
                    <div className='space-x-2'>
                        <SyncLoader
                            color="#ff777d"
                            speedMultiplier={0.5}
                            size={10}
                        />
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
};

export default AuthFrame;
