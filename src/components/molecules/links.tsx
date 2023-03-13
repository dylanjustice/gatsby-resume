import { Link } from "gatsby";
import * as React from "react";
import { ExternalLink } from "../../models/external-link";
import Icon from "../atoms/icons/icon";

export interface LinksProps {
    links: ExternalLink[];
}
const Links: React.FunctionComponent<LinksProps> = (props) => {
    if (props.links == null) {
        return null;
    }
    const linkList = props.links.map((link) => {
        return (
            <li key={link.name}>
                <Icon type={link.icon} />
                <Link to={link.url}>{link.url}</Link>
            </li>
        );
    });
    return (
        <div className="m-links">
            <ul>{linkList}</ul>
        </div>
    );
};

export default Links;
