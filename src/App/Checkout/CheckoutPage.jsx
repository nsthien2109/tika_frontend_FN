import React, { useState } from "react";
import "./CheckoutPage.scss";
import TextInput from "../../Components/TextInput/TextInput";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const CheckoutPage = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="checkout-page">
      <div className="checkout-page__container">
        <div className="checkout-page__billing">
          <div className="checkout-page__billing-title">BILLING DETAIL</div>
          <hr className="my-3" />
          <div className="checkout-page__billing-form">
            <form action="" method="post">
              <div class="grid grid-cols-2 gap-4">
                <TextInput
                  id="bl_firstName"
                  type="text"
                  label="Fistname *"
                  placeholder="Enter first name"
                />
                <TextInput
                  id="bl_lastName"
                  type="text"
                  label="Lastname *"
                  placeholder="Enter last name"
                />
              </div>
              <TextInput
                id="bl_province"
                type="text"
                label="Province *"
                placeholder="Enter your province"
              />
              <TextInput
                id="bl_district"
                type="text"
                label="District *"
                placeholder="Enter your district"
              />
              <TextInput
                id="bl_commune"
                type="text"
                label="Commune *"
                placeholder="Enter your commune"
              />
              <TextInput
                id="bl_specific"
                type="text"
                label="Specific *"
                placeholder="Enter specific address"
              />
              <div class="grid grid-cols-2 gap-4">
                <TextInput
                  id="bl_Email"
                  type="email"
                  label="Email *"
                  placeholder="Enter email address"
                />
                <TextInput
                  id="bl_phone"
                  label="Phone number *"
                  placeholder="Enter phone number"
                />
              </div>
              <hr className="my-3" />
              <div className="checkout-page__billing-form-note">
                <label htmlFor="bl_note">Order note (Optional)</label>
                <textarea
                  name=""
                  id="bl_note"
                  placeholder="Enter your order note"
                  className="checkout-page__billing-form-note-input w-full"></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="checkout-page__order">
          <div className="checkout-page__order-title">Your order</div>
          <hr className="my-3" />
          <div className="checkout-page__order-list">
            <div className="checkout-page__order-list-header">
              <div className="product">Product</div>
              <div className="subtotal">Subtotal</div>
            </div>
            <hr className="my-3" />
            <OrderProductItem />
            <OrderProductItem />
            <OrderProductItem />
            <hr className="my-3" />
            <div className="checkout-page__order-list-total">
              <div className="title">Total</div>
              <div className="total-price">$60.69</div>
            </div>
            <hr className="my-3" />
          </div>
          <div className="checkout-page__order-payment-method">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>MoMo Pay</Radio>
              <Radio value={2}>Zalo Pay</Radio>
              <Radio value={3}>Cash On Delivery</Radio>
            </Radio.Group>
          </div>
          <div className="checkout-page__order-policy">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <a href="#abc">privacy policy.</a>
          </div>
          <div className="checkout-page__order-btn">Place Order</div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const OrderProductItem = () => {
  return (
    <div className="checkout-page__order-list-item">
      <div className="product-name">
        Name product for long to test <strong>x5</strong>
      </div>
      <div className="product-price">$23.69</div>
    </div>
  );
};
