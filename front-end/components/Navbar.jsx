import Link from 'next/link'

export default () => {
  return (
    <>
      <nav >
        <ul >
          <li >
            <Link href="/">
            <a>Accueil</a>
            </Link>
          </li>
          <li >
            <Link href="/carte">
            <a>Carte</a>
            </Link>
          </li>
          <li>
            <Link href="/projet">
            <a>Projet</a>
            </Link>
          </li>
          <li>
          <Link href="/nouvelle">
          <a>Creation AMAP</a>
          </Link>
          </li>
        </ul>
        
        
        
        
      </nav>
    </>
  )
}