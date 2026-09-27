// Applies the saved theme before the first paint. This lives in its own file
// (instead of an inline script) because the site's CSP only allows script-src 'self'.
try {
  if (window.localStorage.getItem('portfolio-theme') === 'dark') {
    document.documentElement.dataset.theme = 'dark';
  }
} catch {
  /* storage blocked — keep the light background */
}
