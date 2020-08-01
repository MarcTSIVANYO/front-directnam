// Home.js

import React, { Component } from 'react'; 

class Header extends Component {
  render() {
    return (
        <div> 
              {/* <!--==========================
                        Header
  ============================--> */}
  
        <section id="intro" className="clearfix">
          <div className="container d-flex h-100">
            <div className="row justify-content-center align-self-center">
              <div className="col-md-6 intro-info order-md-first order-last">
                <h2>Rapid Solutions<br />for Your <span>Business!</span></h2>
                <div>
                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
              <div className="col-md-6 intro-img order-md-last order-first">
                <img src="assets/img/intro-img.svg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>{/* #intro */}
        </div>
    );
  }
}

export default Header;