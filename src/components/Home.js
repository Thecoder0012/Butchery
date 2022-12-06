import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "../css/Home.css";

const Home = () => {

    
    const images = [
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg",
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg",
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Den Mest Populære</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Den Stærke Andenplads</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Den Tredje i Rækken</span>
                </div>
            </div>
        </Slide>
    );
};

export default Home;