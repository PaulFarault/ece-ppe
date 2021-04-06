import Card from './Card'

export default ({ amaps, loading, styles }) => {
  return (
    <div className={styles.listSide}>
      {
        !loading && (amaps.length > 0) && amaps.map(amap => (<Card amap={amap} />))
      }
    </div>
  )
}