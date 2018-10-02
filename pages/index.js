import Link from "next/link";
import Head from "next/head";
//test Link preferch

export default () => (
  <Head>
    <nav>
      <ul>
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/Login">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Head>
);
