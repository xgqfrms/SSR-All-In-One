"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @created 2018.02.21
 * @modified 2018.02.21
 *
 * @description
 * @augments
 * @example
 *
 */

import {
    withRouter,
} from "next/router";

import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

import Layout from "../components/layout";
import Header from "../components/header";


import { log } from "../utils";

// const Post = withRouter((props) => (
//     <Layout>
//         <Header />
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </Layout>
// ));

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </div>
// ));

// const Content = withRouter((props) => (
//     <div>
//         <h1>{props.show.name}</h1>
//         <p>{props.show.summary.replace(/<[\/]?p>/g, '')}</p>
//         <img src={props.show.image.medium}/>
//         <p>This is the blog post content.</p>
//     </div>
// ));

const Content = withRouter((props) => (
    <div>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[\/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
        <p>This is the blog post content.</p>
        <hr />
        <div className="markdown">
            <Markdown source={`
1. This is our blog post.

* Yes. We can have a [link](/link).

* Yes. We can have a [link](https://github.com/rexxars/react-markdown).

> And we can have a title as well.

# This is a title

And here's the content.
            `}/>
        </div>
        <style jsx global>
            {`
                .markdown {
                    font-family: 'Arial';
                }
                .markdown a {
                    text-decoration: none;
                    color: blue;
                }
                .markdown a:hover {
                    opacity: 0.6;
                }
                .markdown h3 {
                    margin: 0;
                    padding: 0;
                    text-transform: uppercase;
                }
            `}
        </style>
    </div>
));

const Post = (props) => (
    <Layout>
        <Header />
        <Content show={props.show}/>
    </Layout>
);

// Post.getInitialProps = async function (context) {
//     let {
//         id,
//     } = context.query;
//     if(id === undefined) {
//         id = 900;
//     }
//     // http://api.tvmaze.com/shows/900
//     console.log(`Fetched show id = ${id}`);
//     const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();
//     console.log(`Fetched show: ${show.name}`);
//     console.log(`Fetched show: `, JSON.stringify(show, null, 4));
//     return {
//         show,
//     };
// };

// Post.getInitialProps = async function (context) {
//   let {
//     id,
//   } = context.query;
//   // console.log(`Fetched show id = ${id}`);
//   // Promise
//   const show = await
//   fetch(`http://api.tvmaze.com/shows/${id}`)
//   .then(res => res.json())
//   .catch(err => console.log(`fetch error:`, err));
//   // console.log(`Fetched show: `, JSON.stringify(show, null, 4));
//   return {
//     show,
//   };
// };

export default Post;
