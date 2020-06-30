import * as React from "react";

const ResumeLayout: React.FunctionComponent = () => {
  return (
    <div>
      <h1 id="dylan-justice">Dylan Justice</h1>
      <h2 id="software-engineer">Software Engineer</h2>
      <ul>
        <li>Email: dylanjustice41@gmail.com</li>
        <li>Phone: (330) 472-9421</li>
        <li>Address: 17 Harpers Ferry Way Mechanicsburg, PA</li>
      </ul>
      <h2 id="resume-objective">Resume Objective</h2>
      <ul>
        <li>
          8 years of professional experience building customized software
          solutions.
        </li>
        <li>
          Uses a scientific approach to all solutions that present an
          opportunity for improvement.
        </li>
        <li>
          Strong technical skills, organizational skills and very effective
          communication skills.
        </li>
        <li>
          Willing to work directly with stakeholders and clients to provide the
          best services.
        </li>
        <li>
          Interested in growing experience in diverse systems architecture and
          developer automation tools.
        </li>
      </ul>
      <h2 id="skills">Skills</h2>
      <ul>
        <li>C#</li>
        <li>ASP.NET Core</li>
        <li>ASP.NET Framework</li>
        <li>MS SQL Server</li>
        <li>PostgreSQL</li>
        <li>Html5</li>
        <li>Javascript</li>
        <li>CSS3</li>
        <li>SCSS</li>
        <li>Windows Server</li>
        <li>IIS 10</li>
        <li>AWS CloudFormation</li>
        <li>AWS Elastic Beanstalk</li>
        <li>AWS S3</li>
        <li>Git</li>
        <li>Visual Studio Team Services</li>
        <li>Jenkins</li>
        <li>Azure Build Pipelines</li>
      </ul>
      <h2 id="experience">Experience</h2>
      <h3 id="senior-software-engineer-technical-lead">
        Senior Software Engineer / Technical Lead
      </h3>
      <p>
        <em>andculture / Harrisburg, PA / January 2018 - Present</em>
      </p>
      <ul>
        <li>
          Managed a team of direct reports consisting of 5 software engineers
          working on several different projects.
        </li>
        <li>
          Enhanced and maintained a wide array of web applications supported by
          andculture, including web sites for UPMC Pinnacle, The PA Disciplinary
          Board, Administrative Office of Pennsylvania Courts and Commonwealth
          Charter Academy. Many were built using one of two homegrown Content
          Management Systems.
        </li>
        <li>
          Built features to enhance custom learning management platform for
          Commonwealth Charter Academy using .NET Core Web API, MS SQL Server
          database and ReactJS frontend.
        </li>
        <li>
          Provided detailed analysis and technical planning for prospective
          projects, including a print-to-digital solution currently in progress
          for the National Fire Protection Association.
        </li>
        <li>
          Developed the print-to-digital content product as a part of a team of
          8 engineers running SCRUM to build .NET Core Web Api, MS SQL Server
          and ReactJS.
        </li>
        <li>
          Developed initial platform with onion architecture, Jenkins build
          agent, AWS elastic beanstalk and S3 CLI tools.
        </li>
        <li>
          Conducted regular code reviews as a member of the development team
          through Pull Request review system in Bitbucket and/or Github.
        </li>
      </ul>
      <h2 id="software-developer-advisory">Software Developer, Advisory</h2>
      <p>
        <em>
          Computer Aid Inc / Harrisburg, PA / December 2012 - December 2017
        </em>
      </p>
      <ul>
        <li>
          Developed enhancements, diagnosed and fixed bugs reported in all areas
          of an enterprise application. Primary development consisted of VB.NET
          using .NET Framework 4.5.2, T-SQL For MS SQL Server 2008 R2 and
          Microsoft SQL Server Reporting Services (SSRS).
        </li>
        <li>
          Automated builds for each change set across three supported
          application versions and implemented nightly releases for the web app
          to a preconfigured application using VSTS (TFS) and Microsoft Azure
          IaaS.
        </li>
        <li>
          Streamlined release process for deployment team through version
          control in VSTS, Azure Pipelines and a custom tool for managing DML
          SQL Scripts.
        </li>
        <li>
          Developed a Web API using ASP.NET MVC Architecture to allow users to
          submit photos associated with the inspection via an Android app.
          Utilized Unity MVC Dependency injection, Entity Framework 6 and
          AutoMapper object-object mapping.
        </li>
        <li>
          Developed the traceback and recall module of the application. Allows
          users to start an investigation into a foodborne outbreak, and begin
          creating a web of events linking facilities, products and inspections
          to identify the source and contain the outbreak.
        </li>
        <li>
          Managed application deployments for 16 on-prem implementations of a
          staging/test environment and a production environment.
        </li>
      </ul>
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
