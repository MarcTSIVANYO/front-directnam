
import React,{Component} from 'react';   
import OwlCarousel from 'react-owl-carousel';   
import 'owl.carousel/dist/assets/owl.carousel.css';   
import 'owl.carousel/dist/assets/owl.theme.default.css';   
export class Testimonials extends Component {  
    render()  
            {      
              return (   
                  <div>   
                     <section id="testimonials" className="section-bg">
                  <div className="container" >
                    <header className="section-header">
                      <h3>Testimonials</h3>
                    </header>
                    <div className="row justify-content-center">
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
                  </div>
                </section>{/* #testimonials */} 
                <section id="why-us" className="wow fadeIn">
           
                <div className="container" >
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
          </div>   
              )   
            }   
          }    
export default Testimonials