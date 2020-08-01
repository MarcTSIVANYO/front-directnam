
import React,{Component} from 'react';   
import OwlCarousel from 'react-owl-carousel';   
import 'owl.carousel/dist/assets/owl.carousel.css';   
import 'owl.carousel/dist/assets/owl.theme.default.css';   
export class Clients extends Component {  
    render()  
   
            {      
              return (   
                  <div>    
            <div className='container-fluid' >    
              <OwlCarousel items={5} margin={8} autoplay ={true} >    
                  <img src="assets/img/clients/client-1.png" alt="" />
                  <img src="assets/img/clients/client-2.png" alt="" />
                  <img src="assets/img/clients/client-3.png" alt="" />
                  <img src="assets/img/clients/client-4.png" alt="" />
                  <img src="assets/img/clients/client-5.png" alt="" />
                  <img src="assets/img/clients/client-6.png" alt="" />
                  <img src="assets/img/clients/client-7.png" alt="" />
                  <img src="assets/img/clients/client-8.png" alt="" /> 
              </OwlCarousel>   
            </div>   
          </div>   
              )   
            }   
          }    
export default Clients