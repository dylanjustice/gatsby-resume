import * as React from "react";
import { Education } from "../../models/education";

interface DegreeProps extends Education {}

const Degree: React.FunctionComponent<DegreeProps> = (props) => {
  const { degree, school, location, year } = props;
  return (
    <p>
      <em>{degree}</em>
      {school}, {year} {location}
    </p>
  );
};

export default Degree;
