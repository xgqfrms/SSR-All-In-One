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

import Layout from "../components/layout";
import Header from "../components/header";


const Post = withRouter((props) => (
    <Layout>
        <Header />
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </Layout>
));

export default Post;
