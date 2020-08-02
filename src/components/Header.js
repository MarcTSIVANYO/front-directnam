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
                <h2>{this.props.data ? this.props.data.title : "Loading"}</h2>
                <div>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a href="#about" className="btn-get-started scrollto">A propos</a>
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