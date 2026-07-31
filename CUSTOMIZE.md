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
| Venue, address, timezone and maps | `wedding.venue` |
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

When the same fact appears in more than one configured section, update every occurrence and verify the rendered page. Do not move passwords, guest lists, RSVP submissions, or other secrets into this file.

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

- `public/wedding-placeholder.jpg`: hero image, 1600 × 850 recommended
- `public/venue-placeholder.jpg`: venue-card image, 1500 × 1000 recommended
- `public/og-image.jpg`: social sharing image, exactly 1200 × 630 recommended
- `public/favicon.svg`: browser icon

Optimise images before committing them. Remove EXIF and GPS metadata. Keep important subjects central for the mobile crop, and update alt text in `wedding.hero.image.alt`.

## RSVP

The free template intentionally has no hosted form service. It builds a `mailto:` link in the browser and offers a copy-response fallback.

The recipient address is configured at `wedding.rsvp.recipientEmail`. It will be visible to visitors who unlock the website. Test special characters, dietary notes, mobile email applications, and the no-email-client fallback.

Do not add a success message claiming the RSVP was received unless a real receiving service has been implemented and verified.

## Password gate

The gate is enabled at `wedding.privacy.passwordGateEnabled`. Keep it enabled for personalised sites unless the couple explicitly chooses otherwise.

The required hash belongs in `.env.local` and in Vercel as `PUBLIC_SITE_PASSWORD_HASH`. Generate it with `npm run password:hash`.

For local development, the tracked demo password is `test`. Override it privately in `.env.development.local` if required. Production builds never use the development demo file.

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
- `src/components/Footer.astro`: local time, themes, back-to-top and design credit
- `src/layouts/BaseLayout.astro`: metadata, global shell and privacy defaults
- `src/pages/index.astro`: the single-page presentation and RSVP email preparation

The chip behaviour is deliberately refined. If changing it, retest clicked scrolling, manual scrolling, clipped chips, page top and bottom, resizing, keyboard focus, reduced motion, and both mobile and desktop layouts.
