---
title: "[Part 1] Build your own personal blog using Astro"
description: "Part 1 of the Build a blog series. We will look why I chose Astro, how you can setup Astro on your machine & how to get started with Astro."
folder: "blog"
# draft: true
date: 2023-07-02
---

## The Problem

For a long time, I had an idea of having a personal blog. While platforms like [Medium](https://medium.com), [dev.to](https://dev.to) & [Hashnode](https://hashnode.com) look promising, but as a developer we tend to have control over things that we own. Also, I wanted my personal blog to be statically generated (prerender all pages at build time). So, I can deploy it on any CDN without any need of server. So, I started to look for tools to build my own personal blog. 

[Gatsby](https://www.gatsbyjs.com/) was the first option I looked into. Gatsby is great if you need interactivity of [React](https://react.dev/) & performance. The only issue is, it is based on React. I mostly work with [Vue](https://vuejs.org/) & it is my go to frontend framework now a days. So, learning Gatsby will require learning more about React & ecosystem.

[Jekyll](https://jekyllrb.com/) was the second option I looked into. Jekyll is the oldest static site generator among the alternatives that I explored. It has good resources & great community support. Even [Github Pages](https://pages.github.com/) support Jekyll out of the box. The only problem it is based on ruby & I have no idea of ruby. Learning ruby will have an additional learning curve.

After Jekyll, I looked at [Hugo](https://gohugo.io/). Hugo is very lightweight & fast. Hugo is built with [Go](https://go.dev/) which I'm already familiar with. Hugo seemed to be perfect for my needs. But, my only concern was if in future I wanted to introduce more interactivity in my blog, I wonder if Hugo was flexible enough to let me do it.

## Why Astro?

First let me start by explaining what Astro is. [Astro](https://astro.build/) is all-in-one framework for building rich content focused websites. You can think Astro a kind of toolkit to which you can provide your content & it will take care of building static pages from the content, routing & much more. The [Astro docs](https://docs.astro.build/) are very easy to get started. I was able to build my first page in matter of minutes.

Astro suited all my needs. Astro is framework agnostic that means I can bring in any frontend framework that I want. As I said earlier, I mostly work with Vue now a days & Astro has official integrations with Vue. I can easily use Vue inside any Astro project. Astro follows Island architecture which in simple terms means all content on page must be rendered or built on server and only the interactive javascript code show run on client's browser. So websites are both fast & interactive at the same time.

The blog you are currently viewing is built with Astro. I used [Tailwind CSS](https://tailwindcss.com/) for styling & Vue 3 to built interactive components like dark mode toggle & on this page components. The entire blog content is written in Markdown.

## Overview

The [Build a blog](/folders/blog) series will contain blog posts on how I built this blog using Astro, Tailwind CSS, Vue 3 & Markdown and how you can create your own. 

In part 1 we will look at how we can get started with Astro & some basics of Astro.

## Setup Astro on your machine

In order to get started with Astro, you will require [NodeJS](https://nodejs.org/en) `v16.12.0` or higher.

If you want to check your node version, run the below command in your terminal.

```
node -v
```

Check if the version is higher than or equal to `v16.12.0`

NodeJS comes with `npm` (node package manager) which we can use to create a new Astro project

```
npm create astro@latest
```

> If your using other package manager like yarn or pnpm, you can use them to create a new Astro project. More info [here](https://docs.astro.build/en/install/auto/#1-run-the-setup-wizard).

After running above command, you will get some interactive prompts on your command line. Just follow the prompts & you will be ready to go.

```
   dir   Where should we create your new project?
         ./build-a-blog

  tmpl   How would you like to start your new project?
         Empty
      ✔  Template copied

  deps   Install dependencies?
         Yes
 ██████  Dependencies installing with npm...
      ✔  Dependencies installed

    ts   Do you plan to write TypeScript?
         No
      ◼  No worries! TypeScript is supported in Astro by default,
         but you are free to continue writing JavaScript instead.

   git   Initialize a new git repository?
         No
      ◼  Sounds good! You can always run git init manually.
```

Just `cd` into your directory and run the below command to run your newly created Astro project.

```
npm run dev
```

By default, the application will run on port `3000` at [http://localhost:3000/](http://localhost:3000/). In case if the port is occupied or busy, the application may run on a different port and you will see the corresponding port on the terminal.

Open [http://localhost:3000/](http://localhost:3000/) on your browser and you will see the below image on your screen.

![Astro application running](/images/blog/post-1-blog/initial.png)

## Project Layout

By default, a simple Astro project will have a structure like below.

```
.
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── env.d.ts
│   └── pages
│       └── index.astro
└── tsconfig.json
```

Details of each folder are described below

- `astro.config.mjs` - Astro's configuration file
- `package.json` - For tracking dependencies used in project
- `public/favicon.svg` - Default favicon provided by Astro
- `src/pages/` - Contains all pages for applications & routing

## Pages

The `src/pages/` subdirectory is responsible for all pages of your application. Astro has file based routing based on the pages subdirectory.

For example create a `about.html` in `src/pages/` subdirectory, write below html & go to [http://localhost:3000/about](http://localhost:3000/about)

```html
<!-- src/pages/about.html -->
<h1>About Page</h1>
```

You will see the below image

![About Page](/images/blog/post-1-blog/about.png)

Along with `.html` files. Astro also supports other file formats like

- `.astro` - Astro files which have special Astro syntax which we will talk about in later series.
- `.md` - Markdown files

## Markdown files

Astro can read your markdown files in `src/pages/` subdirectory and automatically route them accordingly. It will also convert your markdown content to appropiate html code.

For example, create a `markdown.md` files in `src/pages/` and copy the below markdown content and paste into the created file. 

```md
# Markdown sample 

This is **Markdown** content

[Example Link](https://example.com/)
```

Go to [http://localhost:3000/markdown](http://localhost:3000/markdown), as you can see our markdown content was converted to html and properly routed without we having to write code for parsing and converting markdown files.

![Markdown Astro](/images/blog/post-1-blog/markdown.png)

As you can see how easy it is build websites using Astro. But, we have just scratched the surface. In upcoming blog post we will learn about Astro files syntax & layouts. You can also subscribe to the [RSS](/rss.xml) feed, so you can get latest updates from the blog.

You can find the source code for this part [here](https://github.com/ppalone/build-a-blog/tree/part-1).

## References

- [Astro getting started guide](https://docs.astro.build/en/getting-started/)
- [Astro Pages](https://docs.astro.build/en/core-concepts/astro-pages/)