# Neural Lens

A camera-based attendance prototype with a Flask dashboard for enrollment, employee records, and attendance review.

**Web + Camera** · **In Development** · 2025

[Portfolio](https://kuraisler.xyz)

## Purpose

Neural Lens explores recording attendance through facial recognition instead of a card tap. Camera frames are compared with enrolled employee face encodings, and recognized entries feed attendance records that can be reviewed in a browser.

## Intended users

Teams evaluating camera-based attendance and developers exploring computer vision, hardware integration, and attendance workflows.

## Main capabilities

- Enroll employees and process camera frames for face matching.
- Record attendance and review employee and attendance information in a browser.
- Manage work-related records such as departments, shifts, and leave.
- Use diagnostic, backup, and monitoring modules during development.

## How it was built

### Camera and recognition

OpenCV captures frames, while the face_recognition library supplies face detection and encoding comparisons.

### Application and records

Python services connect recognition results to attendance logic. Flask provides browser pages and API endpoints, and SQLite stores application data.

### Supporting infrastructure

The repository includes camera abstractions, security utilities, diagnostic scripts, tests, and Docker configuration. Multiple application variants support experimentation.

## Technology stack

| Responsibility | Technologies |
| --- | --- |
| Application | Python, Flask, Flask-SocketIO |
| Computer vision | OpenCV, face_recognition, NumPy |
| Data & security | SQLite, bcrypt, cryptography |
| Development & deployment | Docker, pytest |

## Project scope and current state

An experimental project in development. Recognition accuracy, camera compatibility, privacy controls, and operational reliability require validation before real attendance use; the repository includes several implementation variants.

## Source guide

- [`app.py`](app.py)
- [`face_recognition_module.py`](face_recognition_module.py)
- [`database.py`](database.py)
- [`src/`](src/)
- [`requirements.txt`](requirements.txt)

## Development setup

Requires Python, a supported camera, and platform build dependencies for dlib/face_recognition. Review config.py, camera selection, database initialization, and environment settings first. The repository includes multiple application variants and Docker configuration; compatibility needs to be checked for the selected variant and hardware.

```sh
python -m venv .venv
# Activate the virtual environment for your shell.
python -m pip install -r requirements.txt
python app.py
```

---

Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)
