import React, {Fragment} from "react";
import Link from 'next/link';
import Head from 'next/head';

const Button = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Button;