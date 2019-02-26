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
        {/* scoped css & css in js */}
        <style jsx>
            {`
                h1, a {
                    font-family: "Arial";
                }
                ul {
                    padding: 0;
                }
                li {
                    list-style: none;
                    margin: 5px 0;
                }
                a {
                    text-decoration: none;
                    cursor: pointer;
                    color: #0076ff;
                }
                a:hover {
                    opacity: 0.7;
                    color: #3377ff;
                }
            `}
        </style>
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
