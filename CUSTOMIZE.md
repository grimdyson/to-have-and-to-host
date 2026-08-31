# Customisation Reference

Most wedding content lives in one file: `src/data/site.ts`.

Use `SETUP.md` for the guided process. Use this reference when you already know what you want to change.

## Central configuration

| Area | Configuration key |
| --- | --- |
| Hero names and formal names | `wedding.couple` |
| Date | `wedding.date` |
| Hero introduction and image | `wedding.hero` |
| Colour or monochrome image treatment | `wedding.imagery.useColour` |
| Venue, address and maps | `wedding.venue` |
| Sticky section chips | `wedding.navigation` |
| Key details | `wedding.details` |
| Schedule | `wedding.schedule` |
| Travel guidance | `wedding.travel` |
| Dress code | `wedding.dressCode` |
| RSVP fields, deadline and recipient | `wedding.rsvp` |
| Frequently asked questions | `wedding.faqs` |
| Footer design credit | `wedding.footer` |
| Search and social metadata | `wedding.metadata` |
| Default theme mode | `wedding.theme` |
| Password-gate switch | `wedding.privacy` |

Core venue, date and RSVP-deadline facts are reused when the detail cards are built, so change their source objects rather than copying values into multiple sections. Narrative FAQ answers can still repeat facts intentionally; review those whenever related content changes. Do not move passwords, guest lists, RSVP submissions, or other secrets into this file.

## Navigation and sections

The website is intentionally one page. Navigation values use stable IDs rather than separate routes:

```text
#details
#schedule
#travel
#dress-code
#rsvp
#faqs
```

If a section ID changes, update the HTML section, navigation configuration and any FAQ links together.

## Images

- `wedding.hero.image.src`: hero image, 1600 × 850 recommended; also used for social sharing by default
- `wedding.venue.image.src`: venue-card image, 1500 × 1000 recommended
- `wedding.metadata.image`: optional dedicated social-sharing image, exactly 1200 × 630 recommended
- `public/favicon.svg`: browser icon

Store local image assets in `public/`. Optimise them before committing, remove EXIF and GPS metadata, keep important subjects central for the mobile crop, and update both configured alt descriptions. Record third-party sources in `IMAGE_CREDITS.md` and remove superseded credits with their images.

Leave `wedding.metadata.image` as `null` to reuse the hero image for Open Graph and Twitter previews. Set it to a public asset path only when a dedicated social-sharing crop is required.

Set `wedding.metadata.siteUrl` to the final HTTPS origin before launch. When it is `null`, local previews use relative metadata paths; when configured, canonical and social-image URLs render as absolute URLs.

## RSVP

The free template intentionally has no hosted form service. It builds a `mailto:` link in the browser and offers a copy-response fallback.

The recipient address is configured at `wedding.rsvp.recipientEmail`. It will be visible to visitors who unlock the website. Test special characters, dietary notes, mobile email applications, and the no-email-client fallback.

Do not add a success message claiming the RSVP was received unless a real receiving service has been implemented and verified.

## Password gate

The gate is enabled at `wedding.privacy.passwordGateEnabled`. Keep it enabled for personalised sites unless the couple explicitly chooses otherwise.

The required hash belongs in `.env.local` and in Vercel as `PUBLIC_SITE_PASSWORD_HASH`. Generate it with `npm run password:hash`.

For local development, the built-in demo password is `test` only when no hash is configured. `.env.local` applies in development too; use `.env.development.local` only when development should use a different password. Production builds never use the demo credential.

Never place the plaintext password in source code. Never add a shared fallback password.

## Fonts and colours

The existing design uses:

- Pinyon Script for display lettering
- Libre Baskerville for headings, labels and body copy

Font imports are in `src/layouts/BaseLayout.astro`. Design tokens are at the top of `src/styles/global.css`.

Change tokens before editing individual selectors, and verify contrast in both themes. Preserve visible focus states, reduced-motion support, comfortable touch targets and the sticky-navigation spacing.

## Components

- `src/components/StickyChips.astro`: section tracking, active indicator and horizontal reveal logic
- `src/components/PasswordGate.astro`: casual-privacy gate
- `src/components/Header.astro`: compact identity header
- `src/components/Footer.astro`: themes, conditional back-to-top control and design credit
- `src/layouts/BaseLayout.astro`: metadata, global shell and privacy defaults
- `src/pages/index.astro`: the single-page presentation and RSVP email preparation

The chip behaviour is deliberately refined. If changing it, retest clicked scrolling, manual scrolling, clipped chips, page top and bottom, resizing, keyboard focus, reduced motion, and both mobile and desktop layouts.
