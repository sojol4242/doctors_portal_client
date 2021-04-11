import React from 'react';
import { CardGroup } from 'react-bootstrap';
import '../Appointment.css'
import BookCard from '../BookCard/BookCard';
const BookAppoint = ({date}) => {
    
 
    return (
         <>
         <div className="col-md-12 text-center">
            <h2 className="book_appoint_title"> Available Appointments on  <span className="date">{date.toDateString()}</span></h2>
            
         </div>     
         </>
         
    );
};

export default BookAppoint;