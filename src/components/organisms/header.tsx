import * as React from "react";
import { Contact } from "../../models/contact";

interface HeaderProps extends Contact {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const { name, jobTitle, email, phone, address } = props;
  return (
    <header className="o-header">
      <h1>{name}</h1>
      <h2>{jobTitle}</h2>
      <ul>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
        <li>Address: {address}</li>
      </ul>
    </header>
  );
};

export default Header;
