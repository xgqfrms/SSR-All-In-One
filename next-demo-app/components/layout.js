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

// import Header from "./header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #dddddd",
};


const Layout = (props) => (
    <div style={layoutStyle}>
        {/* <Header /> */}
        {props.children}
    </div>
);

export default Layout;
