---
templateKey: index-page
title: Dylan Justice Resume
name: Dylan C. Justice
jobTitle: Staff Site Reliability Engineer | Platform Architect
phone: (330) 472 9421
email: dylan@dylanjustice.com
address: Mechanicsburg, PA
links:
    - name: Linkedin
      url: https://www.linkedin.com/in/dylan-c-justice/
      icon: LinkedIn
    - name: Github
      url: https://github.com/dylanjustice
      icon: Github
    - name: Profile
      url: https://blog.dylanjustice.com
      icon: Earth
    - name: Resume
      url: https://resume.dylanjustice.com
      icon: Profile

objectives:
    - Production-focused platform engineer with deep experience across the full operational stack - cloud infrastructure, Kubernetes, observability, and reliability engineering. Equally comfortable working with application engineers on instrumentation strategy and with operators on incident response and systemic improvement.
    - Driven by the space between developer velocity and user experience. Passionate about building the platforms, pipelines, and reliability frameworks that let engineering teams ship fast without the end user ever knowing something broke.
    - Experienced across AWS and Azure cloud services, Kubernetes at production scale, and observability tooling from collector infrastructure to SLO design. Comfortable moving through any problem - applications, networking, or cloud primitives - and bringing structure to ambiguity.

skills:
    - AWS Cloud Platform
    - Azure Cloud Platform
    - Kubernetes / EKS / ArgoCD / GitOps
    - Terraform / CloudFormation
    - Jenkins / Azure DevOps
    - OpenTelemetry / Coralogix / Datadog / Splunk
    - Prometheus / Thanos
    - Golang / Python / C# (.NET)
    - Event Driven Architectures
    - Observability / Incident Management
    - Linux Administration / Windows Administration
    - PostgreSQL / MS SQL Server

workExperience:
    - company: LexisNexis
      location: Mechanicsburg, PA (Home Based)
      dates: August 2021 - Present
      title: Consulting Site Reliability Engineer
      responsibilities:
          - Pioneered LexisNexis's first SLO program, leading vision, architecture, and implementation from the ground up. Partnered with engineering and operations teams to define SLIs representing critical customer journeys for the Protege AI product release, and designed error budget policies that balanced accountability with developer buy-in. Reached initial production deployment before organizational priorities shifted.
          - Defined the SRE strategic pillars and engagement model for a team of 16 Site Reliability Engineers.
          - Designed and operated the central OpenTelemetry collector infrastructure supporting the organization's migration from Datadog to Coralogix, evolving the platform from an ECS Fargate deployment to a production EKS StatefulSet. Responsible for collector configuration, routing pipelines, and sampling strategy across the global observability stack.
          - Engineered a Splunk logs-to-metrics Prometheus exporter to bridge observability gaps for legacy-instrumented services, and deployed a Kubernetes-hosted Prometheus TSDB with Thanos for 13+ months of long-term SLO metric storage - projecting ~$15K total cost over 3 years as the program scales to hundreds of services.
          - Established and maintained a centralized developer portal using Backstage, consolidating over 700 runbooks from disparate Confluence pages into a git-backed TechDocs system with audit processes. Implemented software templates for Lambda, ECS, and EKS services encoding standard deployment patterns for developer self-service.
          - Built a Terraform module registry of 95 standardized modules covering AWS and other providers, forming the foundation for organization-wide IaC reuse. Modules were adopted as the basis of a separate team's MassDriver platform implementation.
          - Standardized GitOps workflows using ArgoCD ApplicationSets, enabling seamless workload onboarding and consistent deployment patterns across business units. Patterns were adopted as the standard for EKS service delivery.
          - Developed a CloudFormation Resource Extension integrating Coralogix alerting, enabling automated deployment of RED metrics via IaC pipelines.
          - Developed a centralized event-driven system normalizing CloudWatch, Azure Monitor, Splunk, and Coralogix events into a unified schema for incident routing and automation.
          - Served as Incident Commander for the global platform throughout tenure, leading technical resolution of high-impact production incidents and driving systemic improvement through postmortem retrospectives.
          - Embedded on Azure Architecture Team to establish governance patterns and secure design standards for multi-tenant workloads.
          - Led technical design and operational readiness of AI-based products on AWS Bedrock and Azure OpenAI, supporting multi-region deployments and data residency compliance.

    - company: andculture
      location: Harrisburg, PA
      dates: January 2018 - August 2021
      title: Senior Software Engineer / Technical Lead
      responsibilities:
          - Architected and developed NFPA LiNK, a digital content platform that transformed NFPA's fire safety code library from physical print distribution to an online and offline accessible platform for electricians and safety professionals. Built on .NET Core, React, and MS SQL Server using Onion architecture for long-term maintainability.
          - Led a team of 5 engineers delivering large-scale web applications for clients including UPMC Pinnacle, PA Courts, and Commonwealth Charter Academy.
          - Managed AWS infrastructure and CI/CD automation using Elastic Beanstalk, Jenkins, and S3 to streamline deployments and reduce release lead times.
          - Implemented trunk-based development workflows and continuous integration pipelines to reduce delivery friction across multiple teams.
          - Supported Azure and Sitefinity CMS deployments using Terraform and Azure DevOps, enabling consistent and automated multi-environment releases.

    - company: Computer Aid Inc.
      location: Harrisburg, PA
      dates: January 2013 - December 2017
      title: Software Developer, Advisory
      responsibilities:
          - Developed and maintained enterprise applications for USA Food Safety / SafeInspect, extending adoption to 11 state and local organizations.
          - Modernized legacy applications with Web API and token-based authentication, introducing automated build and release processes through Azure DevOps and PowerShell.
          - Mentored a team of 8 developers to improve delivery efficiency and reduce production deployment errors through automation and standardized SQL release tooling.
          - Led cloud migration and hybrid hosting strategies across on-prem and managed environments, ensuring secure deployments and version tracking.

education:
    - degree: B.S Energy Business and Finance
      school: Penn State University
      year: 2012
      location: State College, PA
    - degree: Minor Energy Engineering
      school: Penn State University
      year: 2012
      location: State College, PA
---
