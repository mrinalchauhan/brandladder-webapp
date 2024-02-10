import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import useEmailAuth from '../../hooks/auth/useEmailAuth';
import useGoogleAuth from '../../hooks/auth/useGoogleAuth';
import useBounceAnimation from '../../hooks/animations/useBounceAnimation';

import { showSuccessToast, showErrorToast } from '../../components/tosters'
import AuthFrame from '../../components/frames/auth'

import { LuEye, LuEyeOff } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
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

    const naviagte = useNavigate();
    const { handleEmailSignIn, currentUser } = useEmailAuth();
    const { handleGoogleSignIn } = useGoogleAuth();

    const handleEmailSignin = async () => {
        try {

            if (name === null) {
                showErrorToast("Name Is Required !!")
            }
            if (phone === null) {
                showErrorToast("Contact Number Is Required !!")
            }
            if (password === null) {
                showErrorToast("Password Is Required !!")
            }
            if (confirmPass === null) {
                showErrorToast("Confirm Password Is Required !!")
            }

            if (name !== null && phone !== null && password !== null && confirmPass !== null) {
                await handleEmailSignIn(email, password);
                storeDataLocally();
            }
        } catch (error) {
            console.error('Error while email Signup: ', error);
            showErrorToast("Opps!! , Something Went Wrong")
            return; // Exit early if there's an error
        }
    }

    const storeDataLocally = () => {
        const userData = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        // You might want to add error handling here for localStorage
    }

    const googleSignIn = async () => {
        try {
            await handleGoogleSignIn();
        } catch (error) {
            console.error("error while google signin: ", error);
            showErrorToast("Opps!! , Something Went Wrong")
        }
    }

    useEffect(() => {

        if (currentUser !== null) {
            showSuccessToast('Signup Successfully')
            naviagte('/');
        }

        setPasswordsMatch(password === confirmPass);
    }, [password, confirmPass, currentUser, naviagte]);

    return (
        <AuthFrame topic='SignUp' >
            <motion.section {...bounceAnimationProps} >
                <div className="flex justify-center space-x-10">
                    <button
                        className='btn btn-lg btn-outline text-orange-10 border-orange-10 shadow-lg hover:border-orange-10 hover:shadow-2xl hover:bg-orange-10 hover:text-orange-1'
                        onClick={googleSignIn}
                    >
                        <FaGoogle className='text-2xl' />
                    </button>
                </div>

                <div className="divider divider-horizontal">OR</div>

                <div className="space-y-4">
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
                            onClick={handleEmailSignin}
                            className="btn btn-outline bg-inherit border-orange-6 text-black shadow-md transition-all ease-in-out duration-500 hover:bg-orange-6 hover:text-orange-2 hover:shadow-2xl hover:border-orange-6 w-full">
                            Signup
                        </button>
                    </div>
                </div>
                <small className='mt-4' >Already Having Account ? <Link to='/login' className='link link-primary' > Signin </Link> </small>

            </motion.section>
        </AuthFrame>
    );
};

export default SignupPage;
