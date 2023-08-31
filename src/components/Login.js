import React, { useState } from "react";
import "../style/login.css";
import { Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  function handleChange(e) {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  }
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
    <div className="login">
      <h1>Login to ZEE5</h1>
      <p>
        Login to continue enjoying uninterrupted video and personalised
        experience.
      </p>

      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        className="email"
      ></input>
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter password"
        className="password"
      ></input>

      <button onClick={login} className="btn__signup active">
        Login
      </button>
      <p>
        New to ZEE5 ? <Link to="/signup"> Register</Link>
      </p>
    </div>
  );
}
