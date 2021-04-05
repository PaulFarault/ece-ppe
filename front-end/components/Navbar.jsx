import Link from 'next/link'
import { useRouter } from "next/router";

import styles from './Navbar.module.scss'

export default () => {

  const router = useRouter();

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>Accueil</a>
        </Link>
        <Link href="/carte">
          <a className={router.pathname == "/carte" ? "active" : ""}>Carte</a>
        </Link>
        <Link href="/projet">
          <a className={router.pathname == "/projet" ? "active" : ""}>Projet</a>
        </Link>
        <Link href="/nouvelle">
          <a className={router.pathname == "/nouvelle" ? "active" : ""}>Creation AMAP</a>
        </Link>
      </nav>
    </>
  )
}