# NEXUS Growth

### Full-Service Creative Production & Digital Agency Platform

NEXUS Growth is a modern digital agency web experience focused on creative production, digital services, interactive storytelling, and technology-driven presentation.

The project is built around a highly visual interface combining **Next.js App Router**, **React**, **Tailwind CSS**, **GSAP**, **Framer Motion**, and **Lenis** to deliver responsive layouts, smooth scrolling, motion effects, and interactive service experiences.

> **Project Note:** This repository is a customized/derived implementation of an existing NEXUS Growth project. The original project structure and concept are retained where applicable, while this repository may contain local modifications, configuration changes, visual updates, and other customizations.

---

## ✨ Project Overview

NEXUS Growth presents a full-service digital agency experience covering creative, development, marketing, content, and growth-oriented services.

The interface emphasizes:

- Interactive visual storytelling
- Motion-driven user experiences
- Responsive web design
- Service-specific landing pages
- Smooth scrolling interactions
- Reusable React components
- Modern Next.js App Router architecture
- Editorial and neo-brutalist visual direction
- Responsive desktop, tablet, and mobile experiences

---

## ⚡ Services & Capabilities

The platform presents **11 core service disciplines**.

### 1. Website Development

`/services/web-development`

- Custom website development
- Next.js and React application architecture
- Interactive UI development
- GSAP-powered animation experiences
- Smooth scrolling interactions
- Responsive interface development

### 2. AI Automation

`/services/ai-automation`

- AI automation concepts
- Intelligent workflow experiences
- Interactive automation-focused interfaces
- Digital growth and automation concepts
- AI-oriented service presentation

### 3. Branding & Design

`/services/branding-design`

- Brand identity experiences
- Editorial visual systems
- Typography-driven design
- Interactive brand presentation
- Visual storytelling

### 4. App Development

`/services/app-development`

- Application development concepts
- Digital product experiences
- Interactive application interfaces
- Mobile-oriented product presentation

### 5. Graphic Design

`/services/graphic-design`

- Digital graphic design
- Marketing collateral
- Editorial compositions
- Promotional creative
- Visual communication

### 6. Google & Meta Ads

`/services/google-meta-ads`

- Paid advertising concepts
- Google Ads
- Meta advertising
- Performance marketing
- Conversion-focused campaign experiences

### 7. Social Media Management

`/services/social-media-management`

- Social media strategy
- Content planning
- Short-form content concepts
- Community growth
- Social campaign management

### 8. Video Production & Editing

`/services/video-production-editing`

- Video production
- Video editing
- Motion graphics
- Cinematic brand content
- Social-first video experiences

### 9. Copywriting & Content Strategy

`/services/copywriting-content-strategy`

- Website copywriting
- Marketing content
- Landing page messaging
- Brand storytelling
- Content strategy

### 10. SEO

`/services/seo`

- Search engine optimization
- Technical SEO concepts
- Content strategy
- Search visibility
- Organic growth strategy

### 11. CRM & Sales Funnel Setup

`/services/crm-sales-funnel`

- CRM strategy
- Lead-generation funnels
- Conversion journeys
- Sales funnel architecture
- Customer lifecycle concepts

---

## 🎨 Design & Experience

The project uses a distinctive visual direction combining:

- Neo-brutalist design
- Editorial-inspired layouts
- High-contrast typography
- Dark and atmospheric interfaces
- Kinetic navigation
- Scroll-based animation
- Interactive service experiences
- Tactile UI elements
- Responsive layouts
- Motion-driven storytelling

The design approach makes interaction and presentation a central part of the overall agency experience.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.3.5 |
| Architecture | Next.js App Router |
| UI Library | React 19.2.8 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 |
| UI Motion | Framer Motion |
| Smooth Scrolling | Lenis |
| Icons | Lucide React |
| Utility Styling | clsx, tailwind-merge |
| CSS Processing | PostCSS |
| Code Quality | ESLint |
| Build | Next.js / Turbopack |

---

## 🧩 Application Architecture

The project uses the **Next.js App Router** architecture with application routes separated from reusable components and supporting utilities.

```text
Nexus-Growth-Project/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── favicon.ico
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── services/
│   │       ├── page.tsx
│   │       ├── web-development/
│   │       ├── ai-automation/
│   │       ├── branding-design/
│   │       ├── app-development/
│   │       ├── graphic-design/
│   │       ├── google-meta-ads/
│   │       ├── social-media-management/
│   │       ├── video-production-editing/
│   │       ├── copywriting-content-strategy/
│   │       ├── seo/
│   │       └── crm-sales-funnel/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── services/
│   │   └── ui/
│   │
│   └── lib/
│
├── public/
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── tsconfig.json
├── package.json
├── package-lock.json
├── AGENTS.md
├── CLAUDE.md
├── walkthrough.md
└── README.md
```

---

## 🚀 Local Development

### Install Dependencies

```bash
npm ci
```

### Start Development Server

```bash
npm run dev
```

The development application runs at:

```text
http://localhost:3000
```

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Generate a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

---

## 🏗️ Production Build

Generate a production build:

```bash
npm run build
```

Start the production application:

```bash
npm run start
```

---

## 🔍 Code Quality

Run the project's ESLint configuration:

```bash
npm run lint
```

For a production-ready verification:

```bash
npm run lint
npm run build
```

---

## 🌐 Live Project

**Live Website:**

https://nexus-growth-project.vercel.app/

**GitHub Repository:**

https://github.com/lifeofthecoders/Nexus-Growth-Project

---

## 🔄 Development Workflow

The project can be maintained using the following workflow:

```text
Development
     ↓
Local Testing
     ↓
Lint Validation
     ↓
Production Build
     ↓
Git Commit
     ↓
Push to Main
     ↓
Deployment
```

Typical Git commands:

```bash
git status
git add .
git commit -m "Describe your changes"
git push origin main
```

---

## 📌 Project Status

**Status:** Active Development

The repository contains the current customized implementation, including application source code, UI components, assets, configuration, and project documentation.

The `main` branch is the primary branch used for the current project.

---

## 📚 Project Ownership

This repository contains the current NEXUS Growth project and its ongoing development.

The project includes the application's source code, architecture, UI implementation, configurations, assets, service experiences, and project-specific updates maintained within this repository.

All applicable third-party libraries, assets, and components remain subject to their respective licenses and usage terms.

---

## 🔐 License & Usage

NEXUS Growth is maintained as a private and proprietary project within this repository.

The source code, project configuration, UI implementation, custom modifications, assets, and other project materials contained in this repository are intended for authorized project use only.

Third-party libraries, dependencies, fonts, assets, and other externally licensed materials remain subject to their respective licenses and usage terms.

**Private & Proprietary // NEXUS Growth © 2026. All rights reserved.**

Unauthorized copying, redistribution, modification, or commercial use of proprietary project materials is prohibited without appropriate permission.
