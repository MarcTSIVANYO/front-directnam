import React, { Component } from 'react'; 
import './App.css'; 
import JsonData from './data/data.json';
import Header from './components/Header';
import Features from './components/Features';
import Contact from './components/Contact';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services'; 
import Testimonials from './components/Testimonials';
import Tarif from './components/Tarif';
import Faq from './components/Faq'; 
import Why from './components/Why'; 
import Statistique from './components/Statistique';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }
  render() {
  return ( 
      <div> 
          <Header data={this.state.landingPageData.Header} />
         <Features data={this.state.landingPageData.Features} /> 
          <About data={this.state.landingPageData.About} />
         <Services data={this.state.landingPageData.Services} />
          <Why /> 
        <Testimonials data={this.state.landingPageData.Testimonials} />

        {/* <Transfert data={this.state.landingPageData.Transfert} /> */}
         <Statistique/> 
        <Tarif data={this.state.landingPageData.Tarif}/> 
        {/* <Faq/>  */} 
        <Contact data={this.state.landingPageData.Contact} />
      </div> 
  );
}
}

export default App;
