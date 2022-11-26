import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [logInError, setLogInError] = useState('');

  const {logIn} = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, {replace: true});
  }

  const handleLogin = (event) => {

    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setLogInError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!Boolean(email)) {
      setEmailError("Email is Required.");
    } else if (!Boolean(email.match(/@/g))) {
      setEmailError("Please Provide a Valid Email Address.");
    } else if (!Boolean(email.match(/.com/g))) {
      setEmailError("Please Provide a Valid Email Address.");
    } else if (!Boolean(password)) {
      setPasswordError("Password is Required.");
    } else if (password.length < 6) {
      setPasswordError("Password Should Be At Least 8 Characters.");
    } else {
      const logInUser = {
        email,
        password,
      };

      logIn(logInUser.email, logInUser.password)
      .then(()=>{
        console.log(logInUser.email);
        setLoginUserEmail(logInUser.email)
        console.log(logInUser.email);
      })
      .catch(error => setLogInError(error.message));





      form.reset();
      // console.log(emailError)
      // console.log(user)
    }
  };

  return (
    <div className=" w-full h-auto lg:h-[90vh] flex items-center justify-center">
      <div className="w-full lg:w-96 p-7 rounded-3xl shadow-lg">
        <h6 className=" text-xl text-black mb-9 text-center">Login</h6>
        <form onSubmit={handleLogin}>
          <label className=" text-sm" htmlFor="email">
            Email
          </label>
          {emailError ? (
            <>
              <input
                id="email"
                type="text"
                name="email"
                className=" p-3 outline-none border border-[#CFCFCF] rounded-lg  w-full"
              />
              <h6 className=" text-[red] mb-3">{emailError}</h6>
            </>
          ) : (
            <>
              <input
                id="email"
                type="text"
                name="email"
                className=" p-3 outline-none border border-[#CFCFCF] rounded-lg mb-3 w-full"
              />
            </>
          )}
          <label className=" text-sm" htmlFor="password">
            Password
          </label>
          {passwordError ? (
            <>
              <input
                id="password"
                type="password"
                name="password"
                className=" p-3 outline-none border border-[#CFCFCF] rounded-lg w-full"
              />
              <h6 className=" text-[red] mb-3">{passwordError}</h6>
            </>
          ) : (
            <>
              <input
                id="password"
                type="password"
                name="password"
                className=" p-3 outline-none border border-[#CFCFCF] rounded-lg w-full"
              />
            </>
          )}
          <span className=" text-xs text-black mb-5 inline-block">
            Forgot Password?
          </span>
          <button
            type="submit"
            className="rounded-lg p-3 bg-[#3A4256] mb-3 border-transparent border text-[#D4D9E3] uppercase w-full
            hover:bg-transparent hover:text-[#3A4256] hover:border-[#3A4256] hover:border"
          >
            Login
          </button>
          {
            logInError && <h6 className=" text-[red] mb-3">{logInError}</h6>
          }
        </form>
        <p className="text-center text-xs mb-4 text-black">
          New to Doctors Portal?{" "}
          <Link to={'/authentication/register'}><span className="text-[#19D3AE]">Create new account</span></Link>
        </p>
        <div className="flex items-center mb-6">
          <hr className=" border mr-4 border-[#CFCFCF] w-full" />
          <span className="text-base text-[#3A4256]">OR</span>
          <hr className=" border ml-4 border-[#CFCFCF] w-full" />
        </div>
        <button className="rounded-lg p-3 w-full text-[#3A4256] border border-[#3A4256]
        hover:text-[#D4D9E3] hover:bg-[#3A4256] hover:border-transparent">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
