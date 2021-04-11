import React, { useState } from 'react';
import Header from '../../Shared/Header/Header'; 
import AppointForm from '../AppointForm/AppointForm';
import AppointHero from '../AppointHero/AppointHero';
import BookAppoint from '../BookAppointment/BookAppoint';
import BookCard from '../BookCard/BookCard';
 
const Appointment = () => {
    const bookData=[{
        id: 1,
        subject: "FERMENTED SOY  ",
        visitingHour: "8:59 PM",
        totalSpace: 1,
        doctorsName: "Myrilla Shenley"
    }, {
        id: 2,
        subject: "Diaper Rash Paste",
        visitingHour: "12:14 AM",
        totalSpace: 2,
        doctorsName: "Ambrosi Ledley"
    }, {
        id: 3,
        subject: "Alcohol",
        visitingHour: "5:12 PM",
        totalSpace: 3,
        doctorsName: "Kim Hanselmann"
    }, {
        id: 4,
        subject: "Niaspan",
        visitingHour: "2:53 AM",
        totalSpace: 4,
        doctorsName: "Lauryn Saltwell"
    }, {
        id: 5,
        subject: "CLARINS Ever Matte Broad",
        visitingHour: "7:19 PM",
        totalSpace: 5,
        doctorsName: "Starlin Moxom"
    }, {
        id: 6,
        subject: "Velvet Grass",
        visitingHour: "3:19 PM",
        totalSpace: 6,
        doctorsName: "Dulciana Reace"
    }, {
        id: 7,
        subject: "Clearasil Daily Clear",
        visitingHour: "3:43 PM - 4:43 PM",
        totalSpace: 7,
        doctorsName: "Hamilton Foister"
    }, {
        id: 8,
        subject: "Triple Potency HGH",
        visitingHour: "4:15 AM",
        totalSpace: 8,
        doctorsName: "Frankie Rosengarten"
    }, {
        id: 9,
        subject: "RISPERDAL CONSTA",
        visitingHour: "10:18 PM",
        totalSpace: 9,
        doctorsName: "Page Huton"
    }, {
        id: 10,
        subject: "Cyclobenzaprine",
        visitingHour: "5:54 AM",
        totalSpace: 10,
        doctorsName: "Patsy Minithorpe"
    }, {
        id: 11,
        subject: "Duloxetine Hydrochloride",
        visitingHour: "10:24 AM",
        totalSpace: 11,
        doctorsName: "Marisa McNelly"
    }, {
        id: 12,
        subject: "Allopurinol",
        visitingHour: "1:26 AM",
        totalSpace: 12,
        doctorsName: "Vilma Lasty"
    }, {
        id: 13,
        subject: "Polymyxin B Sulfate an",
        visitingHour: "6:46 PM",
        totalSpace: 13,
        doctorsName: "Price Trippitt"
    }, {
        id: 14,
        subject: "Healing Waters Island ",
        visitingHour: "3:07 AM",
        totalSpace: 14,
        doctorsName: "Vladimir Avent"
    }, {
        id: 15,
        subject: "Exuviance CoverBlen",
        visitingHour: "6:01 PM",
        totalSpace: 15,
        doctorsName: "Ninnette Kinze"
    }, {
        id: 16,
        subject: "Bumetanide",
        visitingHour: "12:49 PM",
        totalSpace: 16,
        doctorsName: "Jordanna Rosenfelt"
    }, {
        id: 17,
        subject: "Hydrogen Peroxide",
        visitingHour: "1:08 PM",
        totalSpace: 17,
        doctorsName: "Harrietta Bruggen"
    }, {
        id: 18,
        subject: "Fosinopril Sodium and Hydro",
        visitingHour: "5:26 AM",
        totalSpace: 18,
        doctorsName: "Jarret Philcock"
    }, {
        id: 19,
        subject: "Atropine Sulfate",
        visitingHour: "9:08 AM",
        totalSpace: 19,
        doctorsName: "Janessa Maillard"
    }, {
        id: 20,
        subject: "Mucinex",
        visitingHour: "10:47 AM",
        totalSpace: 20,
        doctorsName: "Esther Gayter"
    }, {
        id: 21,
        subject: "Zodryl DEC 30",
        visitingHour: "11:08 AM",
        totalSpace: 21,
        doctorsName: "Sheela Barz"
    }]
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleChange=(date) => {
         setSelectedDate(date);
         console.log(date);
    }
    return (
        <>
            <Header/>
             <div className="container">
             <div className="row">
             <AppointHero handleChange={handleChange}/>
            
             </div>
                 
             </div>
             <div className="container">
             <div className="row mb-5 mt-5">
            
              <BookAppoint date={selectedDate}/>     
             </div>  
             <div className="row mb-5 mt-5">
                {
                    bookData.map(data=>(<BookCard data={data}/>))
                }
        
             </div>  
             
             </div>
           
        </>
    );
};

export default Appointment;