import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../css/Home.css";
import Welcome from "../images/velkommen.jpg"
import Beef from "../images/Beef1.webp"
import Calf from "../images/Calf1.jpg"
import Lamb from "../images/Lamb.jpg"
import Video from "../videos/MeatVideo.mp4"

const Home = () => {


    return (
        <>
        
            
                 <div className='main'>
                    <div className="overlay"></div>
                        <video src={Video} autoPlay loop muted />
                            <div className="content">
                                <h1>Velkommen hos Slagteren</h1>
                                <p>Se Vores Mest Populære Produkter↴</p>
                            </div>
                </div>
            
            
            <Slide>
            <div className="each-slide-effect-img">
                <div style={{ 'backgroundImage': `url(${Lamb})` }}>
                    <span>Den Mest Populære</span>
                </div>
            </div>
            <div className="each-slide-effect-img">
                <div style={{ 'backgroundImage': `url(${Calf})` }}>
                    <span>Den Stærke Andenplads</span>
                </div>
            </div>
            <div className="each-slide-effect-img">
                <div style={{ 'backgroundImage': `url(${Beef})` }}>
                    <span>Den Tredje i Rækken</span>
                </div>
            </div>
        </Slide>
        </>
    );
};

export default Home;