---
title: Add Markdown-it Plugins in VitePress
date: 2024-07-07
description: How to add a Markdown-it plugin to your VitePress site to extend the functionality of the Markdown parser.
tags:
  - vitepress
  - markdown
---

You can extend the functionality of the Markdown parser in VitePress by adding Markdown-it plugins (VitePress uses Markdown-it under the hood). This allows you to add custom syntax, modify the output of the parser, or integrate with other tools.

To add a Markdown-it plugin to your VitePress site, follow these steps:

1. **Install the plugin**: Use `npm` or `yarn` to install the Markdown-it plugin you want to use. For example, to install the `@mdit/plugin-footnote` plugin, you can run:

```bash
npm install @mdit/plugin-footnote
```

or

```bash
yarn add @mdit/plugin-footnote
```

2. Import it in your `.vitepress/config.mts` file:

```ts
import { footnote } from "@mdit/plugin-footnote";
```

3. Add the plugin to the `markdown` option in your `.vitepress/config.mts` file:

```ts
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },
```

And that's it! The Markdown-it plugin is now added to your VitePress site, and you can start using its features in your Markdown content.
