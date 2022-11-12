import React, { useState, useEffect } from "react";
import "./CheckoutPage.scss";
import TextInput from "../../Components/TextInput/TextInput";
import type { RadioChangeEvent, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginSelector,
  addressSelector,
  cartSelector,
  subTotalCart,
  couponSelector,
} from "../../Redux/selector";

import { addOrder } from "../../Services/OrderRequest";
import { Radio } from "antd";

const CheckoutPage = () => {
  const userData = useSelector(loginSelector);
  const address = useSelector(addressSelector);
  const cart = useSelector(cartSelector);
  const navigate = useNavigate();
  const coupon = useSelector(couponSelector);
  const subTotal = useSelector(subTotalCart);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(userData?.data?.firstName);
  const [lastName, setLastName] = useState(userData?.data?.lastName);
  const [email, setEmail] = useState(userData?.data?.email);
  const [phone, setPhone] = useState(userData?.data?.phone);
  const [province, setProvince] = useState(address?.addressProvince);
  const [district, setDistrict] = useState(address?.addressDistrict);
  const [commune, setCommune] = useState(address?.addressCommune);
  const [specific, setSpecific] = useState(address?.addressSpecific);
  const [feeship, setFeeShip] = useState(2);

  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const onChange = (e: RadioChangeEvent) => {
    setPaymentMethod(e.target.value);
  };

  const handleOrder = () => {
    const orderData = {
      addressProvince: province,
      addressDistrict: district,
      addressCommune: commune,
      addressSpecific: specific,
      feeship: feeship,
      orderCoupon: coupon?.couponCode,
      orderDiscount: coupon?.couponPercent,
      orderTotal: (subTotal + 2)?.toFixed(2),
      orderName: firstName + " " + lastName,
      orderEmail: email,
      orderPhone: phone,
      paymentMethod: paymentMethod,
      orderNotes: note,
    };
    console.log(orderData);
    addOrder(orderData, dispatch, userData?.accessToken, navigate).then(() => {
      message.success("Your order has been successfully");
    });
  };
  return (
    <div className="checkout-page">
      <div className="checkout-page__container">
        <div className="checkout-page__billing">
          <div className="checkout-page__billing-title">BILLING DETAIL</div>
          <hr className="my-3" />
          <div className="checkout-page__billing-form">
            <form action="" method="post">
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  id="bl_firstName"
                  onChange={(event) => setFirstName(event.target.value)}
                  type="text"
                  label="Fistname *"
                  value={firstName}
                  placeholder="Enter first name"
                />
                <TextInput
                  id="bl_lastName"
                  onChange={(event) => setLastName(event.target.value)}
                  type="text"
                  label="Lastname *"
                  value={lastName}
                  placeholder="Enter last name"
                />
              </div>
              <TextInput
                id="bl_province"
                onChange={(event) => setProvince(event.target.value)}
                type="text"
                label="Province *"
                value={province}
                placeholder="Enter your province"
              />
              <TextInput
                id="bl_district"
                onChange={(event) => setDistrict(event.target.value)}
                type="text"
                label="District *"
                value={district}
                placeholder="Enter your district"
              />
              <TextInput
                id="bl_commune"
                type="text"
                onChange={(event) => setCommune(event.target.value)}
                label="Commune *"
                value={commune}
                placeholder="Enter your commune"
              />
              <TextInput
                id="bl_specific"
                onChange={(event) => setSpecific(event.target.value)}
                type="text"
                label="Specific *"
                value={specific}
                placeholder="Enter specific address"
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  id="bl_Email"
                  type="email"
                  label="Email *"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  placeholder="Enter email address"
                />
                <TextInput
                  id="bl_phone"
                  label="Phone number *"
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                  placeholder="Enter phone number"
                />
              </div>
              <hr className="my-3" />
              <div className="checkout-page__billing-form-note">
                <label htmlFor="bl_note">Order note (Optional)</label>
                <textarea
                  name=""
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
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
            {cart &&
              cart.map((item) => {
                return <OrderProductItem key={item.id_cart} product={item} />;
              })}
            <hr className="my-3" />
            <div className="checkout-page__order-list-total">
              <div className="title">Total</div>
              <div className="total-price">${(subTotal + 2).toFixed(2)}</div>
            </div>
            <hr className="my-3" />
          </div>
          <div className="checkout-page__order-payment-method">
            <Radio.Group onChange={onChange} value={paymentMethod}>
              <Radio value="momo_p" disabled>
                MoMo Pay
              </Radio>
              <Radio value="zalo_p" disabled>
                Zalo Pay
              </Radio>
              <Radio value="cash">Cash On Delivery</Radio>
            </Radio.Group>
          </div>
          <div className="checkout-page__order-policy">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <a href="#abc">privacy policy.</a>
          </div>
          <div
            className={`checkout-page__order-btn cursor-pointer ${
              cart?.length > 0 ? "" : "hidden"
            }`}
            onClick={handleOrder}>
            Place Order
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const OrderProductItem = (props) => {
  const product = props.product;
  const price =
    product.productPrice - product.productPrice * (product.discount / 100);
  const cartItemPrice = price * product.quantity;
  return (
    <div className="checkout-page__order-list-item">
      <div className="product-name">
        {props.product?.productName} <strong>x{props.product?.quantity}</strong>
      </div>
      <div className="product-price">${price}</div>
    </div>
  );
};
