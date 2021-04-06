import { MapContainer, TileLayer } from 'react-leaflet'

export default ({ children, position }) => {
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
      {children}
    </MapContainer>
  )
}