# ✅ MVP Task Plan: Typing Speed Web App

Each task is atomic, testable, and clearly scoped.

---

## 🏗️ Project Setup

1. **Initialize Next.js project with TypeScript**
   - Start: Run `npx create-next-app@latest`
   - End: Project runs with `npm run dev`

2. **Install TailwindCSS**
   - Start: Run Tailwind install commands from official docs
   - End: `globals.css` is styled with Tailwind base utilities

3. **Set up folder structure**
   - Start: Create `components/`, `lib/`, `hooks/`, `services/`, `store/`, etc.
   - End: All empty folders committed

---

## 🔌 Supabase Integration

4. **Initialize Supabase client**
   - Start: Create `lib/supabase.ts`
   - End: Client correctly initializes with env vars

5. **Set up Supabase Auth (email login)**
   - Start: Add login/signup UI (can be minimal)
   - End: Users can sign in and out using Supabase

6. **Create `users` table in Supabase**
   - Start: Go to Supabase dashboard, create table
   - End: Table includes `id`, `username`, `created_at`

---

## 🧪 Typing Test Core

7. **Build basic `TypingBox.tsx` with fixed word list**
   - Start: Hardcode 10 words
   - End: Keystrokes update internal state

8. **Implement character-by-character input feedback**
   - Start: Compare typed input to current word
   - End: Correct/incorrect characters styled differently

9. **Add timer that starts on first keypress**
   - Start: Add stateful timer in `useTypingTest.ts`
   - End: Timer ticks accurately, stops after time limit

10. **Compute WPM and accuracy**
    - Start: Add `lib/typing.ts`
    - End: Returns WPM and accuracy from word list and input

---

## 📤 Test Submission Flow

11. **Create `tests` table in Supabase**
    - Start: Table with `user_id`, `wpm`, `accuracy`, `created_at`
    - End: Can view test results in Supabase console

12. **Write `saveTestResult()` in `testService.ts`**
    - Start: Function accepts test data
    - End: Record saved to Supabase

13. **Submit test result on completion**
    - Start: Add handler to TypingBox on finish
    - End: Data saved to Supabase for current user

---

## 📊 Results & Leaderboard

14. **Show WPM and accuracy in `StatsPanel.tsx`**
    - Start: Add props for stats
    - End: Stats display after test ends

15. **Build leaderboard UI in `/leaderboard/page.tsx`**
    - Start: Static layout with list of users
    - End: Populated with top test results

16. **Write `getTopResults()` in `testService.ts`**
    - Start: Query Supabase for top scores
    - End: Returns sorted list

---

## 🔒 Auth & Protected Pages

17. **Implement `useAuth.ts` to manage user state**
    - Start: Hook gets user from Supabase
    - End: Returns user and login status

18. **Protect `/dashboard` with middleware**
    - Start: Write `middleware.ts` to redirect
    - End: Guests redirected to login

19. **Create minimal user dashboard**
    - Start: Page with “My Results”
    - End: Pulls and displays user’s past tests

---

## 🧹 Polishing

20. **Create `Navbar.tsx` with auth links**
    - Start: UI with “Login / Dashboard / Logout”
    - End: Links show/hide based on auth state

21. **Add word generator in `lib/words.ts`**
    - Start: Function returns random words
    - End: Typing test uses random words each time

22. **Style with Tailwind for MVP polish**
    - Start: Add spacing, colors, layout
    - End: Mobile responsive & visually clean

---
