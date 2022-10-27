import React from "react";
import "./CartPage.scss";
import { notification } from "antd";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Components/CartItem/CartItem";
import TextInput from "../../Components/TextInput/TextInput";
import Button from "../../Components/Button/Button";
import { cartSelector, loginSelector } from "../../Redux/selector";
import { removeCart } from "../../Services/CartRequest";

const CartPage = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(loginSelector);
  const cartList = useSelector(cartSelector);
  const handleRemoveCart = (id_cart) => {
    removeCart(id_cart, dispatch, userData?.accessToken).then(() => {
      notification["info"]({
        message: "Success",
        description: "Remove from cart.",
      });
    });
  };

  const subTotal = cartList.reduce((accumulator, object) => {
    return accumulator + object.productPrice * object.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <div className="cart-page__container">
        <div className="cart-page__list">
          {cartList?.length > 0 &&
            cartList.map((item) => {
              return (
                <CartItem product={item} handleRemoveCart={handleRemoveCart} />
              );
            })}
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
            <div className="value">$ {subTotal}.00</div>
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
            <div className="value">$2.00</div>
          </div>
          <hr className="my-3" />
          <div className="cart-page__total-subtotal">
            <p className="total">Total</p>
            <div className="value-total">$ {subTotal + 2}.00</div>
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
