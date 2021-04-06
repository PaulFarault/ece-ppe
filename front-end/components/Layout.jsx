import Navbar from './Navbar'
import defaultStyles from './Layout.module.scss'

export default ({ children, styles = defaultStyles.main }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles}>
        {children}
      </main>
    </>
  )
}