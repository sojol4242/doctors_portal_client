import React from 'react';
import Header from '../Shared/Header/Header';
import Hero from './Hero/Hero';
import Home_Cards from './Home_cards/Home_Cards';
import Services from './Services/Services';

const Home = () => {
    return (
      <>
      <div className="home-bg">
         <Header/>
         <div className="container-fluid"> 
         <div className="home-content row d-flex align-items-center">
            <Hero/>
             
         </div>         
         <div className="home-cards row">
             
            <Home_Cards/>  
         </div>         
                
        </div>
        
         
        </div>
        <div class="container   text-center  mt-5 mb-5">
         <h2 className="services_title">Our Services</h2>
           <h3 className="services_sub_title text-center">Services We provide</h3>
            <Services/>
         </div>
      </>
     
    );
};

export default Home;