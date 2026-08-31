# GitHub Pages Demo

This repository includes `.github/workflows/deploy-pages.yml`, which checks, builds and deploys the latest `main` branch to GitHub Pages. Feature branches and pull requests do not deploy.

The default project URL is:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

The workflow derives that URL and base path from the repository automatically. It uses the official Astro and GitHub Pages actions and deploys only the generated `dist` output.

## Password configuration

The password gate is client-side casual privacy. Its SHA-256 hash is included in the generated website, so it is not a secret in the security sense. Store the hash as a GitHub Actions **repository variable** to keep configuration separate from source without implying that the value remains private.

1. Generate a hash locally with `npm run password:hash`.
2. In GitHub, open **Settings → Secrets and variables → Actions → Variables**.
3. Add `PUBLIC_SITE_PASSWORD_HASH` with the generated 64-character lowercase hash.
4. Optionally add `PUBLIC_SITE_PASSWORD_HINT` with text visitors should see, such as `Demo password: test`.
5. Never store the plaintext password in GitHub or the workflow file.

For this project's public demo, the intended password is `test`. Personalised wedding sites should use a different password and normally omit `PUBLIC_SITE_PASSWORD_HINT`.

Changing either variable requires a new deployment. Run the workflow manually from the **Actions** tab or push a commit to `main`.

## Enable GitHub Pages

In **Settings → Pages**, set **Source** to **GitHub Actions**. The workflow creates and deploys through the `github-pages` environment.

The published Pages site is publicly downloadable. The visible gate does not protect generated HTML, scripts, images or the public password hash from inspection. Use server-side access control when strong privacy is required.

## Custom domain

Configure and verify the custom domain in **Settings → Pages** before changing DNS. Then add these Actions repository variables:

```text
SITE_URL=https://www.example.com
BASE_PATH=/
```

Use the final HTTPS origin without a page path. Keep GitHub Pages HTTPS enforcement enabled.

If the site is later moved back to its standard `github.io` project URL, delete `SITE_URL` and `BASE_PATH` so the workflow resumes deriving them from the repository.

## Hosting limitations

GitHub Pages is static hosting. It does not provide server-side password authentication, and it does not apply the response headers configured in `vercel.json`. The RSVP flow remains email-based and stores no guest responses.
