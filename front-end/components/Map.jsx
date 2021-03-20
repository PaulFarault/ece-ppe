
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "/map-marker-alt-solid.png",
  iconSize: [24, 32],
})

export default ({ position }) => {
  const [long, lat] = position
  let zoom = 13

  if (long === undefined || lat === undefined) {
    // Coordonnées de la France
    position = [46.71109, 1.7191036]
    zoom = 6
  }

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={ICON}
      >
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  )
}