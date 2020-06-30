import { graphql } from "gatsby";
import * as React from "react";
import "../assets/scss/app.scss";
import ResumeLayout from "../components/templates/resume-layout";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const IndexPageProps: React.FunctionComponent<IndexPageProps> = (props) => {
  return (
    <div className="o-application">
      <ResumeLayout />
    </div>
  );
};

export default IndexPageProps;
