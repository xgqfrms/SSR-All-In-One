"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 *
 * @created 2018.02.26
 * @modified 2018.02.26
 *
 * @description
 * @augments
 * @example
 *
 */

// This is the Link API
import Link from "next/link";

// import fetch from "isomorphic-unfetch";

const PostLinks = (props) => (
    <section>
        <h1>Batman TV Shows</h1>
        <ul>
            {
                props.shows.map(({show}) => (
                    <li key={show.id}>
                        <Link
                            as={`/post/${show.id}`}
                            href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </section>
);

// PostLinks.getInitialProps = async function() {
//     const res = await fetch(`http://api.tvmaze.com/search/shows?q=batman`);
//     const data = await res.json();
//     console.log(`Show data fetched. Count: ${data.length}`);
//     return {
//         shows: data,
//     };
// };


export default PostLinks;
