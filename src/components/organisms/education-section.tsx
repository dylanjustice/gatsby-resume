import * as React from "react";

import { EducationItemDTO } from "../../models/education-item";
import EducationItem from "../molecules/education-item";

interface EducationSectionProps {
    educations: EducationItemDTO[];
}

const EducationSection: React.FunctionComponent<EducationSectionProps> = (
    props,
) => {
    return (
        <div className="o-education-section">
            {props.educations?.map((education, index) => (
                <EducationItem key={index} {...education} />
            ))}
        </div>
    );
};

export default EducationSection;
