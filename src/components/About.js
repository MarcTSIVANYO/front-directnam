// Home.js

import React, { Component } from 'react'; 

class Header extends Component {
  render() {
    return (
        <div> 
             {/*==========================
    About Us Section
  ============================*/}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="about-img">
                  <img src="assets/img/about-2.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-content">
                  <h2>A PROPOS</h2> 
                  <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                  <div className="row">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}><i className="ion-android-checkmark-circle" /> {d}</li>) : 'loading'} 
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}><i className="ion-android-checkmark-circle" /> {d}</li>) : 'loading'} 
                    </ul>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #about */}
        </div>
    );
  }
}

export default Header;