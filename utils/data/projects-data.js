export const projectsData = [
    {
        id: 1,
        name: 'Payment Operations Support (GPM)',
        description: `Act as the control point between an upstream PeopleSoft (PSFT) finance system and a Global Payment Management platform, reconciling incoming data so every payment record is complete and correct before funds are released to the bank.
        Verify payment readiness and statuses ahead of each release, confirm records are correctly reflected in Appian, and acknowledge and triage inbound support mail within SLA.
        Administer role-based access across Requester, BA, PA and PayOps profiles so each approver can action or reject payments strictly within their entitlement.`,
        tools: ['PeopleSoft (PSFT)', 'Appian', 'ServiceNow', 'CyberArk', 'SQL Server', 'Power Automate'],
        role: 'Senior Software Engineer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 2,
        name: 'Production Support & Incident Management',
        description: `Provide L1/L2 production support for fund accounting and investment management platforms at a global investment management client, covering user access provisioning, daily health checks, scheduled weekend environment refreshes and incident troubleshooting across Prod, UAT, QA and Dev.
        Run health checks by connecting to EC2-hosted application servers through CyberArk privileged access, and automate recurring checks and alert mail using Power Automate.
        Manage incident, problem and change workflows end to end in ServiceNow, coordinating with application teams to restore service and keep environments release-ready.`,
        tools: ['ServiceNow', 'CyberArk', 'AWS EC2', 'Power Automate', '.NET Core', 'React.js'],
        role: 'Senior Software Engineer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 3,
        name: 'Cloud Migration Assessment',
        description: `Assessed the technology stack of on-premise .NET applications ahead of an AWS migration programme, documenting frameworks, versions, dependencies and integration points for each application.
        Identified compatibility conflicts and migration risks in advance so they could be resolved before cutover rather than during it.
        Prepared application inventories and handover notes for the senior engineers executing the migration.`,
        tools: ['C#', '.NET Core', 'SQL Server', 'AWS (EC2)', 'Swagger'],
        role: 'Application Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 4,
        name: 'Financial Banking Web Application',
        description: `Redesigned a core banking web application with an 18-member team, improving overall system performance by 18%.
        Partnered with the frontend team to develop and integrate 8 APIs, reducing average response time by 2 seconds.
        Designed scalable modules with .NET Core and MVC, improving reliability by 15% and reducing downtime by 4%.`,
        tools: ['C#', '.NET Core', 'MVC Core', 'Entity Framework', 'Web API', 'SQL Server', 'React.js'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: '',
    }
];
