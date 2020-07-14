import * as React from "react";

import { Contact } from "../../models/contact";

const Header: React.FunctionComponent<Contact> = (props) => {
  const { name, jobTitle, email, phone, address } = props;
  return (
    <header className="o-header">
      <div className="o-header__left">
        <h1>{name}</h1>
        <h2>{jobTitle}</h2>
      </div>
      <div className="o-header__right">
        <div className="m-contact">
          <div className="m-contact__label">Email:</div>
          <div className="m-contact__value">{email}</div>
        </div>
        <div className="m-contact">
          <div className="m-contact__label">Phone:</div>
          <div className="m-contact__value">{phone}</div>
        </div>
        <div className="m-contact">
          <div className="m-contact__label">Location:</div>
          <div className="m-contact__value">{address}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
