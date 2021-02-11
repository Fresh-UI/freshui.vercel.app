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
                <a >Buttons</a>
                <a className="active" href="#">Cards</a>
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
                </center>
            </div>
        </Fragment>
    )
}

export default Cards;