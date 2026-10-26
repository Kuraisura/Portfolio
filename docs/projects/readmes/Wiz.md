# Wiz

A study app that turns documents, pasted questions, and photographed material into quizzes and flashcards.

**Web + Mobile** · **In Development** · 2026

[Portfolio](https://kuraisler.xyz)

## Purpose

Wiz helps students turn existing course material into active practice. It brings document import, quiz creation, timed attempts, answer review, and flashcards into one study library, with AI generation available alongside manual authoring.

## Intended users

Students and independent learners who want to practice from their own notes, handouts, and course documents.

## Main capabilities

- Create quizzes manually, import pasted questions, or generate study material with AI.
- Extract text from PDF, DOCX, PPTX, and EPUB documents, or scan material with a camera.
- Take timed quizzes, review answers, and study flashcards.
- Organize material in a synced library and manage account and subscription settings.

## How it was built

### Web and mobile interface

React and Vite provide one interface, styled with Tailwind CSS. Capacitor connects the app to native camera, storage, and mobile platform capabilities.

### Material processing

PDF.js, Mammoth, and JSZip extract document text. The scan flow combines Supabase processing, AI vision, and Tesseract.js fallback; provider services handle AI generation.

### Accounts and study data

Supabase supplies authentication, database storage, and Edge Functions. Quiz progress uses local persistence, and PayMongo-related functions implement subscription workflows.

## Technology stack

| Responsibility | Technologies |
| --- | --- |
| Interface | React 18, JavaScript, Vite 8, Tailwind CSS 3 |
| Mobile & local storage | Capacitor, Capacitor Camera, Capacitor Preferences |
| Backend | Supabase Auth, PostgreSQL, Supabase Edge Functions |
| Documents & AI | PDF.js, Mammoth, JSZip, Tesseract.js, Groq, Gemini, Cerebras, OpenRouter |
| Billing integration | PayMongo |

## Project scope and current state

A personal project in development with web and native mobile targets. AI, OCR, synchronization, and billing depend on configured services; generated questions should be reviewed for accuracy. Native targets do not imply published app-store releases.

## Source guide

- [`src/pages/`](src/pages/)
- [`src/lib/documentParser.js`](src/lib/documentParser.js)
- [`src/lib/`](src/lib/)
- [`supabase/`](supabase/)

## Development setup

Requires Node.js, npm, and a configured Supabase project. Set up the schema and functions used by the application. AI generation, OCR, OAuth callbacks, and PayMongo workflows need their own service configuration. Capacitor configuration and native platform projects are included; verify native tooling before packaging.

```sh
npm install
npm run dev

# Web production build
npm run build
```

## Screenshot and module walkthrough

Expand a screen below to see the capture and an explanation of the module, its visible controls, and its role in the application.

<details open>
<summary><strong>01 · Sign-in and account entry</strong></summary>

Email/password, Google, and GitHub options lead into the personal study workspace. Password recovery and sign-up links support returning and first-time learners.

<p><img src="screenshots/1.png" alt="Sign-in and account entry" width="360"></p>

</details>

<details>
<summary><strong>02 · Manual quiz builder</strong></summary>

Creation-mode tabs, a title field, question-count presets, difficulty choices, and question-type buttons define a new quiz. The disabled Save Quiz button reflects a draft with no questions added yet.

<p><img src="screenshots/2.png" alt="Manual quiz builder" width="360"></p>

</details>

<details>
<summary><strong>03 · Quiz library empty state</strong></summary>

Search, progress filters, completed-test totals, average score, and study-time metrics frame the quiz library. The empty list shows how the module appears before study sets have been created.

<p><img src="screenshots/3.png" alt="Quiz library empty state" width="360"></p>

</details>

<details>
<summary><strong>04 · Learner profile and preferences</strong></summary>

The profile combines identity, flashcard totals, daily streak, and mastery with theme, reminder, password, subscription, and cache controls. It centralizes account settings and study-progress indicators.

<p><img src="screenshots/4.png" alt="Learner profile and preferences" width="360"></p>

</details>

<details>
<summary><strong>05 · Subscription and trial state</strong></summary>

The plan page compares Free and Pro features and shows a cancelled trial that remains active until the displayed date. It explains the captured account entitlement; displayed prices and dates are historical screenshot content.

<p><img src="screenshots/5.png" alt="Subscription and trial state" width="360"></p>

</details>

<details>
<summary><strong>06 · Photo-to-quiz capture</strong></summary>

Camera and image-upload options begin the Scan to Quiz workflow. Capture tips explain how to prepare a clear image before OCR and question parsing; no extracted text is shown yet.

<p><img src="screenshots/6.png" alt="Photo-to-quiz capture" width="360"></p>

</details>

<details>
<summary><strong>07 · Bulk-question import guide</strong></summary>

The Bulk Paste mode displays examples for multiple-choice, true/false, identification, and enumeration syntax. The format guide helps users structure pasted questions and mark correct answers before importing.

<p><img src="screenshots/7.png" alt="Bulk-question import guide" width="360"></p>

</details>

<details>
<summary><strong>08 · Document-based AI setup</strong></summary>

The AI Generate tab accepts a course document and optional review scope, quiz title, and question formats. This module converts source material into a configured generation request.

<p><img src="screenshots/8.png" alt="Document-based AI setup" width="360"></p>

</details>

<details>
<summary><strong>09 · Generated study-set confirmation</strong></summary>

An uploaded file, selected formats, question count, and difficulty remain visible after the Study Set Ready confirmation. The completion message reports a generated set; the screenshot alone does not validate question quality.

<p><img src="screenshots/9.png" alt="Generated study-set confirmation" width="360"></p>

</details>

<details>
<summary><strong>10 · Saved quizzes and retakes</strong></summary>

The populated library distinguishes a new, untaken study set from a completed set with a score. Review Answers, Take Quiz, and Retake actions connect storage to practice and revision.

<p><img src="screenshots/10.png" alt="Saved quizzes and retakes" width="360"></p>

</details>

<details>
<summary><strong>11 · Quiz session configuration</strong></summary>

Time-limit presets, question shuffle, and answer shuffle configure a selected quiz attempt. Start Quiz begins the session after the learner chooses how to practice.

<p><img src="screenshots/11.png" alt="Quiz session configuration" width="360"></p>

</details>

<details>
<summary><strong>12 · Active quiz question</strong></summary>

A question counter, elapsed time, progress bar, answer choices, and Next Question button show the testing interface. The learner selects an answer before advancing; this capture demonstrates layout rather than verified content accuracy.

<p><img src="screenshots/12.png" alt="Active quiz question" width="360"></p>

</details>

<details>
<summary><strong>13 · Results and answer review</strong></summary>

A completion score and duration appear above individual answer comparisons. Red and green review cards distinguish mistakes from correct responses, helping learners identify material to revisit.

<p><img src="screenshots/13.png" alt="Results and answer review" width="360"></p>

</details>

<details>
<summary><strong>14 · Flashcard study session</strong></summary>

A single card shows deck progress, mastery, flip interaction, audio/bookmark icons, and shuffle, hint, and star controls. This mode turns a saved study set into repeated recall practice.

<p><img src="screenshots/14.png" alt="Flashcard study session" width="360"></p>

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
