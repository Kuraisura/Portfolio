# Project documentation review

The portfolio contains 16 project descriptions, each organized by purpose, intended users, capabilities, implementation, technology responsibilities, and current scope.

## Content locations

- `src/data/projects.js`: the website project content and grouped technology stacks.
- `src/components/ProjectDetails.jsx`: the shared description layout for the project dialog and fullscreen sheet.
- `readmes/`: the README files prepared for the linked GitHub repositories.

## Repository review

Reviewed on October 27, 2026. Source inspection covers manifests and representative implementation files; it is not an end-to-end application test. Public screenshots and documentation were used where source was unavailable.

| Project | Repository | Local README |
| --- | --- | --- |
| SeismicWatch | [SeismicWatch](https://github.com/Kuraisura/SeismicWatch) | [SeismicWatch.md](readmes/SeismicWatch.md) |
| STIRAMS Web | [STIRAMSWEB](https://github.com/Kuraisura/STIRAMSWEB) | [STIRAMSWEB.md](readmes/STIRAMSWEB.md) |
| STIRAMS WPF | [STIRAMSWPF](https://github.com/Kuraisura/STIRAMSWPF) | [STIRAMSWPF.md](readmes/STIRAMSWPF.md) |
| Neural Lens | [NeuralLens](https://github.com/Kuraisura/NeuralLens) | [NeuralLens.md](readmes/NeuralLens.md) |
| YT Converter | [YTConverter](https://github.com/Kuraisura/YTConverter) | [YTConverter.md](readmes/YTConverter.md) |
| Raiko | [Raiko](https://github.com/Kuraisura/Raiko) | [Raiko.md](readmes/Raiko.md) |
| Chrono Desktop | [ChronoWeb](https://github.com/Kuraisura/ChronoWeb) | [ChronoWeb.md](readmes/ChronoWeb.md) |
| Silid 1201 | [Silid1201](https://github.com/Kuraisura/Silid1201) | [Silid1201.md](readmes/Silid1201.md) |
| Wiz | [Wiz](https://github.com/Kuraisura/Wiz) | [Wiz.md](readmes/Wiz.md) |
| Musikk | [Musikk](https://github.com/Kuraisura/Musikk) | [Musikk.md](readmes/Musikk.md) |
| Chrono Android | [ChronoAndroid](https://github.com/Kuraisura/ChronoAndroid) | [ChronoAndroid.md](readmes/ChronoAndroid.md) |
| STITimer | [STITimer](https://github.com/Kuraisura/STITimer) | [STITimer.md](readmes/STITimer.md) |
| RN Ready | [RNReady](https://github.com/Kuraisura/RNReady) | [RNReady.md](readmes/RNReady.md) |
| JournalEase | [Journal-Ease](https://github.com/Kuraisura/Journal-Ease) | [Journal-Ease.md](readmes/Journal-Ease.md) |
| Pet Haven | [Pet-Haven](https://github.com/Kuraisura/Pet-Haven) | [Pet-Haven.md](readmes/Pet-Haven.md) |
| St. Benedict Hospital Management System | [StBenedict](https://github.com/Kuraisura/StBenedict) | [StBenedict.md](readmes/StBenedict.md) |

## Material corrections

- Chrono Desktop: React/JavaScript, Vite, Tauri, and Supabase, based on package manifests, desktop configuration, and data services.
- Chrono Android: React/Capacitor and Supabase, based on its package manifest, backend adapter, and notification integration.
- STITimer: WPF on .NET Framework 4.8, confirmed by the project file and timing windows.
- STIRAMS Web: removed desktop-only SQLite/Dapper tags and corrected SWR.
- Wiz: React 18 is declared in the current manifest; the previous description said React 19.
- JournalEase: local demo sessions and SharedPreferences storage; removed real-authentication and cloud-sync claims.
- YT Converter: a Next.js web service with a Redis-backed worker, not a Windows Forms application.
- Musikk: documented backend requirements, extended-preset aliases, demo fallbacks, and unfinished payment scope.
- Raiko: the public repository is a showcase; inspected the live HTML, CSS, and JavaScript to verify its static front end, cart storage, and API calls. Server handlers are not available in the showcase.
- Silid 1201: the public repository is a showcase; omitted unverified package versions and script counts.

## Validation

- Production portfolio build.
- All 16 project routes and required content sections.
- Mobile layout, grouped-stack overflow checks, light/dark presentation, and fullscreen details.
- README section consistency and repository-relative link checks.

The source projects were not rebuilt, deployed, or functionally retested as part of this documentation update.
