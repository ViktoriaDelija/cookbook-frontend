import React, { useContext } from "react";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

const Login = () => {
  const { navigate, token, setToken, role, setRole } = useContext(DataContext);
  const userRef = useRef();
  const API_URL = "http://localhost:8080/api/login";

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, login);
      setToken(response.data.token);
      setRole(response.data.roles);
      console.log("This is my role: " + response.data.roles);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!token ? (
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
            <button type="submit">Login</button>
          </form>
        </section>
      ) : (
        <p>You are logged in</p>
      )}
    </>
  );
};

export default Login;
