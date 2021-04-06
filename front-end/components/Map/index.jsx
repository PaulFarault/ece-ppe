import Marker from './Marker'
import MapBg from './MapBg'
import 'leaflet/dist/leaflet.css'
import { useRouter } from 'next/router'

const useQuery = () => {
  const { query: { long, lat } } = useRouter()
  let position = [lat, long]
  let zoom = 13

  if (long === undefined || lat === undefined) {
    // Coordonnées de la France
    position = [46.71109, 1.7191036]
    zoom = 6
  }

  return { position, zoom }
}

export default ({ amaps, loading, styles }) => {

  const { position, zoom } = useQuery()

  return (
    <div className={styles.mapSide}>
      <div className={styles.map}>
        <MapBg position={position} zoom={zoom}>
          {!loading && amaps.map(amap => (<Marker amap={amap} />))}
        </MapBg>
      </div>
    </div>
  )
}