import React, { useState } from "react";
import "../style/signup.css";
import { Link } from "react-router-dom";
export default function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(JSON.stringify(user));
  };
  const register = async () => {
    const userData = { ...user, appType: "ott" };
    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          projectID: "k0oz8rtzq0n9",
          "User-Agent": "PostmanRuntime/7.32.3",
          Accept: "*/* ",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await res.json();
    console.log(userData, data);
  };
  return (
    <div className="signup">
      <h1>Create a new account</h1>
      <p>
        Create an account to continue enjoying uninterrupted video and
        personalised experience
      </p>

      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="name"
      ></input>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        className="email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter password"
        className="password"
      ></input>

      <div className="terms">
        <input type="checkbox" className="checkbox"></input>
        <label htmlFor="checkbox">
          <p className="checkbox__p">
            By proceeding you agree to our
            <a href="https://www.zee5.com/termsofuse">
              Terms of Services & Privacy Policy.
            </a>
          </p>
        </label>
      </div>

      <button onClick={register} className="btn__signup active">
        Create account
      </button>
      <p>
        Already registered? <Link to="/login"> Login</Link>
      </p>
    </div>
  );
}
