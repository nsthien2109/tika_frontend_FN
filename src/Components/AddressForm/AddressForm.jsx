import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const AddressForm = (props) => {
  return (
    <div className="address-form">
      <TextInput
        type="text"
        id="firstName"
        label="First name *"
        placeholder="Enter your first name"
      />
      <TextInput
        type="text"
        id="lastName"
        label="Last name *"
        placeholder="Enter your last name"
      />
      <TextInput
        type="email"
        id="email"
        label="Email *"
        placeholder="Enter your email "
      />
      <TextInput
        type="tel"
        id="phone"
        label="Phone number"
        placeholder="Enter your phone number"
      />
      <TextInput
        type="text"
        id="province"
        label="Province"
        placeholder="Enter your province"
      />
      <TextInput
        type="text"
        id="district"
        label="District"
        placeholder="Enter your district"
      />
      <TextInput
        type="text"
        id="commune"
        label="Commune"
        placeholder="Enter your commune"
      />
      <TextInput
        type="text"
        id="specific"
        label="Specific Address"
        placeholder="Enter your specific address"
      />
      <TextInput
        type="password"
        id="password"
        label="Current Password"
        placeholder="Enter your current password"
      />
      <TextInput
        type="password"
        id="new-password"
        label="New Password"
        placeholder="Enter your new password"
      />
      <Button label="Save changes" />
    </div>
  );
};

export default AddressForm;
