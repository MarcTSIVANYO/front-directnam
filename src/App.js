import React from 'react'; 
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services'; 
import Testimonials from './components/Testimonials';
import Tarif from './components/Tarif';
import Faq from './components/Faq'; 

function App() {
  return (
    <div>
      <Nav/>
      <Header/> 
      <About/> 
      <Services/> 
      <Testimonials/> 
      <Tarif/> 
      <Faq/> 
      <Footer/>
    </div>
  );
}

export default App;
