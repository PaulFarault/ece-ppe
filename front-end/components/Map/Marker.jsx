import { Marker, Popup } from 'react-leaflet'
import { icon } from "leaflet"

const ICON = icon({
  iconUrl: "/map-marker-alt-solid.png",
  iconSize: [24, 32],
})

export default ({ amap }) => {
  console.log(amap)
  return (
    <Marker
      position={[amap.latitude, amap.longitude]}
      icon={ICON}
    >
      <Popup>{amap.amap_address}</Popup>
    </Marker>
  )
}
