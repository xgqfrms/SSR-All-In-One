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

// This is the Link API
// import Link from "next/link";

// const About = () => (
//   <section>
//     <div>
//       <Link href="/index">
//         <a>Home Page</a>
//       </Link>
//     </div>
//     <div>
//       <p>This is the about page</p>
//     </div>
//   </section>
// );

const About = () => (
  <section>
    <Layout>
      <p>This is the about page</p>
    </Layout>
  </section>
);

export default About;

