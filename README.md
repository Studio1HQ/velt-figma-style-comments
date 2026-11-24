<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/velt-figma-style-comments.webp" alt="Figma-Style Comments with Velt: A Figma-style comment toolbar on a React landing page" width="100%" />

<br />
<br />

# Figma-Style Comments with Velt

### A Figma-style comment toolbar on a React landing page

A React landing page with a floating Velt toolbar for Figma-style commenting. It has a comment tool, presence avatars and a comments sidebar in dark mode.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Velt](https://img.shields.io/badge/Built_with_Velt-141414?style=for-the-badge)](https://velt.dev)
[![Live demo](https://img.shields.io/badge/Live_demo-1c1917?style=for-the-badge&logo=vercel&logoColor=white)](https://velt-figma-style-comments.vercel.app)

[Velt docs](https://docs.velt.dev) &nbsp;·&nbsp; [Velt](https://velt.dev) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

This is a small React (Create React App) landing page, "AI Vision", used to show a Figma-style commenting toolbar built with [Velt](https://velt.dev). A floating toolbar at the bottom of the page lets visitors drop pinned comments on any element, see who is online and open a comments sidebar.

It is a minimal reference for adding Velt comments to an existing page: a provider, a comments layer, a toolbar and a user and document setup.

## Features

- **Pinned comments**: `VeltCommentTool` in a floating toolbar starts a comment on any page element.
- **Comments layer and sidebar**: `VeltComments` and `VeltCommentsSidebar`, both in dark mode, with a `VeltSidebarButton` to toggle the sidebar.
- **Presence**: `VeltPresence` shows active users.
- **User and document setup**: `YourAuthComponent` identifies the user and `YourDocument` sets the document with `useSetDocument`.
- **Landing page content**: Navbar, hero, features, pricing, testimonials and footer sections styled with plain CSS.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [React](https://react.dev) with [Create React App](https://create-react-app.dev) |
| Collaboration | [Velt](https://velt.dev) (`@veltdev/react`) |
| Styling | CSS |

## Getting started

### Prerequisites

- Node.js and npm
- A Velt API key from the [Velt console](https://console.velt.dev)

### Installation

```bash
git clone https://github.com/Studio1HQ/velt-figma-style-comments.git
cd velt-figma-style-comments
npm install
```

### Environment variables

Create a `.env` file in the project root.

| Variable | Description |
| --- | --- |
| `REACT_APP_VELT_API_KEY` | Your Velt API key, read in `src/index.js` and passed to `VeltProvider`. |

### Run

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). Other scripts: `npm run build`, `npm test`.

## How it works

```text
src/index.js                       VeltProvider, VeltComments and VeltCommentsSidebar
src/App.js(x)                      landing page and the VeltToolbar component
src/components/VeltToolbar.jsx     renders YourDocument and YourAuthComponent
src/components/YourAuthComponent.js identifies the Velt user
src/components/YourDocument.js     useSetDocument plus the toolbar buttons
```

This version splits the landing page into `Hero`, `Features`, `Pricing`, `Testimonials` and `Footer` components under `src/components/`. The user and document IDs in `YourAuthComponent.js` and `YourDocument.js` are placeholders (`unique-document-id`); replace them with your own.

## Resources

- [Live demo](https://velt-figma-style-comments.vercel.app): the deployed page.
- [Velt documentation](https://docs.velt.dev): SDK guides for comments and presence.
- [Velt](https://velt.dev): product site.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Velt](https://velt.dev).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
