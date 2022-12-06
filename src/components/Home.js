import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../css/Home.css";
import Welcome from "../images/velkommen.jpg"
import Beef from "../images/Beef1.webp"
import Calf from "../images/Calf1.jpg"
import Lamb from "../images/Lamb.jpg"

const Home = () => {

    
    const images = [
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg",
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg",
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${Welcome})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${Lamb})` }}>
                    <span>Den Mest Populære</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${Calf})` }}>
                    <span>Den Stærke Andenplads</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${Beef})` }}>
                    <span>Den Tredje i Rækken</span>
                </div>
            </div>
        </Slide>
    );
};

export default Home;