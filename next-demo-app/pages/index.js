"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @description
 * @augments
 * @example
 *
 */

import Layout from "../components/layout";

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

const Index = () => (
    <section>
        <Layout>
            <p>Hello Next.js</p>
        </Layout>
    </section>
);

export default Index;
