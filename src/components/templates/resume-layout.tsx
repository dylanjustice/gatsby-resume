import * as React from "react";
import { Frontmatter } from "../../models/frontmatter";
import Objectives from "../molecules/objectives";
import Skills from "../molecules/skills";
import ExperienceSection from "../organisms/experience-section";
import EducationSection from "../organisms/education-section";
import Header from "../organisms/header";

interface ResumeProps {
  frontmatter: Frontmatter;
}

const ResumeLayout: React.FunctionComponent<ResumeProps> = (
  props: ResumeProps
) => {
  const {
    education,
    email,
    jobTitle,
    name,
    phone,
    skills,
    workExperience,
    address,
    objectives,
  } = props.frontmatter;

  if (props.frontmatter == null) {
    return null;
  }

  return (
    <React.Fragment>
      <Header
        address={address}
        email={email}
        jobTitle={jobTitle}
        name={name}
        phone={phone}
      />
      <h2>Resume Objective</h2>
      <Objectives objectives={objectives} />
      <h2>Skills</h2>
      <Skills skills={skills} />
      <h2>Experience</h2>
      {workExperience.map((exp, idx) => {
        return <ExperienceSection key={idx} {...exp} />;
      })}

      <EducationSection educations={education} />
    </React.Fragment>
  );
};

export default ResumeLayout;
