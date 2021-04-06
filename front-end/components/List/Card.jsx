import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

export default ({ amap }) => {
  return (
    <Card>
      <Typography variant="h4">{amap.amap_name}</Typography>
    </Card>
  )
}