import React from "react";
import "./ProfilePage.scss";
import { useSelector } from "react-redux";
import { Tabs, Rate } from "antd";
import OrderItem from "../../Components/OrderItem/OrderItem";
import AddressForm from "../../Components/AddressForm/AddressForm";
import WishList from "../../Components/WishList/WishList";
import { userInfoSelector, favoriteSelector } from "../../Redux/selector";

const { TabPane } = Tabs;
const ProfilePage = (props) => {
  const userInfo = useSelector(userInfoSelector);
  const favorites = useSelector(favoriteSelector);
  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <Tabs size="100">
          <TabPane tab="Dashboard" key="tab-a">
            <div className="profile-page__dashboard">
              <p className="profile-page__dasboard-content">
                Hello{" "}
                <span>{userInfo.firstName + " " + userInfo.lastName}</span> (not{" "}
                <span>{userInfo.firstName + " " + userInfo.lastName}</span> ?){" "}
                <a href="">Log out</a>
              </p>
            </div>
          </TabPane>
          <TabPane tab="Orders" key="tab-b">
            <div className="profile-page__order">
              <OrderItem />
            </div>
          </TabPane>
          <TabPane tab="Address" key="tab-c">
            <div className="profile-page__address">
              <AddressForm />
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
