import {Fragment} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './main.module.css';
function HomePage() {
  return (
  <Fragment>
  <Head>
  <meta charSet="utf-8"/>
  <meta name="description" content="Official Website of Fresh UI css framework"/>
  <title>Fresh UI</title>
  </Head>
  <nav className="navbar">
   <ul className="navbar">
     <li className="navbarli">
     <Link href="#">
     <a className="navbara active">
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
  <center className={styles.home}>
  Welcome to the official website of fresh UI.
  <br/>
  <span className={styles.customh}>Build fast, responsive sites with Fresh UI</span>
  <br/>
  Quickly design and customize responsive mobile-first sites with Fresh UI.
The world’s first native css front-end open source toolkit.
<br/>
<br/>
<a href="https://github.com/Fresh-UI/freshui/archive/Beta-0.5.2.zip" download="freshui.zip"className="btn btn-fr-ui">Download</a>
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

export default HomePage
