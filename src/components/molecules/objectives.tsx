import * as React from "react";

interface ObjectivesProps {
  objectives: string[];
}

const Objectives: React.FunctionComponent<ObjectivesProps> = (props) => {
  return (
    <div className="m-objectives">
      <ul>
        {props.objectives.map((objective, idx) => {
          return <li key={idx}>{objective}</li>;
        })}
      </ul>
    </div>
  );
};

export default Objectives;
