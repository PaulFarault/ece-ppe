import Navbar from './Navbar'

import styles from './Layout.module.scss'

export default ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}