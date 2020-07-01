import * as React from "react";
import { Contact } from "../../models/contact";

interface HeaderProps extends Contact {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { name, jobTitle, email, phone, address } = props;
  return (
    <header className="o-header">
      <div className="o-header__left">
        <h1>{name}</h1>
        <h2>{jobTitle}</h2>
      </div>
      <div className="o-header__right">
        <ul>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Address:</strong> {address}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
