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


// This is the Link API
import Link from "next/link";

const About = () => (
    <section>
        <div>
            <Link href="/index">
                <a>Home Page</a>
            </Link>
        </div>
        <div>
            <p>This is the about page</p>
        </div>
    </section>
);

export default About;

