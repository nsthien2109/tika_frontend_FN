import React from "react";
import "./CartPage.scss";
import { Link } from "react-router-dom";

import CartItem from "../../Components/CartItem/CartItem";
import TextInput from "../../Components/TextInput/TextInput";
import Button from "../../Components/Button/Button";
const CartPage = (props) => {
  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <div className="cart-page__list">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className="cart-page__coupon">
            <div className="cart-page__coupon-apply">
              <div className="cart-page__coupon-apply-input">
                <TextInput
                  id="coupon"
                  placeholder="Enter CODE here"
                  type="text"
                />
              </div>
              <div className="cart-page__coupon-apply-btn">
                <Button label="Apply" />
              </div>
            </div>
            <div className="cart-page__update-cart">Update Cart</div>
          </div>
        </div>
        <div className="cart-page__total">
          <div className="cart-page__total-label">Cart totals</div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="subtotal">Subtotal</p>
            <div className="value">$52.08</div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="subtotal">Shipping</p>
            <div className="value">
              46 Le Thien Tri, Hoa Hai, Ngu Hanh Son, Dan Nang
            </div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="subtotal">Fee Ship</p>
            <div className="value">$0.5</div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="total">Total</p>
            <div className="value-total">$53.02</div>
          </div>
          <hr className="my-3" />
          <Link to="/checkout">
            <div className="cart-page__total-btn">Proceed to Checkout</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
