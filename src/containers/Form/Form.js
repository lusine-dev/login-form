import { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { ValidateName } from "../../util/validate";
import { ValidatePassword } from "../../util/validate";

import "./Form.css";

function Form() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPasssword] = useState("");
  const [errorTextName, setErrorName] = useState("");
  const [errorTextPassword, setErrorPassword] = useState("");

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };
  const onChangePassword = (e) => {
    setUserPasssword(e.target.value);
  };
  const loginButton = () => {
    let userData = {
      Name: userName,
      Password: userPassword,
    };
    if (ValidateName(userData).isValidName === false) {
      setErrorName(ValidateName(userData).errorName);
    }
    if (ValidateName(userData).isValidName) {
      setErrorName("");
    }

    if (ValidatePassword(userData).isValidPassword === false) {
      setErrorPassword(ValidatePassword(userData).errorPassword);
    }
    if (ValidatePassword(userData).isValidPassword) {
      setErrorPassword("");
    }

    if (
      ValidateName(userData).isValidName &&
      ValidatePassword(userData).isValidPassword
    ) {
      alert("Name - " + userName + "\nPassword - " + userPassword);
    }
  };
  return (
    <div className="form">
      <Input
        type="text"
        placeholder="user name"
        onChange={onChangeName}
        value={userName}
      />
      <p className="error-text">{errorTextName}</p>
      <Input
        type="password"
        placeholder="user password"
        onChange={onChangePassword}
        value={userPassword}
      />
      <p className="error-text">{errorTextPassword}</p>
      <Button onClick={loginButton}>LOGIN</Button>
      <p>
        New to our page? <a href="http://localhost:3000/">Sign up</a>
      </p>
    </div>
  );
}

export default Form;
