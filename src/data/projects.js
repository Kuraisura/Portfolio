// Project descriptions reviewed against repository source and available demos in October 2026.
// Group technologies by responsibility; derive flat tags for existing card consumers.
const projectEntries = [
  {
    "id": 12,
    "title": "SeismicWatch",
    "logo": "/Portfolio/OfficialThumbnails/optimized/SeismicWatch.webp",
    "subtitle": "Hazard & Emergency Safety App",
    "type": "Mobile",
    "desc": "An Android app that brings Philippine hazard updates, family location sharing, and emergency tools into one place.",
    "stats": {
      "platform": "Android",
      "year": "2026",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/SeismicWatch",
    "date": "June 11, 2026",
    "size": "medium",
    "color": "bg-emerald-600",
    "gradient": "from-emerald-600/20 to-teal-500/20",
    "screenshots": [
      "/Portfolio/SeismicWatch/1.jpg",
      "/Portfolio/SeismicWatch/2.jpg",
      "/Portfolio/SeismicWatch/3.jpg",
      "/Portfolio/SeismicWatch/4.jpg",
      "/Portfolio/SeismicWatch/5.jpg",
      "/Portfolio/SeismicWatch/6.jpg",
      "/Portfolio/SeismicWatch/7.jpg",
      "/Portfolio/SeismicWatch/8.jpg",
      "/Portfolio/SeismicWatch/9.jpg",
      "/Portfolio/SeismicWatch/10.jpg",
      "/Portfolio/SeismicWatch/11.jpg",
      "/Portfolio/SeismicWatch/12.jpg",
      "/Portfolio/SeismicWatch/13.jpg",
      "/Portfolio/SeismicWatch/14.jpg"
    ],
    "purpose": "SeismicWatch helps people check nearby hazards and coordinate with family before and during an emergency. It combines earthquake, typhoon, and weather information with location sharing and SOS tools, reducing the need to switch between separate apps.",
    "audience": "Philippine residents and families who want a shared view of hazard updates, family locations, and emergency contacts.",
    "features": [
      "View earthquake and typhoon information on a map, with weather information for Philippine locations.",
      "Create family circles, share location, and exchange messages.",
      "Access SOS, emergency contacts, and quick-access emergency tools.",
      "Use nearby-device relay features when participating phones are within reach."
    ],
    "implementation": [
      {
        "title": "Native Android interface",
        "detail": "Kotlin and Jetpack Compose provide the screens; view models and repositories separate interface state from data access."
      },
      {
        "title": "Separate data services",
        "detail": "Firebase supports accounts, family circles, messaging, and notifications. Supabase supplies the hazard-data layer, while Room and SQLCipher support local storage."
      },
      {
        "title": "Maps and device integration",
        "detail": "MapLibre displays map layers. Android location services, background work, widgets, and Nearby Connections connect the app to phone capabilities."
      }
    ],
    "stackGroups": [
      {
        "label": "Android",
        "items": [
          "Kotlin",
          "Jetpack Compose",
          "Navigation Compose"
        ]
      },
      {
        "label": "Data & accounts",
        "items": [
          "Firebase Auth",
          "Cloud Firestore",
          "Supabase",
          "Room",
          "SQLCipher"
        ]
      },
      {
        "label": "Maps & emergency tools",
        "items": [
          "MapLibre",
          "Google Play Location",
          "Nearby Connections"
        ]
      },
      {
        "label": "Background & widgets",
        "items": [
          "WorkManager",
          "Firebase Cloud Messaging",
          "Glance"
        ]
      }
    ],
    "scope": "A personal project in development. Hazard updates depend on upstream data and connectivity; nearby relay requires compatible devices, permissions, and proximity. It supplements official advisories and emergency channels.",
    "status": "In Development"
  },
  {
    "id": 17,
    "title": "STIRAMS Web",
    "subtitle": "RFID Attendance Dashboard",
    "type": "Websites",
    "desc": "A web dashboard for managing employee attendance, schedules, and Daily Time Records at STI College Santa Rosa.",
    "stats": {
      "platform": "Web",
      "year": "2026",
      "status": "Institutional Project"
    },
    "link": "https://github.com/Kuraisura/STIRAMSWEB",
    "website": "https://stiramsweb.vercel.app/",
    "date": "May 7, 2026",
    "size": "large",
    "color": "bg-orange-500",
    "gradient": "from-orange-500/20 to-amber-500/20",
    "screenshots": [
      "/Portfolio/STIRAMS(WEB)/1.png",
      "/Portfolio/STIRAMS(WEB)/2.png",
      "/Portfolio/STIRAMS(WEB)/3.png",
      "/Portfolio/STIRAMS(WEB)/4.png",
      "/Portfolio/STIRAMS(WEB)/5.png",
      "/Portfolio/STIRAMS(WEB)/6.png",
      "/Portfolio/STIRAMS(WEB)/7.png",
      "/Portfolio/STIRAMS(WEB)/8.png",
      "/Portfolio/STIRAMS(WEB)/9.png",
      "/Portfolio/STIRAMS(WEB)/10.png",
      "/Portfolio/STIRAMS(WEB)/11.png",
      "/Portfolio/STIRAMS(WEB)/12.png",
      "/Portfolio/STIRAMS(WEB)/13.png",
      "/Portfolio/STIRAMS(WEB)/14.png",
      "/Portfolio/STIRAMS(WEB)/15.png"
    ],
    "purpose": "STIRAMS Web turns RFID attendance records into information campus administrators can review and use for reporting. It is the management side of a two-part system: the Windows kiosk captures card taps, and the web dashboard manages people, schedules, exceptions, and reports.",
    "audience": "HR personnel, campus administrators, and staff responsible for faculty and employee attendance at STI College Santa Rosa.",
    "features": [
      "Monitor attendance and review employee records, schedules, and recent activity.",
      "Generate Daily Time Records and export attendance reports.",
      "Manage leave requests, holidays, teaching schedules, and substitutions.",
      "Review attendance irregularities, verification requests, and audit history."
    ],
    "implementation": [
      {
        "title": "Web application",
        "detail": "Next.js App Router and TypeScript handle dashboard pages and server API routes; Tailwind CSS and Radix UI support the interface."
      },
      {
        "title": "Shared attendance data",
        "detail": "Server-side PostgreSQL queries use the pg driver. The dashboard works with the same attendance data as the WPF client, which owns local offline capture and synchronization."
      },
      {
        "title": "Reporting and updates",
        "detail": "SWR refreshes client data, Recharts visualizes attendance, and report routes assemble timesheets, exports, and email delivery."
      }
    ],
    "stackGroups": [
      {
        "label": "Web interface",
        "items": [
          "Next.js 14",
          "React 18",
          "TypeScript",
          "Tailwind CSS 4",
          "Radix UI"
        ]
      },
      {
        "label": "Server & database",
        "items": [
          "Next.js API Routes",
          "PostgreSQL",
          "pg"
        ]
      },
      {
        "label": "Data & reporting",
        "items": [
          "SWR",
          "Recharts",
          "ExcelJS",
          "Nodemailer"
        ]
      }
    ],
    "scope": "An institutional capstone and internship project for STI College Santa Rosa. The dashboard and kiosk are separate applications within one attendance system; a running dashboard requires its configured database and institutional settings.",
    "status": "Institutional Project"
  },
  {
    "id": 18,
    "title": "STIRAMS WPF",
    "subtitle": "RFID Attendance Desktop Client",
    "type": "IoT",
    "desc": "A Windows RFID kiosk that records employee attendance locally and synchronizes it with the STIRAMS dashboard.",
    "stats": {
      "platform": "Windows",
      "year": "2026",
      "status": "Institutional Project"
    },
    "link": "https://github.com/Kuraisura/STIRAMSWPF",
    "date": "May 7, 2026",
    "size": "large",
    "color": "bg-blue-600",
    "gradient": "from-blue-600/20 to-cyan-500/20",
    "screenshots": [
      "/Portfolio/STIRAMS(WPF)/1.png",
      "/Portfolio/STIRAMS(WPF)/2.png",
      "/Portfolio/STIRAMS(WPF)/3.png",
      "/Portfolio/STIRAMS(WPF)/4.png",
      "/Portfolio/STIRAMS(WPF)/5.png"
    ],
    "purpose": "STIRAMS WPF captures the attendance events that the web dashboard manages. Employees tap an RFID card at a Windows terminal, receive immediate feedback, and have their attendance checked against schedules and related rules. Local storage allows the kiosk to retain records when its database connection is unavailable.",
    "audience": "Faculty and employees clocking in or out, plus campus staff operating the attendance terminals at STI College Santa Rosa.",
    "features": [
      "Read RFID card input and show the employee profile and attendance result.",
      "Validate taps against schedules, holidays, leave, and substitution rules.",
      "Store attendance locally and synchronize pending records in the background.",
      "Provide kiosk screens, reader detection, and diagnostic tools for operators."
    ],
    "implementation": [
      {
        "title": "Windows client",
        "detail": "C# and WPF on .NET 8 implement the kiosk screens. View models and dedicated services separate display logic from attendance processing."
      },
      {
        "title": "Offline data flow",
        "detail": "SQLite holds local records and cached schedules. Background synchronization sends pending attendance to the shared PostgreSQL database."
      },
      {
        "title": "Reader and database integration",
        "detail": "RFID input and Windows device detection connect the terminal to readers. Dapper and Npgsql handle database access; Material Design components style the interface."
      }
    ],
    "stackGroups": [
      {
        "label": "Windows application",
        "items": [
          "C#",
          ".NET 8",
          "WPF",
          "CommunityToolkit.Mvvm"
        ]
      },
      {
        "label": "Storage & sync",
        "items": [
          "SQLite",
          "PostgreSQL",
          "Dapper",
          "Npgsql"
        ]
      },
      {
        "label": "Interface & hardware",
        "items": [
          "MaterialDesignThemes",
          "WMI",
          "USB RFID input"
        ]
      }
    ],
    "scope": "The desktop component of the STIRAMS institutional project. It requires Windows, a compatible RFID reader, and the configured shared database. Offline capture depends on the local employee and schedule cache.",
    "status": "Institutional Project"
  },
  {
    "id": 13,
    "title": "Neural Lens",
    "subtitle": "Facial Recognition Attendance System",
    "type": "IoT",
    "desc": "A camera-based attendance prototype with a Flask dashboard for enrollment, employee records, and attendance review.",
    "stats": {
      "platform": "Web + Camera",
      "year": "2025",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/NeuralLens",
    "date": "December 26, 2025",
    "size": "large",
    "color": "bg-blue-600",
    "gradient": "from-blue-600/20 to-cyan-500/20",
    "purpose": "Neural Lens explores recording attendance through facial recognition instead of a card tap. Camera frames are compared with enrolled employee face encodings, and recognized entries feed attendance records that can be reviewed in a browser.",
    "audience": "Teams evaluating camera-based attendance and developers exploring computer vision, hardware integration, and attendance workflows.",
    "features": [
      "Enroll employees and process camera frames for face matching.",
      "Record attendance and review employee and attendance information in a browser.",
      "Manage work-related records such as departments, shifts, and leave.",
      "Use diagnostic, backup, and monitoring modules during development."
    ],
    "implementation": [
      {
        "title": "Camera and recognition",
        "detail": "OpenCV captures frames, while the face_recognition library supplies face detection and encoding comparisons."
      },
      {
        "title": "Application and records",
        "detail": "Python services connect recognition results to attendance logic. Flask provides browser pages and API endpoints, and SQLite stores application data."
      },
      {
        "title": "Supporting infrastructure",
        "detail": "The repository includes camera abstractions, security utilities, diagnostic scripts, tests, and Docker configuration. Multiple application variants support experimentation."
      }
    ],
    "stackGroups": [
      {
        "label": "Application",
        "items": [
          "Python",
          "Flask",
          "Flask-SocketIO"
        ]
      },
      {
        "label": "Computer vision",
        "items": [
          "OpenCV",
          "face_recognition",
          "NumPy"
        ]
      },
      {
        "label": "Data & security",
        "items": [
          "SQLite",
          "bcrypt",
          "cryptography"
        ]
      },
      {
        "label": "Development & deployment",
        "items": [
          "Docker",
          "pytest"
        ]
      }
    ],
    "scope": "An experimental project in development. Recognition accuracy, camera compatibility, privacy controls, and operational reliability require validation before real attendance use; the repository includes several implementation variants.",
    "status": "In Development"
  },
  {
    "id": 8,
    "title": "YT Converter",
    "subtitle": "Media Conversion Web App",
    "type": "Websites",
    "desc": "A self-hosted web converter that queues YouTube media jobs and delivers MP3 or MP4 downloads.",
    "stats": {
      "platform": "Web",
      "year": "2026",
      "status": "Utility Project"
    },
    "link": "https://github.com/Kuraisura/YTConverter",
    "website": "https://ytconverter-vt6g.onrender.com/",
    "date": "May 10, 2026",
    "size": "small",
    "color": "bg-orange-500",
    "gradient": "from-orange-500/20 to-amber-500/20",
    "screenshots": [
      "/Portfolio/YT Converter/1.png",
      "/Portfolio/YT Converter/2.png",
      "/Portfolio/YT Converter/3.png"
    ],
    "purpose": "YT Converter gives users a browser interface for a media-conversion pipeline. It handles metadata preview, format selection, background processing, and temporary download delivery so long-running conversions do not block the web interface.",
    "audience": "People converting media they own or have permission to download, and operators who want to host their own conversion service.",
    "features": [
      "Preview video or playlist metadata before starting a job.",
      "Choose MP3 audio or MP4 video with supported quality options.",
      "Follow job progress and download a file or playlist archive.",
      "Apply queue limits, rate limiting, retry handling, and automatic file cleanup."
    ],
    "implementation": [
      {
        "title": "Browser and API",
        "detail": "Next.js, React, and TypeScript implement the interface and server endpoints; Tailwind CSS and Radix UI provide the visual components."
      },
      {
        "title": "Background processing",
        "detail": "API routes place work in an Upstash Redis queue. A separate Node.js worker runs yt-dlp for retrieval and FFmpeg for conversion."
      },
      {
        "title": "Temporary delivery",
        "detail": "Finished files are uploaded to Cloudflare R2 and delivered through signed links. Cleanup jobs remove stored output; Docker packages the server and worker."
      }
    ],
    "stackGroups": [
      {
        "label": "Web interface",
        "items": [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS 4",
          "Radix UI"
        ]
      },
      {
        "label": "Conversion & queue",
        "items": [
          "Node.js",
          "yt-dlp",
          "FFmpeg",
          "Upstash Redis"
        ]
      },
      {
        "label": "Storage & deployment",
        "items": [
          "Cloudflare R2",
          "AWS S3 SDK",
          "Docker"
        ]
      }
    ],
    "scope": "A self-hosted utility project. Conversion depends on source availability, the hosting environment, external services, and configured worker and storage credentials. Public demo uptime is not guaranteed.",
    "status": "Utility Project"
  },
  {
    "id": 5,
    "title": "Raiko",
    "subtitle": "E-Commerce Website",
    "type": "Websites",
    "desc": "A streetwear storefront with product filters, a persistent shopping cart, and a multi-page brand experience.",
    "stats": {
      "platform": "Web showcase",
      "year": "2024",
      "status": "Design Showcase"
    },
    "link": "https://github.com/Kuraisura/Raiko",
    "website": "https://raiko-three.vercel.app/",
    "date": "May 7, 2024",
    "size": "small",
    "color": "bg-orange-500",
    "gradient": "from-orange-500/20 to-amber-500/20",
    "screenshots": [
      "/Portfolio/Raiko/home.png",
      "/Portfolio/Raiko/shop.png",
      "/Portfolio/Raiko/about.png",
      "/Portfolio/Raiko/blog.png",
      "/Portfolio/Raiko/contact.png"
    ],
    "purpose": "Raiko gives a small clothing label a branded storefront for product discovery and shopping. Its live front end connects a landing page, filtered catalog, product pages, cart, checkout form, editorial content, and contact pages in one visual system.",
    "audience": "Streetwear shoppers browsing a small label and small brands looking for a visual storefront concept.",
    "features": [
      "Browse products and filter by category, price, and size.",
      "Choose items and keep a shopping cart in browser storage.",
      "Review the cart and enter checkout details.",
      "Explore brand stories, editorial pages, and contact information."
    ],
    "implementation": [
      {
        "title": "Static multi-page interface",
        "detail": "The deployed website serves HTML pages with a shared CSS stylesheet and JavaScript file. It does not depend on a client-side React application."
      },
      {
        "title": "Browser interactions",
        "detail": "JavaScript handles product filters, responsive navigation, and cart state. The cart is serialized to localStorage so it survives page changes."
      },
      {
        "title": "Form integration",
        "detail": "Checkout, contact, and newsletter forms call API routes from the front end. Their server implementations are not included in the linked public showcase repository."
      }
    ],
    "stackGroups": [
      {
        "label": "Verified live front end",
        "items": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },
      {
        "label": "Browser storage",
        "items": [
          "localStorage"
        ]
      },
      {
        "label": "Showcase hosting",
        "items": [
          "Vercel"
        ]
      }
    ],
    "scope": "The live storefront front end was inspected directly. The linked public repository contains screenshots and documentation, so server-side order processing, payments, and form delivery cannot be verified from its source.",
    "status": "Design Showcase"
  },
  {
    "id": 15,
    "title": "Chrono Desktop",
    "subtitle": "Task & Habit Tracker",
    "type": "Desktop",
    "desc": "A desktop planner that combines scheduled tasks, a focus timer, calendar views, and a personal journal.",
    "stats": {
      "platform": "Web + Desktop",
      "year": "2026",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/ChronoWeb",
    "date": "September 12, 2026",
    "size": "medium",
    "color": "bg-orange-500",
    "gradient": "from-orange-500/20 to-amber-500/20",
    "purpose": "Chrono Desktop keeps daily planning and reflection in one workspace. Users can organize scheduled work, track a focused session, review dates in a calendar, and write journal entries without maintaining separate tools for each activity.",
    "audience": "Students, freelancers, and individuals who want a desktop workspace for personal scheduling, focused work, and journaling.",
    "features": [
      "Create and organize tasks with dates, times, and completion status.",
      "Use a focus panel to track time against a selected task.",
      "Review schedules in a calendar and receive desktop reminders.",
      "Write rich-text journal entries and attach images."
    ],
    "implementation": [
      {
        "title": "Shared web interface",
        "detail": "React and Vite power the screens, with Tailwind CSS and Radix UI components. Service modules keep database calls separate from page components."
      },
      {
        "title": "Desktop shell",
        "detail": "Tauri wraps the interface in a native desktop application. Its Rust configuration and notification plugin enable desktop integration."
      },
      {
        "title": "Accounts and content",
        "detail": "Supabase supports authentication, PostgreSQL-backed task and journal records, and image storage. Framer Motion handles interface transitions."
      }
    ],
    "stackGroups": [
      {
        "label": "Interface",
        "items": [
          "JavaScript",
          "React 18",
          "Vite 8",
          "Tailwind CSS 3",
          "Radix UI"
        ]
      },
      {
        "label": "Desktop runtime",
        "items": [
          "Tauri 2",
          "Rust",
          "Tauri Notifications"
        ]
      },
      {
        "label": "Data & services",
        "items": [
          "Supabase Auth",
          "PostgreSQL",
          "Supabase Storage"
        ]
      },
      {
        "label": "Interaction",
        "items": [
          "Framer Motion",
          "React Router"
        ]
      }
    ],
    "scope": "A personal productivity project in development. Desktop packaging uses Tauri, with Supabase providing account and data services.",
    "status": "In Development"
  },
  {
    "id": 3,
    "title": "Silid 1201",
    "subtitle": "Survival Horror",
    "type": "Game",
    "desc": "A first-person school horror game built around collecting pages while watching an enemy that moves out of sight.",
    "stats": {
      "platform": "Unity game",
      "year": "2025",
      "status": "School Project"
    },
    "link": "https://github.com/Kuraisura/Silid1201",
    "date": "November 20, 2025",
    "size": "large",
    "color": "bg-red-900",
    "gradient": "from-red-900/40 to-black/60",
    "screenshots": [
      "/Portfolio/Silid 1201/1.png",
      "/Portfolio/Silid 1201/2.png",
      "/Portfolio/Silid 1201/3.png",
      "/Portfolio/Silid 1201/4.png",
      "/Portfolio/Silid 1201/5.png"
    ],
    "showcase": [
      "/Portfolio/Silid 1201/Showcase/gameplay.mp4"
    ],
    "purpose": "Silid 1201 is a short survival-horror school project centered on a simple tension mechanic: the enemy stops when observed and becomes a threat when the player looks away. The player explores a dark school, finds eight pages, and manages limited visibility and sprint stamina.",
    "audience": "Players who enjoy short first-person horror experiences and viewers interested in a compact Unity game project.",
    "features": [
      "Explore an abandoned-school setting from a first-person perspective.",
      "Collect eight pages while tracking progress through the HUD.",
      "Manage flashlight use and sprint stamina.",
      "Survive an enemy whose movement depends on whether it is being watched."
    ],
    "implementation": [
      {
        "title": "Core game loop",
        "detail": "The documented Unity build combines exploration, page collection, and a visibility-driven enemy rule."
      },
      {
        "title": "Gameplay systems",
        "detail": "The project description identifies C# gameplay components for player movement, flashlight, stamina, objectives, and scene sequences; navigation and URP lighting support the experience."
      },
      {
        "title": "Showcase presentation",
        "detail": "The public repository contains documentation and screenshots rather than the Unity project. The portfolio also includes a gameplay video."
      }
    ],
    "stackGroups": [
      {
        "label": "Documented engine",
        "items": [
          "Unity",
          "C#",
          "Universal Render Pipeline"
        ]
      },
      {
        "label": "Documented gameplay",
        "items": [
          "NavMesh",
          "Unity Input System",
          "Timeline"
        ]
      }
    ],
    "scope": "A school project described as a two-day build. The public repository is a showcase and does not contain the Unity source, package manifest, or a downloadable build; detailed package versions and script counts are therefore omitted.",
    "status": "School Project"
  },
  {
    "id": 14,
    "title": "Wiz",
    "subtitle": "AI-Powered Study Platform",
    "type": "Mobile",
    "desc": "A study app that turns documents, pasted questions, and photographed material into quizzes and flashcards.",
    "stats": {
      "platform": "Web + Mobile",
      "year": "2026",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/Wiz",
    "date": "September 8, 2026",
    "size": "large",
    "color": "bg-emerald-600",
    "gradient": "from-emerald-600/20 to-teal-500/20",
    "screenshots": [
      "/Portfolio/Wiz/1.png",
      "/Portfolio/Wiz/2.png",
      "/Portfolio/Wiz/3.png",
      "/Portfolio/Wiz/4.png",
      "/Portfolio/Wiz/5.png",
      "/Portfolio/Wiz/6.png",
      "/Portfolio/Wiz/7.png",
      "/Portfolio/Wiz/8.png",
      "/Portfolio/Wiz/9.png",
      "/Portfolio/Wiz/10.png",
      "/Portfolio/Wiz/11.png",
      "/Portfolio/Wiz/12.png",
      "/Portfolio/Wiz/13.png",
      "/Portfolio/Wiz/14.png"
    ],
    "purpose": "Wiz helps students turn existing course material into active practice. It brings document import, quiz creation, timed attempts, answer review, and flashcards into one study library, with AI generation available alongside manual authoring.",
    "audience": "Students and independent learners who want to practice from their own notes, handouts, and course documents.",
    "features": [
      "Create quizzes manually, import pasted questions, or generate study material with AI.",
      "Extract text from PDF, DOCX, PPTX, and EPUB documents, or scan material with a camera.",
      "Take timed quizzes, review answers, and study flashcards.",
      "Organize material in a synced library and manage account and subscription settings."
    ],
    "implementation": [
      {
        "title": "Web and mobile interface",
        "detail": "React and Vite provide one interface, styled with Tailwind CSS. Capacitor connects the app to native camera, storage, and mobile platform capabilities."
      },
      {
        "title": "Material processing",
        "detail": "PDF.js, Mammoth, and JSZip extract document text. The scan flow combines Supabase processing, AI vision, and Tesseract.js fallback; provider services handle AI generation."
      },
      {
        "title": "Accounts and study data",
        "detail": "Supabase supplies authentication, database storage, and Edge Functions. Quiz progress uses local persistence, and PayMongo-related functions implement subscription workflows."
      }
    ],
    "stackGroups": [
      {
        "label": "Interface",
        "items": [
          "React 18",
          "JavaScript",
          "Vite 8",
          "Tailwind CSS 3"
        ]
      },
      {
        "label": "Mobile & local storage",
        "items": [
          "Capacitor",
          "Capacitor Camera",
          "Capacitor Preferences"
        ]
      },
      {
        "label": "Backend",
        "items": [
          "Supabase Auth",
          "PostgreSQL",
          "Supabase Edge Functions"
        ]
      },
      {
        "label": "Documents & AI",
        "items": [
          "PDF.js",
          "Mammoth",
          "JSZip",
          "Tesseract.js",
          "Groq",
          "Gemini",
          "Cerebras",
          "OpenRouter"
        ]
      },
      {
        "label": "Billing integration",
        "items": [
          "PayMongo"
        ]
      }
    ],
    "scope": "A personal project in development with web and native mobile targets. AI, OCR, synchronization, and billing depend on configured services; generated questions should be reviewed for accuracy. Native targets do not imply published app-store releases.",
    "status": "In Development"
  },
  {
    "id": 9,
    "title": "Musikk",
    "subtitle": "AI Music Stem Separation",
    "type": "Mobile",
    "desc": "An Android music-practice app for separating audio, balancing stems, and rehearsing difficult passages.",
    "stats": {
      "platform": "Android",
      "year": "2026",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/Musikk",
    "date": "August 1, 2026",
    "size": "medium",
    "color": "bg-emerald-600",
    "gradient": "from-emerald-600/20 to-teal-500/20",
    "screenshots": [
      "/Portfolio/Musikk/1.jpg",
      "/Portfolio/Musikk/2.jpg",
      "/Portfolio/Musikk/3.jpg",
      "/Portfolio/Musikk/4.jpg",
      "/Portfolio/Musikk/5.jpg",
      "/Portfolio/Musikk/6.jpg",
      "/Portfolio/Musikk/7.jpg",
      "/Portfolio/Musikk/8.png"
    ],
    "purpose": "Musikk helps musicians practice with parts of a recording instead of only the full mix. It combines a song library, separation workflow, multi-track playback, and practice controls so users can isolate a part, reduce competing instruments, or repeat a passage.",
    "audience": "Singers, instrumentalists, and hobby musicians practicing with recordings they are entitled to use.",
    "features": [
      "Upload songs and organize a repertoire with processing status.",
      "Request stem separation through a configured processing backend.",
      "Adjust stem volume, mute, and solo controls in a shared mixer.",
      "Use playback speed, pitch, and A/B loop controls for practice."
    ],
    "implementation": [
      {
        "title": "Android application",
        "detail": "Kotlin and Jetpack Compose provide the library, mixer, practice, and profile screens."
      },
      {
        "title": "Audio processing",
        "detail": "A Python FastAPI backend runs Demucs separation jobs. Android services manage processing requests, while Media3 ExoPlayer supports synchronized stem playback."
      },
      {
        "title": "Cloud library",
        "detail": "Firebase Authentication and Firestore manage accounts and song metadata. Cloudflare R2 holds source audio and generated files, accessed through the app storage service."
      }
    ],
    "stackGroups": [
      {
        "label": "Android interface",
        "items": [
          "Kotlin",
          "Jetpack Compose",
          "Navigation Compose"
        ]
      },
      {
        "label": "Playback & networking",
        "items": [
          "Media3 ExoPlayer",
          "OkHttp",
          "Retrofit"
        ]
      },
      {
        "label": "Separation backend",
        "items": [
          "Python",
          "FastAPI",
          "Demucs"
        ]
      },
      {
        "label": "Accounts & storage",
        "items": [
          "Firebase Auth",
          "Cloud Firestore",
          "Cloudflare R2"
        ]
      }
    ],
    "scope": "A personal project in development. Separation requires a working backend; available independent stems depend on the model. Some extended preset labels map to existing outputs, demo fallback can reuse source audio, and subscription screens do not establish a completed payment integration.",
    "status": "In Development"
  },
  {
    "id": 16,
    "title": "Chrono Android",
    "subtitle": "Task & Habit Tracker",
    "type": "Mobile",
    "desc": "A mobile planner for scheduled tasks, calendar browsing, reminders, and photo-supported journal entries.",
    "stats": {
      "platform": "Android",
      "year": "2026",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/ChronoAndroid",
    "date": "September 12, 2026",
    "size": "medium",
    "color": "bg-emerald-600",
    "gradient": "from-emerald-600/20 to-teal-500/20",
    "purpose": "Chrono Android brings daily schedules and journaling to a phone-friendly interface. It is the mobile companion in the Chrono project family, focusing on capturing tasks, reviewing upcoming work, and keeping personal entries accessible while away from a desktop.",
    "audience": "Students and individuals who want mobile access to schedules, task reminders, and a personal journal.",
    "features": [
      "Create scheduled tasks and mark them complete.",
      "Browse tasks through schedule and calendar screens.",
      "Create journal entries, organize categories, bookmark entries, and attach photos.",
      "Schedule native task notifications through Capacitor."
    ],
    "implementation": [
      {
        "title": "Mobile web interface",
        "detail": "React, JavaScript, and Vite implement the screens, with Tailwind CSS and Radix UI components for presentation."
      },
      {
        "title": "Native wrapper",
        "detail": "Capacitor packages the web interface for mobile platforms and provides local-notification access."
      },
      {
        "title": "Cloud data",
        "detail": "A backend adapter connects authentication, tasks, journal entries, and uploaded photos to Supabase services."
      }
    ],
    "stackGroups": [
      {
        "label": "Interface",
        "items": [
          "JavaScript",
          "React 18",
          "Vite 8",
          "Tailwind CSS 3",
          "Radix UI"
        ]
      },
      {
        "label": "Mobile runtime",
        "items": [
          "Capacitor 8",
          "Capacitor Local Notifications"
        ]
      },
      {
        "label": "Data & accounts",
        "items": [
          "Supabase Auth",
          "PostgreSQL",
          "Supabase Storage"
        ]
      },
      {
        "label": "Navigation & interaction",
        "items": [
          "React Router",
          "Framer Motion"
        ]
      }
    ],
    "scope": "A personal project in development. The current repository is React/Capacitor-based with Android and iOS tooling; the portfolio name remains Chrono Android. Native notifications require supported device permissions and platform setup.",
    "status": "In Development"
  },
  {
    "id": 19,
    "title": "STITimer",
    "subtitle": "College Event Timer",
    "type": "Desktop",
    "desc": "A projector-ready Windows event timer with countdown, stopwatch, speech, and quiz timing modes.",
    "stats": {
      "platform": "Windows",
      "year": "2026",
      "status": "Event Project"
    },
    "link": "https://github.com/Kuraisura/STITimer",
    "date": "March 4, 2026",
    "size": "medium",
    "color": "bg-purple-600",
    "gradient": "from-purple-600/20 to-indigo-500/20",
    "screenshots": [
      "/Portfolio/STITimer/1.png",
      "/Portfolio/STITimer/2.png",
      "/Portfolio/STITimer/3.png",
      "/Portfolio/STITimer/4.png",
      "/Portfolio/STITimer/5.png",
      "/Portfolio/STITimer/6.png",
      "/Portfolio/STITimer/7.png",
      "/Portfolio/STITimer/8.png",
      "/Portfolio/STITimer/9.png",
      "/Portfolio/STITimer/10.png",
      "/Portfolio/STITimer/11.png"
    ],
    "showcase": [
      "/Portfolio/STITimer/Events/1.png",
      "/Portfolio/STITimer/Events/2.png",
      "/Portfolio/STITimer/Events/3.png",
      "/Portfolio/STITimer/Events/4.png"
    ],
    "purpose": "STITimer gives college event organizers an audience-readable timing display. Different contest types can use their own presets, themed screens, and timing modes, replacing the need to adapt a small general-purpose stopwatch for every event.",
    "audience": "Event hosts, judges, facilitators, and contestants at STI College Santa Rosa competitions and activities.",
    "features": [
      "Launch contest-specific timing displays from a preset selector.",
      "Run countdown and stopwatch modes with large on-screen digits.",
      "Use preparation/speech phases and quiz difficulty timing.",
      "Show themed full-screen displays suited to a projector."
    ],
    "implementation": [
      {
        "title": "Windows interface",
        "detail": "C# and WPF on .NET Framework 4.8 implement the launcher and dedicated timing windows, with XAML layouts and event branding."
      },
      {
        "title": "Timing modes",
        "detail": "DispatcherTimer-based windows handle countdown, elapsed time, phased speech timing, and quiz-round timing."
      },
      {
        "title": "Event-focused delivery",
        "detail": "Built in a documented 12-hour sprint for a college event, with screenshots showing the application projected during activities."
      }
    ],
    "stackGroups": [
      {
        "label": "Windows application",
        "items": [
          "C#",
          ".NET Framework 4.8",
          "WPF",
          "XAML"
        ]
      },
      {
        "label": "Timing & presentation",
        "items": [
          "DispatcherTimer",
          "Full-screen event displays"
        ]
      }
    ],
    "scope": "An event project used at STI College Santa Rosa. It is a local Windows application and does not require an online backend.",
    "status": "Event Project"
  },
  {
    "id": 10,
    "title": "RN Ready",
    "subtitle": "Nursing Board Exam Prep",
    "type": "Mobile",
    "desc": "A Flutter nursing-review app combining study modules, practice quizzes, anatomy exercises, and AI-assisted review.",
    "stats": {
      "platform": "Flutter / Cross-platform",
      "year": "2026",
      "status": "In Development"
    },
    "link": "https://github.com/Kuraisura/RNReady",
    "date": "June 12, 2026",
    "size": "large",
    "color": "bg-teal-600",
    "gradient": "from-teal-600/20 to-emerald-500/20",
    "screenshots": [
      "/Portfolio/Rn Ready/1.png",
      "/Portfolio/Rn Ready/2.png",
      "/Portfolio/Rn Ready/3.png",
      "/Portfolio/Rn Ready/4.png",
      "/Portfolio/Rn Ready/8.png",
      "/Portfolio/Rn Ready/9.png",
      "/Portfolio/Rn Ready/10.png",
      "/Portfolio/Rn Ready/11.png",
      "/Portfolio/Rn Ready/12.png",
      "/Portfolio/Rn Ready/13.png",
      "/Portfolio/Rn Ready/14.png",
      "/Portfolio/Rn Ready/15.png"
    ],
    "landscapeIndices": [],
    "purpose": "RN Ready brings nursing review activities into one application. Students can read module material, test knowledge, work through clinical scenarios, review anatomy, and keep notes instead of switching between separate review tools.",
    "audience": "Nursing students and graduates preparing for the Philippine Nursing Licensure Examination or reviewing nursing topics.",
    "features": [
      "Read bundled study modules and slide-based review content.",
      "Take timed quizzes and review answer rationales and progress.",
      "Practice anatomy labeling and clinical-case exercises.",
      "Use an AI tutor, care-plan assistance, and a personal notes section."
    ],
    "implementation": [
      {
        "title": "Cross-platform application",
        "detail": "Flutter and Dart provide the interface. Feature folders separate tutor, anatomy, clinical cases, quizzes, modules, and notes; Riverpod manages application state."
      },
      {
        "title": "Study and AI services",
        "detail": "JSON assets provide bundled material. A shared HTTP-based language-model service supports multiple AI providers and fallback handling."
      },
      {
        "title": "Local persistence",
        "detail": "SharedPreferences and local file storage retain settings, notes, and cached study state. Bundled fonts and assets support local reading, while AI features need network access."
      }
    ],
    "stackGroups": [
      {
        "label": "Application",
        "items": [
          "Flutter",
          "Dart",
          "Riverpod"
        ]
      },
      {
        "label": "AI & networking",
        "items": [
          "HTTP",
          "Groq",
          "Gemini",
          "OpenRouter"
        ]
      },
      {
        "label": "Study content & storage",
        "items": [
          "JSON assets",
          "SharedPreferences",
          "path_provider"
        ]
      },
      {
        "label": "Reading interface",
        "items": [
          "Flutter Markdown",
          "Bundled fonts"
        ]
      }
    ],
    "scope": "A personal learning project in development with Flutter platform targets. It is a study aid rather than clinical decision support, an official exam product, or a guarantee of exam coverage. AI answers and rationales need review.",
    "status": "In Development"
  },
  {
    "id": 6,
    "title": "JournalEase",
    "subtitle": "Android Journaling App",
    "type": "Mobile",
    "desc": "An offline Android journal with color-coded notes, search, and PDF or Word export.",
    "stats": {
      "platform": "Android",
      "year": "2022",
      "status": "Learning Project"
    },
    "link": "https://github.com/Kuraisura/Journal-Ease",
    "date": "May 22, 2022",
    "size": "medium",
    "color": "bg-green-600",
    "gradient": "from-green-600/20 to-emerald-500/20",
    "screenshots": [
      "/Portfolio/JournalEase/1.png",
      "/Portfolio/JournalEase/2.png",
      "/Portfolio/JournalEase/3.png",
      "/Portfolio/JournalEase/4.png",
      "/Portfolio/JournalEase/5.png",
      "/Portfolio/JournalEase/6.png"
    ],
    "purpose": "JournalEase provides a small, local writing space for notes and journal entries. Users can capture a title and body, find earlier entries, revise them, and export an entry without relying on a cloud database.",
    "audience": "Students and casual writers who want simple on-device note-taking and document export.",
    "features": [
      "Create, read, edit, delete, and search notes.",
      "Browse color-coded note cards in a staggered grid.",
      "Keep notes locally between app sessions.",
      "Export an entry as a PDF or DOCX document."
    ],
    "implementation": [
      {
        "title": "Native Android screens",
        "detail": "Java activities implement splash, demo login, library, detail, and editing screens. RecyclerView displays the note collection."
      },
      {
        "title": "On-device persistence",
        "detail": "A LocalNoteStore serializes notes as JSON in SharedPreferences. A separate DemoSession stores the local sign-in flag."
      },
      {
        "title": "Document export",
        "detail": "The export actions use Android PdfDocument and Apache POI to write PDF and DOCX output. The project adapts an earlier tutorial app to local storage."
      }
    ],
    "stackGroups": [
      {
        "label": "Android application",
        "items": [
          "Java",
          "Android SDK",
          "AppCompat",
          "Material Components",
          "RecyclerView"
        ]
      },
      {
        "label": "Local storage",
        "items": [
          "SharedPreferences",
          "JSON"
        ]
      },
      {
        "label": "Document export",
        "items": [
          "Android PdfDocument",
          "Apache POI"
        ]
      }
    ],
    "scope": "A learning project adapted from a notes-app tutorial. Sign-in is a local demo session, not real authentication or encryption; there is no cloud sync. Export behavior depends on Android storage permissions.",
    "status": "Learning Project"
  },
  {
    "id": 7,
    "title": "Pet Haven",
    "subtitle": "Pet Shop POS System",
    "type": "Windows Forms",
    "desc": "A Windows pet-shop POS project for managing products, customers, billing, and printable receipts.",
    "stats": {
      "platform": "Windows",
      "year": "2024",
      "status": "School Project"
    },
    "link": "https://github.com/Kuraisura/Pet-Haven",
    "date": "May 24, 2024",
    "size": "small",
    "color": "bg-purple-600",
    "gradient": "from-purple-600/20 to-pink-500/20",
    "screenshots": [
      "/Portfolio/PetHaven/1.png",
      "/Portfolio/PetHaven/2.png",
      "/Portfolio/PetHaven/3.png",
      "/Portfolio/PetHaven/4.png",
      "/Portfolio/PetHaven/5.png",
      "/Portfolio/PetHaven/6.png",
      "/Portfolio/PetHaven/7.png",
      "/Portfolio/PetHaven/8.png"
    ],
    "purpose": "Pet Haven models the daily counter workflow of a pet shop: maintain product and customer records, prepare a sale, calculate payment and change, and retain transaction information. It brings these related activities into one desktop interface.",
    "audience": "Pet-shop cashiers and administrators managing product inventory, customer information, and cash sales in a small-shop scenario.",
    "features": [
      "Maintain employee, product, and customer records.",
      "Browse inventory by product or animal category.",
      "Build a bill and calculate cash payment and change.",
      "Review transactions and generate PDF receipts with QR codes."
    ],
    "implementation": [
      {
        "title": "Desktop workflow",
        "detail": "C# Windows Forms on .NET Framework 4.7.2 implements separate screens for inventory, customer management, billing, and transactions."
      },
      {
        "title": "Database access",
        "detail": "ADO.NET SqlConnection and SqlCommand operations connect forms to SQL Server LocalDB. The database stores the core shop records."
      },
      {
        "title": "Receipts and interface",
        "detail": "iTextSharp and QRCoder create branded PDF receipts and transaction codes. Guna.UI2 provides styled Windows controls."
      }
    ],
    "stackGroups": [
      {
        "label": "Windows application",
        "items": [
          "C#",
          ".NET Framework 4.7.2",
          "Windows Forms"
        ]
      },
      {
        "label": "Database",
        "items": [
          "SQL Server LocalDB",
          "ADO.NET"
        ]
      },
      {
        "label": "Interface",
        "items": [
          "Guna.UI2"
        ]
      },
      {
        "label": "Receipts",
        "items": [
          "iTextSharp",
          "QRCoder"
        ]
      }
    ],
    "scope": "A school desktop project demonstrating a pet-shop POS workflow. It requires a Windows environment and configured LocalDB database; its login and transaction flows should be reviewed before real business use.",
    "status": "School Project"
  },
  {
    "id": 4,
    "title": "St. Benedict Hospital Management System",
    "subtitle": "Hospital Management System",
    "type": "Windows Forms",
    "desc": "A Windows hospital-administration project for patient records, appointments, prescriptions, and billing.",
    "stats": {
      "platform": "Windows",
      "year": "2024",
      "status": "School Project"
    },
    "link": "https://github.com/Kuraisura/StBenedict",
    "date": "December 13, 2024",
    "size": "small",
    "color": "bg-emerald-600",
    "gradient": "from-emerald-600/20 to-teal-500/20",
    "screenshots": [
      "/Portfolio/St.Benedict/1.png",
      "/Portfolio/St.Benedict/2.png",
      "/Portfolio/St.Benedict/3.png",
      "/Portfolio/St.Benedict/4.png",
      "/Portfolio/St.Benedict/5.png",
      "/Portfolio/St.Benedict/6.png"
    ],
    "purpose": "St. Benedict models administrative workflows for a hospital or clinic. It connects patient and doctor records with appointments, medical-history views, prescriptions, procedure costs, and billing so related information can be managed from a desktop application.",
    "audience": "Front-desk staff and doctors in a school-project hospital scenario, with different screens for administrative and doctor-facing work.",
    "features": [
      "Maintain patient and doctor records and appointment schedules.",
      "Review patient history and clinical encounter information.",
      "Manage prescription and procedure-cost records.",
      "Prepare billing output and PDF documents with QR codes."
    ],
    "implementation": [
      {
        "title": "Desktop modules",
        "detail": "C# Windows Forms on .NET Framework 4.7.2 provides dedicated administrative and doctor-facing screens. The project developed through multiple iterations."
      },
      {
        "title": "Database layer",
        "detail": "ADO.NET queries and data adapters connect the application to SQL Server LocalDB for patients, appointments, billing, and related records."
      },
      {
        "title": "Documents and controls",
        "detail": "Guna.UI2 styles the interface; iTextSharp and QRCoder provide PDF and QR generation for supported workflows."
      }
    ],
    "stackGroups": [
      {
        "label": "Windows application",
        "items": [
          "C#",
          ".NET Framework 4.7.2",
          "Windows Forms"
        ]
      },
      {
        "label": "Database",
        "items": [
          "SQL Server LocalDB",
          "ADO.NET"
        ]
      },
      {
        "label": "Interface",
        "items": [
          "Guna.UI2"
        ]
      },
      {
        "label": "Documents",
        "items": [
          "iTextSharp",
          "QRCoder"
        ]
      }
    ],
    "scope": "A school management-system project. Clinical and cost mappings are demonstration logic, and the project has not been established as a validated electronic health record or a production clinical system.",
    "status": "School Project"
  }
];

export const projects = projectEntries.map((project) => ({
  ...project,
  tech: project.stackGroups.flatMap((group) => group.items),
}));
