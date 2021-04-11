import React from 'react';

const Home_Card = ({data}) => {
    const {title,description,icon,background_color}=data
    console.log(background_color);
    return (
     <div className="home_card col-lg-2 col-md-3 col-sm-4" style={{background:`${background_color}`}}>
            <div className="card_body d-flex align-items-center justify-content-center">
            <div className="card_icon px-3">{icon}</div>
            <div className="card-info">
                <h5 className="card_title">{title}</h5>
                <small className="card_des">{description}</small>
            </div>
            </div>
        </div>
    );
};

export default Home_Card;