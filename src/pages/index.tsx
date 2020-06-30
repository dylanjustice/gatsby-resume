import { graphql } from "gatsby";
import * as React from "react";
import "../assets/scss/app.scss";

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
      <h1>{props.data.site.siteMetadata.name}</h1>
      <p>{props.data.site.siteMetadata.tagline}</p>
    </div>
  );
};

export default IndexPageProps;
