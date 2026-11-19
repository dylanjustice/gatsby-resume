import * as React from "react";

import { EducationItemDTO } from "../../models/education-item";

const EducationItem: React.FunctionComponent<EducationItemDTO> = (props) => {
    const { title, description, link } = props;
    return (
        <div className="m-degree">
            {link?.href == null || link?.imgSrc == null ? (
                <h3>{title}</h3>
            ) : (
                <a href={link.href}>
                    <h3>
                        <img src={link.imgSrc} width={24} height={24} />{" "}
                        {title}{" "}
                    </h3>
                </a>
            )}
            <p>{description}</p>
        </div>
    );
};

export default EducationItem;
