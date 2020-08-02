import React, { Component } from "react";

export class Statistique extends Component {
  render() {
    return (
      <div   className="text-center">
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

      
    );
  }
}

export default Statistique;
