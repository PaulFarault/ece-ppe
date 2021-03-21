import Layout from '../components/Layout'
import Head from 'next/head'


const Nouvelle = () => {

    return (
        <>
            <Head>
                <title>Nouvelle</title>
            </Head>

            <Layout>
                <header>
                    <img src="/projet/logo.png" width='20%' />
                    <h1>CREATION NOUVELLE AMAP</h1>
                </header>

                <h2>Formulaire d'inscription</h2>
                <div className='paragraph'> 
                <p>
                    <label>Prénom</label> : <input type="text" name="prenom" /><br/>
                    <label>Nom </label> : <input type="text" name="nom" /><br/>
                    <label>Nom de l'AMAP </label> : <input type="text" name="nomAmap" /><br/>
                    <label>Adresse de l'AMAP </label> : <input type="text" name="adresse" /><br/>
                    <label>Numéro de téléphone </label> : <input type="tel" name="numtel" /><br/>
                    <label>Email</label> : <input type="email" name="email"/><br/>
                    <p>As tu déjà un site web ? </p>
                    <label>Si oui, entre l'URL </label> : <input type="url" /><br/>
                    <p>Si non, clique sur Envoyer et c'est parti pour le créer !</p>
                    <input type="submit" value="Envoyer" />
                </p>
                </div>
                
            </Layout>
        </>
    )
}
export default Nouvelle