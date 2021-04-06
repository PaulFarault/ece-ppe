import Card from './Card'

export default ({ amaps, loading, styles }) => {
  return (
    <div className={styles.side}>
      {
        !loading && (amaps.length > 0) && amaps.map(amap => (<Card amap={amap} />))
      }
    </div>
  )
}