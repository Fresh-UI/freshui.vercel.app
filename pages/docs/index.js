import {Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './doc.module.css'

function Docs() {
    return (
      <Fragment>
      <Head>
      <meta name="description" content="Official Docs of fresh ui css framework"/>
      <title>Docs</title>
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
        <Link href="#">
         <a className="navbara active">Docs</a>
        </Link>
        </li>
        </ul>
       </nav>
      <center>
       <span className={styles.welc}>Welcome to the Docs</span>
       <br/>
       Let's start off with a brief introduction to fresh ui
       <br/>
       <br/>
       Fresh UI is a css framework which is based on google's material design
       <br/>
       <br/>
       Now in order to start using fresh ui you should include the following piece of code:
       <br/>
       <br/>
       <div className={styles.cdnlink}>
    &lt;link rel="stylesheet" 
    <br/>
    href="https://cdn.jsdelivr.net/npm/@freshui/freshui/css/fresh-ui.min.css" &gt;
       </div>
       </center>
      </Fragment>
    )
}

export default Docs;
