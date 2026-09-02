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

objectives: |
    Software engineer and Staff SRE with 15 years of experience across product development, platform engineering, and production operations.
    I bring an engineer's mindset to reliability work, with a focus on resilience engineering, blameless incident culture, and the observability infrastructure that makes both possible.
    Whether the end user is a customer or an engineer on my own team, I care about building things that have clear, measurable impact on how they work.

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
    - Golang / Python / Typescript / C# (.NET)
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
          - Pioneered LexisNexis's first SLO program, leading vision, architecture, and implementation from the ground up. Defined SLIs representing critical customer journeys for the Protege AI product release and designed error budget policies that balanced accountability with developer buy-in. Reached initial production deployment before organizational priorities shifted.
          - Defined the SRE strategic pillars and engagement model for a team of 16 Site Reliability Engineers across multiple business units.
          - Designed and operated the central OpenTelemetry collector infrastructure supporting the organization's migration from Datadog to Coralogix, evolving the platform from ECS Fargate to a production EKS StatefulSet with custom routing pipelines and sampling strategy across the global observability stack.
          - Engineered a Splunk logs-to-metrics Prometheus exporter to bridge observability gaps for legacy-instrumented services. Deployed a Kubernetes-hosted Prometheus TSDB with Thanos for 13+ months of long-term SLO metric retention, projecting only about $15K total cost over 3 years as the program scales to hundreds of services.
          - Extended observability coverage for AI workloads through direct application instrumentation in Python and .NET. Implemented OTel GenAI semantic convention metrics for the LLM proxy including provider call latency, token usage, in-flight request gauges, and circuit breaker state tracking. Added time-to-first-byte instrumentation for AI chat interfaces and re-instrumented a legacy .NET telemetry library to emit standardized OTel metrics while preserving the existing developer interface.
          - Responsible for production operations and observability for an internal LLM proxy supporting multi-provider model routing across AWS Bedrock, Anthropic, OpenAI, Azure AI Foundry, Mistral, and Google - enabling standardized AI workload access for engineering teams across the organization.
          - Established production readiness standards for RAG-based AI workloads and GPU-based model serving infrastructure. Implemented OTel auto-instrumentation for FastAPI services, RED metric monitoring, and operational review gates for AI-backed applications. Provisioned dedicated GPU node groups with Docker Compose and S3-backed model storage for inference workloads.
          - Built an event-driven CloudWatch alarm routing system in Go, using SNS fan-out to SQS and Lambda with a pluggable handler pattern to route alerts across 100+ AWS accounts to ServiceNow and custom automations including MarkLogic circuit breaking and failover.
          - Developed a concurrent Go automation to protect production ECR images from lifecycle policy deletion, using parallel workers fanning out across the full AWS organization to reconcile images in use across Lambda, ECS, and EKS workloads by applying protective tags.
          - Established and maintained a centralized developer portal using Backstage, consolidating over 700 runbooks into a git-backed TechDocs system. Implemented software templates for Lambda, ECS, and EKS services encoding standard deployment patterns for developer self-service.
          - Built a Terraform module registry of 95 standardized modules covering AWS and other providers, adopted as the foundation for a separate team's MassDriver platform implementation.
          - Standardized GitOps workflows using ArgoCD ApplicationSets across business units, adopted as the standard for EKS service delivery organization-wide.
          - Served as Incident Commander for the global platform, leading technical resolution of high-impact production incidents and driving systemic improvement through blameless postmortem retrospectives.

    - company: andculture
      location: Harrisburg, PA
      dates: January 2018 - August 2021
      title: Senior Software Engineer / Technical Lead
      responsibilities:
          - Led architecture and delivery of NFPA LiNK, a greenfield digital platform transforming NFPA's fire safety code library from print distribution to a fully searchable, offline-capable web application serving 10,000 subscribers in the first 3 months. Reverse engineered a complex DITA/XML schema from MarkLogic source files to design a relational data model supporting 300+ codes and standards with full version history. Built a Hangfire-orchestrated parallel import pipeline processing full NFPA texts in minutes, ready for review by subject matter experts. The product launched its initial version to users after just 11 months.
          - Delivered offline capability via progressive web app architecture with SQLite for local storage and Lunr.js for client-side full-text search across the full code library.
          - Built and led a team of 5 engineers with a focus on craft and security fundamentals. Established regular OWASP-based code review sessions, conducted 1:1s and performance development cycles, and invested in individual growth through structured feedback and mentorship.
          - Led a complete frontend rebuild of UPMC Pinnacle's web presence, rearchitecting a legacy ASPX/CoffeeScript codebase with a ground-up ITCSS design system. Built fullstack curriculum features for Edio, a production LMS platform serving Commonwealth Charter Academy.
          - Managed AWS infrastructure and CI/CD automation using Elastic Beanstalk, Jenkins, and S3. Developed the company's first Terraform pipeline to Azure for PA Turnpike Sitefinity CMS deployments.

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
