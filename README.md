# Astro Starter Kit: Headless WordPress

**UPDATE** This project is using Headless WordPress to query data.

**IMPORTANT** In order to have your project work you'll need to replace the api url in: `src/lib/api.ts` 

### WordPress Setup Instructions
- Download "Local by Flywheel" or any local WordPress environment.
- Install "WP GraphQL" plugin so you have api information available.
- Update the url listed above with your url, **remembering to keep** the "graphql" ending.

Features:

- ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- ✅ Full Markdown support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public
│   ├── assets
│   │   └── blog
│   │       └── introducing-astro.jpg
│   ├── favicon.ico
│   ├── social.jpg
│   └── social.png
├── src
│   ├── components
│   │   ├── Author.astro
│   │   ├── BaseHead.astro
│   │   ├── BlogPostPreview.astro
│   │   ├── FollowMe.astro
│   │   ├── Header.astro
│   │   └── LikeButton.tsx
│   ├── layouts
│   │   └── BlogPost.astro
│   ├── pages
│   │   ├── index.astro
│   │   └── posts
│   │       ├── interactive-content.md
│   │       └── static-content.md
│   └── styles
│       └── blog.css
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
