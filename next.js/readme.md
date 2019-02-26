# SSR for React

> Next.js

https://nextjs.org/learn/basics/getting-started/setup

## Install

```sh
$ mkdir next-demo-app && cd next-demo-app

$ npm init -y

# version: (1.0.0) 1.1.1
# description: SRR for React
# git repository: https://github.com/xgqfrms/ssr-all-in-one
# keywords: SSR, React, Node.js, App, PWA, SPA, Next.js,
# author: xgqfrms
# license: (ISC) MIT

$ npm install --save react react-dom next
# OR
$ npm i -S react react-dom next
# OR
$ yarn add react react-dom next

$ mkdir pages

```
## Scripts

```json

{
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    }
}

```

## DevOps

```sh
# open http://localhost:3000
$ npm run dev

# auto open http://localhost:3000
$ start http://localhost:3000 && npm run dev

```

## Routing & Link

https://github.com/zeit/next.js#routing


## Shared Components

https://github.com/arunoda/learnnextjs-demo/tree/using-shared-components

```js

import Layout from "../components/layout";

<Layout></Layout>

```

## Dynamic Pages

https://github.com/arunoda/learnnextjs-demo/tree/using-shared-components

https://nextjs.org/learn/basics/create-dynamic-pages/with-router

## custom server API


```sh

$ npm install --save express
# OR
$ npm i -S express

```

https://github.com/zeit/next.js#custom-server-and-routing

## getInitialProps

> async function


https://github.com/arunoda/learnnextjs-demo/tree/data-fetching
https://nextjs.org/learn/basics/fetching-data-for-pages/fetching-batman-shows


```sh
$ npm i -S isomorphic-unfetch

```

https://github.com/zeit/next.js#fetching-data-and-component-lifecycle


## CSS in JS

https://nextjs.org/learn/basics/styling-components

https://github.com/zeit/styled-jsx
