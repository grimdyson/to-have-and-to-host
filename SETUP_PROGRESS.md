# Setup Progress

This file is persistent setup memory. Keep entries concise. Do not paste private conversation transcripts, passwords, guest lists or RSVP responses here.

## Current status

- Current stage: 1 — Repository privacy and local setup
- Last completed stage: None
- Next question or action: Confirm that the personalised GitHub repository is private, then use Node.js 22.19 or newer before sharing personal wedding details.

## Stage checklist

- [ ] 1. Repository privacy and local setup
- [ ] 2. Names and hero introduction
- [ ] 3. Date, venue, location and key details
- [ ] 4. Schedule
- [ ] 5. Travel and map links
- [ ] 6. Dress code
- [ ] 7. RSVP details and recipient email
- [ ] 8. Frequently asked questions
- [ ] 9. Images and visual checks
- [ ] 10. Password and Vercel environment
- [ ] 11. Metadata, footer and attribution
- [ ] 12. Privacy scrub, testing and deployment

## Confirmed decisions

- Use colour photography rather than the optional monochrome treatment.
- Use `wesley-tingey-mk_k0IEw7b0-unsplash.jpg` for the hero and default social image.
- Use `wesley-tingey-9INtcavGkko-unsplash.jpg` for the venue card.
- Include a Pinterest outfit-inspiration link beneath the dress-code guidance and customise its `?q=` search when the final dress code is known.

## Assumptions awaiting confirmation

- None yet.

## Missing information or assets

- Private-repository visibility has not been confirmed.
- Names, venue, address, map links, schedule, travel guidance, dress code, RSVP address, FAQs and launch URL still contain setup placeholders.
- The current local Node.js runtime is 22.18; the upgraded dependency tree requires Node.js 22.19 or newer.

## Files changed by stage

### Stage 1

- Local dependency installation, development server, Astro checks and production build verified on 31 August 2026.
- Repository privacy and the required Node.js update remain outstanding.

## Technical baseline

- Astro upgraded to the current security-fixed major version.
- `npm run check`: passing with no diagnostics.
- `npm run build`: passing.
- `npm audit`: zero known vulnerabilities after lockfile remediation.
- Demo image dimensions and embedded metadata inspected; no GPS or camera-owner fields found.

## Final launch checklist

- [ ] Repository visibility confirmed private
- [ ] Personal-data scrub complete
- [ ] Image metadata checked
- [ ] Password hash configured locally and in Vercel
- [ ] Google Maps and Apple Maps destinations verified
- [ ] RSVP email and copy fallback tested
- [ ] Metadata and social image verified
- [ ] Keyboard, focus and reduced-motion checks complete
- [ ] Phone, tablet and desktop layouts checked
- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] Production deployment tested in a private browser window
