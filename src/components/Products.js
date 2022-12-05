import React from 'react'
import image from "../images/frontpage.jpeg"
import image1 from "../images/background.jpeg"
import image2 from "../images/frontpage.jpeg"
import "../css/Products.css";


export const Products = () => {
    const images = [
        {
          id: 1,
          image: image
        },
        {
          id: 2,
          image: image1
        },
        {
          id: 3,
          image: image2
        }
      ];

    return (

      <><h1>Herunder kan du se en oversigt over alle vores produkter</h1>
      
      <div className="img-wrapper">
        <div className="together-image-text"><div><img src={image} /> <div className="description">I am a description
        </div></div></div>
        <div className="together-image-text"><div><img src={image} /> <div className="description">I am a description</div></div></div>
        <div className="together-image-text"><div><img src={image} /> <div className="description">I am a description</div></div></div>
        
        <div className="together-image-text"><div><img src={image} /> <div className="description">I am a description</div></div></div>
        <div className="together-image-text"><div><img src={image} /> <div className="description">I am a description</div></div></div>
        <div className="together-image-text"><div><img src={image} /> <div className="description">I am a description</div></div></div>
      </div></>
    );
}

export default Products


