import { faClock, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Home_Card from './Home_Card';

const Home_Cards = () => {

     const cardInfo=[
         {
         title:"Opening Hours",
         description:"We are open for 7/24",
         icon:<FontAwesomeIcon icon={faClock} />,
         background_color:"#16d2c3"
     },
         {
         title:"Our Location",
         description:"Brook Len , New York",
         icon:<FontAwesomeIcon icon={faLocationArrow} />,
         background_color:"#888687"
     },
         {
         title:"Contact Us",
         description:"+7877-889-11",
         icon:<FontAwesomeIcon icon={faPhone} />,
         background_color:"#16d2c3"
     }
    
    ]

    return (        
      
       
        
        <>
           
          {
                cardInfo.map(data =>(
                < Home_Card  data={data}/>)
                )
            }
         
         </>
     
    
          
    
    );
};

export default Home_Cards;