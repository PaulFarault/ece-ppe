import Head from 'next/head'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const { query: { long, lat } } = useRouter()

  // Nécessité de passer par cet import pour ne pas générer la page côté serveur (bug de Leaflet)
  const MapComponent = dynamic(
    () => import('../components/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false // Empèche le rendu côté server
    }
  )

  return (
    <>
      <Head>
        <title>Carte</title>
      </Head>

      <Layout>
        <h1>Page de la carte</h1>
        <MapComponent position={[long, lat]} />
      </Layout>
    </>
  )
}

export default Map;