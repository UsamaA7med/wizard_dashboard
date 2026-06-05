# 🧙 Wizarding Registry Dashboard

A responsive dashboard for managing and exploring the magical world's wizard registry. Built with React 19, TypeScript, TanStack Query, and Recharts.

---

## 🔗 Live Demo

Check out the live application here: [Wizarding Registry Dashboard](https://wizard-dashboard-one.vercel.app/)

---

## 📸 Overview

The dashboard includes:

- **KPI Cards** — Summary stats for registered wizards, active elixirs, and pending verifications
- **Charts** — Registry activity bar chart and specialty distribution pie chart
- **Wizards Table** — Live data from the Wizard World API with debounced search and client-side pagination
- **Wizard Details Modal** — Expandable profile view with full elixir list

---

## 🚀 Getting Started

```bash
npm install && npm run dev
```

The app will be running at `http://localhost:5173`

---

## 🛠️ Tech Stack

| Tool                  | Purpose                 |
| --------------------- | ----------------------- |
| React 19 + TypeScript | UI & type safety        |
| Vite                  | Build tool & dev server |
| Tailwind CSS v4       | Styling                 |
| TanStack Query v5     | API fetching & caching  |
| Axios                 | HTTP client             |
| Recharts              | Charts                  |
| shadcn/ui + Radix UI  | UI components           |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── asaidbar/          # Sidebar navigation
│   ├── charts/            # ActivityChart, SpecialtyChart
│   ├── mainContent/       # KPICard, MainContent, WizardDetailsModal
│   ├── ui/                # shadcn/ui base components
│   ├── Header.tsx
│   ├── Search.tsx
│   ├── TableSection.tsx
│   ├── PaginationComponent.tsx
│   └── SkeletonTable.tsx
├── hooks/
│   ├── useGetItems.ts     # TanStack Query hook for wizards API
│   ├── useDebounce.ts     # Generic debounce hook
│   └── use-mobile.ts
├── lib/
│   ├── dummy.ts           # Static KPI & sidebar data
│   └── utils.ts
├── types/
│   └── index.ts           # Shared TypeScript types
├── App.tsx
└── main.tsx
```

---

## 🔌 API

**Base URL:** `https://wizard-world-api.herokuapp.com/Wizards`

| Param              | Description          |
| ------------------ | -------------------- |
| `?FirstName=Harry` | Filter by first name |
| `?LastName=Potter` | Filter by last name  |

**Response shape:**

```ts
{
  id: string
  firstName: string | null
  lastName: string | null
  elixirs: {
    id: string
    name: string
  }
  ;[]
}
```

> `firstName` and `lastName` can be `null` — the app displays `"Unknown"` as a fallback.

---

## ✨ Features

### Wizards Table

- Fetches live data from the Wizard World API
- Handles `null` names gracefully with `"(None)"` fallback
- Elixir names shown in a tooltip on hover
- "View" action opens a full wizard profile modal

### Debounced Search

- Filters wizards by first or last name
- Fires the API request **400ms** after the user stops typing
- Runs two parallel requests (`?FirstName=` and `?LastName=`) and merges + deduplicates results
- Resets to page 1 on every new search

### Pagination

- Client-side pagination (4 rows per page)
- Shows current range and total records
- Resets automatically when search query changes

### Loading & Empty States

- Skeleton loader shown while fetching
- Graceful handling of empty results

---

## 📦 Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Type-check + production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## 🔮 What I'd Improve With More Time

- **Rows per page selector** — Let the user choose between 4, 10, or 25 rows per page
- **Sorting** — Click column headers to sort by name or elixir count
- **Real chart data** — Connect charts to live API data instead of static values
- **Error boundary** — Graceful UI fallback if the API is down
- **Animated transitions** — Page and search transitions for a smoother feel
- **URL state sync** — Persist search query and page in the URL so the browser back button works

<div align="center">
  <h3>Created with ❤️ by Osama Ahmed</h3>
</div>
