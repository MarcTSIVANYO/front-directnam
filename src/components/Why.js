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
                      <h4>Plus rapide.</h4>
                      <p></p>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-4">
                    <div className="features wow bounceInUp clearfix">
                      <i className="fa fa-object-group" style={{color: '#ffb774'}} />
                      <h4>Moins cher.</h4>
                      <p></p>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-4">
                    <div className="features wow bounceInUp clearfix">
                      <i className="fa fa-language" style={{color: '#589af1'}} />
                      <h4>Bien Pratique</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div> 
          </div> 
        </section> 
        <Action titre="Envoyer de l'argent vers le Togo" description="Envois rapides et sécurisés. Nous travaillons pour vous offrir la meilleure facilité pour vos transferts." btnName="Inscrivez-vous maintenant !"/>
        </div>
    );
  }
}

export default Why;