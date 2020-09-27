// Home.js

import React, { Component } from 'react'; 

class Tarif extends Component {

   onFirstNamePaste(value){
     return value.split(' ').join('');
}
  render() {
    return (
        <div> 
          
        {/*==========================
    Pricing Section
  ============================*/}
        <section id="pricing" className="wow fadeInUp section-bg">
          <div className="container">
            <header className="section-header">
            <h3>S'inscrire </h3>
            </header>
            <div className="row flex-items-xs-middle flex-items-xs-center">
              {/* Basic Plan  */}
              <p> Cliquez sur le bouton s’inscrire en haut du menu et suivez la page d'inscription pour remplir les informations vous concernant. Nous vous demanderons de saisir votre numéro de portable, vos nom et prénom, votre adresse email et votre code parrain (qui est facultatif). </p>

            </div>
          </div>
        </section>{/* #pricing */}
        </div>
    );
  }
}

export default Tarif;