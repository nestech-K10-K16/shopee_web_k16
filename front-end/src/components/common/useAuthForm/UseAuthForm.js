import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  emailValidator,
  passwordValidator,
} from "components/common/regex/regexValidator";

const useAuthForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChange = (index) => {
    setTabIndex(index);
  };

  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [signInActive, setSignInActive] = useState(true);
  const [registerActive, setRegisterActive] = useState(false);

  const userChange = (index) => {
    setTabIndex(index);
    if (index === 0) {
      setSignInActive(true);
      setRegisterActive(false);
    } else if (index === 1) {
      setSignInActive(false);
      setRegisterActive(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) history.push("/");
  });

  const formSubmitter = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!emailValidator(email))
      return setErrorMsg("Please enter a valid email address");

    if (!passwordValidator(password))
      return setErrorMsg(
        "Password should have a minimum of 8 characters with a combination of uppercase, lowercase, and numbers."
      );
    if (email !== "perfect@123.com" || password !== "Perfect123")
      return setErrorMsg("Invalid email or password");

    history("/");
  };

  return {
    tabIndex,
    setTabIndex,
    handleChange,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    errorMsg,
    successMsg,
    signInActive,
    registerActive,
    userChange,
    formSubmitter,
  };
};

export default useAuthForm;
