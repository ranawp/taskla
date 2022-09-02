import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import "./Register.css";
import registerImg from "../../imgages/register.png";
import { useNavigate, Link } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { strict } from "assert";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  }: any = useForm();
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

  const [sendEmailVerification] = useSendEmailVerification(auth);

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(user);

  if (token) {
    navigate("/");
  }
  const onSubmit = async (data: any) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
    alert("Sent email");
    const userData = {
      email: data.email,
      name: data.name,
    };
    fetch("https://cryptic-stream-86241.herokuapp.com/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => data);
    reset();
  };
  // password show/hide
  const [show, setShow] = useState<string | boolean>(false);

  const btnValue = (): void => {
    setShow((click) => !click);
  };
  return (
    <div className="mt-32 lg:flex justify-between items-center sm:px-48">
      <div className="">
        <img src={registerImg} alt="" />
      </div>
      <div className="lg:order-first">
        <div className="w-80 p-10 mx-auto shadow-lg border">
          <h1 className="text-center font-bold text-3xl my-4">Sign Up</h1>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              type="text"
              placeholder="Your Name"
              className=" mt-2 p-2 rounded-lg background-color"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {" "}
                  {errors.name.message}
                </span>
              )}
            </label>
            <input
              className="my-2 p-2 rounded-lg background-color"
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please Provide A Valid Email",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <p className=""> {errors.email?.message}</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className=""> {errors.email?.message}</p>
            )}

            <div className="flex">
              <input
                className="my-2 p-2 rounded-lg background-color w-full"
                placeholder="Password"
                type={show ? "text" : "password"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "Of course, you have to give a password greater than 6 digits",
                  },
                })}
              />
              <button
                onClick={btnValue}
                className="inline text-[18px] p-[10px] ml-[-35px]"
              >
                {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
            {errors.password?.type === "required" && (
              <p className=""> {errors.password?.message}</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className=""> {errors.password?.message}</p>
            )}

            <input
              className="my-2 py-2 border rounded-lg text-dark font-semibold hover:bg-white hover:text-black cursor-pointer"
              value="Register"
              type="submit"
            />
          </form>

          <p className="my-3 text-white text-xs">
            {" "}
            Already Have an Account?? <Link to="/login"> Please Login</Link>
          </p>

          <p className="my-3 text-dark">
            {" "}
            Already Have an Account?{" "}
            <Link to="/login" className="ml-3">
              {" "}
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;