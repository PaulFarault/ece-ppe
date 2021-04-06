import Link from 'next/link'
import { useRouter } from "next/router";
import Typography from '@material-ui/core/Typography'

import styles from './Navbar.module.scss'

export default () => {

  const router = useRouter();

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>
            <Typography variant="button">Accueil</Typography>
          </a>
        </Link>
        <Link href="/carte">
          <a className={router.pathname == "/carte" ? "active" : ""}>
            <Typography variant="button">Carte</Typography>
          </a>
        </Link>
        <Link href="/projet">
          <a className={router.pathname == "/projet" ? "active" : ""}>
            <Typography variant="button">Projet</Typography>
          </a>
        </Link>
        <Link href="/nouvelle">
          <a className={router.pathname == "/nouvelle" ? "active" : ""}>
            <Typography variant="button">Creation AMAP</Typography>
          </a>
        </Link>
      </nav>
    </>
  )
}