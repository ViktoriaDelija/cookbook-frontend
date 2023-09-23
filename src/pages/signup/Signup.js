import React, { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";
import axios from "axios";

const Signup = () => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,25}$/;
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const SIGNUP_URL = "http://localhost:8080/api/signup";

  const { navigate } = useContext(DataContext);

  const [signup, setSignup] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validSignup, setValidSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [focusSignup, setFocusSignup] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const match = EMAIL_REGEX.test(signup.email);
    setValidSignup({ ...validSignup, email: match });
  }, [signup.email]);

  useEffect(() => {
    const match = PWD_REGEX.test(signup.password);
    setValidSignup({ ...validSignup, password: match });
    const confirmPassword = signup.password === signup.confirmPassword;
    setValidSignup({ ...validSignup, confirmPassword: confirmPassword });
  }, [signup.password, signup.confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [signup.email, signup.password, signup.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(SIGNUP_URL, signup);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <section>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input
          type="text"
          value={signup.firstname}
          onChange={(e) => setSignup({ ...signup, firstname: e.target.value })}
        />
        <label>Last name:</label>
        <input
          type="text"
          value={signup.lastname}
          onChange={(e) => setSignup({ ...signup, lastname: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="text"
          value={signup.email}
          onChange={(e) => setSignup({ ...signup, email: e.target.value })}
          onFocus={() => setFocusSignup({ ...focusSignup, email: true })}
          onBlur={() => setFocusSignup({ ...focusSignup, email: false })}
        />
        <p>
          {focusSignup.email && signup.email && !validSignup.email
            ? "Must be a valid email"
            : ""}
        </p>
        <label>Password:</label>
        <input
          type="password"
          value={signup.password}
          onChange={(e) => setSignup({ ...signup, password: e.target.value })}
          onFocus={() => setFocusSignup({ ...focusSignup, password: true })}
          onBlur={() => setFocusSignup({ ...focusSignup, password: false })}
        />
        <p>
          {focusSignup.password && signup.password && !validSignup.password
            ? "8 to 25 characters.  Must include uppercase and lowercase letters, a number and a special sign. "
            : ""}
        </p>
        <label>Confirm password:</label>
        <input
          type="password"
          value={signup.confirmPassword}
          onChange={(e) =>
            setSignup({ ...signup, confirmPassword: e.target.value })
          }
          onFocus={() =>
            setFocusSignup({ ...focusSignup, confirmPassword: true })
          }
          onBlur={() =>
            setFocusSignup({ ...focusSignup, confirmPassword: false })
          }
        />
        <p>
          {focusSignup.confirmPassword && !validSignup.confirmPassword
            ? "Must match the password input field"
            : ""}
        </p>
        <button>Sign up</button>
      </form>
    </section>
  );
};

export default Signup;
