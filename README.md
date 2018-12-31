# Orbital Static Site

## Getting Started

This project can be deployed with [Now V1](https://zeit.co/docs/v1/) or [Now V2](https://zeit.co/docs/v2/getting-started/introduction-to-now). The Now hosting configuration is set in `now.json`.

I recommend using V2 as this is preferred option and uses serverless deployment.

### Development

`yarn dev` starts the local development server on `localhost:3000`

### Deployment

`now` will upload and built the application. You can then alias the provided deployment URL.

## About

[Gatsby](https://next.gatsbyjs.org/) is a static site generator while [Next.js](https://nextjs.org/) is for building [React](https://reactjs.org/) universal apps, apps with server-side rendering included.

Gatsby is a static site generator for React. It adheres to the [JAMstack](https://jamstack.org/) and implements the [PRPL](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) (Push, Render, Pre-Cache, Lazy-Load) pattern making generated site [fast](https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/). It uses GraphQL to integrate data at build-time (not live data). It also has many plug-ins. 

I find Gatsby too opinionated (prescriptive) with many new concepts to learn to do things I already know how to do in React.

The benefit of using Gatsby is that it generates a high performance static site.

Next is static and server-side application framework for React. It is more flexible and easier to use existing React patterns and libraries. You have to do more things yourself, like specifying resources to pre-fetch and lazy-load. 

For building static and combined static and single-page applications (SPA) Next.js will be easier and more flexible.

## Goals   

* Build a static site with content written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* Content stored and readable in GitHub repo.
* 100% static output with no server.

## Ideas

* An interesting option is offered by Quiver markdown editor which can export content as JSON. However we are then tied to a specific editor.
* Use GraphQL and resolver to return Markdown content, no longer 100% static.

## Proof of Concept

* Use my preferred React libraries with Next.js? The most import for 100% static output are preferred CSS-in-JS libraries.
* Markdown authoring experience and ease of integration for rendering and navigation.
* Linking static assets/resources in content (images, files).
* Start with a single page, implement visual design, layout, core components (Header, Navigation).

## CSS-in-JS

[Using styled-components with Next.js](https://jsramblings.com/2017/11/27/using-styled-components-with-next-js.html) shows how to configure babel correctly so you do not get checksum mismatches due to different class generation on the client and on the server. 

[Theme Provider](https://github.com/zeit/next.js/issues/4170) this works in [Next.js 6](https://zeit.co/blog/next6).

[styled-system](https://github.com/jxnblk/styled-system) and 
[system-components](https://github.com/jxnblk/styled-system/tree/master/system-components) work fine.

## Resources

* [Next Plugins](https://github.com/zeit/next-plugins)
* [With styled-components](https://github.com/zeit/next.js/tree/canary/examples/with-styled-components)
* [With unstated](https://github.com/zeit/next.js/tree/canary/examples/with-unstated)
* [MDX](https://github.com/mdx-js/mdx) is a fully-featured MDX parser, loader and JSX renderer.
* [next-blog](https://github.com/tscanlin/next-blog) ideas for rendering markdown/navigation/slugs etc.
* [Taking Gatsby for a spin](https://dev.to/ardennl/taking-gatsby-for-a-spin-4je)
* [Gatsby + Apollo + GraphCool + Netlify](https://medium.com/@dwalsh.sdlr/gatsby-apollo-graphcool-netlify-the-webs-promised-land-6dd510efbd72) "Now the pain begins. To restate my goals, I want Gatsby to generate the pages and Apollo to handle my data. But Gatsby seems to want my data too."

## Markdown Editors

* [Best Markdown editors for Mac](https://www.sitepoint.com/the-best-markdown-editors-for-mac/) gives a good review of a number of editors.
* [Typora](https://typora.io/) I like this one the most, simple, built in JS with Electron.
* [Quiver](http://happenapps.com/) "Programmer's Notebook" markdown editor looks nice, of course you can use any text editor. Quiver can export various formats including [JSON](https://github.com/HappenApps/Quiver/wiki/Quiver-Data-Format) and Markdown. Only downside is it looks like Quiver is built and maintained by a single developer.
* [LightPaper](https://getlightpaper.com/) includes Jekyll rendering so may be well suited to my requirement.
* [Bear](http://www.bear-writer.com/) focused on note taking across macOs and iOS. Has its own cloud API.
