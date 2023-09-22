import React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const API_URL = "http://localhost:8080/api/login";

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.prevent.default();

    try {
      const response = await axios.post(API_URL, login);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          id="email"
          ref={userRef}
          autoComplete="off"
          value={login.email}
          onChange={(e) => setLogin({ ...login, email: e.target.value })}
          required
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          required
        />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
