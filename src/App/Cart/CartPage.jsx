import React, { useState } from "react";
import "./CartPage.scss";
import { notification, Alert } from "antd";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";
import TextInput from "../../Components/TextInput/TextInput";
import Button from "../../Components/Button/Button";
import {
  cartSelector,
  loginSelector,
  addressSelector,
  couponSelector,
  couponMessage,
  subTotalCart,
} from "../../Redux/selector";
import { removeCart, checkCoupon } from "../../Services/CartRequest";

const CartPage = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(loginSelector);
  const cartList = useSelector(cartSelector);
  const address = useSelector(addressSelector);
  const coupon = useSelector(couponSelector);
  const message = useSelector(couponMessage);
  const subTotal = useSelector(subTotalCart);
  const [couponCode, setCouponCode] = useState(coupon?.couponCode ?? "");

  const handleRemoveCart = (id_cart) => {
    removeCart(id_cart, dispatch, userData?.accessToken).then(() => {
      notification["info"]({
        message: "Success",
        description: "Remove from cart.",
      });
    });
  };

  const onCloseAlert = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};

  const handleApplyCoupon = () => {
    const couponData = {
      couponCode: couponCode,
    };
    checkCoupon(couponData, dispatch, userData?.accessToken);
  };

  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <div className="cart-page__list">
          {cartList?.length > 0 &&
            cartList.map((item) => {
              return (
                <CartItem
                  key={item.id_cart}
                  product={item}
                  handleRemoveCart={handleRemoveCart}
                />
              );
            })}
          <Alert
            message="You can only use 1 discount code"
            className="mt-4"
            type="info"
            closable
            onClose={onCloseAlert}
          />
          <div className="cart-page__coupon">
            <div className="cart-page__coupon-apply">
              <div className="cart-page__coupon-apply-input">
                <TextInput
                  value={couponCode}
                  onChange={(event) => setCouponCode(event.target.value)}
                  id="coupon"
                  placeholder="Enter CODE here"
                  type="text"
                />
              </div>
              <div className="cart-page__coupon-apply-btn">
                <Button label="Apply" onClick={handleApplyCoupon} />
              </div>
            </div>
            <div className="cart-page__update-cart">Update Cart</div>
          </div>
          <Alert
            message={message ? message : ""}
            className={message ? `mt-4` : "hidden"}
            type="error"
            closable
            onClose={onCloseAlert}
          />
        </div>
        <div className="cart-page__total">
          <div className="cart-page__total-label">Cart totals</div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="subtotal">Subtotal</p>
            <div className="value">$ {subTotal}</div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="subtotal">Shipping</p>
            <div className="value">
              {address ? address?.addressSpecific : <p>Add your address</p>}
            </div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="subtotal">Fee Ship</p>
            <div className="value">$2.00</div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="total">Total</p>
            <div className="value-total">$ {subTotal + 2}</div>
          </div>
          <hr className="my-3" />
          <Link
            to="/checkout"
            className={` ${cartList?.length === 0 ? "hidden" : ""}`}>
            <button className="cart-page__total-btn">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
