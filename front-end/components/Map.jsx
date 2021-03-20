
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "/map-marker-alt-solid.png",
  iconSize: [32, 32],
})

export default ({ position }) => {

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
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