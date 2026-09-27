# TryHackMe and TikTok social-logo verification

## Recommendation

Use the monochrome brand marks from the Simple Icons set for the compact social buttons, imported through the existing `react-icons` dependency as `SiTryhackme` and `SiTiktok`. SVG-based React components stay sharp at every responsive size, inherit the button's foreground color in both themes, and add no remote runtime dependency.

## TikTok

TikTok's current developer design guidelines point implementers to its official Brand and Use Guidelines and downloadable logo/button asset packs. The mark should be used as a brand identifier rather than replaced by a generic music-note icon. The portfolio now uses the recognizable TikTok brand silhouette and keeps the visible label “TikTok,” which avoids relying on the mark alone.

TikTok notes that its marks remain subject to its brand and use rules. This implementation uses the mark only to identify and link to the owner's TikTok profile; it does not imply sponsorship.

## TryHackMe

TryHackMe does not expose an easy-to-find public media-kit page in its indexed first-party pages. The maintained Simple Icons entry uses TryHackMe's own website as the source for the mark. Simple Icons' contribution policy prioritizes official sources over unofficial ones and records a source URL for each maintained brand icon. That makes its current monochrome TryHackMe mark a stronger choice than the generic shield previously used in the portfolio.

## Sources

1. TikTok for Developers. [Design Guidelines](https://developers.tiktok.com/docs/en/getting-started-design-guidelines). Accessed September 13, 2026.
2. Simple Icons. [SVG icons for popular brands](https://github.com/simple-icons/simple-icons). Accessed September 13, 2026.
3. Simple Icons. [Contribution and source guidelines](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md). Accessed September 13, 2026.
4. Simple Icons. [Legal disclaimer](https://github.com/simple-icons/simple-icons/blob/develop/DISCLAIMER.md). Accessed September 13, 2026.
