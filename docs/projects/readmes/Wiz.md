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

## Screenshots

<table>
<tr>
<td align="center"><img src="screenshots/1.png" alt="Account gate" width="260"><br>Account gate</td>
<td align="center"><img src="screenshots/2.png" alt="Manual quiz builder" width="260"><br>Manual quiz builder</td>
</tr>
</table>

<details>
<summary>View all 14 screenshots</summary>

### 1. Account gate

![Account gate](screenshots/1.png)

### 2. Manual quiz builder

![Manual quiz builder](screenshots/2.png)

### 3. Fresh account state

![Fresh account state](screenshots/3.png)

### 4. Learner profile

![Learner profile](screenshots/4.png)

### 5. Monetization page

![Monetization page](screenshots/5.png)

### 6. Camera-to-quiz pipeline

![Camera-to-quiz pipeline](screenshots/6.png)

### 7. Bulk paste importer

![Bulk paste importer](screenshots/7.png)

### 8. AI generation setup

![AI generation setup](screenshots/8.png)

### 9. Generation confirmation

![Generation confirmation](screenshots/9.png)

### 10. Quiz library

![Quiz library](screenshots/10.png)

### 11. Pre-quiz configuration

![Pre-quiz configuration](screenshots/11.png)

### 12. Active testing environment

![Active testing environment](screenshots/12.png)

### 13. Results & review

![Results & review](screenshots/13.png)

### 14. Spaced repetition flashcards

![Spaced repetition flashcards](screenshots/14.png)

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
