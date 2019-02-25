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

import Layout from "../components/layout";
import PostLink from "../components/post-link";

// This is the Link API
// import Link from "next/link";

// const Index = () => (
//     <section>
//         <div>
//             <Link href="/about">
//                 <a style={{fontSize: 20,}}>About Page</a>
//             </Link>
//             <Link href="/about">
//                 <button>Go to About Page</button>
//             </Link>
//         </div>
//         <div>
//             <p>Hello Next.js</p>
//         </div>
//     </section>
// );

// const Index = () => (
//     <section>
//         <Layout>
//             <p>Hello Next.js</p>
//         </Layout>
//     </section>
// );

const Index = () => (
    <section>
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello Next.js"/>
                <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
                <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
            </ul>
        </Layout>
    </section>
);



export default Index;
