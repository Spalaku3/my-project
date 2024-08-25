import { useState } from 'react';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import About from './Component/About';
import Products from './Component/Products';
import Blog from './Component/Blog';
import Newsletter from './Component/Newsletter';
import MyFooter from './Component/MyFooter';

function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <div id="home"><Home/></div>
        <div id="service"><Services/></div>
        <div id="about"><About/></div>
        <div id="product"><Products/></div>
        <div id="testimonial"><Blog/></div>
        <div id="faq"><Newsletter/></div>
        <MyFooter/>
      </div>
    </>
  );
}

export default App;
