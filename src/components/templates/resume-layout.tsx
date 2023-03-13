import * as React from "react";

import AZ104 from "../../assets/images/azure-administrator-associate-600x600.png";
import AZ900 from "../../assets/images/microsoft-certified-azure-fundamentals.png";
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
        links,
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
                links={links}
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
                <a href="https://www.youracclaim.com/badges/37b51c02-0612-45e0-b9cc-68169d5b0f49/public_url">
                    <img
                        src={AZ900}
                        width={150}
                        height={150}
                        alt="AZ-900 Certification"
                    />
                </a>
                <a href="https://www.youracclaim.com/badges/4393c219-efa4-496e-85ee-b43c9edc2a07/public_url">
                    <img
                        src={AZ104}
                        width={150}
                        height={150}
                        alt="AZ-104 Certification"
                    />
                </a>
            </div>
            <div className="t-resume-layout__section">
                <h2>Education</h2>
                <EducationSection educations={education} />
            </div>
        </div>
    );
};

export default ResumeLayout;
