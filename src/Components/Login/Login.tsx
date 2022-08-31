import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import registerImg from '../../imgages/register.png';
import { useNavigate, Link } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    const [token] = useToken(user)
    if (token) {
        navigate('/')
    }


    const handelResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Email");
        }
        else {
            toast("Please Enter Your Email");
        }
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-center my-3' > {error.massage}</p >
    }
    useEffect(() => {
        if (user) {
            navigate('/');
            // navigate(from, { replace: true });

        }
    }, [user, navigate]);

    // password show/hide
    const [state, setState] = useState(false);

    const btnValue = () => {
        setState(click => !click);
    }
    return (
        <div className='sm:px-48 mt-32 register-page lg:flex justify-between items-center ' >
            <div className='' >
                <img src={registerImg} alt="" />
            </div >
            <div>
                <div className='w-80 p-10 mx-auto shadow-lg border'>
                    <h1 className='text-center font-bold text-3xl my-4'>Sign In</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >
                        <input
                            className='my-2 p-2 rounded-lg background-color inline'
                            type='email'
                            placeholder='Your Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required',
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please Provide A Valid Email'
                                }

                            })
                            } />

                        {errors.email?.type === 'required' && <p className='' > {errors.email?.message}</p >}
                        {errors.email?.type === 'pattern' && <p className='' > {errors.email?.message}</p >}

                        <div className='flex'>
                            <input
                                className='my-2 p-2 rounded-lg background-color w-full inline'
                                placeholder='Password'
                                type={state ? 'text' : 'password'}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Of course, you have to give a password greater than 6 digits'
                                    }

                                }
                                )
                                } />
                            <button onClick={btnValue} className='inline text-[18px] p-[10px] ml-[-35px]'>
                                {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                        {errors.password?.type === 'required' && <p className='' > {errors.password?.message}</p >}

                        {errors.password?.type === 'minLength' && <p className='' > {errors.password?.message}</p >}

                        <input className='my-2 py-2 border rounded-lg text-dark font-semibold hover:bg-white hover:text-black cursor-pointer' value="Sign In" type="submit" />
                        {errorElement}
                    </form >

                    <p className='my-3 text-dark text-xs' > New to Taskla ?? <Link to='/register'>Please Register</Link></p >
                    <p className='my-3 text-dark text-xs'>Forget Password?? <span className='link no-underline' onClick={handelResetPassword}>Reset Password</span></p>
                </div >
            </div >
        </div >
    );
};

export default Login;