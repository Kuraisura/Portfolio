# Silid 1201

A first-person school horror game built around collecting pages while watching an enemy that moves out of sight.

**Unity game** · **School Project** · 2025

[Portfolio](https://kuraisler.xyz)

## Purpose

Silid 1201 is a short survival-horror school project centered on a simple tension mechanic: the enemy stops when observed and becomes a threat when the player looks away. The player explores a dark school, finds eight pages, and manages limited visibility and sprint stamina.

## Intended users

Players who enjoy short first-person horror experiences and viewers interested in a compact Unity game project.

## Main capabilities

- Explore an abandoned-school setting from a first-person perspective.
- Collect eight pages while tracking progress through the HUD.
- Manage flashlight use and sprint stamina.
- Survive an enemy whose movement depends on whether it is being watched.

## How it was built

### Core game loop

The documented Unity build combines exploration, page collection, and a visibility-driven enemy rule.

### Gameplay systems

The project description identifies C# gameplay components for player movement, flashlight, stamina, objectives, and scene sequences; navigation and URP lighting support the experience.

### Showcase presentation

The public repository contains documentation and screenshots rather than the Unity project. The portfolio also includes a gameplay video.

## Technology stack

| Responsibility | Technologies |
| --- | --- |
| Documented engine | Unity, C#, Universal Render Pipeline |
| Documented gameplay | NavMesh, Unity Input System, Timeline |

## Project scope and current state

A school project described as a two-day build. The public repository is a showcase and does not contain the Unity source, package manifest, or a downloadable build; detailed package versions and script counts are therefore omitted.

## Repository contents

This repository currently contains documentation and screenshots. Application source and a reproducible build are not included. Technology details are limited to what the project documentation supports.

## Project video

### Silid 1201 gameplay recording

**Gameplay recording · 3:35**

The original gameplay recording shows the opening cinematics and first-person exploration, including the school setting, character encounter, page objective, and on-screen resource indicators.

[![Watch Silid 1201 gameplay recording](screenshots/5.png)](https://kuraisler.xyz/Portfolio/Silid%201201/Showcase/gameplay.mp4)

[Watch in your browser](https://kuraisler.xyz/Portfolio/Silid%201201/Showcase/gameplay.mp4) · [Video file in this repository](media/gameplay.mp4)

## Screenshot and module walkthrough

Expand a screen below to see the capture and an explanation of the module, its visible controls, and its role in the application.

<details open>
<summary><strong>01 · Main menu</strong></summary>

The title screen presents Play and Quit over a red horror-themed background. It is the entry point that establishes the tone before the player starts a session.

<p><img src="screenshots/1.png" alt="Main menu" width="960"></p>

</details>

<details>
<summary><strong>02 · Exterior establishing cinematic</strong></summary>

A nighttime view of the school introduces the setting before exploration begins. The visible skip prompt lets the player move past the cinematic rather than replaying it on every run.

<p><img src="screenshots/2.png" alt="Exterior establishing cinematic" width="960"></p>

</details>

<details>
<summary><strong>03 · Character close-up cinematic</strong></summary>

A close-up character shot continues the opening sequence, with the same skip prompt. It demonstrates the character presentation and cinematic framing used before first-person gameplay.

<p><img src="screenshots/3.png" alt="Character close-up cinematic" width="960"></p>

</details>

<details>
<summary><strong>04 · Hooded-character cinematic</strong></summary>

A second character appears in a dim interior during the opening sequence. The shot builds scene context and atmosphere; the still image alone does not establish the character role or enemy behavior.

<p><img src="screenshots/4.png" alt="Hooded-character cinematic" width="960"></p>

</details>

<details>
<summary><strong>05 · Exploration, objectives, and HUD</strong></summary>

The first-person view shows a school interior, an Interact prompt, resource bars, and page collection at seven of eight. This is the active exploration module, where navigation, interactions, and the collection objective meet.

<p><img src="screenshots/5.png" alt="Exploration, objectives, and HUD" width="960"></p>

</details>

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
