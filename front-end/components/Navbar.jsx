import Link from 'next/link'

export default () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Index</a>
        </Link>
        <Link href="/map">
          <a>Map</a>
        </Link>
      </nav>
    </>
  )
}