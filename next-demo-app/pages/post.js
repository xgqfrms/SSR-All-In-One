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

import Layout from "../components/layout";
import Header from "../components/header";

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

const Content = withRouter((props) => (
    <div>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[\/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
        <p>This is the blog post content.</p>
    </div>
));

const Post = (props) => (
    <Layout>
        <Header />
        <Content show={props.show}/>
    </Layout>
);

Post.getInitialProps = async function (context) {
    let {
        id,
    } = context.query;
    // if(id === undefined) {
    //     id = 900;
    // }
    console.log(`Fetched show id = ${id}`);
    const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    // Promise ???
    // const show = await fetch(`http://api.tvmaze.com/shows/${id}`).then(res => res.json()).catch(err => console.log(`fetch error:`, err));
    // console.log(`Fetched show: ${show.name}`);
    // http://api.tvmaze.com/shows/900
    console.log(`Fetched show: `, JSON.stringify(show, null, 4));
    return {
        show,
    };
};

export default Post;
