// Home.js

import React, { Component } from 'react'; 
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';

class Home extends Component {
  render() {
    return (
      <div>
      {/*==========================
  Intro Section
============================*/}
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
      <main id="main">
        {/*==========================
    About Us Section
  ============================*/}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src="assets/img/about-img.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="about-content">
                  <h2>About Us</h2>
                  <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
                  <ul>
                    <li><i className="ion-android-checkmark-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ion-android-checkmark-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ion-android-checkmark-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #about */}
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
          <div className="container">
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
          </div>
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
        <section id="features">
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
        {/*==========================
    Portfolio Section
  ============================*/}
        <section id="portfolio" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3 className="section-title">Our Portfolio</h3>
            </header>
            <div className="row">
              <div className="col-lg-12">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container">
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/app1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">App 1</a></h4>
                    <p>App</p>
                    <div>
                      <a href="assets/img/portfolio/app1.jpg" data-lightbox="portfolio" data-title="App 1" className="link-preview" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/web3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Web 3</a></h4>
                    <p>Web</p>
                    <div>
                      <a href="assets/img/portfolio/web3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/app2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">App 2</a></h4>
                    <p>App</p>
                    <div>
                      <a href="assets/img/portfolio/app2.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/card2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Card 2</a></h4>
                    <p>Card</p>
                    <div>
                      <a href="assets/img/portfolio/card2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/web2.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Web 2</a></h4>
                    <p>Web</p>
                    <div>
                      <a href="assets/img/portfolio/web2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/app3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">App 3</a></h4>
                    <p>App</p>
                    <div>
                      <a href="assets/img/portfolio/app3.jpg" className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/card1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Card 1</a></h4>
                    <p>Card</p>
                    <div>
                      <a href="assets/img/portfolio/card1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/card3.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Card 3</a></h4>
                    <p>Card</p>
                    <div>
                      <a href="assets/img/portfolio/card3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.2s">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/web1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4><a href="#">Web 1</a></h4>
                    <p>Web</p>
                    <div>
                      <a href="assets/img/portfolio/web1.jpg" className="link-preview" data-lightbox="portfolio" data-title="Web 1" title="Preview"><i className="ion ion-eye" /></a>
                      <a href="#" className="link-details" title="More Details"><i className="ion ion-android-open" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #portfolio */}
        {/*==========================
    Clients Section
  ============================*/}
 
              <Testimonials/>  
        {/*==========================
    Team Section
  ============================*/}
        <section id="team" className="section-bg">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 wow fadeInUp">
                <div className="member">
                  <img src="assets/img/team-1.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a  href="#"><i className="fa fa-twitter" /></a>
                        <a  href="#"><i className="fa fa-facebook" /></a>
                        <a  href="#"><i className="fa fa-google-plus" /></a>
                        <a  href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="member">
                  <img src="assets/img/team-2.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a  href="#"><i className="fa fa-twitter" /></a>
                        <a  href="#"><i className="fa fa-facebook" /></a>
                        <a  href="#"><i className="fa fa-google-plus" /></a>
                        <a  href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="member">
                  <img src="assets/img/team-3.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a  href="#"><i className="fa fa-twitter" /></a>
                        <a  href="#"><i className="fa fa-facebook" /></a>
                        <a  href="#"><i className="fa fa-google-plus" /></a>
                        <a  href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="member">
                  <img src="assets/img/team-4.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a  href="#"><i className="fa fa-twitter" /></a>
                        <a  href="#"><i className="fa fa-facebook" /></a>
                        <a  href="#"><i className="fa fa-google-plus" /></a>
                        <a  href="#"><i className="fa fa-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* #team */}
        {/*==========================
    Clients Section
  ============================*/}
        <section id="clients" className="wow fadeInUp">
          <div className="container">
            <header className="section-header">
              <h3>Our Clients</h3>
            </header>
            <Clients/>
            {/* <div className="owl-carousel clients-carousel">
              <img src="assets/img/clients/client-1.png" alt="" />
              <img src="assets/img/clients/client-2.png" alt="" />
              <img src="assets/img/clients/client-3.png" alt="" />
              <img src="assets/img/clients/client-4.png" alt="" />
              <img src="assets/img/clients/client-5.png" alt="" />
              <img src="assets/img/clients/client-6.png" alt="" />
              <img src="assets/img/clients/client-7.png" alt="" />
              <img src="assets/img/clients/client-8.png" alt="" />
            </div> */}
          </div>
        </section>{/* #clients */}
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
        {/*==========================
    Frequently Asked Questions Section
  ============================*/}
        <section id="faq">
          <div className="container">
            <header className="section-header">
              <h3>Frequently Asked Questions</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </header>
            <ul id="faq-list" className="wow fadeInUp">
              <li>
                <a data-toggle="collapse" className="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="ion-android-remove" /></a>
                <div id="faq1" className="collapse" data-parent="#faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="ion-android-remove" /></a>
                <div id="faq2" className="collapse" data-parent="#faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="ion-android-remove" /></a>
                <div id="faq3" className="collapse" data-parent="#faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="ion-android-remove" /></a>
                <div id="faq4" className="collapse" data-parent="#faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="ion-android-remove" /></a>
                <div id="faq5" className="collapse" data-parent="#faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>
              <li>
                <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="ion-android-remove" /></a>
                <div id="faq6" className="collapse" data-parent="#faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>{/* #faq */}
      </main>
    </div>
    );
  }
}

export default Home;