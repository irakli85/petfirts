import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/header';
import Main from './components/main';
import Sectionone from './components/sectionOne';
import Sectiontwo from './components/sectionTwo';
import Sectionthree from './components/sectionThree';
import Sectionfour from './components/sectionFour';
import Sectionfive from './components/scectionfive';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>   
    <Header/>
    <Main/>
    <Sectionone/>
    <Sectiontwo/>
    <Sectionthree/>
    <Sectionfour/>    
    <Sectionfive/>    
    <Footer/>    
  </>
);

