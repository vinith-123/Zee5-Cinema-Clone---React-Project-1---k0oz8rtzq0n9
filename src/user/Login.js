import React, { useState } from "react";
import "../style/login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import {LoginSchema} from "./LoginSchema"
import { signUpSchema } from "./Schema";
export default function Login() {
  const user = {
    email: "",
    password: "",
   
  };
  const {values,touched ,errors,handleBlur,handleChange,handleReset,handleSubmit}=useFormik({
    initialValues:user,
    validationSchema:LoginSchema,
    onSubmit:(values)=>{
      console.log(values);
    }
  })
/*   console.log(errors) */
  /* let name, value;
  function handleChange(e) {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  } */
  const login = async () => {

    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          projectID: "k0oz8rtzq0n9",
          "User-Agent": "PostmanRuntime/7.32.3",
          Accept: "*/* ",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="wrapper">
    <form onSubmit={handleSubmit} className="login">
      <h1>Login to ZEE5</h1>
      <p>
        Login to continue enjoying uninterrupted video and personalised
        experience.
      </p>
      <div className="form-input">
      { errors.email && touched.email? <span className="form-errors">{errors.email}</span>:null}
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter your Email"
        className="email"
      ></input>
      </div>
      <div className="form-input">
           { errors.password && touched.password ? <span className="form-errors">{errors.password}</span>:null}

      <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter password"
        className="password"
      ></input>
      </div>

      <button type="submit" className="btn__signup active">
        Login
      </button>
      <p>
        New to ZEE5 ? <Link to="/signup"> Register</Link>
      </p>
    </form>
    </div>
  );
}
