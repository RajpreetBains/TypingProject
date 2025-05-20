# 🧠 Typing Speed Web App Architecture

## 🗂️ File & Folder Structure

```
/typing-app
├── app/                     # Next.js App Router (Pages, Layouts, Routing)
│   ├── page.tsx             # Landing Page
│   ├── test/                # Typing test route
│   │   └── page.tsx         # Typing test interface
│   ├── leaderboard/         # Public leaderboard
│   │   └── page.tsx
│   ├── dashboard/           # Authenticated user dashboard
│   │   └── page.tsx
│   └── layout.tsx           # Shared layout component
│
├── components/              # Reusable UI Components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── TypingBox.tsx        # Typing area with logic
│   ├── StatsPanel.tsx
│   └── ResultModal.tsx
│
├── lib/                     # Utility functions
│   ├── supabase.ts          # Supabase client instance
│   ├── typing.ts            # WPM/accuracy calculations
│   └── words.ts             # Word generation logic
│
├── hooks/                   # Custom React hooks
│   ├── useAuth.ts           # Auth status + user
│   └── useTypingTest.ts     # Typing test state logic
│
├── services/                # External service interfaces
│   ├── userService.ts       # Supabase calls for user data
│   └── testService.ts       # Supabase calls for test records
│
├── store/                   # Global state (e.g., Zustand or Context)
│   └── typingStore.ts       # Stores typing test state
│
├── styles/                  # TailwindCSS or custom styles
│   └── globals.css
│
├── middleware.ts            # Auth middleware
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 🔌 Supabase Integration

- **Auth**: Managed by Supabase (email/password, OAuth optional).
- **DB Tables**:
  - `users`: Stores user profile info (linked to Supabase auth).
  - `tests`: Stores typing test results (user_id, WPM, accuracy, date).
  - `words`: Optional, store word sets for consistency.

---

## 🧠 State Management

| State                       | Location                 | Method        |
|----------------------------|--------------------------|---------------|
| Authenticated User         | `useAuth.ts`             | Supabase + React context or hook |
| Typing Test Logic          | `useTypingTest.ts`       | React local state + `store/typingStore.ts` (Zustand) |
| Modal / UI UI Toggles      | Local component state     | React useState |
| Global Config (Theme, etc) | `store/`                  | Zustand / Context |

---

## 🔁 Service Connections

| Service         | File                    | Purpose                               |
|-----------------|-------------------------|----------------------------------------|
| Supabase Client | `lib/supabase.ts`       | Centralized client for DB + Auth      |
| Test CRUD       | `services/testService.ts`| Save/load test results                |
| User Data       | `services/userService.ts`| Fetch/update user profile             |

---

## 💡 Example Flow: Typing Test Submission

1. User starts test → `TypingBox.tsx` tracks input.
2. On complete → `StatsPanel.tsx` computes stats via `lib/typing.ts`.
3. Submit results → `testService.saveTestResult(userId, stats)`.
4. DB stores results under authenticated user.
5. Leaderboard fetches top scores via `testService.getTopResults()`.

---

## 🛡️ Middleware & Auth Routing

- `middleware.ts`: Protect routes like `/dashboard`, redirect unauthenticated users.
- `useAuth.ts`: Checks `supabase.auth.getUser()` and provides user info.

---

## 🧪 Testing & Dev Notes

- Use `Jest` or `Vitest` for logic in `lib/`, `hooks/`.
- Use Playwright or Cypress for end-to-end (typing test flow, login, etc).

---
