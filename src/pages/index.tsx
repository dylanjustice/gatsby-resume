import "../assets/scss/app.scss";

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import ResumeLayout from "../components/templates/resume-layout";
import { MarkdownRemark } from "../models/markdown-remark";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
          address
          email
          jobTitle
          name
          objectives
          phone
          skills
          title
          workExperience {
            company
            dates
            location
            responsibilities
            title
          }
          education {
            degree
            location
            school
            year
          }
        }
      }
    }
  `);

  const markdownRemark: MarkdownRemark = data.markdownRemark;
  return (
    <div className="g-application">
      <ResumeLayout frontmatter={markdownRemark.frontmatter} />
    </div>
  );
};

export default IndexPage;
