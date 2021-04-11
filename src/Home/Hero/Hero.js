import React from 'react';
import '../Home.css'

const Hero = () => {
    return (
        <>
           
           <div className="hero-content col-lg-4 col-md-4 offset-md-1 offset-sm-1">
              <h3>Lorem ipsum dolor sit amet.</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis aperiam reprehenderit blanditiis magnam ad nulla obcaecati sint esse, eos pariatur beatae, qui explicabo ullam aliquid molestiae consequuntur odio ipsum?</p>
               <button className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="hero-image col-lg-4 col-md-4 offset-md-1 offset-sm-1">
            <img className="w-100" src="https://i.ibb.co/5L4Tjrh/Mask-Group-1.png" alt="hero"/>
            </div>         
         </>
    );
};

export default Hero;