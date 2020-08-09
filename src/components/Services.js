// Home.js

import React, { Component } from 'react'; 

class Services extends Component {
  render() {
    return (
        <div id="service"> 
             {/*==========================
    Services Section
  ============================*/}
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Services</h3>
              <p>Des services simples, rapides et sécurisés vers le Togo. Votre type d'opération est entre bonnes mains chez nous</p>
            </header>
            <div className="row">

            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-4 wow bounceInUp" data-wow-duration="1.4s">
                    {" "}
                    <div className="box">
                        <div className="icon" style={{background: '#e6fdfc'}}><i className={d.icon} style={{color: '#ff689b'}} /></div>
                        <h4 className="title"><a  href="javascript:void(0)">{d.name} </a></h4> 
                      </div> 
                    </div>
                ))
              : "Loading..."} 
             
            </div>
          </div>
        </section>{/* #services */} 
        </div>
    );
  }
}

export default Services;