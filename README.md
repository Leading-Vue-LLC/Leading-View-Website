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
- **Automated Firebase Hosting deployment**: GitHub Actions deploys the site to Firebase Hosting when changes are pushed to `main`, with preview deployments for pull requests.
- **Custom domain**: `leadingvue.com` can be connected to Firebase Hosting from the Firebase console.

---

## Project Structure

```
Leading-View-Website/
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml         # Deploys main to Firebase Hosting
│       └── firebase-hosting-pull-request.yml  # Creates Firebase preview deployments
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
├── index.html                  # Main semantic HTML5 webpage with Schema.org JSON-LD
├── firebase.json               # Firebase Hosting configuration
├── .firebaserc                 # Default Firebase project
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
3. **Using the Firebase Hosting emulator**:
   - Run `npx -y firebase-tools@latest emulators:start --only hosting`
   - Open `http://localhost:5000`.

---

## Firebase Hosting Deployment

The Firebase project is `leading-vue---website`. The GitHub Actions workflow in `.github/workflows/firebase-hosting-merge.yml` deploys the static site to Firebase Hosting on pushes to `main` (or when started manually). Pull requests from branches in this repository receive a Firebase preview deployment. The site is no longer deployed to GitHub Pages.

The workflows require the GitHub repository secret `FIREBASE_SERVICE_ACCOUNT_LEADING_VUE___WEBSITE`, containing a service account credential authorized to deploy to this Firebase project. The project ID and hosting configuration are stored in `.firebaserc` and `firebase.json`.

### Connecting `leadingvue.com`

1. In the Firebase console, open the `leading-vue---website` project and go to **Hosting** > **Add custom domain**.
2. Add `leadingvue.com` (and `www.leadingvue.com` if both hostnames should work). Complete the ownership verification and DNS records exactly as Firebase displays them.
3. Wait for Firebase to verify the domain and provision its SSL certificate.
4. Update DNS to the exact records Firebase specifies (the old GitHub Pages `185.199.x.153` A records must be removed).
5. Confirm `https://leadingvue.com` is served by Firebase over HTTPS.

---

## Contact & Maintenance

- **Company**: Leading Vue, LLC
- **Sales & Inquiries**: [sales@leadingvue.com](mailto:sales@leadingvue.com)
- **Website**: [https://leadingvue.com](https://leadingvue.com)
