import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  let navigate = useNavigate();

  // value default: username:admin password:123
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [showStatusLogin, setShowStatusLogin] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //   const [userName, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleUserNameChange = (e) => {
  //     setUserName(e.target.value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };

  const handleClick = () => {
    if (user.username === "admin" && user.password === "123") {
      navigate(`/welcome/${user.username}`);
    } else {
      setShowStatusLogin(false);
    }
  };

  return (
    <div>
      User Name:{" "}
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}
      />
      <br />
      Password:{" "}
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>Login</button>
      <br />
      {showStatusLogin === false && (
        <div style={{ color: "red" }}>Login fail</div>
      )}
    </div>
  );
};

export default LoginComponent;
