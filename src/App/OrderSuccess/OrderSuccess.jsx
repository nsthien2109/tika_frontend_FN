import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

function OrderSuccess(props) {
  return (
    <Result
      status="success"
      title="Your order has been successfully"
      subTitle="Thank you for your purchase, have a nice day."
      extra={[
        <Link to="/">
          <Button type="primary" key="console">
            Go to Home
          </Button>
        </Link>,
        <Link to="/profile">
          <Button key="buy">View</Button>
        </Link>,
      ]}
    />
  );
}

export default OrderSuccess;
