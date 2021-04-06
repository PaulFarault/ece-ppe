import Marker from './Marker'
import MapBg from './MapBg'
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


export default ({ position }) => {

  const { data, loading } = useFetch(`http://localhost:3001/amap`)

  return (
    <MapBg position={position}>
      {!loading && data.map(amap => (<Marker amap={amap} />))}
    </MapBg>
  )
}