import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

const Projet = () => {

  return (
    <>
      <Head>
        <title>Projet</title>
      </Head>

      <Layout title={"Le projet"}>

        <article>
          <h2>Rejoins une AMAP !</h2>
          <div className='paragraph'>
            <p>Pollution <br />
              Gâchis <br />
              Suremballage <br />
              Dégradation des sols et des paysages <br />
              Scandales sanitaires<br />
              Pesticides <br />
              Misère et suicides des paysans… <br />
              <strong>Le système agroalimentaire actuel ne te correspond plus <br />
              et tu veux changer les choses ?</strong>
            </p>
            <img src="/projet/recolteBle.jpg" width='50%' />
          </div>
          <h3> As-tu pensé à rejoindre une AMAP ? </h3>
          <div id="image">
            <img src="/projet/farmer2.jpg" width='50%' />
          </div>

          <h3> Fais un tour sur notre carte interactive et <br /> trouve l’AMAP proche de chez toi !</h3>

          <Link href="/carte">
            <a id="image">
              <img src="/projet/logo_map_bouton.png" title="Cliquer pour accéder à la carte !" width='20%' id='image' />
            </a>
          </Link>

          <h2> Une AMAP quèsaco ?</h2>

          <div className='paragraph2'>
            <p>
              Une AMAP est une association pour le maintien d’une agriculture paysanne.
              Cette association regroupe un petit nombre de consommateurs et de paysans, voire d’artisans, liés par un contrat et se retrouvent autour de valeurs communes s’inscrivant dans une démarche de valorisation de l’agriculture biologique et locale.
              <div className='paragraph'>
                <br />Les objectifs de L’AMAP s’articulent autour de trois axes : <br />
              « Écologiquement sain,<br />
              Socialement équitable et<br />
              Économiquement viable ».
              </div>
            </p>
            <img src="/projet/farmerShoes.jpg" width='50%' />
          </div>

          <h2>Mais comment ça fonctionne ?</h2>
          <div className='paragraph2'>
            <img src="/projet/assortimentPanier.jpg" width='50%' />
            <p>
              Les membres de l’association mettent en place un système de vente hebdomadaire de paniers bio grâce aux petits producteurs de ferme à proximité. <br />
              Ces paniers contiennent des produits de la ferme, des fruits et des légumes récoltés le matin même de la distribution !
              Les produits sont donc super frais, de saison et récoltés lorsqu’ils sont arrivés à maturité pour en retirer le maximum de nutriments.  <br />

              En plus, le prix du panier est fixé de façon équitable et payé à l’avance pour assurer un revenu stable aux paysans locaux tout en étant abordable pour le consommateur. <br />
              L'absence de gâchis au niveau des produits, l'absence d'intermédiaires entre le paysan et les consommateurs et le minimum d’emballage, voire pas du tout, permettent de concurrencer le prix d’un panier moyen en grande surface tout en proposant des produits de qualité supérieure. <br />
            </p>
          </div>
          <div className='paragraph'>
            <strong>
              <br />En plus, c’est good pour la planète, alors c’est pas génial ça ! <br />
              Et si tu faisais un petit tour sur notre carte interactive <br />
              pour trouver l’AMAP la plus proche de chez toi ?</strong>
          </div>

          <h2>Et si tu créais ton AMAP ?</h2>
          <div className='paragraph'>
            <p>
              Malheureusement il n’y a pas d’AMAP près de chez toi, ou le nombre de membres a déjà atteint sa taille maximale … ? <br />
              <strong>Et si tu créais ta propre AMAP ! <br /></strong>
                Mais si, je t’assure c’est super simple ! <br />
                Tu n’es toujours pas convaincu ?
              </p>
            <img src="/projet/farmerFille.jpg" width='50%' />
          </div>
          <div className='paragraph2'>
            <img src="/projet/tomates.jpg" width='50%' />
            <p>
              <h4>Alors attends, on résume !</h4>
              Une AMAP te permet :  <br />
              <ul>
                <li>De manger des produits frais bio divers et variée toute l’année et reconnus pour leur qualité gustative  <br /></li>
                <li>Les produits sont regroupés dans un super panier, tu n’as donc pas à réfléchir à une liste de courses chaque semaine  <br /></li>
                <li>D’apprécier des produits qui n'ont pas parcouru des centaines de kilomètres  <br /></li>
                <li>D’avoir des produits avec moins d'emballages</li>
              </ul>
            </p>
          </div>
          <div className='paragraph2'>
            <p>
              <ul>
                <li>D’accorder moins d'importance à la standardisation des aliments<br /></li>
                <li>De réduire le gaspillage car tout ce qui est produit est consommé<br /></li>
                <li>De découvrir ou redécouvrir des produits d'antan de ton terroir<br /></li>
                <li>Mettre en avant les particularités alimentaires locales et régionales</li>
              </ul>
            </p>
            <img src="/projet/assortimentPanierEnBois.jpg" width='50%' />
          </div>
          <div className='paragraph2'>
            <img src="/projet/poulets.jpg" width='40%' />
            <p>
              <ul>
                <li>Manger des produits issus d'une agriculture bénéfique pour la biodiversité, protégeant les sols et l'eau, moins polluante et moins énergivore<br /></li>
                <li>D’améliorer l'économie locale par une augmentation des emplois et la circulation de l'argent dans la communauté<br /></li>
                <li>De créer une communauté de confiance partageant les mêmes valeurs<br /></li>
                <li>De retrouver un contact avec la nature<br /></li>
                <li>De faire une action citoyenne</li>
              </ul>
            </p>
          </div>

          <h2>Comment créer ton AMAP ?</h2>
          <div className='paragraph2'>
            <p>
              Finir le blabla ICI !!
        </p>
            <img src="/projet/farmerLanceCourge.jpeg" width='40%' />
          </div>
          <h3> C'est parti ! <br /> Crée ton super site web ! </h3>
          <Link href="/nouvelle">
            <a id="image">
              <img src="/projet/logo_creation_site.png" title="Cliquer pour céer un site!" width='15%' id='image' />
            </a>
          </Link>

          <h2>Information sur notre projet </h2>

          <div className='paragraph2'>
            <p>
              Les AMAP - Associations pour le maintien d'une agriculture paysanne - sont destinées à favoriser l'agriculture paysanne et biologique qui a du mal à subsister face à l'agro-industrie.
              Dans l’idée de développer une nouvelle façon de concevoir les échanges entre consommateurs et producteurs,
              l’AMAP prend toute sa place de médiateur.
              Cependant, à l’heure actuelle le manque de plateformes dédiées et professionnelles,
                ainsi que les difficultés de communications entre les différents acteurs de l’AMAP complexifient leur création et leur gestion.<br />
            </p>
            <img src="/projet/assortimentPanierMain.jpg" width='50%' />

          </div>
          <div className='paragraph2'>
            <p>
              C’est pourquoi lors de ce projet nous allons tenter de proposer une solution adéquate centrée sur le consommateur,
              mais aussi sur les associations AMAP en réalisant la création de deux interfaces :
              une pour le consommateur et une pour l’AMAP dont les outils spécifiques seront établis via un échange assidu avec notre partenaire.
            </p>
          </div>


          <h2> Notre Teams</h2>
          <div id="image">
            <img src="/projet/logo_ece.png" width='20%' />
          </div>
          <div className='paragraph'>
            <p>
              Thibaut GAUFRES <br />
                Magalie ANDORFER<br />
                Margaux BOSCARY<br />
                Paul FARAULT<br />
                Pierre-Loup CHARDAT<br />
                Mathilde GIRAUDON
          </p>
          </div>

        </article>
      </Layout>
    </>
  )
}

export default Projet