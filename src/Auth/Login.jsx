import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginUser() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailError: !new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)
            ? "Enter valid Email"
            : "",
        }));
        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          passwordError:
            value.length === 0
              ? "Please, this field is required"
              : !new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).test(value)
              ? "Enter Valid Password"
              : "",
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = Object.keys(errors).every((key) => errors[key] === "");
    if (formValid) {
      console.log("Form submitted successfully", details);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="container d-flex mb-5 flex-column justify-content-center align-items-center gap-5 mt-5">
      <div className="w-50 mt-2">
        <h1 className="text-center text-info">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.emailError ? "border-danger" : ""}`}
              name="email"
              value={details.email}
              onChange={handleForm}
              onBlur={handleBlur}
              onFocus={() => setTouched((prev) => ({ ...prev, email: true }))}
              id="emailInput"
            />
            <label htmlFor="emailInput">Email</label>
            {errors.emailError && <p className="text-danger">{errors.emailError}</p>}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.passwordError ? "border-danger" : ""}`}
              name="password"
              value={details.password}
              onChange={handleForm}
              onBlur={handleBlur}
              onFocus={() => setTouched((prev) => ({ ...prev, password: true }))}
              id="passwordInput"
            />
            <label htmlFor="passwordInput">Password</label>
            {errors.passwordError && <p className="text-danger">{errors.passwordError}</p>}
          </div>
          <button
            disabled={errors.emailError || errors.passwordError}
            type="submit"
            className="btn btn-info"
          >
            Login
          </button>
        </form>
        <p>Don't have an account? <Link to="/register" className="btn btn-link">Register now</Link></p>
      </div>
    </div>
  );
}

export default LoginUser;
