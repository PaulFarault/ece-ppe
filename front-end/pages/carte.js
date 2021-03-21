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
      <header>
        <img src="/projet/logo.png" width='20%' />
        <h1>LA CARTE</h1>
      </header>
        
        <MapComponent position={[long, lat]} />
      </Layout>
    </>
  )
}

export default Map;