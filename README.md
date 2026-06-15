# 🧙 Wizarding Registry Dashboard

A mystical, dark-themed admin dashboard for overseeing the magical equilibrium across all wizarding realms. Built with React 19, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui.

---

## ✨ Features

- **KPI Cards** — At-a-glance metrics to monitor the state of the wizarding world
- **Interactive Charts** — Registry and Wizards charts powered by Recharts
- **Wizards Table** — Paginated, searchable table of all registered wizards fetched live from the Wizard World API
- **Wizard Details Modal** — Click any wizard row to view full details in an elegant dialog
- **Sidebar Navigation** — Collapsible desktop sidebar with navigation items, registry info, and a "New Elixir" shortcut
- **Mobile Drawer** — Responsive sheet-based sidebar for mobile/tablet viewports
- **Debounced Search** — Real-time wizard search with a 400ms debounce to minimize API calls
- **React Query Caching** — Data is cached for 5 minutes with built-in error and loading states

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Language | TypeScript 6 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Data Fetching | TanStack React Query v5 + Axios |
| Charts | Recharts |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Font | Geist Variable |

---

## 📁 Project Structure

```
wizard_dashboard/
├── public/                  # Static assets (icons, images)
├── src/
│   ├── assets/              # Bundled assets (hero image, SVGs)
│   ├── components/
│   │   ├── asaidbar/        # Sidebar components (desktop + mobile sheet)
│   │   │   ├── Asidebar.tsx
│   │   │   ├── AsidebarItems.tsx
│   │   │   ├── AsidebarRegistry.tsx
│   │   │   ├── AsidebarSettings.tsx
│   │   │   └── AsidebarSheet.tsx
│   │   ├── charts/          # Data visualization components
│   │   │   ├── RegistryChart.tsx
│   │   │   └── WizardsChart.tsx
│   │   ├── mainContent/     # Dashboard main area
│   │   │   ├── KPICard.tsx
│   │   │   ├── MainContent.tsx
│   │   │   └── WizardDetailsModel.tsx
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── Header.tsx
│   │   ├── Search.tsx
│   │   ├── TableSection.tsx
│   │   └── PaginationComponent.tsx
│   ├── hooks/
│   │   ├── use-mobile.ts    # Responsive breakpoint hook
│   │   ├── useDebounce.ts   # Input debounce hook
│   │   └── useGetItems.ts   # Wizard data fetching hook
│   ├── App.tsx
│   └── index.css            # Global styles & Tailwind config
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm **v9+**

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/your-username/wizard_dashboard.git
cd wizard_dashboard

# Install dependencies and start the dev server
npm start
```

Or run the steps separately:

```bash
npm install
npm run dev
```

The app will be available at **http://localhost:5173**.

### Available Scripts

| Script | Description |
|---|---|
| `npm start` | Install dependencies and start the dev server |
| `npm run dev` | Start Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🌐 API

Wizard data is fetched from the public [Wizard World API](https://wizard-world-api.herokuapp.com):

```
GET https://wizard-world-api.herokuapp.com/Wizards
```

Results are cached client-side for **5 minutes** via React Query. Client-side filtering is applied on top of the cached data for instant search.

---

## 📱 Responsive Design

| Breakpoint | Layout |
|---|---|
| Mobile (`< md`) | Full-width content, hamburger menu with slide-out drawer |
| Tablet (`md`) | Header search visible, drawer navigation |
| Desktop (`xl+`) | Fixed 256px sidebar, full dashboard layout |

---

## 🎨 Design System

The dashboard uses a deep-space dark theme built on custom Tailwind tokens:

- **Background**: `#051424` / `#0D1C2D`
- **Primary accent**: `#D0BCFF` (soft lavender)
- **Text primary**: `#D4E4FA`
- **Text secondary**: `#CBC3D7`
- **Border**: `#D0BCFF1A` (translucent lavender)

---

<div align="center">

Created with ❤️ by Osama Ahmed

</div>
