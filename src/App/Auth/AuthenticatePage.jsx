import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import TextInput from "../../Components/TextInput/TextInput";
import "./AuthenticatePage.scss";
import { Tabs, Alert } from "antd";
import { register, login } from "../../Services/AuthRequest";
import { messageAuthSelector } from "../../Redux/selector";
const { TabPane } = Tabs;

const AuthenticatePage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const message = useSelector(messageAuthSelector);

  const resetState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };
    register(userData, dispatch);
    resetState();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    login(userData, dispatch, navigate);
    resetState();
  };

  return (
    <div className="authenticate-page">
      <div className="authenticate-page__container">
        <Tabs size="100">
          <TabPane tab="Login" key="tab-a">
            <Alert
              message={message ? message : ``}
              className={message ? `my-5` : "hidden"}
              showIcon
              type="success"
            />
            <form action="">
              <TextInput
                id="email-address"
                label="Email Address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
              />
              <TextInput
                id="login-password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button label="Login" onClick={handleLogin} />
              <p className="authenticate-page__forgot-password">
                Forgot password ?
              </p>
            </form>
          </TabPane>

          <TabPane tab="Register" key="tab-b">
            <Alert
              message={message ? message : ``}
              className={message ? `my-5` : "hidden"}
              showIcon
              type="success"
            />
            <form action="">
              <TextInput
                id="rg-firstname"
                label="First name"
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <TextInput
                id="rg-lastname"
                label="Last name"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <TextInput
                id="email-address"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextInput
                id="rg-phone"
                label="Phone number"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <TextInput
                id="login-password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="register-form-terms">
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span>privacy policy.</span>
                </p>
              </div>
              <Button label="Register" onClick={handleRegister} />
            </form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticatePage;
