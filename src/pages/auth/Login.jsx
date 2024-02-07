import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import AuthFrame from '../../components/frames/auth';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';

import { FaGoogle, FaFacebook } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const bounceAnimationProps = useBounceAnimation();

    const togglePasswordVisibility = (event) => {

        event.preventDefault()
        setShowPass(!showPass);
    }

    const handleLogin = () => { }

    return (
        <AuthFrame topic='Login' >
            <motion.section {...bounceAnimationProps} >

                <div className="flex justify-center space-x-10">
                    <button className='btn btn-lg btn-outline text-orange-10 border-orange-10 shadow-lg hover:border-orange-10 hover:shadow-2xl hover:bg-orange-10 hover:text-orange-1 '>
                        <FaGoogle className='text-2xl' />
                    </button>
                    <button className='btn btn-lg btn-outline text-orange-10 border-orange-10 shadow-lg hover:border-orange-10 hover:shadow-2xl hover:bg-orange-10 hover:text-orange-1'>
                        <FaFacebook className='text-2xl' />
                    </button>
                </div>

                <div className="divider divider-horizontal">OR</div>

                <form className="space-y-4">
                    <div>
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                            placeholder="Email"
                            type='email'
                            value={email}
                            onChange={(value) => { setEmail(value.target.value) }}
                        />
                    </div>
                    <div className='relative'>
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input pr-10"
                            placeholder="Password"
                            type={showPass ? "text" : "password"}
                            value={password}
                            onChange={(value) => { setPassword(value.target.value) }}
                        />
                        <button className='absolute top-0 right-0 border-none px-4 py-2' onClick={togglePasswordVisibility}>
                            {showPass ? <LuEye className='my-auto' /> : <LuEyeOff className='my-auto' />}
                        </button>
                    </div>
                    <div>
                        <button
                            type='submit'
                            onClick={handleLogin}
                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                            Login
                        </button>
                    </div>
                </form>
                <small className='mt-4' >Not Register Yet ? <Link to='/signup' className='link link-primary' > Login </Link> </small>

            </motion.section>
        </AuthFrame>
    );
};

export default LoginPage;
