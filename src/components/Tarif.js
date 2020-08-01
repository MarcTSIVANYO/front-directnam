// Home.js

import React, { Component } from 'react'; 

class Tarif extends Component {
  render() {
    return (
        <div> 
          
        {/*==========================
    Pricing Section
  ============================*/}
        <section id="pricing" className="wow fadeInUp section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Pricing</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </header>
            <div className="row flex-items-xs-middle flex-items-xs-center">
              {/* Basic Plan  */}
              <div className="col-xs-12 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h3><span className="currency">$</span>19<span className="period">/month</span></h3>
                  </div>
                  <div className="card-block">
                    <h4 className="card-title"> 
                      Basic Plan
                    </h4>
                    <ul className="list-group">
                      <li className="list-group-item">Odio animi voluptates</li>
                      <li className="list-group-item">Inventore quisquam et</li>
                      <li className="list-group-item">Et perspiciatis suscipit</li>
                      <li className="list-group-item">24/7 Support System</li>
                    </ul>
                    <a href="#" className="btn">Choose Plan</a>
                  </div>
                </div>
              </div>
              {/* Regular Plan  */}
              <div className="col-xs-12 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h3><span className="currency">$</span>29<span className="period">/month</span></h3>
                  </div>
                  <div className="card-block">
                    <h4 className="card-title"> 
                      Regular Plan
                    </h4>
                    <ul className="list-group">
                      <li className="list-group-item">Odio animi voluptates</li>
                      <li className="list-group-item">Inventore quisquam et</li>
                      <li className="list-group-item">Et perspiciatis suscipit</li>
                      <li className="list-group-item">24/7 Support System</li>
                    </ul>
                    <a href="#" className="btn">Choose Plan</a>
                  </div>
                </div>
              </div>
              {/* Premium Plan  */}
              <div className="col-xs-12 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h3><span className="currency">$</span>39<span className="period">/month</span></h3>
                  </div>
                  <div className="card-block">
                    <h4 className="card-title"> 
                      Premium Plan
                    </h4>
                    <ul className="list-group">
                      <li className="list-group-item">Odio animi voluptates</li>
                      <li className="list-group-item">Inventore quisquam et</li>
                      <li className="list-group-item">Et perspiciatis suscipit</li>
                      <li className="list-group-item">24/7 Support System</li>
                    </ul>
                    <a href="#" className="btn">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #pricing */}
        </div>
    );
  }
}

export default Tarif;