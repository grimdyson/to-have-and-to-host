# Changelog

Notable changes to To Have and To Host are documented here. Versions follow [Semantic Versioning](https://semver.org/).

## [0.1.0] — 2026-08-31

Initial public release.

### Added

- Responsive, single-page Astro wedding website with central content configuration.
- Client-side password gate for casual privacy, including a development-only demo credential.
- Light, dark and system theme modes with persistent visitor preference.
- Sticky section navigation for details, schedule, travel, dress code, RSVP and FAQs.
- Email-based RSVP preparation with a copyable-response fallback and no guest-data storage.
- Google Maps, Apple Maps and configurable Pinterest outfit-inspiration links.
- Progressive setup, customisation, voice-and-tone and image-credit documentation.
- Hero-image fallback for Open Graph and Twitter sharing metadata.

### Changed

- Standardised field and button corner radii through shared design tokens.
- Added responsive password-gate footer behaviour and conditional back-to-top controls.
- Updated demo photography and removed the monochrome image treatment by default.
- Adopted the PolyForm Noncommercial License 1.0.0.

### Security and privacy

- Added restrictive indexing directives and deployment security headers.
- Kept passwords, environment files and RSVP responses out of the repository and application storage.
- Updated Astro and the locked dependency tree to versions with no known audit vulnerabilities at release time.

### Requirements and limitations

- Requires Node.js 22.19 or newer.
- The password gate discourages casual access but is not strong authentication.
- RSVP delivery depends on the guest sending the prepared email.
- Demo wedding details and images should be replaced during setup.

[0.1.0]: https://github.com/grimdyson/to-have-and-to-host/releases/tag/v0.1.0
