<p align="center">
  <a href="https://syntax-platform.github.io/syntax-dev/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/syntax-platform/syntax/main/public/assets/syntax-pixel-banner-dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/syntax-platform/syntax/main/public/assets/syntax-pixel-banner-light.png" />
      <img alt="Syntax Dev: Nightly & Pre-Release Channel" src="https://raw.githubusercontent.com/syntax-platform/syntax/main/public/assets/syntax-pixel-banner-dark.png" width="100%" />
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://syntax-platform.github.io/syntax-dev/"><img src="https://img.shields.io/badge/Launch-Syntax_Dev-22c55e?style=for-the-badge&logo=githubactions&logoColor=white" alt="Open Syntax Dev" /></a>
  <a href="https://syntax-platform.github.io/syntax/"><img src="https://img.shields.io/badge/Stable-Syntax_Live-456dff?style=for-the-badge&logo=vercel&logoColor=white" alt="Open Syntax Stable" /></a>
  <a href="https://github.com/syntax-platform/syntax"><img src="https://img.shields.io/badge/Source-syntax--platform%2Fsyntax-111827?style=for-the-badge&logo=github&logoColor=white" alt="Source Repository" /></a>
</p>

# Syntax Dev (Nightly & Pre-Release Channel)

This repository is the dedicated static hosting target for **Syntax Dev** at **[syntax-platform.github.io/syntax-dev](https://syntax-platform.github.io/syntax-dev/)**.

- **Source code, issues, pull requests, and release notes** all live in **[`syntax-platform/syntax`](https://github.com/syntax-platform/syntax)**.
- Every nightly pre-release in `syntax-platform/syntax` automatically builds the dev bundle (`VITE_CHANNEL=dev`, `VITE_BASE=/syntax-dev/`) and deploys it to this repo's `gh-pages` branch.
- Do not open pull requests here; contribute directly to [`syntax-platform/syntax`](https://github.com/syntax-platform/syntax).