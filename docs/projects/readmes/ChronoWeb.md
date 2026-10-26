# Chrono Desktop

A desktop planner that combines scheduled tasks, a focus timer, calendar views, and a personal journal.

**Web + Desktop** · **In Development** · 2026

[Portfolio](https://kuraisler.xyz)

## Purpose

Chrono Desktop keeps daily planning and reflection in one workspace. Users can organize scheduled work, track a focused session, review dates in a calendar, and write journal entries without maintaining separate tools for each activity.

## Intended users

Students, freelancers, and individuals who want a desktop workspace for personal scheduling, focused work, and journaling.

## Main capabilities

- Create and organize tasks with dates, times, and completion status.
- Use a focus panel to track time against a selected task.
- Review schedules in a calendar and receive desktop reminders.
- Write rich-text journal entries and attach images.

## How it was built

### Shared web interface

React and Vite power the screens, with Tailwind CSS and Radix UI components. Service modules keep database calls separate from page components.

### Desktop shell

Tauri wraps the interface in a native desktop application. Its Rust configuration and notification plugin enable desktop integration.

### Accounts and content

Supabase supports authentication, PostgreSQL-backed task and journal records, and image storage. Framer Motion handles interface transitions.

## Technology stack

| Responsibility | Technologies |
| --- | --- |
| Interface | JavaScript, React 18, Vite 8, Tailwind CSS 3, Radix UI |
| Desktop runtime | Tauri 2, Rust, Tauri Notifications |
| Data & services | Supabase Auth, PostgreSQL, Supabase Storage |
| Interaction | Framer Motion, React Router |

## Project scope and current state

A personal productivity project in development. Desktop packaging uses Tauri, with Supabase providing account and data services.

## Source guide

- [`src/pages/`](src/pages/)
- [`src/api/chronoService.js`](src/api/chronoService.js)
- [`src/components/chrono/FocusPanel.jsx`](src/components/chrono/FocusPanel.jsx)
- [`src-tauri/`](src-tauri/)

## Development setup

Configure the Supabase URL and public client key read by src/api/supabaseClient.js. The database needs the expected tasks and journal tables, access policies, and journal image storage. Desktop development also requires the Rust toolchain and Tauri prerequisites for your operating system.

```sh
npm install
npm run dev

# Desktop development, with Tauri prerequisites installed:
npm run desktop:dev

# Desktop packaging
npm run desktop:build
```

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
