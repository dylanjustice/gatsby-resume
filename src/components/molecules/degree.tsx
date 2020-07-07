import * as React from "react";

import { Education } from "../../models/education";

interface DegreeProps extends Education {}

const Degree: React.FunctionComponent<DegreeProps> = (props) => {
  const { degree, school, location, year } = props;
  return (
    <div className="m-degree">
      <h3>{degree}</h3>
      <p>
        {school}, {year} {location}
      </p>
    </div>
  );
};

export default Degree;
