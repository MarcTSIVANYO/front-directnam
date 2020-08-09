// Home.js

import React, { Component } from 'react'; 

class Action extends Component {
  render() {
    return (
        <div>   
        {/*==========================
                Call To Action Section
            ============================*/}
        <section id="call-to-action" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">{this.props.titre}</h3>
                <p className="cta-text"> {this.props.description}</p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="app/login">{this.props.btnName}</a>
              </div>
            </div>
          </div>
        </section>{/* #call-to-action */} 
        </div>
    );
  }
}

export default Action;