import React, {Fragment} from "react";
import Link from 'next/link';
import Head from 'next/head';

const Button = () => {
    return (
        <Fragment>
            <Head>
                <title>
                    Buttons|| Fresh UI
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
                <a href="#" className="active">Buttons</a>
                <Link href="/docs/cards">
                <a>Cards</a>
                </Link>
            </div>
            <div className="content">
                <center>
                    <p>We provide a lot of different button styles to use in your webapp.</p>
                    Here are some of the buttons.
                    <br/>
                    <br/>
                    <button className="btn btn-primary">Primary Button</button> 
                    <button className="btn btn-secondary">Secondary Button</button>
                    <button className="btn btn-black">Black Button</button>
                    <button className="btn btn-fr-ui">Default Button</button>
                    <button className="btn btn-blue-gradient">Blue Gradient Button</button>
                    <button className="btn btn-aqua-gradient">Aqua Gradient Button</button>
                    <p>Here is the code for the different buttons:</p>
                    <div className="code">
                        &lt;button class="btn btn-primary"&gt;Primary Button&lt;/button&gt;
                        <br/>
                        &lt;button class="btn btn-secondary"&gt;Secondary Button&lt;/button&gt;
                        <br/>
                        &lt;button class="btn btn-black"&gt;Black Button&Lt;/buttton&gt;
                        <br/>
                        &lt;button class="btn btn-fr-ui"&gt;Default Button&lt;/button&gt;
                        <br/>
                        &lt;button class="btn btn-blue-gradient"&gt;Blue Gradient Button&lt;/button&gt;
                        <br/>
                        &lt;button class="btn btn-aqua-gradient"&gt;Aqua Gradient Button&lt;/button&gt;
                    </div>
                    The buttons class can also be used with links instead of buttons.
                </center>
            </div>
        </Fragment>
    )
}

export default Button;