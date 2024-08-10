import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function AddUser() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    userError: "",
    passwordError: "",
    confirmError: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    username: false,
    password: false,
    confirmpassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      case "name":
        setErrors((prevErrors) => ({
          ...prevErrors,
          nameError:
            value.length === 0
              ? "Please, this field is required"
              : value.length < 5
              ? "Enter Valid Name"
              : "",
        }));
        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          emailError: !new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)
            ? "Enter valid Email"
            : "",
        }));
        break;
        case "username":
            setErrors((prevErrors) => ({
              ...prevErrors,
              userError:
                value.length === 0
                  ? "Please, this field is required"
                  : value.length < 6
                  ? "Enter Valid UserName"
                  : /\s/.test(value)
                  ? "Username cannot contain spaces"
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
      case "confirmpassword":
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmError:
            value.length === 0
              ? "Please, this field is required"
              : value !== details.password
              ? "Passwords do not match"
              : "",
        }));
        break;
      default:
        break;
    }
  };

  const btnDisabled= errors.nameError ||
  errors.emailError ||
  errors.passwordError ||
  errors.confirmError ||
  errors.userError;

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
    <>
    <div className='container d-flex mb-5 flex-column justify-content-center align-items-center gap-5 mt-5'>
     <div className='w-50 mt-2'>
      <h2 className="mb-3 text-info">Registration Form </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.nameError && "border-danger"}`}
            name="name"
            value={details.name}
            onChange={handleForm}
            onBlur={handleBlur}
            onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          />
          <label htmlFor="nameInput">Name</label>
          {errors.nameError && <p className="text-danger">{errors.nameError}</p>}
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className={`form-control ${errors.emailError && "border-danger"}`}
            name="email"
            value={details.email}
            onChange={handleForm}
            onBlur={handleBlur}
            onFocus={() => setTouched((prev) => ({ ...prev, email: true }))}
          />
          <label htmlFor="emailInput">Email</label>
          {errors.emailError && <p className="text-danger">{errors.emailError}</p>}
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${errors.userError && "border-danger"}`}
            name="username"
            value={details.username}
            onChange={handleForm}
            onBlur={handleBlur}
            onFocus={() => setTouched((prev) => ({ ...prev, username: true }))}
          />
          <label htmlFor="usernameInput">Username</label>
          {errors.userError && <p className="text-danger">{errors.userError}</p>}
        </div>

        <div className="form-floating mb-3 position-relative">
          <input
            type={showPassword ? "text" : "password"}
            className={`form-control ${errors.passwordError && "border-danger"}`}
            name="password"
            value={details.password}
            onChange={handleForm}
            onBlur={handleBlur}
            onFocus={() => setTouched((prev) => ({ ...prev, password: true }))}
          />
          <label htmlFor="passwordInput">Password</label>
          {errors.passwordError && <p className="text-danger">{errors.passwordError}</p>}
          <button
            type="button"
            style={{right:0, position:"absolute", top:"0%"}}
            className="btn position-absolute top-50 end-0 translate-middle-y"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>

        <div className="form-floating mb-3 position-relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            className={`form-control position-relative ${errors.confirmError && "border-danger"}`}
            name="confirmpassword"
            value={details.confirmpassword}
            onChange={handleForm}
            onBlur={handleBlur}
            onFocus={() => setTouched((prev) => ({ ...prev, confirmpassword: true }))}
          />
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
          {errors.confirmError && <p className="text-danger">{errors.confirmError}</p>}
          <button
            type="button"
            style={{right:0, position:"absolute", top:"0%"}}
            className="btn position-absolute   end-0 translate-middle-y"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            children={
             <FontAwesomeIcon className="" icon={showConfirmPassword ? faEyeSlash : faEye} />
            }
          >
           
          </button>
        </div>

        <button
          disabled={btnDisabled}
          type="submit"
          className="btn btn-info"
        >
          Register
        </button>
      </form>
      <p>Already have an account? <Link to="/login" className="btn btn-link">Login now</Link></p>
    </div>
    </div>
    </>
  );
}

export default AddUser;
