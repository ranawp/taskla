import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import registerImg from '../../imgages/register.png';
import { useNavigate, Link } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user)

    if (token) {
        navigate('/');

    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };
    return (
        <div className='register-page lg:flex items-center'>
            <div className='text-center w-100 p-10 mx-auto flex-1 w-64'>
                <img src={registerImg} alt="" />
            </div>
            <div>
                <div className='lg:w-80 p-10 mx-auto shadow-lg border'>
                    <h1 className='text-center font-bold text-5xl my-4'>Sign Up</h1>
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                        <input type="text"
                            placeholder="Your Name"
                            className=" mt-2 p-2 rounded-lg background-color"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }

                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt ">{errors.name.message}</span>}


                        </label>
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

                        <input className='my-2 py-2 border rounded-lg text-white font-semibold hover:bg-white hover:text-black cursor-pointer' value="Register" type="submit" />
                    </form>
                    <p className='my-3 text-white'> Already Have an Account?? <Link to='/login' className='ml-16'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;