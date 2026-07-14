# Eva Liu — Personal Website

My portfolio website for software engineering opportunities and freelance web development work.

**Live site:** [lilacplanet.dev](https://www.lilacplanet.dev)

## Overview

I built this site to give hiring teams and potential clients one place to understand my experience, view my work, and contact me. It highlights my software engineering background, research software projects, independent projects, and freelance web development services.

## Highlights

* Responsive single-page layout for desktop and mobile
* Dedicated paths for software engineering experience and freelance services
* Reusable components for experience, projects, service information, navigation, and contact
* Direct links to source code, live projects, my resume, GitHub, and LinkedIn
* Contact form powered by Web3Forms
* SEO and Open Graph metadata with Vercel Analytics

## Built With

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide React](https://lucide.dev/)
* [Web3Forms](https://web3forms.com/)
* [Vercel Analytics](https://vercel.com/analytics)

## Project Structure

```text
personal-website/
├── public/                     # Images, resume, and static assets
├── src/
│   └── app/
│       ├── components/         # Reusable UI components
│       ├── website-sections/   # Main page sections
│       ├── globals.css         # Global styles and Tailwind configuration
│       ├── layout.tsx          # Root layout, metadata, and analytics
│       └── page.tsx            # Main page composition
├── package.json
└── tsconfig.json
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/evaxliu/personal-website.git
cd personal-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

* `npm run dev` — starts the development server
* `npm run build` — creates a production build
* `npm run start` — runs the production build
* `npm run lint` — checks the project for linting issues

## Contact

* [Portfolio](https://www.lilacplanet.dev)
* [LinkedIn](https://www.linkedin.com/in/el02/)
* [GitHub](https://github.com/evaxliu)
