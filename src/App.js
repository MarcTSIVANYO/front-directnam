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

// let github_link = 'https://marctsivanyo.github.io/apis/dataOperation.json';
// $.getJSON(github_link, function(data) {
//      //data is the JSON string
//      console.log(data);
// });

  function load(url) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    })
  }
  
  load('https://marctsivanyo.github.io/apis/dataOperation.json')
    .then(function(dataOperation) {
      console.log(dataOperation);
    })
    .catch(function(err) {
      console.error('Something went wrong!', err);
    })


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
        <Tarif data={this.state.landingPageData.Tarif}/> 
        {/* <Faq/>  */} 
        <Contact data={this.state.landingPageData.Contact} />
      </div> 
  );
}
}

export default App;
