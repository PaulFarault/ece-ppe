import Navbar from './Navbar'
import defaultStyles from './Layout.module.scss'

export default ({ children, styles = defaultStyles.main }) => {
  return (
    <>
      <header className={defaultStyles.header}>
        <Navbar />
      </header>
      <main className={styles}>
        {children}
      </main>
      <footer className={defaultStyles.footer}>
        <h5>Test</h5>
        <p>Yo</p>
      </footer>
    </>
  )
}