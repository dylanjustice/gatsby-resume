import * as React from "react";
import { Frontmatter } from "../../models/frontmatter";
import Objectives from "../molecules/objectives";
import Skills from "../molecules/skills";
import ExperienceSection from "../organisms/experience-section";

interface ResumeProps {
  frontmatter: Frontmatter;
}

const ResumeLayout: React.FunctionComponent<ResumeProps> = (
  props: ResumeProps
) => {
  const {
    education,
    email: emailAddress,
    jobTitle,
    name,
    phone: phoneNumber,
    skills,
    title,
    workExperience,
    address,
    objectives,
  } = props.frontmatter;

  if (props.frontmatter == null) {
    return null;
  }
  console.log(props.frontmatter);

  return (
    <div>
      <h1 id="dylan-justice">{name}</h1>
      <h2 id="software-engineer">{jobTitle}</h2>
      <ul>
        <li>Email: {emailAddress}</li>
        <li>Phone: {phoneNumber}</li>
        <li>Address: {address}</li>
      </ul>
      <h2 id="resume-objective">Resume Objective</h2>
      <Objectives objectives={objectives} />
      <h2 id="skills">Skills</h2>
      <Skills skills={skills} />
      <h2 id="experience">Experience</h2>
      {workExperience.map((exp, idx) => {
        return <ExperienceSection key={idx} {...exp} />;
      })}
      <h2 id="education">Education</h2>
      <p>
        <em>B.S Energy Business and Finance</em>
        Penn State University, 2012 State College, PA
      </p>
      <p>
        <em>Minor Energy Engineering</em>
        Penn State University, 2012 State College, PA
      </p>
    </div>
  );
};

export default ResumeLayout;
