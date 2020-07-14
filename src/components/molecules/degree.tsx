import * as React from "react";

import { Education } from "../../models/education";

const Degree: React.FunctionComponent<Education> = (props) => {
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
