import * as React from "react";
import { Education } from "../../models/education";
import Degree from "../molecules/degree";

interface EducationSectionProps {
  educations: Education[];
}

const EducationSection: React.FunctionComponent<EducationSectionProps> = (
  props
) => {
  return (
    <div className="o-education-section">
      {props.educations?.map((education, index) => (
        <Degree key={index} {...education} />
      ))}
    </div>
  );
};

export default EducationSection;
