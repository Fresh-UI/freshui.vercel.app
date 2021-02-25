import React, {Fragment} from "react";
import Link from 'next/link';
import Head from 'next/head';

const progressbar = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    ProgressBars|| Fresh UI
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
                <Link href="/docs/getting-started">
                <a>Getting Started</a>
                </Link>
                <Link href="/docs/button">
                <a >Buttons</a>
                </Link>
                <Link href="/cards">
                <a>Cards</a>
                </Link>
                <a className="active" href="#">Progress Bars</a>
            </div>
            <div className="content">
                <center>
                    So we recently have added progress bars to freshui.
                    <br/>
                    Here is one
                    <div className="pbar pbar-primary"></div>
                    <br/>
                    You can easily modify its width

                    <br/>
                    Code for progrss bar:
                    <div className="code" >
                        &lt;div class="pbar" &gt;&lt;/div&gt;
                        <br/>
                        &lt;!-- Code for modifying width of progress bar --&gt;
                        <br/>
                        &lt;div class="pbar" style="width:100px;"&gt;&lt;/div&gt;
                    </div>
                    Here is the modified progress bar:
                    <br/>
                    <div className="pbar" style={{width: 100 }}></div>
                    We have 4 different progress bars:
                    <br/>
                    <li>Default: <div className="pbar" style={{ width: 500 }}></div></li>
                    <br/>
                    <li>Dark: <div className="pbar pbar-dark" style={{ width: 500}}></div></li>
                    <br/>
                    <li>Primary: <div className="pbar pbar-primary" style={{ width: 500}} ></div></li>
                    <br/>
                    <li>Success: <div className="pbar pbar-success" style= {{ width: 500 }}></div></li>
                    <br/>
                    The classes for all the different progress bars are as follows:
                    <br/>
                    <div className="code">
                        &lt;!-- Default Progress Bar --&gt;
                        <br/>
                        &lt;div class="pbar"&gt;&lt;/div&gt;
                        <br/>
                        &lt;!-- Dark Progress Bar -- &gt;
                        <br/>
                        &lt;div class="pbar pbar-dark"&gt;&lt;/div&gt;
                        <br/>
                        &lt;!-- Primary Progress Bar --&gt;
                        <br/>
                        &lt;div class="pbar pbar-primary"&gt;&lt;/div&gt;
                        <br/>
                        &Lt;!-- Success Progress Bar --&gt;
                        <br/>
                        &lt;div class="pbar pbar-success"&gt;&lt;/div&gt;
                        <br/>
                    </div>
                </center>
            </div>
        </Fragment>
    )
}

export default progressbar;