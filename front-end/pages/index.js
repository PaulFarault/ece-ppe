import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'


const Index = () => {
  const [searchText, setSearchText] = useState('')
  const [locations, setLocations] = useState([])

  const fetchLocations = async () => {
    let response = await fetch(' https://api-adresse.data.gouv.fr/search/?q=' + searchText + '&autocomplete=1&limit=7&type=municipality')
    response = await response.json()
    setLocations(response.features)
  }

  useEffect(async () => {
    if (searchText !== "") {
      await fetchLocations()
    } else {
      setLocations([])
    }
    console.log(locations);
  }, [searchText])

  return (
    <>
      <Head>
        <title>PPE - AMAP</title>
      </Head>

      <Layout title={"Accueil"}>

        <form>
          <div className='paragraph'>
            <p>
              <label>Rechercher une AMAP : </label>
              <input
                type="text"
                id="search"
                placeholder="Rechercher une ville"
                autoComplete="off"
                value={searchText}
                onInput={e => setSearchText(e.target.value)}
              />
            </p>
          </div>

        </form>
        <div className='paragraph'>
          <p>Résultats de la recherche :</p>

          <ul>
            {
              locations.map(loc =>
                <li>
                  <Link href={{
                    pathname: '/carte',
                    query: {
                      lat: loc.geometry.coordinates[1],
                      long: loc.geometry.coordinates[0]
                    }
                  }}>{loc.properties.label}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default Index;