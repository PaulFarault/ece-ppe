import Navbar from './Navbar'
import defaultStyles from './Layout.module.scss'
import Typography from '@material-ui/core/Typography'

export default ({ children, styles = defaultStyles.main, title }) => {
  return (
    <>
      <header className={defaultStyles.header}>
        <img src="/logo.png"></img>
        <Navbar />
      </header>
      <main className={styles}>
        {title && <Typography variant="h1">{title.toUpperCase()}</Typography>}
        {children}
      </main>
      <footer className={defaultStyles.footer}>
        <h5>Test</h5>
        <p>Yo</p>
      </footer>
    </>
  )
}