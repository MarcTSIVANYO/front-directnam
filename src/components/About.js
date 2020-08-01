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
        </div>
    );
  }
}

export default Header;