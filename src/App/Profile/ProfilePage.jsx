import React, { useEffect } from "react";
import "./ProfilePage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Tabs, Rate, message } from "antd";
import OrderItem from "../../Components/OrderItem/OrderItem";
import AddressForm from "../../Components/AddressForm/AddressForm";
import WishList from "../../Components/WishList/WishList";
import {
  userInfoSelector,
  favoriteSelector,
  addressSelector,
  orderSelector,
} from "../../Redux/selector";

import { getAllOrder } from "../../Services/OrderRequest";

import { updateAddress } from "../../Services/AddressRequest";
import { updateUser, logout } from "../../Services/AuthRequest";

const { TabPane } = Tabs;
const ProfilePage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(userInfoSelector);
  const address = useSelector(addressSelector);
  const favorites = useSelector(favoriteSelector);
  const orders = useSelector(orderSelector);

  const handleUpdateAddress = (addressData) => {
    updateAddress(addressData, dispatch, props.loginCheck?.accessToken).then(
      () => {
        message.success("Update address successfully");
      }
    );
  };

  const handleUpdateUser = (userData) => {
    updateUser(userData, dispatch, props.loginCheck?.accessToken).then(() => {
      message.success("Update user info successfully");
    });
  };

  const handleLogout = () => {
    logout(dispatch, props.loginCheck?.accessToken, navigate).then(() => {
      message.success("Logout successfully");
    });
  };

  useEffect(() => {
    getAllOrder(dispatch, props.loginCheck?.accessToken);
  }, []);
  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <Tabs size="100">
          <TabPane tab="Dashboard" key="tab-a">
            <div className="profile-page__dashboard">
              <p className="profile-page__dasboard-content">
                Hello{" "}
                <span>{userInfo?.firstName + " " + userInfo?.lastName}</span>{" "}
                (not{" "}
                <span>{userInfo?.firstName + " " + userInfo?.lastName}</span> ?){" "}
                <div
                  className="cursor-pointer text-sky-400 underline"
                  onClick={handleLogout}>
                  Log out ?
                </div>
              </p>
            </div>
          </TabPane>
          <TabPane tab="Orders" key="tab-b">
            <div className="profile-page__order">
              {orders?.length > 0 &&
                orders?.map((order) => {
                  return <OrderItem key={order.id_order} order={order} />;
                })}
            </div>
          </TabPane>
          <TabPane tab="Address" key="tab-c">
            <div className="profile-page__address">
              <AddressForm
                userInfo={userInfo}
                address={address}
                updateAddress={handleUpdateAddress}
                updateUser={handleUpdateUser}
              />
            </div>
          </TabPane>
          <TabPane tab="Wishlish" key="tab-d">
            <WishList favorites={favorites} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
