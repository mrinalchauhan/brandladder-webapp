import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import useBounceAnimation from '../../hooks/animations/useBounceAnimation';
import AuthFrame from '../../components/frames/auth'

import { FaGoogle, FaFacebook } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { ImCross } from "react-icons/im";
import { BsCaretRight } from "react-icons/bs";

const SignupPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [showPass, setShowPass] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const bounceAnimationProps = useBounceAnimation();

    const togglePasswordVisibility = (event) => {

        event.preventDefault()

        setShowPass(!showPass);
    }

    const handleSignin = (e) => {
        e.preventDefault();
        try {
            console.log('login')
        } catch (error) {
            console.error("error while loggin: ", error);
        }
    }

    useEffect(() => {
        setPasswordsMatch(password === confirmPass);
    }, [password, confirmPass]);

    return (
        <AuthFrame topic='Signin' >
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
                            placeholder="Name"
                            type='text'
                            value={name}
                            onChange={(value) => { setName(value.target.value) }}
                        />
                    </div>
                    <div>
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                            placeholder="Email"
                            type='email'
                            value={email}
                            onChange={(value) => { setEmail(value.target.value) }}
                        />
                    </div>
                    <div>
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                            placeholder="Phone No"
                            type='tel'
                            value={phone}
                            onChange={(value) => { setPhone(value.target.value) }}
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

                    <div className='relative'>
                        <input
                            className="input-ghost border-inherit text-orange-10 max-w-full bg-white focus:border-orange-5 input"
                            placeholder="Confirm Password"
                            type='password'
                            value={confirmPass}
                            onChange={(value) => { setConfirmPass(value.target.value) }}
                        />
                        <div className='absolute top-0 right-0 border-none px-4 py-2' onClick={(e) => e.preventDefault()} >
                            {passwordsMatch ? <BsCaretRight /> : <ImCross />}
                        </div>
                    </div>
                    <div>
                        <button
                            type='submit'
                            onClick={handleSignin}
                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                            Signin
                        </button>
                    </div>
                </form>
                <small className='mt-4' >Already Having Account ? <Link to='/login' className='link link-primary' > Login </Link> </small>

            </motion.section>
        </AuthFrame>
    );
};

export default SignupPage;
