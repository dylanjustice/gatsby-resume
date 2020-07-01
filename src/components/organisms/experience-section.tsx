import * as React from "react";
import { WorkExperience } from "../../models/work-experience";
import Responsibilities from "../molecules/responsibilities";

interface WorkExperienceProps extends WorkExperience {}

const ExperienceSection: React.FunctionComponent<WorkExperienceProps> = (
  props
) => {
  return (
    <div className="o-experience-section">
      <h3>{props.title}</h3>
      <p>
        <em>
          {props.company} / {props.location} / {props.dates}
        </em>
      </p>
      <Responsibilities responsibilities={props.responsibilities} />
    </div>
  );
};

export default ExperienceSection;
