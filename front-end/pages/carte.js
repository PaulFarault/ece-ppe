import Head from 'next/head'
import Layout from '../components/Layout'
import styles from './carte.module.scss'
import ListComponent from '../components/List'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }, [])

  return { data, loading }
}

const Map = () => {

  const { data: amaps, loading } = useFetch(`http://localhost:3001/amap`)

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