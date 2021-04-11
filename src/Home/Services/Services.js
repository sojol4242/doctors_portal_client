import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Service from '../Services/Service'
const Services = () => {
   const servicesData =[
       {
   name:"Fluoride Treatment",
   img:'https://i.ibb.co/7S6Vm8T/tooth-1.png',
   des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut ea dignissimos iure eveniet sunt aliquam aperiam molestias molestiae perspiciatis."

   },
       {
   name:"Cavity Filling",
   img:'https://i.ibb.co/fGQvyKx/tooth.png',
   des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut ea dignissimos iure eveniet sunt aliquam aperiam molestias molestiae perspiciatis."

   },
       {
   name:"Teeth Whitening",
   img:'https://i.ibb.co/M5qHfXK/001-dental.png',
   des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aut ea dignissimos iure eveniet sunt aliquam aperiam molestias molestiae perspiciatis."

   }

]

    return (
        <>
     
    <CardGroup className="services mt-4 mb-4">
            {
                servicesData.map(data =>(<Service data={data}/>))
            }  
    </CardGroup>
        </>
       
    );
};

export default Services;