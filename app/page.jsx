import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="top">
        <a className="brand" href="/" aria-label="UZTA, accueil">UZTA</a>
        <nav aria-label="Navigation principale">
          <a className="active" aria-current="page" href="/">Accueil</a>
          <a href="/a-propos">À propos</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>
      <main>
        <div className="flag" aria-label="Drapeau basque avec le logo UZTA">
          <Image className="logo" src="/logo-uzta.jpg" alt="Logo UZTA — association des commerçants" width={210} height={210} priority />
        </div>
        <section className="intro">
          <h1>Tu cherches un <strong className="red">commerçant</strong><br className="mobile-break"/> ou un <strong className="green">artisan</strong> de confiance<br className="mobile-break"/> à <strong className="red">Ustaritz</strong>, mais tu ne sais pas<br className="mobile-break"/> vers qui te tourner ?</h1>
          <p>Découvre les <strong className="red">commerçants</strong>, <strong className="green">artisans</strong> et<br className="mobile-break"/> <strong className="red">professionnels</strong> d'<strong className="green">Ustaritz</strong> réunis au sein de<br className="mobile-break"/> l'association <strong className="red">UZTA</strong>.</p>
          <p>Des professionnels <strong className="green">près de chez toi</strong>, des<br className="mobile-break"/> <strong className="red">savoir-faire locaux</strong> et des <strong className="green">visages</strong> à découvrir.</p>
          <a className="cta" href="#professionnels">Je découvre les professionnels d'Ustaritz <span aria-hidden="true" className="arrow">→</span></a>
        </section>

        <section className="section s1" id="professionnels">
          <div className="grille">
            <h2>Pourquoi chercher ailleurs quand le bon professionnel est peut-être à Ustaritz ?</h2>
            <div className="texte">
              <p>Tu as besoin d'un artisan, d'un commerçant ou d'un service, mais tu ne sais pas qui contacter.</p>
              <p>Alors tu cherches sur Google, tu compares les résultats et tu demandes conseil autour de toi, sans toujours trouver la bonne personne.</p>
              <a className="cta rouge" href="#connais">Je trouve un professionnel près de chez moi <span aria-hidden="true" className="arrow">→</span></a>
            </div>
          </div>
        </section>

        <section className="section s2" id="connais">
          <div className="grille">
            <h2>Combien de professionnels d'Ustaritz connais-tu vraiment ?</h2>
            <div className="texte">
              <p>Tu passes peut-être chaque jour devant des commerces sans connaître les personnes qui y travaillent ni les services qu'elles proposent.</p>
              <p>Et lorsque tu as besoin d'un professionnel, tu risques de chercher ailleurs alors que la solution se trouve parfois à quelques minutes de chez toi.</p>
              <a className="cta" href="#visages">Je découvre les savoir-faire locaux <span aria-hidden="true" className="arrow">→</span></a>
            </div>
          </div>
        </section>

        <section className="section s3" id="visages">
          <div className="grille">
            <div className="portrait" role="img" aria-label="Maisons labourdines à colombages rouges" />
            <div className="texte">
              <h2>Derrière chaque commerce d'Ustaritz, il y a un visage et un savoir-faire !</h2>
              <p>L'association <strong>UZTA réunit des commerçants, artisans et professionnels d'Ustaritz</strong> qui participent à la vie de notre commune.</p>
              <p>Opticiens, caviste, photographe, bouchers, professionnels de l'immobilier et bien d'autres : découvre leurs métiers, leurs activités et les personnes qui les font vivre.</p>
              <div className="metiers">
                <span>Opticiens</span><span>Caviste</span><span>Photographe</span><span>Bouchers</span><span>Immobilier</span><span>Et bien d'autres</span>
              </div>
              <a className="cta rouge" href="#tous">Je rencontre les professionnels d'UZTA <span aria-hidden="true" className="arrow">→</span></a>
            </div>
          </div>
        </section>

        <section className="section s4" id="tous">
          <div className="carte">
            <h2>Tous les commerçants et artisans d'Ustaritz à découvrir au même endroit !</h2>
            <p>Plus besoin de multiplier les recherches pour découvrir les professionnels membres de l'association UZTA.</p>
            <p>Retrouve leurs activités, découvre leurs savoir-faire et trouve plus facilement le professionnel qui répond à tes besoins.</p>
            <p>Parce que choisir un professionnel près de chez soi, c'est aussi contribuer à faire vivre les commerces et les savoir-faire de notre commune.</p>
            <p className="slogan">À Ustaritz, les bonnes adresses sont parfois juste à côté de chez toi !</p>
            <a className="cta" href="/a-propos">Je découvre les commerçants et artisans d'Ustaritz <span aria-hidden="true" className="arrow">→</span></a>
          </div>
        </section>
        <div className="village" role="img" aria-label="Vue du village figurant dans la référence fournie" />
      </main>
      <footer><span>UZTA</span><nav aria-label="Navigation de pied de page"><a href="/">Accueil</a><a href="/a-propos">À propos</a><a href="/blog">Blog</a></nav></footer>
    </>
  );
}
