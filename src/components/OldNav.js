// Home.js

import React, { Component } from 'react'; 

class Nav extends Component {
  render() {
    return (
        <div> 
              {/* <!--==========================
                        Header
  ============================--> */}
  <header id="header">
        <div id="topbar">
          <div className="container">
            <div className="social-links">
              <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
              {/* <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
              <a href="#" className="twitter"><i className="fa fa-twitter" /></a> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="logo float-left">
            {/* Uncomment below if you prefer to use an image logo */}
            <h1 className="text-light"><a href="#intro" className="scrollto"><span>Rapido</span></a></h1>
            {/* <a href="#header" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> */}
          </div>
          <nav className="main-nav float-right d-none d-lg-block">
            <ul>
              <li className="active"><a href="#intro">Accueil</a></li>
              <li><a href="#about">A Propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Tarif</a></li> 
              <li><a href="#contact">Nous contacter</a></li>
            </ul>
          </nav>{/* .main-nav */}
        </div>
      </header>{/* #header */}
        </div>
    );
  }
}

export default Nav;