import Layout from '../components/Layout'
import Head from 'next/head'

const Projet = () => {
  
  return (
    <>
      <Head>
        <title>Projet</title>
      </Head>

      <Layout>
        <h1>Le projet</h1>
        <h2>Rejoint une AMAP !</h2>
        <div className = 'paragraph'>
          <p>Pollution. <br />
          Gâchis. <br />
          Suremballage. <br />
          Dégradation des sols et des paysages.<br /> 
          Scandales sanitaires.<br />
          Pesticides. <br />
          Misère et suicides des paysans… <br />
          Le système agroalimentaire actuelle ne te correspond plus 
          et tu veux à ton échelle changer leurs choses ?
          </p>
          <img src="/projet/recolteBle.jpg" width='30%' />
        </div>
  
        
        
      </Layout>
    </>
  )
}

export default Projet