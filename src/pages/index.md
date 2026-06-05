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
    - LLM Infrastructure / Model Serving
    - AWS Bedrock / Azure OpenAI
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
          - Supported operational readiness and AWS infrastructure setup for the initial launch of Lexis+ AI, establishing environment standards and deployment patterns for AI-backed product teams on AWS Bedrock and Azure OpenAI.
          - Established production readiness standards for RAG-based AI workloads developed by data science teams, implementing OpenTelemetry auto-instrumentation for FastAPI services, RED metric monitoring in coralogix, and operational review requirements for AI-backed applications going to production.
          - Responsible for production operations and observability for an internal LLM proxy supporting multi-provider model routing across AWS Bedrock, Anthropic, OpenAI, Azure AI Foundry, Mistral, and Google. Enabling standardized AI workload access for engineering teams across the organization.
          - Extended observability coverage for AI workloads through direct application instrumentation. Implemented OTel GenAI semantic convention metrics for the LLM proxy in Python including provider call latency, token usage, in-flight request gauges, and circuit breaker state tracking; added time-to-first-byte instrumentation for AI chat interfaces to capture user-perceived responsiveness beyond span coverage; and re-instrumented a legacy .NET telemetry library originally designed for Splunk-based metric calculation, replacing homegrown distributed tracing with an OTel metrics listener emitting standardized low-cardinality key event duration and count metrics while preserving the existing developer interface.
          - Established the initial model serving infrastructure pattern for GPU-based inference workloads, provisioning dedicated GPU node groups and deploying containerized model serving via Docker Compose with S3-backed model storage.

    - company: andculture
      location: Harrisburg, PA
      dates: January 2018 - August 2021
      title: Senior Software Engineer / Technical Lead
      responsibilities:
          - Led architecture and delivery of NFPA LiNK, a greenfield digital platform transforming NFPA's fire safety code library from print distribution to a fully searchable, offline-capable web application serving 10,000 subscribers in the first 3 months. Reverse engineered a complex DITA/XML schema from MarkLogic source files to design a relational data model supporting 300+ codes and standards with full version history across edition cycles. Built a Hangfire-orchestrated parallel import pipeline processing vendor-supplied archive diffs into the relational model, shipping the full platform in 11 months.
          - Delivered offline capability via progressive web app architecture with SQLite for local storage and Lunr.js for client-side full-text search across the full code library.
          - Built and led a team of 5 engineers with a focus on craft and security fundamentals. Established regular code review sessions to expand skills. Conducted 1:1s and performance development cycles. Invested in individual growth through structured feedback and mentorship.
          - Led a complete frontend rebuild of UPMC Pinnacle's web presence, rearchitecting a legacy ASPX/CoffeeScript codebase with a ground-up ITCSS design system and modern layout structure.
          - Built fullstack curriculum features for Edio, a production LMS platform serving Commonwealth Charter Academy, one of Pennsylvania's largest charter school networks.
          - Developed the company's first Terraform pipeline to Azure for PA Turnpike Sitefinity CMS deployments, enabling consistent and automated multi-environment releases.
          - Managed AWS infrastructure and CI/CD automation using Elastic Beanstalk, Jenkins, and S3 to streamline deployments and reduce release lead times across multiple client projects.

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
