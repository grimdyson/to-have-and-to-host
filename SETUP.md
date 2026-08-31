# Progressive Setup Guide

This guide works in two ways:

- Follow it yourself, one stage at a time.
- Give this repository to an AI coding assistant and ask it to begin setup.

You can stop after any stage. Confirmed decisions and the next action belong in `SETUP_PROGRESS.md`, not in a transcript or a separate private file.

## Instructions for an AI coding assistant

Before making changes:

1. Read `SETUP.md`, `SETUP_PROGRESS.md`, and `VOICE_AND_TONE.md` completely.
2. Inspect the current repository and its uncommitted changes.
3. Determine whether this is a new setup or a resumed setup.
4. Continue from the first incomplete stage in `SETUP_PROGRESS.md`.
5. Ask only for information needed by the current stage.
6. Do not ask the user to repeat a confirmed decision already recorded in `SETUP_PROGRESS.md`.
7. Update the website and preview it after each stage where practical.
8. Summarise the edited website copy for confirmation before marking a content stage complete.
9. Record concise decisions, assumptions awaiting confirmation, missing assets, files changed, and the exact next question or action.
10. Never place private guest lists, RSVP responses, passwords, or plaintext secrets in source files or progress notes.
11. Confirm ambiguous, sensitive, or consequential details before publication. Do not invent times, locations, transport advice, accessibility claims, dress requirements, contact details, pronouns, titles, relationship labels, or cultural conventions.
12. Preserve clear, distinctive language supplied by the couple. Edit repetition and filler without making the copy generic or overly sentimental.
13. Respect the couple’s regional spelling, date format, time format, terminology, names, and chosen level of formality.
14. Finish with the privacy and launch review in Stage 12.

When interpreting answers, use first names in the hero unless full names are explicitly requested there. Keep full names only in formal or metadata contexts where the user approves them. Do not publish raw onboarding answers without editorial review.

## Stage 1 — Repository privacy and local setup

Before sharing any personal details:

- Create or duplicate the template into a private GitHub repository.
- Open the repository settings and confirm its visibility says **Private**.
- Ensure `.env.local` is ignored by Git.
- Install Node.js 22.19 or newer if needed, then run `npm ci`.
- Run `npm run dev` and open the local address shown in the terminal.

The local development gate uses the demo password `test`. The hint is shown only during local development. Production builds do not use this demo credential and will show “Password setup required” until a production hash is configured.

Record privacy confirmation and local setup status in `SETUP_PROGRESS.md`.

## Stage 2 — Names and hero introduction

Collect and confirm:

- Each partner’s preferred first name for the hero
- Optional full names for formal metadata
- A short welcome sentence, or enough natural language to draft one

Update `wedding.couple` and `wedding.hero` in `src/data/site.ts`. Keep the introduction concise and follow `VOICE_AND_TONE.md`. The default metadata title and description are derived from `wedding.couple`; review the rendered metadata and override it only when different wording is intentional.

## Stage 3 — Date, venue and key details

Collect and confirm:

- Wedding date and preferred display format
- Venue name
- City or region
- Selectable street address
- RSVP deadline

Update `wedding.date`, `wedding.venue`, `wedding.rsvp.deadline`, and any matching FAQ answer. The key-detail cards reuse those source values automatically; check remaining narrative copy for consistency.

## Stage 4 — Schedule

For each confirmed item, collect:

- Time
- Short title
- One concise description, if it adds useful context

Update `wedding.schedule.items`. Do not guess missing times or describe plans that have not been confirmed.

## Stage 5 — Travel and maps

Collect confirmed advice for transport, parking, taxis or rideshare, shuttles, access, and accommodation areas. Remove unused note cards instead of filling them with vague copy.

Update `wedding.travel` and both values in `wedding.venue.maps`.

Before completing this stage:

- Open the Google Maps link and verify the exact destination.
- Open the Apple Maps link and verify the exact destination.
- Confirm the visible address is correct and selectable.
- Test both links from a phone where possible.

## Stage 6 — Dress code

Collect the chosen dress-code name, a one-sentence explanation, and only the practical guidance guests need. Update `wedding.dressCode.guidance` and `wedding.dressCode.considerations`; remove unused considerations rather than publishing filler. Avoid assumptions based on gender. Mention terrain, climate, cultural expectations, or footwear only when confirmed.

Once the dress-code content is confirmed, update `inspirationLink.href` so its Pinterest search matches that guidance. Keep the URL prefix `https://au.pinterest.com/search/pins/?q=` and replace everything after `?q=` with a URL-encoded search phrase for the chosen dress code, such as `black%20tie%20wedding%20outfit`.

Set `inspirationLink.enabled` to `true` only after opening the resulting search and checking that its outfit examples are appropriate for the wedding.

## Stage 7 — RSVP

Collect and confirm:

- RSVP deadline
- Recipient email address
- Preferred email subject
- Whether to collect guest contact email
- Whether to collect party size
- Any changes to attendance wording or fields

Update `wedding.rsvp`. The recipient email is visible in the browser because guests need it for the email handoff; use an address the couple is comfortable publishing to invited visitors.

Test both outcomes:

1. **Prepare RSVP email** opens an email application with safely encoded subject and body text.
2. **Copy response** copies the formatted RSVP, with a selectable-text fallback if browser permission is unavailable.

Never show an “RSVP received” message. The website does not receive or store the response.

## Stage 8 — FAQs

Keep only questions that are useful for this wedding. Confirm accessibility, children, parking, gifts, transport, plus-one, and venue answers rather than borrowing generic assumptions.

Internal FAQ links should use page anchors such as `#travel`, `#dress-code`, and `#rsvp`.

## Stage 9 — Images and visual checks

The starter includes replaceable demo photographs for the hero and venue card. Their source details are recorded in `IMAGE_CREDITS.md`. Prompt the user to choose or supply both images before replacing them, and confirm the preferred focal point and concise alt text for each. Add personal photographs only inside the private personalised repository.

Ask whether the site's photography should appear in colour or monochrome. If the user chooses a colour hero and has not explicitly requested a monochrome treatment, treat that as their colour preference and set `wedding.imagery.useColour` to `true`. This removes the CSS grayscale filter from both the hero and venue image. Keep the venue's light/dark overlay scrim in either mode so its text and map buttons retain clear contrast.

Recommended hero image:

- Landscape crop close to 1.91:1
- At least 1600 × 850 pixels
- JPEG or WebP, normally below 500 KB
- Important faces and details kept near the centre for mobile cropping
- Plain, meaningful alt text in `wedding.hero.image.alt`

Recommended venue-card image:

- Landscape image with enough environmental detail to fill a wide container
- At least 1500 × 1000 pixels
- A focal point that remains useful behind the venue details and responsive crop
- Plain, meaningful alt text in `wedding.venue.image.alt`

The hero image is also the social-sharing image by default. If its crop does not work well in link previews, add a dedicated 1200 × 630 asset and set `wedding.metadata.image` to its public path. Remove EXIF, GPS, camera-owner, and other embedded metadata before committing. Use descriptive filenames without private details.

Complete the image change as one clean workflow:

- Optimise the selected image and verify its crop before considering the step finished.
- Remove superseded images, temporary downloads and unused source files.
- Check the selected image's licence. Keep a concise attribution only when the licence requires it or the user intentionally wants it.
- Remove stale attribution entries and documentation references. If an image-credit file becomes empty, delete it rather than leaving setup bloat behind.
- Update filenames, alt text and documentation so nothing still describes the previous image or provider.

Clean as you go instead of recording image cleanup as a later task.

Check the hero in light and dark themes at phone, tablet, and desktop widths.

## Stage 10 — Password and Vercel environment

Generate a hash without placing the plaintext password in command history:

```bash
npm run password:hash
```

Enter the password twice when prompted. Add the resulting 64-character hash to a new `.env.local` file:

```text
PUBLIC_SITE_PASSWORD_HASH="your-generated-hash"
```

Do not commit `.env.local` or the plaintext password. The `PUBLIC_` prefix means the hash is included in the browser bundle; this is expected and is why the gate provides casual privacy rather than strong security.

Vite loads `.env.local` in development as well as production builds, so this configured password also replaces `test` locally. If development should use a different password, put that password's hash in `.env.development.local`; the mode-specific file takes precedence and is also ignored by Git. The built-in demo credential is enabled only when the development server has no configured password hash, and production builds never use it.

In Vercel:

1. Open the project.
2. Go to Settings → Environment Variables.
3. Add `PUBLIC_SITE_PASSWORD_HASH` for Production and any desired Preview environments.
4. Paste only the generated hash.
5. Save, then redeploy so the build receives the value.

If the deployed site says password setup is required, confirm the variable name, confirm the value contains exactly 64 hexadecimal characters, and redeploy.

For stronger protection, configure server-side authentication or Vercel deployment protection separately.

## Stage 11 — Metadata, footer and attribution

Update:

- `wedding.metadata.title`
- `wedding.metadata.description`
- `wedding.metadata.siteUrl`
- `wedding.footer.credit`

Set `wedding.metadata.siteUrl` to the deployed site's HTTPS origin, without a page path, so canonical and social-preview URLs are absolute. The hero image is also used for Open Graph and Twitter previews by default. Leave `wedding.metadata.image` as `null` to keep one shared asset, or set it to a public asset path only when the couple wants a dedicated social-sharing crop.

Keep `noindex, nofollow, noarchive` unless the couple explicitly understands and accepts public indexing. Keep the `timdyson.com` credit in place by default.

## Stage 12 — Privacy scrub, testing and deployment

Before deployment:

- Confirm the GitHub repository is private.
- Search source, documentation, comments, package metadata and public files for details inherited from another wedding.
- Inspect image metadata and alt text.
- Verify page title, description and social image.
- Verify Google Maps and Apple Maps destinations.
- Verify the RSVP recipient, subject, fields, email handoff and copy fallback.
- Confirm no guest list or RSVP response is shipped in the browser bundle.
- Confirm no `.env` file is tracked.
- Run `npm run check` and `npm run build`.
- Run `npm audit` and resolve high-severity production advisories before deployment.
- Test keyboard navigation and visible focus states.
- Test light, dark and system themes.
- Test reduced-motion behaviour.
- Test narrow phone, tablet and desktop layouts.
- Confirm sticky anchors do not hide headings.
- Confirm the page has no horizontal overflow.
- Check the deployed password gate in a private browser window.
- Check repository visibility one final time.

Deploy by importing the private repository into Vercel. Keep the detected Astro build settings. After deployment, test the production URL from a phone before sharing it with guests.

## Troubleshooting

### Password setup required

`PUBLIC_SITE_PASSWORD_HASH` is missing or invalid. Generate a new value with `npm run password:hash`, add it locally and in Vercel, then restart or redeploy.

### A changed password still accepts an old browser session

The unlock cookie is tied to the configured hash and should invalidate automatically. If needed, clear cookies for the site and reload.

### No email application opens

Use **Copy response**, then email the response manually to the visible RSVP address. Some devices do not have a default email application configured.

### Map link opens the wrong place

Replace the configured URL with a link copied directly from the confirmed venue result in each map service. Verify both services independently.

### Changes are missing on Vercel

Confirm the latest commit was deployed. Environment-variable changes require a new deployment.
