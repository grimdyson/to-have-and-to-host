# Product Requirements Document: To Have and To Host

- **Repository name:** `to-have-and-to-host`
- **Product description:** A lightweight, single-page wedding website template
- **Product type:** Source-available wedding website template
- **Status:** Ready for implementation
- **Primary framework:** Astro
**Deployment target:** Vercel

## 1. Product Summary

To Have and To Host is a polished, single-page wedding website template designed for couples who want an elegant, private, mobile-friendly website without needing significant technical experience.

The template will be derived from the existing `sisters-wedding` repository while preserving its visual identity, typography, colour system, animation, light and dark themes, password gate, and overall editorial character.

All original personal information, wedding details, photographs, metadata, addresses, email addresses, map destinations, RSVP endpoints, and other identifying content must be removed.

The finished template will be free for personal, non-commercial use under a custom licence. It should be straightforward to personalise manually, but its principal setup experience should also support a user pointing an AI coding assistant at the repository and `SETUP.md` to complete the website progressively.

## 2. Repository and Privacy Model

Two distinct repository types must be recognised.

### Template repository

The original To Have and To Host template may be publicly available on GitHub so people can discover and duplicate it.

It must contain only placeholders, example content, generic assets, and public documentation. It must not retain any information from the original private wedding website.

### Personalised wedding repositories

Any repository created from the template should be private by default.

The setup documentation must instruct users to:

- Create or duplicate the template into a private GitHub repository.
- Confirm the repository visibility before entering personal information.
- Connect the private repository to Vercel.
- Avoid committing passwords, plaintext secrets, private guest lists, or RSVP submissions.
- Check repository visibility again before publishing the website.

The template should be described as **source-available** rather than OSI-approved "open source," because its custom non-commercial licence will restrict certain forms of use.

## 3. Product Goals

The product must:

- Preserve the existing website's visual quality and distinctive design.
- Consolidate the experience into one continuous scrolling page.
- Be useful on mobile devices before, during, and after the wedding.
- Make schedule, travel, dress code, RSVP, and FAQ information easy to find.
- Include a sticky chip-based section navigation experience.
- Include a password gate by default.
- Provide a functional email-based RSVP flow without Formspree or another hosted form provider.
- Make personalisation approachable for non-technical users.
- Provide an intelligent, resumable, AI-assisted setup process.
- Keep almost all editable content in a clear central configuration.
- Ship with no personal or sensitive information from the source repository.
- Be suitable for public distribution as a free personal-use template.
- Include tasteful attribution to `timdyson.com`.

## 4. Non-Goals

To Have and To Host will not include:

- A database or guest-management dashboard.
- Hosted RSVP storage.
- Formspree or another managed form service.
- A CMS or visual page builder.
- Secure document sharing.
- A registry, gallery, guest messaging system, or accommodation booking engine.
- Commercial client-use rights.
- Premium integrations from a future paid edition.
- A substantial visual redesign of the existing website.

## 5. Target User

The target user is anyone planning a wedding who wants a beautiful website and is comfortable following guided instructions.

The user may have little or no development experience. They should be able to complete setup by:

- Following the written instructions themselves.
- Working with an AI coding assistant.
- Asking a technically capable friend for help.
- Combining all three approaches.

The setup process must not assume the user understands environment variables, repository visibility, deployment pipelines, hashing, or frontend terminology.

## 6. Experience Principles

### Intentional

Every element should feel considered. Placeholder content, empty states, documentation, and generated copy should receive the same care as the interface.

### Concise

Wedding information should be easy to scan. Copy should not become verbose, sentimental, or unnecessarily decorative.

### Calm and celebratory

The website should feel warm and special without becoming overly formal, sugary, or theatrical.

### Mobile-first

Guests are likely to open the website from text messages and use it while travelling. Navigation, map links, schedules, and RSVP controls must work especially well on a phone.

### Private by default

Personalised repositories must be private, indexing must be discouraged, and the password gate must be enabled by default.

### Progressively configurable

Users should be able to complete one section, preview it, and return later without losing track of their progress.

## 7. One-Page Information Architecture

The finished website must use one continuous page with stable section anchors.

Recommended order:

1. Hero
2. Key wedding details
3. Schedule
4. Travel and venue
5. Dress code
6. RSVP
7. Frequently asked questions
8. Footer

Standalone schedule, travel, RSVP, and other content pages should be removed from the template once their content has been consolidated.

The URL should remain useful when shared with a section anchor, such as:

```text
/#schedule
/#travel
/#rsvp
/#faqs
```

## 8. Sticky Chip Navigation

The single-page website must include a sticky chip-based navigation experience inspired by the implementation in the creator's portfolio repository.

The portfolio repository will be provided to the implementation agent during the build. The agent must inspect that implementation and adapt its behaviour and design appropriately rather than recreating it from memory.

Expected chip destinations include:

- Details
- Schedule
- Travel
- Dress code
- RSVP
- FAQs

Requirements:

- Chips must link to stable page anchors.
- The chip row must remain easily accessible while scrolling.
- On narrow screens, the chips may scroll horizontally.
- The active section should be visually identifiable where practical.
- Anchor positioning must account for the sticky navigation height.
- Keyboard navigation and visible focus states must work.
- Reduced-motion preferences must be respected.
- iPhone safe areas and small-screen spacing must be handled.
- The RSVP chip should remain particularly easy to locate.
- Navigation must not obscure section headings.
- The chip navigation should act as the primary section navigation and should not create unnecessary duplication with the existing header.

The final behaviour should remain visually aligned with the source website.

## 9. Visual Design Requirements

To Have and To Host should remain recognisably identical to the source design.

Preserve:

- Existing typography and font pairing.
- Existing colour palette and CSS variables.
- Light, dark, and system theme behaviour.
- Editorial spacing and composition.
- Existing animation character.
- Existing button and link styling.
- Existing mobile navigation sensibility.
- Existing border, card, section, and decorative treatments.
- Existing responsive design language.

Permitted additions include:

- Sticky chip navigation.
- A back-to-top control.
- Creator attribution in the footer.
- Small usability improvements required by the one-page layout.

The project must not undergo a generic template redesign.

## 10. Content Architecture

Editable wedding content should live in one clearly documented central configuration, preferably the existing `src/data/site.ts` or a similarly obvious typed content file.

The central configuration should cover:

- First names used in the hero.
- Optional full names for metadata or formal contexts.
- Wedding date.
- Venue name.
- Venue address.
- Local timezone.
- Key details.
- Navigation sections.
- Schedule items.
- Travel information.
- Google Maps destination.
- Apple Maps destination.
- Dress code.
- RSVP fields and recipient.
- RSVP deadline.
- FAQs.
- Footer text.
- Creator attribution.
- Search and social metadata.
- Theme defaults.
- Password-gate settings where appropriate.

Remaining hardcoded personal content must be extracted from page components.

Users should not have to search through multiple components to replace names, dates, addresses, or contact information.

## 11. Intelligent Content Handling

The AI-assisted setup process must interpret user responses thoughtfully rather than transferring every answer verbatim.

Examples:

- If a user provides both partners' full names, the hero should use first names unless the user explicitly requests full names.
- Full names may be retained only where appropriate, such as formal metadata, and only when required.
- A long answer should be distilled into concise website copy without changing its meaning.
- Repetition, filler, and conversational fragments should be removed.
- The assistant must not invent times, locations, transport advice, dress requirements, contact details, or relationship information.
- Pronouns, titles, cultural conventions, and relationship labels must not be assumed.
- Ambiguous or consequential details must be confirmed before publication.
- The user's regional spelling, date format, time format, and terminology should be respected.
- Sensitive information should not be introduced merely because it appeared in a long conversational answer.
- Raw onboarding responses should not be published directly without review.
- Each completed section should be summarised for confirmation before moving forward.

The goal is editorial judgement, not aggressive rewriting.

## 12. Voice and Tone

The repository must include a dedicated `VOICE_AND_TONE.md`.

The website voice should be:

- Celebratory.
- Lightweight.
- Upbeat.
- Intentional.
- Welcoming.
- Clear.
- Concise.
- Warm without becoming overly sentimental.

Copy should avoid:

- Generic AI-generated phrasing.
- Excessive adjectives.
- Long romantic preambles.
- Wedding cliches unless the couple specifically requests them.
- Overly whimsical headings.
- Forced humour.
- Corporate or transactional language.
- Repeating the same sentiment in multiple sections.
- Filling space simply because a layout has space available.

Example direction:

```text
Preferred:
Join us for dinner, drinks and dancing.

Avoid:
We are absolutely overjoyed and beyond excited to invite you to join
us for an unforgettable evening filled with endless love, laughter,
cherished memories and magical moments.
```

The voice guide should also tell an AI assistant to preserve the couple's natural language where it is already clear and distinctive.

## 13. Default RSVP Experience

The free template must not include Formspree or another hosted form service.

The default RSVP form should retain the useful fields from the current website, using placeholders instead of real guest information.

At minimum, it should support:

- Guest name.
- Attendance response.
- Number of guests or party details where enabled.
- Dietary requirements.
- Optional message.
- Contact email where required.
- RSVP deadline display.

### Submission behaviour

The default static-friendly implementation should prepare the completed response as an email and open it in the guest's preferred email application.

The interface must clearly explain that:

- The guest's email application will open.
- The guest must send the prepared email to complete the RSVP.
- The website does not independently store or transmit their response.

The interface must not show a misleading "RSVP received" confirmation when no hosted service has received it.

A fallback should allow the guest to copy the formatted response and display the configured recipient email address if no email application opens.

All email subject and body values must be safely encoded.

Premium or hosted integrations, including Formspree, may be mentioned briefly as upgrade paths but must not be implemented in the free repository.

## 14. Password Gate and Vercel Setup

The password gate must be enabled by default.

The setup process must require the user to create a wedding-site password, generate an appropriate hash, and configure the corresponding environment variable locally and in Vercel.

Recommended requirements:

- Commit an `.env.example` containing placeholder keys only.
- Keep `.env` excluded through `.gitignore`.
- Never commit the plaintext password.
- Document the exact environment variable required by the implementation.
- Provide a simple command or guided utility for generating the password hash.
- Explain how to add the value to Vercel.
- Explain that Vercel must be redeployed after changing relevant build-time variables.
- Provide a troubleshooting section for missing or invalid configuration.
- Avoid silently falling back to a shared default password in production.

The setup guide must explain plainly that a client-side static-site password gate provides casual privacy, not high-security access control. The deployed HTML and public password hash may still be inspectable by a determined person.

If stronger protection is required, the documentation may identify server-side authentication or Vercel deployment protection as separate advanced options.

Additional privacy defaults should include:

- `noindex, nofollow` metadata.
- A restrictive `robots.txt`.
- No analytics by default.
- No guest list in the browser bundle.
- No RSVP data stored in the repository.
- No plaintext secrets in source code.

## 15. Maps and Travel

The Travel section must retain first-class Google Maps and Apple Maps buttons.

Requirements:

- Both map destinations must be configurable.
- Links must use the configured venue rather than hardcoded source-site URLs.
- Links should open the relevant native application when the operating system supports it.
- Browser fallback behaviour must remain usable.
- The venue address should be visible as selectable text.
- Travel notes must support concise transport, parking, taxi, rideshare, and accommodation guidance.
- Setup must ask the user to verify both map destinations before launch.

## 16. Footer

The footer must preserve the useful character of the existing footer while removing personal source-site content.

It should include:

- Theme control.
- Local wedding-location time where configured.
- Optional configurable footer or social text.
- A back-to-top button.
- A tasteful design credit linking to `https://timdyson.com`.

Recommended credit:

```text
Website designed by timdyson.com
```

The attribution should be unobtrusive, accessible, and visually integrated rather than presented as an advertisement.

## 17. Setup and Onboarding Documentation

The repository must include:

- `README.md`
- `SETUP.md`
- `SETUP_PROGRESS.md`
- `VOICE_AND_TONE.md`
- `CUSTOMIZE.md`
- `.env.example`
- Custom licence file
- Optional privacy or deployment troubleshooting documentation where it improves clarity

### README.md

The README should explain:

- What To Have and To Host is.
- Who it is for.
- What is included.
- The personal-use and non-commercial limitations.
- The private-repository recommendation.
- The high-level setup path.
- How to begin AI-assisted setup.
- How to run and deploy the website.
- The limits of the password gate and email RSVP flow.

### SETUP.md

`SETUP.md` should work both as human-readable instructions and as operating instructions for an AI coding assistant.

It must tell the assistant to:

1. Read `PRD.md`, `SETUP.md`, `SETUP_PROGRESS.md`, and `VOICE_AND_TONE.md`.
2. Inspect the current repository before editing.
3. Determine whether setup is new or being resumed.
4. Continue from the first incomplete section.
5. Ask only the questions needed for the current section.
6. Update the site and preview the result section by section.
7. Record completed decisions and the next step in `SETUP_PROGRESS.md`.
8. Avoid asking the user to repeat information already recorded.
9. Confirm ambiguous or sensitive details.
10. Complete a final privacy and launch review.

### Progressive setup stages

The recommended setup flow is:

1. Repository privacy and local setup.
2. Couple names and hero introduction.
3. Date, venue, location, and key details.
4. Schedule.
5. Travel and map links.
6. Dress code.
7. RSVP details and recipient email.
8. Frequently asked questions.
9. Images and visual checks.
10. Password and Vercel environment setup.
11. Metadata, footer, and attribution.
12. Privacy scrub, testing, and deployment.

The user must be able to stop after any stage and resume later.

### SETUP_PROGRESS.md

This file acts as persistent setup memory.

It should record:

- Current setup stage.
- Completed stages.
- Confirmed decisions.
- Assumptions awaiting confirmation.
- Missing assets or information.
- Files changed during each stage.
- The exact next question or action.
- Final launch checklist status.

It should contain concise structured summaries, not complete transcripts of private conversations.

The public template must contain only a blank progress scaffold.

## 18. Images and Personal Data

All original photographs and identifying media must be removed from the public template.

Replacement assets should be either:

- Clearly licensed generic placeholders.
- Purpose-built abstract placeholders.
- Simple documented empty states that prompt the user to add images.

The setup process must cover:

- Recommended image dimensions.
- Mobile cropping.
- Compression.
- Meaningful alt text.
- File naming.
- Removal of embedded EXIF and location metadata.
- Social sharing image configuration.

The final release scrub must inspect:

- Source files.
- Public assets.
- Image metadata.
- Alt text.
- Page titles.
- Open Graph metadata.
- Map URLs.
- Email addresses.
- Git-tracked environment files.
- Documentation examples.
- Package metadata.
- Licence ownership.
- Comments containing original names or details.

## 19. Licensing

The existing MIT licence must be replaced.

The custom licence should permit:

- Personal wedding use.
- Modification for the user's own wedding.
- Private GitHub hosting.
- Deployment of the resulting personal website.
- Sharing the website with invited guests.

The licence should restrict:

- Commercial use.
- Use in paid client work without separate permission.
- Resale or paid redistribution.
- Repackaging the template as another product.
- Offering the template through a hosted website-building service.
- Removing required copyright or licence notices.
- Claiming authorship of the original template.

The default footer attribution to `timdyson.com` should remain in place. Whether attribution is a binding licence condition should be confirmed before public release.

Because a custom non-commercial licence is a legal document, final wording should be reviewed appropriately before publication.

## 20. Accessibility and Quality

The finished template must:

- Work with keyboard navigation.
- Use semantic headings and landmarks.
- Provide visible focus states.
- Maintain readable colour contrast in light and dark themes.
- Respect reduced-motion preferences.
- Avoid horizontal page overflow.
- Support modern mobile and desktop browsers.
- Use appropriately labelled form controls.
- Announce form validation errors clearly.
- Keep touch targets comfortable on mobile.
- Avoid layout shifts during font and image loading.
- Remain usable if optional JavaScript enhancements fail where practical.

## 21. Performance Requirements

To Have and To Host should remain fast on mobile connections.

Requirements include:

- Optimised images.
- Minimal client-side JavaScript.
- No analytics by default.
- No unnecessary third-party embeds.
- No RSVP iframe.
- Sensible font loading.
- No blocking dependency on an external form provider.
- Static generation where compatible with the selected privacy approach.

## 22. Implementation Phases

### Phase 1: Public-safe duplication

- Remove all original personal data and assets.
- Replace identifying values with placeholders.
- Update repository metadata.
- Replace the existing licence.
- Confirm no secrets are tracked.

### Phase 2: One-page consolidation

- Combine schedule, travel, dress code, RSVP, and FAQs.
- Replace route navigation with section anchors.
- Remove obsolete standalone pages.
- Verify the full responsive scroll experience.

### Phase 3: Sticky navigation

- Review the supplied portfolio implementation.
- Adapt the sticky chip pattern.
- Add active-section and mobile overflow behaviour.
- Test anchors, keyboard use, and reduced motion.

### Phase 4: Configuration hardening

- Centralise all user-editable content.
- Extract remaining hardcoded strings and links.
- Add safe defaults and validation.
- Make metadata, maps, footer, and RSVP settings configurable.

### Phase 5: Default RSVP

- Build the local form.
- Add validation.
- Create the email handoff.
- Add copy-response fallback.
- Test special characters and mobile email applications.

### Phase 6: Privacy and password setup

- Retain and improve the password gate.
- Add environment variable guidance.
- Add password-hash generation instructions.
- Add indexing protections.
- Document the gate's security limitations.

### Phase 7: Documentation and onboarding

- Rewrite `README.md`.
- Build progressive `SETUP.md`.
- Add `SETUP_PROGRESS.md`.
- Add `VOICE_AND_TONE.md`.
- Correct or replace stale customisation guidance.
- Add deployment and troubleshooting instructions.

### Phase 8: Release quality

- Run a full personal-data scrub.
- Test production deployment.
- Test all themes and viewports.
- Validate map and RSVP behaviour.
- Verify licence and attribution.
- Confirm a new user can complete setup from documentation alone.

## 23. Acceptance Criteria

The project is complete when:

- The website is one continuous scrolling page.
- Sticky chips provide reliable section navigation.
- The visual design remains recognisably aligned with the source site.
- Light, dark, and system themes work.
- No original personal information or identifying media remains.
- All wedding-specific content is configurable from a central location.
- Password configuration is required and documented.
- The site discourages search indexing by default.
- Google Maps and Apple Maps links use configured destinations.
- RSVP works without Formspree or another hosted provider.
- Guests are clearly told to send the prepared RSVP email.
- A copy-response fallback is available.
- The footer includes back-to-top and `timdyson.com` attribution.
- The repository includes progressive AI-assisted onboarding.
- Setup progress can be resumed without repeating completed sections.
- Generated copy follows `VOICE_AND_TONE.md`.
- Documentation no longer references obsolete pages, fonts, integrations, or licensing.
- Production build and responsive checks pass.
- The template repository is safe to make public.
- The personalised-repository workflow is private by default.

## 24. Build-Time Inputs Still Required

The implementation agent will need:

- Access to the duplicated `to-have-and-to-host` repository.
- This PRD saved as `PRD.md`.
- The portfolio repository containing the sticky chip reference.
- The final custom licence wording or authority to draft a review-ready version.
- Confirmation of whether footer attribution is a licence requirement or a strongly recommended default.

Unless instructed otherwise, the implementation should use the static email RSVP handoff, retain attribution by default, remove standalone content pages, and preserve the existing Astro visual system.
