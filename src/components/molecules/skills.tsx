import * as React from "react";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  return (
    <div className="m-skills">
      <ul>
        {props.skills.map((skill, idx) => {
          return <li key={idx}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
