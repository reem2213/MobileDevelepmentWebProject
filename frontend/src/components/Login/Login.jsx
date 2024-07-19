import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Bg from "../../assets/bg.jpg";
import classes from "./Login.module.css";
import Bg2 from "../../assets/OIP.jpeg";
import Bg3 from "../../assets/bg3.jpg";
import Bg4 from "../../assets/dubai.jpg";
import Bg6 from "../../assets/korea.jpeg";
import Bg5 from "../../assets/bg7.jpeg";
import Bg8 from "../../assets/bg8.jpg";
import Logo from "../../assets/R.png";
import Bg9 from '../../assets/maldives.jpeg'
import Bg10 from '../../assets/naturee.jpeg'
import Bg11 from '../../assets/nature.jpeg'
// import Header from "../Header/Header";

const Login = () => {
  const imageUrls = [Bg, Bg3, Bg4, Bg5, Bg6, Bg8,Bg9,Bg10,Bg11];
  const [email, setEmail] = useState(
    () => localStorage.getItem("loginEmail") || ""
  );
  const [password, setPassword] = useState(
    () => localStorage.getItem("loginPassword") || ""
  );
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [emailRequired, setEmailRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    return input.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailRequired(false);
    setPasswordRequired(false);
    setIncorrectCredentials(false);

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setIsValidEmail(isEmailValid);
    setIsValidPassword(isPasswordValid);

    if (email.trim() === "") {
      setEmailRequired(true);
    }

    if (password.trim() === "") {
      setPasswordRequired(true);
    }

    if (
      isEmailValid &&
      isPasswordValid &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      axios
        .post("http://localhost:3001/", { email, password })
        .then((result) => {
          console.log(result);
          if (result.data === "Successss") {
            navigate("/home", { state: { id: email } });
          } else {
            setIncorrectCredentials(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    localStorage.setItem("loginEmail", email);
    localStorage.setItem("loginPassword", password);
  }, [email, password]);

  return (
    <>
      <div>
        <div
          className={classes.container}
          style={{ backgroundImage: `url(${imageUrls[currentImage]})` }}
        >
          <img src={Bg2} className={classes.image} alt="Image" />
          <img src={Logo} className={classes.logo} />
          <div className={classes.joinUs}>
          <h3>JOIN US NOW!</h3>
          </div>

          <form className={classes.form} onSubmit={handleSubmit}>
            <h2>Login Now!</h2>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${isValidEmail ? "" : classes.invalidInput} ${
                incorrectCredentials ? classes.incorrectInput : ""
              }`}
            />
            {emailRequired && (
              <p className={classes.errorText}>Email is required</p>
            )}
            {!isValidEmail && !emailRequired && (
              <p className={classes.errorText}>Invalid email format</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${isValidPassword ? "" : classes.invalidInput} ${
                incorrectCredentials ? classes.incorrectInput : ""
              }`}
            />
            {passwordRequired && (
              <p className={classes.errorText}>Password is required</p>
            )}
            {!isValidPassword && !passwordRequired && (
              <p className={classes.errorText}>
                Password must be at least 8 characters long
              </p>
            )}
            {incorrectCredentials && (
              <p className={classes.errorText}>Incorrect email or password</p>
            )}
            <button type="submit">Submit</button>

            <p>
              Dont have an account?
              <Link to="/signup" className={classes.signupLink}>
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
