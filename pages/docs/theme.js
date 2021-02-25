import React, {Fragment} from "react";
import Head from "next/head";

const Theme = () => {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/code.css" />
            </Head>
            <center>
            We have added theme's.Currently there are only 3 themes. These are:

            <li>Dark Theme</li>
            <li>Light Theme</li>
            <li>Aqua Theme</li>

            Usage of theme is as simple as:
            <div className="code">
                &lt;element theme="dark"&gt;
                &lt;/element&gt;
            </div>
            <br/>
            Here is the code for the other themes:
            <br/>
            <div className="code">
                &lt;!-- Code for Aqua Theme --&gt;
                <br/>
                &lt;element theme="aqua"&gt;
                &lt;/element&gt;
            </div>
            <br/>
            <div className="code">
                &lt;!-- Code for light theme --&gt;
                <br/>
                &lt;element theme="light"&gt;
                &lt;/element&gt;
            </div>
            So the code was as simple as that.
            </center>
        </Fragment>
    )
}

export default Theme;