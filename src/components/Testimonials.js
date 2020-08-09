
import React,{Component} from 'react';   
import OwlCarousel from 'react-owl-carousel';   
import 'owl.carousel/dist/assets/owl.carousel.css';   
import 'owl.carousel/dist/assets/owl.theme.default.css';   
export class Testimonials extends Component {  
    render()  
            {      
              return (   
                  <div>   
                     <section id="testimonials" >
                      <div className="container" >
                        <header className="section-header">
                          <h3>Ce que disent nos clients</h3>
                        </header>
                    {/* <div className="row justify-content-center">
                      <div className="col-lg-8">
                      <div className='container-fluid' >    
                      <OwlCarousel items={1} margin={8} autoplay ={true} >    
                    <div className="testimonial-item">
                            <img src="assets/img/testimonial-1.jpg" className="testimonial-img" alt="" />
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <p>
                              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                            </p>
                          </div>
                          <div className="testimonial-item">
                            <img src="assets/img/testimonial-2.jpg" className="testimonial-img" alt="" />
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <p>
                              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                            </p>
                          </div>
                          <div className="testimonial-item">
                            <img src="assets/img/testimonial-3.jpg" className="testimonial-img" alt="" />
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <p>
                              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                            </p>
                          </div>
                          <div className="testimonial-item">
                            <img src="assets/img/testimonial-4.jpg" className="testimonial-img" alt="" />
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <p>
                              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                            </p>
                          </div>
                        </OwlCarousel>   
                      </div>   
                      </div>
                    </div>
                     */}
                          <div className="row">
                            {this.props.data
                              ? this.props.data.map((d, i) => (
                                  <div key={`${d.name}-${i}`} className="col-md-3">
                                    <div className="testimonial">
                                      <div className="testimonial-image">
                                        {" "} 
                                      </div>
                                      <div className="testimonial-content">
                                        <p>{d.text}
                                          <div className="testimonial-meta"> - {d.name} </div>
                                          
                                          <div className="text-warning">
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                            <i className="fa fa-star"> </i>
                                          </div>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              : "loading"}
                          </div>
                        </div>
                </section>{/* #testimonials */} 
          </div>   
              )   
            }   
          }    
export default Testimonials