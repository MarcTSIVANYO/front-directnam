// Home.js

import React, { Component } from 'react'; 
import Action from './Action';

class Why extends Component {
  render() {
    return (
        <div>  
        <section id="why-us" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>Pourquoi nous choisir?</h3><br/>
              {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
            </header>
                <div className="why-us-content">               
                <div className="row"> 
                  <div className="col-xs-6 col-md-4">
                    <div className="features wow bounceInUp clearfix ">
                      <i className="fa fa-diamond" style={{color: '#f058dc'}} />
                      <h4>Plus simple.</h4>
                      <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-4">
                    <div className="features wow bounceInUp clearfix">
                      <i className="fa fa-object-group" style={{color: '#ffb774'}} />
                      <h4>Moins cher.</h4>
                      <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-4">
                    <div className="features wow bounceInUp clearfix">
                      <i className="fa fa-language" style={{color: '#589af1'}} />
                      <h4>Bien Pratique</h4>
                      <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
                    </div>
                  </div>
                </div>
              </div> 
          </div> 
        </section> 
        <Action titre="Envoyer de l'argent vers le Togo" description="Envois rapides et sécurisés. Nous travaillons pour vous offrir la meilleure facilité pour vos transferts." btnName="
Inscrivez-vous maintenant !"/>
        </div>
    );
  }
}

export default Why;