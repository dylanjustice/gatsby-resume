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

export const Head = () => (
    <React.Fragment>
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <title>Dylan Justice</title>
        <meta
            name="description"
            content="A simple way to display and manage my resume"
        />
        <meta
            name="keywords"
            content="Dylan Justice, resume, software engineer, CV, professional"
        />
    </React.Fragment>
);

export default IndexPage;
