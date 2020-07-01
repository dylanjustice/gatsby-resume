import * as React from "react";
import { WorkExperience } from "../../models/work-experience";
import Responsibilities from "../molecules/responsibilities";

interface WorkExperienceProps extends WorkExperience {}

const ExperienceSection: React.FunctionComponent<WorkExperienceProps> = (
  props
) => {
  return (
    <div>
      <h2>{props.title}</h2>
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
