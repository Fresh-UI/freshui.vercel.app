import React, {Fragment} from "react";
import Link from 'next/link';
import Head from 'next/head';

const gettingstarted = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    Getting Started || Fresh UI
                </title>
                <link rel="stylesheet" href="/code.css" />
                <link rel="stylesheet" href="/sidebar.css" />
            </Head>
            <nav className="navbar">
                <ul className="navbar">
                    <li className="navbarli">
                        <Link href="/">
                            <a className="navbara">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="navbarli">
                        <Link href="/docs">
                            <a className="navbara">Docs</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar">
                <a className="active" href="#">Getting Started</a>
                <Link href="/docs/button">
                <a>Buttons</a>
                </Link>
                <a>Cards</a>
            </div>
            <br/>
            <br/>
            <center>
            <div className="content">
                Assuming you already have linked the css to your project.Copy and paste the code given below to get started with basic template.
                <br/>
                <div className="code">
                    &lt;html lang="en"&gt;
                    <br/>
                    &lt;head&gt;
                    <br/>
                    &lt;meta name="viewport" content="width=device-width;initial-scale=1.0"&gt;
                    <br/>
                    &lt;title&gt;Demo&lt;/title&gt;
                    <br/>
                    &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@freshui/freshui/css/fresh-ui.min.css"&gt;
                    <br/>
                    &lt;/head&gt;
                    <br/>
                    &lt;body&gt;
                    <br/>
                    &lt;button class="btn btn-dark"&gt;This is a dark button&lt;/button&gt;
                    <br/>
                    &lt;/body&gt;
                    <br/>
                    &lt;/html&gt;
                </div>
                <br/>
                <br/>
                And you are done with the starter template.
            </div>
            </center>
        </Fragment>
    )
}

export default gettingstarted;