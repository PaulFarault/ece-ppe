import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './carte.module.scss'
import ListComponent from '../components/List'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Map = () => {

  const { query: { lat, long }, isReady } = useRouter()

  const [amaps, setAmaps] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    if (isReady) {

      const { data } = await axios(
        {
          method: 'get',
          url: `http://localhost:3001/amaps/` + lat + `/` + long
        }
      )

      setAmaps(data)
      setLoading(false)
    }
  }, [isReady])

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

      <Layout styles={styles.main}>
        <ListComponent amaps={amaps} loading={loading} styles={styles} />
        <MapComponent amaps={amaps} loading={loading} styles={styles} />
      </Layout>
    </>
  )
}

export default Map;