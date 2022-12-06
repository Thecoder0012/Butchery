import React from 'react'
import image from "../images/frontpage.jpeg"
import "../css/Products.css";


export const Products = () => {
    return (

      <><h1>Herunder kan du se en oversigt over alle vores produkter</h1>
      
      <div className="img-wrapper">
        <div className="together-image-text"><div><img src={image} />
         <div className="description">I am a description
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


