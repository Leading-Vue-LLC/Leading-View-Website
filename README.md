# Leading Vue, LLC — Official Corporate Website

Welcome to the official static website repository for **Leading Vue, LLC**.

- **URL**: [https://leadingvue.com](https://leadingvue.com)
- **Primary Inquiries**: [sales@leadingvue.com](mailto:sales@leadingvue.com)

---

## Overview

Leading Vue, LLC provides strategic business advisory and asset management solutions across two foundational pillars:

1. **Professional Services**:
   - **Fractional CTOs**: Technical leadership, cloud architecture, system modernization, and engineering mentorship.
   - **Technology Consultation**: Modern stack evaluation, platform integration, and cloud security audits.
   - **Business Process Consultation**: Workflow optimization, standard operating procedure (SOP) engineering, and KPI dashboards.
   - **AI for Business Consultation**: Operational AI readiness, agentic automation, generative LLM workflows, and data security.
   - **Talent Hiring & Acquisition**: Curated candidate sourcing, technical/culture vetting, and seamless onboarding pipelines.
   - **Fractional Executive Assistants**: High-leverage executive administrative support, calendar, operations, and communications.

2. **Property Management**:
   - **Residential Property Management**: Dedicated oversight tailored exclusively to single-family homes, townhouses, and multi-family residential portfolios (excluding commercial real estate and large condo complexes).
   - **Tenant Relations & Leasing**: Multi-channel marketing, rigorous applicant screening, lease agreements, and tenant retention.

---

## Key Features

- **Modern & Responsive Design**: Custom glassmorphism, sleek dark theme with vibrant azure and emerald accents, responsive typography using Google Fonts (*Plus Jakarta Sans* and *Inter*).
- **Interactive Service Navigation**: Filter tabs to switch between all offerings, professional services, and property management.
- **Direct Inquiry Routing**: Clicking "Inquire" on any service automatically scrolls to and pre-selects that service in the contact form.
- **Client-Side Form Handling**: Validates input fields and connects inquiries directly to `sales@leadingvue.com` with pre-formatted email dispatch and one-click clipboard copying.
- **Interactive FAQ Accordion**: Smoothly expands/collapses answers to common client questions with keyboard accessibility.
- **Automated GitHub Actions CI/CD**: Seamless deployment to GitHub Pages on every push to the `main` branch.
- **Custom Domain Ready**: Pre-configured `CNAME` file pointing to `leadingvue.com` with `.nojekyll` enabled.

---

## Project Structure

```
Leading-View-Website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for automated Pages deployment
├── assets/
│   ├── icons/                  # High-quality SVG icons for services & branding
│   │   ├── logo.svg            # Brand logo
│   │   ├── icon-ea.svg         # Fractional EA icon
│   │   ├── icon-cto.svg        # Fractional CTO icon
│   │   ├── icon-hiring.svg     # Talent hiring icon
│   │   ├── icon-tech.svg       # Technology consultation icon
│   │   ├── icon-process.svg    # Process consultation icon
│   │   ├── icon-ai.svg         # AI consultation icon
│   │   ├── icon-property.svg   # Property management icon
│   │   └── icon-tenant.svg     # Tenant relations icon
│   └── images/
│       └── hero-visual.svg     # Custom architectural & tech isometric vector
├── css/
│   └── style.css               # Modern corporate styling, design tokens, and media queries
├── js/
│   └── main.js                 # Mobile drawer, FAQ accordion, tabs, form validation
├── CNAME                       # Domain routing for leadingvue.com
├── .nojekyll                   # Bypasses Jekyll processing on GitHub Pages
├── index.html                  # Main semantic HTML5 webpage with Schema.org JSON-LD
└── README.md                   # Project documentation
```

---

## Local Development & Preview

Because this is a pure static website with no external dependencies, you can preview it immediately:

1. **Directly in Browser**:
   - Double-click `index.html` or open it with any web browser (Chrome, Edge, Firefox, Safari).

2. **Using Any Local HTTP Server**:
   - If you have Python: `python -m http.server 8000`
   - If you have VS Code: Click **Go Live** with the *Live Server* extension.

---

## GitHub Pages Deployment Setup

This repository is already configured with an automated deployment workflow in `.github/workflows/deploy.yml`.

To activate GitHub Pages for your repository:

1. Go to your GitHub repository: [Leading-Vue-LLC/Leading-View-Website](https://github.com/Leading-Vue-LLC/Leading-View-Website).
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your changes to the `main` branch. The action will build and deploy the site automatically!

### Custom Domain DNS Configuration (`leadingvue.com`)

To link `leadingvue.com` to GitHub Pages:

1. At your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare, Google Domains):
   - Configure four **A Records** for the apex domain (`@` or `leadingvue.com`) pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Configure a **CNAME Record** for `www` pointing to:
     ```
     Leading-Vue-LLC.github.io
     ```
2. In GitHub repository **Settings > Pages > Custom domain**, ensure `leadingvue.com` is listed and check **Enforce HTTPS** once DNS propagates.

---

## Contact & Maintenance

- **Company**: Leading Vue, LLC
- **Sales & Inquiries**: [sales@leadingvue.com](mailto:sales@leadingvue.com)
- **Website**: [https://leadingvue.com](https://leadingvue.com)
