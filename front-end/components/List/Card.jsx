import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

export default ({ amap }) => {
  return (
    <>
      <div>
        <Typography variant="h5">{amap.amap_name}</Typography>
        <Typography variant="overline">{amap.amap_address}</Typography>
      </div>
      <div>
        <Typography variant="h5">{amap.amap_name}</Typography>
        <Typography variant="overline">{amap.amap_address}</Typography>
      </div>
      <div>
        <Typography variant="h5">{amap.amap_name}</Typography>
        <Typography variant="overline">{amap.amap_address}</Typography>
      </div>
      <div>
        <Typography variant="h5">{amap.amap_name}</Typography>
        <Typography variant="overline">{amap.amap_address}</Typography>
      </div>
    </>
  )
}