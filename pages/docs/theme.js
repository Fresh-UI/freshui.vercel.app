import React, {Fragment, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";

const Theme = () => {
    useEffect(()=>{
        document.body.setAttribute('theme','dark')
    })
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/code.css" />
                <link rel="stylesheet" href="/sidebar.css" />
            </Head>
            <style jsx>{`
                .bg-white{
                    background-color: #fff !important;
                }
            `}</style>
            <nav className="navbar bg-white">
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
                <Link href="/docs/getting-started">
                <a>Getting Started</a>
                </Link>
                <Link href="/docs/button">
                <a >Buttons</a>
                </Link>
                <Link href="/docs/cards">
                <a>Cards</a>
                </Link>
                <Link href="/docs/progressbar">
                <a>Progress Bars</a>
                </Link>
                <a href="#" className="active">Themes</a>
            </div>
            <center className="content">
            <div className="alert alert-warning" style={{width: 190}}>
                The themes part of the freshui framework is still in development.
            </div>
            We have added theme's.Currently there are only 3 themes. These are:

            <li>Dark Theme</li>
            <li>Light Theme</li>
            <li>Aqua Theme</li>

            Usage of theme is as simple as:
            <div className="code bg-white">
                &lt;element theme="dark"&gt;
                &lt;/element&gt;
            </div>
            <br/>
            Here is the code for the other themes:
            <br/>
            <div className="code bg-white">
                &lt;!-- Code for Aqua Theme --&gt;
                <br/>
                &lt;element theme="aqua"&gt;
                &lt;/element&gt;
            </div>
            <br/>
            <div className="code bg-white">
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
