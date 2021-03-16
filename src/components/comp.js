import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [error, setError] = useState("");
  let [welcome, setWelcome] = useState("");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [gender, setGender] = useState("male");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  const handleOnChange = (e) => {
    setError("");
    setWelcome("");
    if (e.target.getAttribute("data-testid") === "name") {
      setName(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "email") {
      setEmail(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "gender") {
      setGender(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "phoneNumber") {
      setPhone(e.target.value);
    } else if (e.target.getAttribute("data-testid") === "password") {
      setPassword(e.target.value);
    }
  };
  const checkError = (name, email, phone, password) => {
    let list = [];
    if (name === "" || email === "" || phone === "" || password === "") {
      list.push("All fields are mandatory");
    }
    // name validation
    let names = name.split("");
    console.log(names);
    let temp = names.filter(
      (x) =>
        !(
          (x <= "z" && x >= "a") ||
          x === " " ||
          (x <= "Z" && x >= "A") ||
          (x >= "0" && x <= "9")
        )
    );
    console.log(temp);
    if (temp.length > 0) {
      list.push("Message: Name is not alphanumeric");
    }
    //email validation
    if (email.indexOf("@") === -1) {
      list.push("Email must contain @");
    }
    //phone Number validation
    if (!Number(phone)) {
      list.push("Phone Number must contain only numbers");
    }
    // password validation
    if (password.length < 6) {
      list.push("Password must contain atleast 6 letters");
    }
    return list;
  };
  const handleOnSubmit = (e) => {
    setWelcome("");
    e.preventDefault();
    let errors = checkError(name, email, phone, password);
    if (errors.length > 0) {
      setError(errors[0]);
      return;
    }
    let userName = email.slice(0, email.indexOf("@"));
    setWelcome("Hello " + userName);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setGender("male");
  };
  return (
    <div id="main">
      <form onSubmit={handleOnSubmit}>
        <label>Name :</label>
        <br />
        <input
          type="text"
          data-testid="name"
          value={name}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label>Email :</label>
        <br />
        <input
          type="text"
          data-testid="email"
          value={email}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label>Gender :</label>
        <select data-testid="gender" value={gender} onChange={handleOnChange}>
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
        <br />
        <br />
        <label>Phone Number :</label>
        <br />
        <input
          type="text"
          data-testid="phoneNumber"
          value={phone}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <label>Password :</label>
        <br />
        <input
          type="password"
          data-testid="password"
          value={password}
          onChange={handleOnChange}
        />
        <br />
        <br />
        <input type="submit" data-testid="submit" value="Submit" />
      </form>
      {error ? <h3>{error}</h3> : null}
      {welcome ? <h3>{welcome}</h3> : null}
    </div>
  );
};

export default App;