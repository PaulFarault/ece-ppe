
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet"
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
  const [long, lat] = position
  let zoom = 13

  if (long === undefined || lat === undefined) {
    // Coordonnées de la France
    position = [46.71109, 1.7191036]
    zoom = 6
  }

  const ICON = icon({
    iconUrl: "/map-marker-alt-solid.png",
    iconSize: [24, 32],
  })

  const { data, loading } = useFetch(`http://localhost:3001/amap`)

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        !loading && data.map(amap => (
          <Marker
            position={[amap.latitude, amap.longitude]}
            icon={ICON}
          >
            <Popup>{amap.amap_address}</Popup>
          </Marker>
        ))
      }

    </MapContainer>
  )
}