import React from "react";
import "./ProfilePage.scss";
import { Tabs, Rate } from "antd";
import OrderItem from "../../Components/OrderItem/OrderItem";
import AddressForm from "../../Components/AddressForm/AddressForm";
import WishList from "../../Components/WishList/WishList";

const { TabPane } = Tabs;
const ProfilePage = (props) => {
  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <Tabs size="100">
          <TabPane tab="Dashboard" key="tab-a">
            <div className="profile-page__dashboard">
              <p className="profile-page__dasboard-content">
                Hello <span>Thien Dz</span> (not <span>Thien Dz</span> ?){" "}
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
            <WishList />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
