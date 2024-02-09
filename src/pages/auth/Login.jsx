import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import AuthFrame from '../../components/frames/auth';
import { showSuccessToast, showErrorToast } from '../../components/tosters'

import useEmailAuth from '../../hooks/auth/useEmailAuth';
import useGoogleAuth from '../../hooks/auth/useGoogleAuth';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';

import { LuEye, LuEyeOff } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    const { handleEmailSignUp, currentUser } = useEmailAuth();
    const { handleGoogleSignIn } = useGoogleAuth();

    const bounceAnimationProps = useBounceAnimation();

    const togglePasswordVisibility = (event) => {

        event.preventDefault()
        setShowPass(!showPass);
    }

    const handleEmailLogin = async () => {
        try {
            await handleEmailSignUp(email, password);
            showSuccessToast('Login Successfully')
            navigate('/')

        } catch (error) {
            console.error("Error while logging in:", error);
            showErrorToast("Opps!! , Something Went Wrong")
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await handleGoogleSignIn();
            showSuccessToast('Login Successfully')
        } catch (error) {
            console.error('Error while Google signin:', error);
            showErrorToast("Opps!! , Something Went Wrong")
        }
    }

    useEffect(() => {
        if (currentUser !== null) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    return (
        <AuthFrame topic='Signin'>
            <motion.section {...bounceAnimationProps}>
                <div className="flex justify-center space-x-10">
                    <button
                        className='btn btn-lg btn-outline text-orange-10 border-orange-10 shadow-lg hover:border-orange-10 hover:shadow-2xl hover:bg-orange-10 hover:text-orange-1 '
                        onClick={handleGoogleLogin}
                    >
                        <FaGoogle className='text-2xl' />
                    </button>
                </div>

                <div className="divider divider-horizontal">OR</div>

                <div className="space-y-4">
                    <div>
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                            placeholder="Email"
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            onClick={handleEmailLogin}
                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                            Signin
                        </button>
                    </div>
                </div>
                <small className='mt-4'>
                    Not Registered Yet? <Link to='/signup' className='link link-primary'>SignUp</Link>
                </small>
            </motion.section>
        </AuthFrame>
    );
};

export default LoginPage;
