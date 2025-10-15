import * as React from "react";

import { Contact } from "../../models/contact";
import Links from "../molecules/links";

const Header: React.FunctionComponent<Contact> = (props) => {
    const { name, jobTitle, email, phone, address, links } = props;
    return (
        <header className="o-header">
            <div className="o-header__left">
                <h1>{name}</h1>
                <h3>{jobTitle}</h3>
            </div>
            <div className="o-header__right">
                <div className="m-contact">
                    <div className="m-contact__label">Email:</div>
                    <a className="m-contact__value" href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>
                <div className="m-contact">
                    <div className="m-contact__label">Phone:</div>
                    <a className="m-contact__value" href={`tel:${phone}`}>
                        {phone}
                    </a>
                </div>
                <div className="m-contact">
                    <div className="m-contact__label">Location:</div>
                    <div className="m-contact__value">{address}</div>
                </div>
            </div>
            <div className="o-header__full">
                <Links links={links} />
            </div>
        </header>
    );
};

export default Header;
