# Portfolio security and local CTF plan

## What can and cannot be hidden

Everything delivered to a browser is public to that visitor. HTML, JavaScript bundles, API URLs, images, source maps, public environment variables, local storage, and network requests can all be inspected. Disabling F12, right-click, text selection, or keyboard shortcuts does not create a security boundary.

Base64 is an encoding, not encryption. Putting `hapibermonthsmrhacker.png` into JavaScript as Base64 makes the bundle larger and still lets anyone decode or save the image. The image is intentionally a public easter egg, so `/hapibermonthsmrhacker.png` is appropriate. Never use the same technique for passwords, API service keys, private flags, or database credentials.

The implemented DevTools detector compares the browser's outer and inner window dimensions after a resize. It can notice common docked DevTools layouts. It cannot reliably detect undocked DevTools, remote debugging, automated browsers, command-line requests, or a visitor who opens DevTools before the page. It is presentation only.

## Production security model

The portfolio should remain a normal, non-vulnerable application:

- Keep service-role keys and email-provider keys only on the server.
- Treat Vite variables prefixed with `VITE_` and the Supabase anonymous key as public.
- Enforce authorization and validation through Supabase Row Level Security, database constraints, and server endpoints.
- Escape untrusted content for its output context. The contact email renderer already HTML-escapes submitted values.
- Use a restrictive Content Security Policy, clickjacking protection, MIME sniffing protection, HTTPS, HSTS, and a Referrer Policy.
- Add persistent rate limiting and a server-verified Cloudflare Turnstile challenge before exposing the contact endpoint to significant traffic.
- Do not place an intentionally vulnerable challenge on the portfolio origin or against the production database.

The repository now includes header configurations for Vercel (`vercel.json`) and Namecheap Apache hosting (`public/.htaccess`). Confirm that Namecheap has `mod_headers`, `mod_rewrite`, and HTTPS enabled after deployment. The Supabase migration `002_input_constraints.sql` must be applied through the Supabase SQL editor.

## Recommended CTF architecture

Run the challenge as an isolated application, first on localhost and later on a separate host such as `ctf.kuraisler.xyz`.

1. Put the portfolio and CTF on different origins. They must not share cookies, local storage, databases, credentials, or API keys.
2. Use Docker or a disposable virtual machine for the target. Bind it to `127.0.0.1` for same-machine practice. For a Kali laptop on the LAN, bind only to the private interface and firewall access to the Kali laptop's IP.
3. Use synthetic users and synthetic data. Never copy production credentials or contact submissions into the lab.
4. Keep the flag on the CTF server, not in the React bundle. Store only a salted hash or HMAC for validation. A static frontend flag is always extractable.
5. Issue a random per-session flag after the final server-side objective. This prevents one participant from sharing a permanent answer.
6. Add a small scoreboard endpoint with rate limiting, audit logs, and automatic container reset.
7. Take a VM snapshot before every exercise. Shut the vulnerable network down after testing.

For a portfolio-friendly challenge, use a staged recon story without real vulnerabilities:

- DevTools opens the image and a clue.
- The clue points to a public security or robots file.
- That file points to an isolated CTF hostname.
- The isolated service contains the actual web challenge and server-side flag validation.

## Kali and web-testing toolkit

Use these only on systems you own or have explicit permission to test.

### Reconnaissance and inventory

- `curl`, `wget`, `httpie`: requests, headers, redirects, cookies, and API behavior.
- `nmap`: host and service discovery.
- `httpx`, `WhatWeb`, Wappalyzer: HTTP probing and technology identification.
- `dig`, `whois`, `dnsrecon`, `amass`, `subfinder`: DNS and owned-domain inventory.
- Browser DevTools: DOM, storage, source files, accessibility, and network inspection.

### Web proxy and application testing

- OWASP ZAP: automated and manual web security testing.
- Burp Suite Community Edition: intercepting proxy, request replay, and manual testing.
- `ffuf`, `feroxbuster`, `gobuster`: content discovery against the isolated lab.
- `nikto`: basic web server checks.
- `testssl.sh` and SSL Labs: TLS configuration assessment.
- Nuclei: template-based scanning, restricted to reviewed templates and authorized targets.

### Lab-only vulnerability validation

- `sqlmap`: SQL injection validation on a deliberately vulnerable local database.
- Dalfox or XSStrike: XSS testing in the local challenge.
- Hydra: authentication testing against synthetic lab accounts.
- Metasploit Framework and Searchsploit: known-vulnerability labs and exploit research.
- Commix: command-injection labs.

### Network, binaries, and credentials

- Wireshark and `tcpdump`: packet capture inside the lab network.
- Ghidra, Cutter, and radare2: reverse-engineering challenge binaries.
- John the Ripper and Hashcat: offline cracking of synthetic CTF hashes.
- CyberChef: transforms, encodings, and challenge analysis.

Good intentionally vulnerable targets include OWASP Juice Shop, WebGoat, DVWA, and Metasploitable. Keep them isolated and never publish them under the same account, database, or origin as the portfolio.

## Before public deployment

- Run the production build and inspect it for source maps and accidental secrets.
- Test headers with OWASP ZAP and SecurityHeaders.com.
- Test TLS with SSL Labs.
- Run the CTF in a separate hosting account or isolated container service.
- Add Turnstile and durable rate limiting to public form endpoints.
- Back up the site and database, then verify recovery before testing.

## References

1. OWASP. [Content Security Policy](https://owasp.org/www-community/controls/Content_Security_Policy).
2. OWASP. [Secure Headers Project](https://owasp.org/www-project-secure-headers/).
3. OWASP. [HTML5 Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html).
4. Namecheap. [Prerequisites for HSTS on shared hosting](https://www.namecheap.com/support/knowledgebase/article.aspx/9708/38/prerequisites-for-namecheap-shared-hosting-to-enable-hsts/).
5. MDN. [Window outerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth).
