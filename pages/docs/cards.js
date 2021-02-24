import React, {Fragment} from "react";
import Link from 'next/link';
import Head from 'next/head';

const Cards = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    Cards|| Fresh UI
                </title>
                <link rel="stylesheet" href="/code.css" />
                <link rel="stylesheet" href="/sidebar.css" />
                <link rel="Stylesheet" href="/cards.css" />
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
                <a className="active" href="#">Cards</a>
                <Link href="/docs/progressbar">
                    <a>Progress Bars</a>
                </Link>
            </div>
            <div className="content">
                <center>
                Cards provided by fresh ui looks something like this:
                <br/>
                <br/>
                <div className="card bg-primary">
                    <h2>Hello World</h2>
                    We love CSS
                </div>
                Here is the code for creating a card using fresh ui css.
                <br/>
                <div className="code">
                    &lt;div class="card"&gt;
                    <br/>
                    We love CSS
                    <br/>
                    &lt;/div&gt;
                </div>
                <br/>
                <div className="alert alert-info" id="alert-code1">
                   <span id="note1">Note: </span>
                   <br/> 
                   The width and color of the card were changed using custom classes
                </div>
                You can also put an image inside the card like this
                <br/>
                <div className="code" id="codeblock2">
                &lt;div class="card"&gt;
                    <br/>
                    We love CSS
                    <br/>
                    &lt;br/&gt;
                    <br/>
                    &lt;img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" height="50" alt="Image of css" /&gt;
                    <br/>
                    &lt;/div&gt;
                </div>
                <br/>
                The above code outputs the following output
                <br/>
                <div className="card">
                    We love CSS
                    <br/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" height="250" alt="Image of css" /> 
                </div>
                So implementing a card was as easy as that.
                </center>
            </div>
        </Fragment>
    )
}

export default Cards;