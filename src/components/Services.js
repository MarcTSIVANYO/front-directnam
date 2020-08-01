// Home.js

import React, { Component } from 'react'; 

class Services extends Component {
  render() {
    return (
        <div> 
             {/*==========================
    Services Section
  ============================*/}
        <section id="services" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Services</h3>
              <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
            </header>
            <div className="row">
              <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#fceef3'}}><i className="ion-ios-analytics-outline" style={{color: '#ff689b'}} /></div>
                  <h4 className="title"><a  href="#">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#fff0da'}}><i className="ion-ios-bookmarks-outline" style={{color: '#e98e06'}} /></div>
                  <h4 className="title"><a  href="#">Dolor Sitema</a></h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#e6fdfc'}}><i className="ion-ios-paper-outline" style={{color: '#3fcdc7'}} /></div>
                  <h4 className="title"><a  href="#">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#eafde7'}}><i className="ion-ios-speedometer-outline" style={{color: '#41cf2e'}} /></div>
                  <h4 className="title"><a  href="#">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#e1eeff'}}><i className="ion-ios-world-outline" style={{color: '#2282ff'}} /></div>
                  <h4 className="title"><a  href="#">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                <div className="box">
                  <div className="icon" style={{background: '#ecebff'}}><i className="ion-ios-clock-outline" style={{color: '#8660fe'}} /></div>
                  <h4 className="title"><a  href="#">Eiusmod Tempor</a></h4>
                  <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #services */}
        {/*==========================
    Why Us Section
  ============================*/}
        <section id="why-us" className="wow fadeIn">
          <div className="container-fluid">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p>
            </header>
            <div className="row">
              <div className="col-lg-6">
                <div className="why-us-img">
                  <img src="assets/img/why-us.jpg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="why-us-content">
                  <p>Molestiae omnis numquam corrupti omnis itaque. Voluptatum quidem impedit. Odio dolorum exercitationem est error omnis repudiandae ad dolorum sit.</p>
                  <p>
                    Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur
                    et temporibus. Labore est odio.
                    Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..
                  </p>
                  <div className="features wow bounceInUp clearfix">
                    <i className="fa fa-diamond" style={{color: '#f058dc'}} />
                    <h4>Corporis dolorem</h4>
                    <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
                  </div>
                  <div className="features wow bounceInUp clearfix">
                    <i className="fa fa-object-group" style={{color: '#ffb774'}} />
                    <h4>Eum ut aspernatur</h4>
                    <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
                  </div>
                  <div className="features wow bounceInUp clearfix">
                    <i className="fa fa-language" style={{color: '#589af1'}} />
                    <h4>Voluptates dolores</h4>
                    <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container" >
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">274</span>
                <p>Clients</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">421</span>
                <p>Projects</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">1,364</span>
                <p>Hours Of Support</p>
              </div>
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div> */}
        </section>
        {/*==========================
    Call To Action Section
  ============================*/}
        <section id="call-to-action" className="wow fadeInUp">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-left">
                <h3 className="cta-title">Call To Action</h3>
                <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="#">Call To Action</a>
              </div>
            </div>
          </div>
        </section>{/* #call-to-action */}
        {/*==========================
    Features Section
  ============================*/}
        <section id="features" >
          <div className="container">
            <div className="row feature-item">
              <div className="col-lg-6 wow fadeInUp">
                <img src="assets/img/features-1.svg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
                <p>
                  Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
                </p>
                <p>
                  Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
                </p>
              </div>
            </div>
            <div className="row feature-item mt-5 pt-5">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                <img src="assets/img/features-2.svg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
                <p>
                  Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt. 
                </p>
                <p>
                  Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
                </p>
                <p>
                  Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                </p>
              </div>
            </div>
          </div>
        </section>{/* #about */}
        </div>
    );
  }
}

export default Services;