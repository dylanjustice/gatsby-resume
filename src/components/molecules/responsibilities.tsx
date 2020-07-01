import * as React from "react";

interface ResponsibilitiesProps {
  responsibilities: string[];
}

const Responsibilities: React.FunctionComponent<ResponsibilitiesProps> = (
  props
) => {
  return (
    <div className="m-responsibilities">
      <ul>
        {props.responsibilities.map((responsibility, idx) => {
          return <li key={idx}>{responsibility}</li>;
        })}
      </ul>
    </div>
  );
};

export default Responsibilities;
