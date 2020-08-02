import React, { Component } from "react";

export class Features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
       

              {/*==========================
    Services Section
  ============================*/}
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Opération en 4 étapes</h3>
           </header>
            <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3 wow bounceInUp" data-wow-duration="1.4s">
                    {" "}
                    <div className="box">
                        <div className="icon" style={{background: '#e6fdfc'}}><i className="ion-ios-paper-outline" style={{color: '#ff689b'}} /></div>
                        <h4 className="title"><a  href="#">{d.title} </a></h4>
                        <p className="description">{d.text}</p>
                      </div> 
                    </div>
                ))
              : "Loading..."}

              {/* <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#fceef3'}}><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
                  <h4 className="title"><a  href="#">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div> */} 
            </div>
          </div>
        </section>{/* #services */}

      </div>

      
    );
  }
}

export default Features;
