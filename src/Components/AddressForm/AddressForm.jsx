import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import "./Address.scss";

const AddressForm = (props) => {
  const user = props.userInfo;
  const address = props.address;
  // Data for infomation user
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [currentPass, setCurrentPass] = useState();
  const [newPass, setNewPass] = useState();
  // Data for adress
  const [province, setProvince] = useState(address?.addressProvince);
  const [district, setDistrict] = useState(address?.addressDistrict);
  const [commune, setCommune] = useState(address?.addressCommune);
  const [specific, setSpecific] = useState(address?.addressSpecific);

  const handleUpdateInfomation = () => {};

  const handleUpdateAddress = () => {
    const addressData = {
      addressProvince: province,
      addressDistrict: district,
      addressCommune: commune,
      addressSpecific: specific,
    };
    props.updateAddress(addressData);
  };

  const handleUpdateUser = () => {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      currentPassword: currentPass,
      newPassword: newPass,
    };
    props.updateUser(userData);
  };

  return (
    <div className="address-form-container flex justify-between">
      <div className="info-form">
        <TextInput
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          type="text"
          id="firstName"
          label="First name *"
          placeholder="Enter your first name"
        />
        <TextInput
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          type="text"
          id="lastName"
          label="Last name *"
          placeholder="Enter your last name"
        />
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="email"
          label="Email *"
          placeholder="Enter your email "
        />
        <TextInput
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="tel"
          id="phone"
          label="Phone number"
          placeholder="Enter your phone number"
        />
        <TextInput
          value={currentPass}
          onChange={(event) => setCurrentPass(event.target.value)}
          type="password"
          id="password"
          label="Current Password"
          placeholder="Enter your current password"
        />
        <TextInput
          value={newPass}
          onChange={(event) => setNewPass(event.target.value)}
          type="password"
          id="new-password"
          label="New Password"
          placeholder="Enter your new password"
        />
        <Button label="Save Profile" onClick={handleUpdateUser} />
      </div>
      <div className="address-form">
        <TextInput
          value={province}
          onChange={(event) => setProvince(event.target.value)}
          type="text"
          id="province"
          label="Province"
          placeholder="Enter your province"
        />
        <TextInput
          value={district}
          onChange={(event) => setDistrict(event.target.value)}
          type="text"
          id="district"
          label="District"
          placeholder="Enter your district"
        />
        <TextInput
          value={commune}
          onChange={(event) => setCommune(event.target.value)}
          type="text"
          id="commune"
          label="Commune"
          placeholder="Enter your commune"
        />
        <TextInput
          value={specific}
          onChange={(event) => setSpecific(event.target.value)}
          type="text"
          id="specific"
          label="Specific Address"
          placeholder="Enter your specific address"
        />

        <Button label="Save Adress" onClick={handleUpdateAddress} />
      </div>
    </div>
  );
};

export default AddressForm;
