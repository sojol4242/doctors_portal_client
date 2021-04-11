import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointHero = ({handleChange}) => {
    return (
   <>
  
    <div className="col-lg-4 col-sm-8 col-md-4 text-center  offset-md-1 my-5">
      <h3 className="appointment_header py-3">Select Your Date</h3>
      <Calendar
        onChange={handleChange}
         
      />
      </div>
     <div className="hero-image col-sm-8  col-lg-6 col-md-6  offset-md-1 my-5">
            <img className="w-100 h-100" src="https://i.ibb.co/5L4Tjrh/Mask-Group-1.png" alt="hero"/>
      </div> 
 </>
    
      
    );
};

export default AppointHero;