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

const Index = () => (
    <section>
        <div>
            <Link href="/about" style={{fontSize: 20,}}>
                <a>About Page</a>
            </Link>
            <Link href="/about">
                <a style={{ fontSize: 20 }}>About Page</a>
            </Link>
            <Link href="/about" style={{fontSize: 20,}}>
                <button>Go to About Page</button>
            </Link>
        </div>
        <div>
            <p>Hello Next.js</p>
        </div>
    </section>
);

export default Index;
