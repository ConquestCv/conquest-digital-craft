# ConQuest Portfolio

## Overview
Portfolio website for Aisiri Conquest Samuel - a Digital Operations & Virtual Assistance Specialist. The site showcases experience, skills, and education with sections for "Real World" and "Web3" work.

## Recent Changes
- 2026-02-20: Migrated from Lovable to Replit environment
- Updated Vite config to use port 5000, allow all hosts
- Removed lovable-tagger dependency from vite config
- Configured static deployment (build: `npm run build`, public dir: `dist`)

## Project Architecture
- **Frontend-only** React + TypeScript application built with Vite
- **UI**: shadcn/ui components, Tailwind CSS, Radix UI primitives
- **Routing**: react-router-dom v6
- **State**: @tanstack/react-query
- **Styling**: Tailwind CSS with tailwindcss-animate
- **Charts**: Recharts

## Structure
```
src/
  App.tsx          - Main app component with routing
  main.tsx         - Entry point
  components/      - Reusable UI components
  pages/           - Page components
  hooks/           - Custom React hooks
  lib/             - Utility functions
  assets/          - Static assets
```

## User Preferences
- None recorded yet
