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

// This is the Link API
import Link from "next/link";

const PostLink = (props) => (
    <li>
        <Link
            as={`/post/${props.id}`}
            href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default PostLink;
