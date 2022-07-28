import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import registerImg from '../../imgages/register.png';
import { useNavigate, Link } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        // reset();
    };

<<<<<<< HEAD
=======
    const [token] = useToken(user)
    if (token) {
        navigate('/')
    }
>>>>>>> fc759a726c9aaace52c683c4305f9d013c612efa
    let errorElement;

    if (error) {
        errorElement = <p className='text-center my-3 text-white'>{error?.message}</p>
    }
    return (
        <div className='register-page lg:flex items-center'>
            <div className='text-center w-100 p-10 mx-auto flex-1 w-64'>
                <img src={registerImg} alt="" />
            </div>
            <div>
                <div className='lg:w-80 p-10 mx-auto shadow-lg border'>
                    <h1 className='text-center font-bold text-5xl my-4'>Sign In</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className='my-2 p-2 rounded-lg background-color'
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

                            })} />
                        {errors.email?.type === 'required' && <p className=''>{errors.email?.message}</p>}
                        {errors.email?.type === 'pattern' && <p className=''>{errors.email?.message}</p>}

                        <input
                            className='my-2 p-2 rounded-lg background-color'
                            placeholder='Password'
                            type='password'
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
                            )} />
                        {errors.password?.type === 'required' && <p className=''>{errors.password?.message}</p>}

                        {errors.password?.type === 'minLength' && <p className=''>{errors.password?.message}</p>}
                        {errorElement}

                        <input className='my-2 py-2 border rounded-lg text-white font-semibold hover:bg-white hover:text-black cursor-pointer' value="Sign In" type="submit" />

                    </form>
                    <p className='my-3 text-white'>New to Taskla??  <Link to='/register'>Please Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;