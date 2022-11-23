import React, { useContext, useState } from "react";
import {useForm} from 'react-hook-form';
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

/* 
    [+] Import UseForm
    [+] Destructure register
    [+] {...register('name')} in parameter give name value
    [+] Destructure handleSubmit
    [+] Write OnSubmit={handleSubmit()}
    [+] Give a function in handleSubmit parameter
    [+] create a function with a parameter which will pass into handleSubmit function parameter
    [+] Destructure formState: {errors} for error
    [+] you can pass a second parameter in register function where you can validate
*/


const Register = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const {createUser, updateUser} = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const navigate = useNavigate();


  const handleSignUp = data => {
    // console.log(data)
    // console.log(errors)
    setSignUpError('');
    createUser(data.email, data.password)
    .then((userCredential)=>{
      const user = userCredential.user;
      toast("User Created Successfully")
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(()=>{
      // console.log(user)
      saveUser(user.displayName, user.email)
        
      })
      .catch(error => console.error(error))
    })
    .catch(error => {
      console.log(error.message)
      setSignUpError(error.message);
    })
  }

  const saveUser = (name, email) => {
    const user = {name, email};
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      verifyUser(email);
      // console.log('Saved User' ,data);
    })
  }

  const verifyUser = email =>{
    fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res=> res.json())
    .then(data => {
      if(data.accessToken){
        localStorage.setItem('token', data.accessToken);
        navigate('/');
      }
    })
  }

  return (
    <div className=" w-full h-auto lg:h-[90vh] flex items-center justify-center">
      <div className="w-full lg:w-96 p-7 rounded-3xl shadow-lg">
        <h6 className=" text-xl text-black mb-9 text-center">Sign Up</h6>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <label className=" text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className=" p-3 outline-none border border-[#CFCFCF] rounded-lg mb-3 w-full"
            {...register('name', {
              required: true
            })}
          />
          {errors.name && <h6 className=" text-red-600 mb-3">Name Field is Required</h6>}
          <label className=" text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className=" p-3 outline-none border border-[#CFCFCF] rounded-lg mb-3 w-full"
            {...register('email', {
              required: true,
            })}
          />
          {errors.email && <h6 className=" text-red-600 mb-3">Email Field is Required</h6>}
          <label className=" text-sm" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className=" p-3 outline-none border mb-5 border-[#CFCFCF] rounded-lg w-full"
            {...register('password', {
              required: "Password is Required",
              minLength: {value: 6, message: "Password must be at least 6 characters"},
              pattern: {value: /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z])/, 
              message: "Password Must Contains 2 uppercase, 1 Special Character, 2 numbers, 2 lowercase."}
            })}
          />
          {errors.password && <h6 className=" text-red-600 mb-3">{errors.password.message}</h6>}
          <button
            type="submit"
            className="rounded-lg p-3 bg-[#3A4256] mb-3 border-transparent border text-[#D4D9E3] uppercase w-full
            hover:bg-transparent hover:text-[#3A4256] hover:border-[#3A4256] hover:border
            "
          >
            Sign Up
          </button>
          {
            signUpError && <h6 className=" text-red-600 mb-3">{signUpError.replace('Firebase: Error', '')}</h6>
          }
        </form>
        <p className="text-center text-xs mb-4 text-black">
          Already have an account?{" "}
          <Link to={"/authentication/login"}>
            <span className="text-[#19D3AE]">Please Log In</span>
          </Link>
        </p>
        <div className="flex items-center mb-6">
          <hr className=" border mr-4 border-[#CFCFCF] w-full" />
          <span className="text-base text-[#3A4256]">OR</span>
          <hr className=" border ml-4 border-[#CFCFCF] w-full" />
        </div>
        <button 
        className="rounded-lg p-3 w-full text-[#3A4256] border border-[#3A4256]
        hover:text-[#D4D9E3] hover:bg-[#3A4256] hover:border-transparent
        ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
