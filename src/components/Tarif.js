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
            <h3>Tarif de transfert d'argent </h3>
            <p> Flooz & Tmoney </p>
            </header>
            <div className="row flex-items-xs-middle flex-items-xs-center">
              {/* Basic Plan  */}

              {this.props.data
                ? this.props.data.map((d, i) => (

                    <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-4 col-xs-6"> 
                        <div className="card"  style={{borderBottom: 'solid #413e66'}}>
                          <div className="card-header">
                            <h4>{d.cfa} <span className="period">F CFA</span></h4>
                          </div>
                          <div className="card-block">
                            <ul className="list-group">
                              <li className="list-group-item">+ frais de retrait</li> 
                              <li className="list-group-item">+ frais de services</li> 
                            </ul>
                            <h4 className="card-title">  Prix : {d.euro} &euro; </h4>
                            <a href={'/login/?envoie='+this.onFirstNamePaste(d.cfa)+'&prix='+ d.euro} className="btn">Commander</a>
                          </div>
                      </div> 
                    </div>
                  ))
                : "loading"}
  
            </div>
          </div>
        </section>{/* #pricing */}
        </div>
    );
  }
}

export default Tarif;