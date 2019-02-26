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

https://github.com/zeit/next.js#css-in-js

https://nextjs.org/learn/basics/styling-components

https://github.com/zeit/styled-jsx

https://github.com/arunoda/learnnextjs-demo/tree/with-styled-jsx

https://github.com/zeit/styled-jsx#one-off-global-selectors



## markdown

```sh

$ npm i -S react-markdown

```
https://github.com/rexxars/react-markdown




## deploy


https://zeit.co/now


https://zeit.co/github-setup/learn



```sh
# build Next.js app for production
$ npm run build

# That will start our app in port 3000
$ npm run start

```

### Run two instances

```json
{
    "start": "next start -p $PORT",
}
// Windows

{
    "start": "next start -p %PORT%",
}
```

> Then try to run the following commands in its own terminal:

```sh
# build Next.js app for production
$ npm run build

# That will start our app in port 8000
$ PORT=8000 npm start

# That will start our app in port 9000
$ PORT=9000 npm start


# Windows
# https://www.npmjs.com/package/cross-env
$ cross-env PORT=9000 npm start

```


# static html export

https://nextjs.org/learn/excel/static-html-export


# now cli

https://zeit.co/download#now-cli

```sh

$ npm install -g now

```

# static blog

https://github.com/arunoda/learnnextjs-demo/tree/static-blog-final

https://github.com/arunoda/learnnextjs-demo/blob/static-blog-final/next.config.js

https://nextjs.org/learn/excel/static-html-export/export-the-index-page


## test server

```sh
#  static web server
$ npm i -g serve


$ cd out
$ serve -p 8080

```
https://ssr.xgqfrms.xyz/next-demo-app/out/index.html

https://github.com/zeit/next.js#custom-server-and-routing
