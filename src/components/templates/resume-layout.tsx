import * as React from "react";

import Frontmatter from "../../models/frontmatter";
import Objectives from "../molecules/objectives";
import Skills from "../molecules/skills";
import EducationSection from "../organisms/education-section";
import ExperienceSection from "../organisms/experience-section";
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
    <div className="t-resume-layout">
      <Header
        address={address}
        email={email}
        jobTitle={jobTitle}
        name={name}
        phone={phone}
      />
      <div className="t-resume-layout__section">
        <h2>Summary</h2>
        <Objectives objectives={objectives} />
      </div>
      <div className="t-resume-layout__section">
        <h2>Core Technical Skills</h2>
        <Skills skills={skills} />
      </div>
      <div className="t-resume-layout__section">
        <h2>Experience</h2>
        {workExperience.map((exp, idx) => {
          return <ExperienceSection key={idx} {...exp} />;
        })}
      </div>
      <div className="t-resume-layout__section">
        <h2>Certifications</h2>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="37b51c02-0612-45e0-b9cc-68169d5b0f49"
          data-share-badge-host="https://www.youracclaim.com"
        />
      </div>
      <div className="t-resume-layout__section">
        <h2>Education</h2>
        <EducationSection educations={education} />
      </div>
    </div>
  );
};

export default ResumeLayout;
