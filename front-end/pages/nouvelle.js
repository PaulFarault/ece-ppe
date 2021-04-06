import Head from 'next/head'

import Layout from '../components/Layout'
import CreationForm from '../components/CreationForm'

const Nouvelle = () => {

  return (
    <>
      <Head>
        <title>Nouvelle</title>
      </Head>

      <Layout>

        <CreationForm />

      </Layout>
    </>
  )
}
export default Nouvelle