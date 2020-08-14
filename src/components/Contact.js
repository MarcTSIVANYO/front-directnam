// Home.js

import React, { Component } from 'react'; 
import Action from './Action';

class Home extends React.Component {
  fSubmit = (e) =>{
    e.preventDefault(); 

     
  }
   
getYear() {
  return new Date().getFullYear();
}

  render() {
    return (
        <div id="contact">   
        
        <Action titre="Rapides et moins chers" description="Envoyez de l'argent à vos proches au Togo. Payez en ligne, et votre bénéficiaire peut retirer l'argent instantanément dans une agence Flooz ou Tmoney." btnName="Faire un transfert!"/>
          {/*==========================
    Footer
  ============================*/}

      <footer id="footer">
        {/* <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4"> 
                <div className="footer-links">
                  <h4>Contact Us</h4>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022<br />
                    United States <br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> info@example.com<br />
                  </p>
                </div>
                <div className="social-links">
                  <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                  <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                  <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
                  <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
                </div> 
              </div>
              <div className="col-lg-12 text-center">
                <div className="form">
                  <h4>Envoyer un message</h4>
                  <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>
                  <form  method="post" role="form" className="contactForm">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Votre nom & prénoms" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validation" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Messages" defaultValue={""} />
                      <div className="validation" />
                    </div>
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage" />
                    <div className="text-center"><button type="submit" title="Send Message">Envoyer</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container">
          <div className="copyright">
            © {this.getYear()} <strong>Opération au pays</strong>. All Rights Reserved. <a href="#" title="Conditions générales">CGU & CGV</a> 
          </div>
          <div className="credits"> 
            Designed by <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>
          </div>
        </div>
      </footer>{/* #footer */}
        </div>
    );
  }
}

export default Home;