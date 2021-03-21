import Link from 'next/link'

export default () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Accueil</a>
        </Link>
        <Link href="/carte">
          <a>Carte</a>
        </Link>
        <Link href="/projet">
          <a>Le projet</a>
        </Link>
        <Link href="/nouvelle">
          <a>Creation AMAP</a>
        </Link>
      </nav>
    </>
  )
}