# PopClozet — Intern Assignment (Round 2)

## Overview

This repository is a starter codebase for the Round-2 intern assignment. The goal for interns is to improve and customize the landing page, then deploy their finished repository to Vercel and submit a PR with a live URL.

The codebase already contains a Vite + React + TypeScript app with Tailwind CSS and shadcn-ui components. Your task is to iterate on the UI/UX, add improvements, and show polish in both design and code quality.

## Goals

- Improve the landing page visuals and copy.
- Ensure responsive behavior across common screen sizes (mobile, tablet, desktop).
- Improve accessibility (semantic HTML, keyboard navigation, alt text, color contrast).
- Optimize basic performance (images, font loading, bundle size awareness).
- Deploy the final site to Vercel and include the live URL in your submission.

## Getting started (local development)

Open a PowerShell terminal and run:

```powershell
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

- `npm run dev` starts the Vite development server (hot reload).
- Use `npm run build` to produce a production build and `npm run preview` to preview the build locally.

## Development notes

- This project uses TypeScript and React. Keep type-safety in mind when changing components.
- UI primitives live in `src/components/ui/` and higher-level components in `src/components/`.
- Utility functions are in `src/lib/` and hooks in `src/hooks/`.

## Deployment — Vercel (recommended)

Use Vercel for deployment (free for student/individual projects). Basic steps:

1. Push your changes to GitHub (on a feature branch).
2. Create a Vercel account and link your GitHub repository.
3. In Vercel, import the project and accept defaults — Vercel auto-detects Vite apps.
4. Configure environment variables if needed (none required by default).
5. Deploy; Vercel will provide a live URL (e.g., `https://your-app.vercel.app`).

Tip: You can also add a `vercel.json` for custom build settings, but it's not required for this assignment.

## Submission instructions

- Create a branch using this naming convention: `feature/<your-name>-landing` (e.g., `feature/alex-landing`).
- Commit your changes and push the branch to GitHub.
- Open a Pull Request (PR) against `main` with a short description of your changes.
- In the PR description include:
	- The live Vercel deployment URL.
	- A short list of key changes and files touched.
	- Any instructions to review (e.g., login details if you added a demo account).

Optional: Add screenshots or a short GIF to the PR to showcase the UX improvements.

## Evaluation rubric

Work will be evaluated on the following criteria:

- **Design & Visuals:** Cohesive visual language, typography, spacing, imagery.
- **Responsiveness:** Site functions and looks good on mobile/tablet/desktop.
- **Accessibility:** Semantic HTML, keyboard navigation, aria attributes where appropriate, color contrast.
- **Code Quality:** Readable, maintainable code, meaningful commits, and sensible component structure.
- **Performance:** Reasonable bundle size, optimized images, efficient rendering.

Bonus points for:

- Meaningful animations or micro-interactions that improve perceived quality.
- Tests (unit or integration) for critical components.
- Automated formatting / linting (configured `prettier` / `eslint`).

## Helpful tips & expectations

- Keep commits small and focused; use descriptive commit messages.
- Avoid committing large generated assets; prefer optimized images.
- If you add third-party packages, explain why in the PR.
- If you break the build, include steps to reproduce and how to run locally.



---

Good luck — we look forward to seeing creative improvements and solid engineering!
