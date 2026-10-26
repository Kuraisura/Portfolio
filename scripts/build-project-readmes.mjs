import fs from 'node:fs';
import path from 'node:path';
import { projects } from '../src/data/projects.js';

// The audit directory contains GitHub trees and original READMEs, never credentials.
const auditRoot = process.argv[2];
if (!auditRoot) throw new Error('Usage: node scripts/build-project-readmes.mjs <audit-directory>');
const outputRoot = path.resolve('docs/projects/readmes');
fs.mkdirSync(outputRoot, { recursive: true });

const setup = {
  SeismicWatch: {
    text: 'Import the Gradle project into Android Studio with JDK 17 and the Android SDK configured in app/build.gradle. Configure Firebase and the Supabase hazard-data services used by the application. Test location, notification, background-service, and Nearby permissions on a compatible device. External data ingestion is configured separately from the Android build.',
    paths: ['app/src/main/java/com/gising/ui/', 'app/src/main/java/com/gising/data/', 'app/build.gradle', 'firestore.rules'],
  },
  STIRAMSWEB: {
    command: 'npm install\nnpm run dev\n\n# Production build\nnpm run build',
    text: 'Requires Node.js, npm, and a development PostgreSQL database with the matching institutional schema. Configure the database, authentication/session settings, and optional email services referenced by the server code. The WPF kiosk is a separate application.',
    paths: ['app/dashboard/', 'app/api/', 'lib/', 'package.json'],
  },
  STIRAMSWPF: {
    command: 'dotnet restore RAMSOfficial/RAMSOfficial.csproj\ndotnet build RAMSOfficial/RAMSOfficial.csproj',
    text: 'Requires Windows, the .NET 8 SDK, a compatible RFID reader, a local SQLite cache, and the configured shared PostgreSQL database. Review application settings and database services for your development environment. Open the project in Visual Studio to run or debug the kiosk.',
    paths: ['RAMSOfficial/Services/', 'RAMSOfficial/ViewModels/', 'RAMSOfficial/TapInWindow.xaml.cs'],
  },
  NeuralLens: {
    command: 'python -m venv .venv\n# Activate the virtual environment for your shell.\npython -m pip install -r requirements.txt\npython app.py',
    text: 'Requires Python, a supported camera, and platform build dependencies for dlib/face_recognition. Review config.py, camera selection, database initialization, and environment settings first. The repository includes multiple application variants and Docker configuration; compatibility needs to be checked for the selected variant and hardware.',
    paths: ['app.py', 'face_recognition_module.py', 'database.py', 'src/', 'requirements.txt'],
  },
  YTConverter: {
    command: 'npm install\nnpm run dev\n\n# In a second terminal, with the worker configured:\nnpm run worker\n\n# Production build\nnpm run build',
    text: 'Requires a Node.js version compatible with package.json, FFmpeg, yt-dlp, Upstash Redis, and Cloudflare R2 configuration. Read LOCAL_HOSTING.md and RENDER_DEPLOYMENT.md for environment and worker setup. The UI alone does not run conversion jobs. Use the provided Docker setup when you need the server, worker, and conversion tools packaged together.',
    paths: ['app/api/', 'lib/queue.ts', 'lib/processor.ts', 'scripts/queue-worker.js', 'LOCAL_HOSTING.md', 'RENDER_DEPLOYMENT.md'],
  },
  ChronoWeb: {
    command: 'npm install\nnpm run dev\n\n# Desktop development, with Tauri prerequisites installed:\nnpm run desktop:dev\n\n# Desktop packaging\nnpm run desktop:build',
    text: 'Configure the Supabase URL and public client key read by src/api/supabaseClient.js. The database needs the expected tasks and journal tables, access policies, and journal image storage. Desktop development also requires the Rust toolchain and Tauri prerequisites for your operating system.',
    paths: ['src/pages/', 'src/api/chronoService.js', 'src/components/chrono/FocusPanel.jsx', 'src-tauri/'],
  },
  Wiz: {
    command: 'npm install\nnpm run dev\n\n# Web production build\nnpm run build',
    text: 'Requires Node.js, npm, and a configured Supabase project. Set up the schema and functions used by the application. AI generation, OCR, OAuth callbacks, and PayMongo workflows need their own service configuration. Capacitor configuration and native platform projects are included; verify native tooling before packaging.',
    paths: ['src/pages/', 'src/lib/documentParser.js', 'src/lib/', 'supabase/'],
  },
  Musikk: {
    text: 'Open the Android project in Android Studio. Configure Firebase and the processing and storage endpoints expected by the app. main.py is the FastAPI backend entry point; local processing requires Python, an ASGI server, upload support, Demucs, FFmpeg, and compatible model/runtime dependencies. Validate the backend before testing separation. The repository does not provide a single verified command that provisions every service.',
    paths: ['app/src/main/java/com/kurai/musikk/ui/', 'app/src/main/java/com/kurai/musikk/data/', 'main.py'],
  },
  ChronoAndroid: {
    command: 'npm install\nnpm run dev\n\n# Build, synchronize, and open Android tooling:\nnpm run android',
    text: 'Requires Node.js, npm, a configured Supabase project, and Android Studio for Android packaging. Configure task, journal, category, and photo-storage workflows. Capacitor handles native project synchronization. The iOS command requires macOS and Xcode.',
    paths: ['src/pages/', 'src/api/backend.js', 'src/lib/notifications.js', 'capacitor.config.ts'],
  },
  STITimer: {
    text: 'Open STITimer.csproj in Visual Studio on Windows with the .NET desktop workload and .NET Framework 4.8 targeting pack. Build and run the application with its bundled XAML and event-art resources. This local application does not require a database or cloud account.',
    paths: ['MainWindow.xaml.cs', 'TimerWindow.xaml.cs', 'StopwatchWindow.xaml.cs', 'TrafficLightWindow.xaml.cs', 'ThinkQuestWindow.xaml.cs'],
  },
  RNReady: {
    command: 'flutter pub get\nflutter run\n\n# Included tests\nflutter test',
    text: 'Use a Flutter/Dart SDK compatible with pubspec.yaml and your chosen platform tooling. Create the local .env asset expected by the pubspec and configure the LLM service for online AI features. Distributed app assets are not a place for privileged service credentials. Bundled material supports local reading; AI features require connectivity.',
    paths: ['lib/features/', 'lib/data/services/llm_service.dart', 'assets/study/', 'test/'],
  },
  'Journal-Ease': {
    text: 'Import the Gradle project into Android Studio, synchronize dependencies, and run on a compatible emulator or device. app/build.gradle targets SDK 33 with minimum SDK 26. The current local demo session and note store do not require Firebase. Test document export permissions on the intended Android version.',
    paths: ['app/src/main/java/com/example/notesapptutorial/', 'app/src/main/java/com/example/notesapptutorial/LocalNoteStore.java', 'app/src/main/java/com/example/notesapptutorial/DemoSession.java'],
  },
  'Pet-Haven': {
    text: 'Open the project under Pet Haven/ in Visual Studio on Windows with the .NET desktop workload and .NET Framework 4.7.2 targeting pack. Restore NuGet packages and configure SQL Server LocalDB for your development machine. Verify the schema with sample data before trying billing and receipt workflows.',
    paths: ['Pet Haven/', 'Pet Haven/DbConnect.cs', 'Pet Haven/BillingForm.cs'],
  },
  StBenedict: {
    text: 'Open the project under StBenedict/ in Visual Studio on Windows with the .NET desktop workload and .NET Framework 4.7.2 targeting pack. Restore dependencies and configure the expected SQL Server LocalDB database. Verify the schema and use synthetic records for demonstration workflows.',
    paths: ['StBenedict/', 'StBenedict/dbConnect.cs', 'StBenedict/DoctorDashboard.cs'],
  },
};

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

for (const project of projects) {
  const repo = project.link.split('/').at(-1);
  const tree = JSON.parse(fs.readFileSync(path.join(auditRoot, repo, 'tree.json'), 'utf8'));
  const files = new Set(tree.tree.filter((entry) => entry.type === 'blob').map((entry) => entry.path));
  const exists = (file) => files.has(file) || [...files].some((entry) => entry.startsWith(file));
  const config = setup[repo];
  const lines = [
    `# ${project.title}`, '', project.desc, '',
    `**${project.stats.platform}** · **${project.status}** · ${project.stats.year}`, '',
    `[Portfolio](https://kuraisler.xyz)${project.website ? ` · [Website demo](${project.website})` : ''}`, '',
    '## Purpose', '', project.purpose, '',
    '## Intended users', '', project.audience, '',
    '## Main capabilities', '', ...project.features.map((feature) => `- ${feature}`), '',
    '## How it was built', '',
  ];
  for (const step of project.implementation) lines.push(`### ${step.title}`, '', step.detail, '');
  lines.push('## Technology stack', '', '| Responsibility | Technologies |', '| --- | --- |');
  for (const group of project.stackGroups) lines.push(`| ${group.label} | ${group.items.join(', ')} |`);
  lines.push('', '## Project scope and current state', '', project.scope, '');
  if (repo === 'Journal-Ease') lines.push('The Android code adapts an earlier notes-app tutorial structure. Existing package and class names reflect that origin; the current persistence and session behavior are local.', '');
  if (config) {
    lines.push('## Source guide', '');
    for (const file of config.paths.filter(exists)) lines.push(`- [\`${file}\`](${file.replaceAll(' ', '%20')})`);
    lines.push('', '## Development setup', '', config.text, '');
    if (config.command) lines.push('```sh', config.command, '```', '');
  } else {
    lines.push('## Repository contents', '', 'This repository currently contains documentation and screenshots. Application source and a reproducible build are not included. Technology details are limited to what the project documentation supports.', '');
  }
  if (project.media?.videos?.length) {
    lines.push('## Project video', '');
    for (const video of project.media.videos) {
      const watch = `https://kuraisler.xyz${encodeURI(video.asset)}`;
      const poster = project.media.screenshots.find((image) => image.asset === video.poster)?.file || project.media.screenshots[0]?.file;
      lines.push(`### ${video.title}`, '', `**${video.kind} · ${video.duration}**`, '', video.description, '');
      if (poster) lines.push(`[![Watch ${video.title}](${poster})](${watch})`, '');
      lines.push(`[Watch in your browser](${watch}) · [Video file in this repository](${video.file})`, '');
    }
  }
  const readmePath = path.join(auditRoot, repo, 'files', 'README.md');
  const old = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
  const images = project.media?.screenshots?.map((note) => ({ caption: note.title, src: note.file })) || [...old.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)]
    .filter((match) => files.has(match[2]))
    .map((match) => ({ caption: match[1].split(' — ')[0], src: match[2] }));
  if (images.length) {
    const notes = project.media?.screenshots || [];
    if (notes.length !== images.length) throw new Error(`Incomplete screenshot notes: ${repo}`);
    lines.push('## Screenshot and module walkthrough', '', 'Expand a screen below to see the capture and an explanation of the module, its visible controls, and its role in the application.', '');
    notes.forEach((note, index) => {
      if (!files.has(note.file)) throw new Error(`Screenshot not in repository: ${repo}/${note.file}`);
      lines.push(index === 0 ? '<details open>' : '<details>', `<summary><strong>${String(index + 1).padStart(2, '0')} · ${escapeHtml(note.title)}</strong></summary>`, '', note.description, '', `<p><img src="${escapeHtml(note.file)}" alt="${escapeHtml(note.title)}" width="${project.type === 'Mobile' ? '360' : '960'}"></p>`, '', '</details>', '');
    });
  }
  const license = [...files].find((file) => /^licen[cs]e[^/]*$/i.test(file));
  if (license) lines.push('## License', '', `See [${license}](${license}).`, '');
  lines.push('---', '', 'Project by [Mark Crysler Baddo](https://github.com/Kuraisura) · [Portfolio](https://kuraisler.xyz)', '');
  fs.writeFileSync(path.join(outputRoot, `${repo}.md`), lines.join('\n'));
}
console.log(`Prepared ${projects.length} README updates in ${outputRoot}`);
