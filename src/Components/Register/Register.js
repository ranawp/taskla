import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <h1 className='text-center font-bold text-5xl'>Sign Up</h1>

            <div className='text-center my-10'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className='my-2 p-2'
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
                        className='my-2 p-2'
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

                    <input className='' value="Register" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Register;