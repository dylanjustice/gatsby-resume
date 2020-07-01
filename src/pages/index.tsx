import * as React from "react";
import "../assets/scss/app.scss";
import ResumeLayout from "../components/templates/resume-layout";

import { useStaticQuery, graphql } from "gatsby";
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
    <div className="o-application">
      <ResumeLayout frontmatter={markdownRemark.frontmatter} />
    </div>
  );
};

export default IndexPage;
