# Public Template Release Checklist

This checklist is for the maintainer publishing the original To Have and To Host template. Couples personalising a private copy should follow `SETUP.md` instead.

## Use clean Git history

If the template was derived from a private wedding repository, deleting personal files from the latest commit is not enough. Earlier commits and Git objects may still contain names, addresses, photographs, RSVP endpoints, metadata, and other identifying information.

Before making the template repository public, publish the sanitised working tree through a new repository with fresh history, or use an appropriately reviewed history-rewriting process. Verify the resulting remote from a fresh clone. Do not rely on a normal file deletion to remove historical data.

## Release checks

- Confirm the repository contains only fictional placeholders and public documentation.
- Search the working tree and the complete Git history for source-wedding names, locations, email addresses, URLs and identifiers.
- Inspect all current and historical public assets.
- Confirm no secret or environment file is tracked.
- Confirm package metadata and the repository description are generic.
- Confirm `LICENSE` has received appropriate legal review.
- Confirm whether visible footer attribution will remain a recommended default or become a licence condition.
- Run `npm run check` and `npm run build`.
- Verify the production site at phone, tablet and desktop widths.
- Test the password gate, maps, RSVP email handoff and copy fallback.
- Verify `noindex` metadata, `robots.txt`, and the deployed `X-Robots-Tag` header.
- Make the repository public only after a fresh-clone privacy review passes.
