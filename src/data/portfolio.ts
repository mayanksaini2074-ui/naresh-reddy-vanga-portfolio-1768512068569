import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Naresh Reddy Vanga",
    "title": "Data Center Technician",
    "email": "onlynareshus1999@gmail.com",
    "phone": "+1 (414) 397-7364",
    "linkedin": "",
    "github": "",
    "location": "",
    "summary": "Data Center Technician with over 2 years of experience in supporting production data centers and campus-scale infrastructure. Proven expertise in maintaining high availability environments, troubleshooting, and executing strict SOPs. Previously worked as a Junior Network Engineer, managing LAN/WAN networks and resolving Layer 1-3 issues."
  },
  "experience": [
    {
      "title": "Technical Support Specialist",
      "company": "Concordia University, WI",
      "dates": "Oct 2024 – Nov 2025",
      "description": "Owned operational support for a campus data centre and IT infrastructure, supporting over 1000 users.",
      "highlights": [
        "Performed preventive maintenance and hardware break/fix, reducing repeat incidents by ~20–30%.",
        "Resolved 15–25 Layer 1–3 connectivity issues per week within defined SLA timelines.",
        "Managed 80–120 tickets per month through ServiceNow/Jira, consistently meeting SLA targets."
      ]
    },
    {
      "title": "Junior Network Engineer",
      "company": "Clara Minds",
      "dates": "Jun 2023 – Jul 2024",
      "description": "Supported production LAN/WAN environments, configuring switches, routers, VLANs, and IP addressing.",
      "highlights": [
        "Contributed to >99% uptime during normal operations.",
        "Resolved 10–20 network incidents per week under defined escalation procedures.",
        "Collaborated on network equipment deployments and infrastructure upgrades, minimizing service disruption."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Science, Computer Science and Information Systems",
      "institution": "Concordia University of Wisconsin",
      "years": "Aug 2023-Dec 2025",
      "gpa": ""
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Server Lab Optimization & Documentation",
      "description": "Reorganized a production university server lab improving rack layout, cable management, airflow efficiency, and asset labeling.",
      "technologies": [
        "Server Hardware",
        "Cable Management"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "IT Infrastructure Deployment Initiative",
      "description": "Performed hardware refurbishment, validation, and deployment for multi-system lab environments.",
      "technologies": [
        "Server Installation",
        "Cabling",
        "OS Imaging"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "animated-border",
  "about": "split",
  "experience": "accordion",
  "projects": "featured",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "modern",
  "colorPalette": "emerald"
};
