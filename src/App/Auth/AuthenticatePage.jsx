import React from "react";
import Button from "../../Components/Button/Button";
import "./AuthenticatePage.scss";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const AuthenticatePage = (props) => {
  return (
    <div className="authenticate-page">
      <div className="authenticate-page__container">
        <Tabs size="100">
          <TabPane tab="Login" key="tab-a">
            <form action="">
              <div className="login-form">
                <p className="authenticate-page__login-label">Email Address</p>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="login-form">
                <p className="authenticate-page__login-label">Password</p>
                <input
                  type="password"
                  className="input-form"
                  placeholder="Enter your password"
                />
              </div>
              <Button label="Login" />
              <p className="authenticate-page__forgot-password">
                Forgot password ?
              </p>
            </form>
          </TabPane>
          <TabPane tab="Register" key="tab-b">
            <form action="">
              <div className="register-form">
                <p className="authenticate-page__register-label">First name</p>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="login-form">
                <p className="authenticate-page__register-label">Last name</p>
                <input
                  type="text"
                  className="input-form"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="login-form">
                <p className="authenticate-page__register-label">
                  Email Address
                </p>
                <input
                  type="email"
                  className="input-form"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="login-form">
                <p className="authenticate-page__register-label">
                  Phone number
                </p>
                <input
                  type="tel"
                  className="input-form"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="login-form">
                <p className="authenticate-page__register-label">Password</p>
                <input
                  type="password"
                  className="input-form"
                  placeholder="Enter your password"
                />
              </div>
              <div className="register-form-terms">
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span>privacy policy.</span>
                </p>
              </div>
              <Button label="Register" />
            </form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthenticatePage;
