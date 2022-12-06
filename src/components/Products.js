import React from 'react'
import Beef from "../images/Beef.jpg"
import Calf from "../images/Calf.webp"
import Chicken from "../images/Chicken.jpg"
import Lamb from "../images/Lamb.jpg"
import "../css/Products.css";


export const Products = () => {

    return (

      <><h1>Herunder kan du se en oversigt over alle vores produkter</h1>
      
      <div className="img-wrapper">
        <div className="together-image-text"><div><img src={Beef} /> <div className="description"><p>I am a description </p> </div></div></div>
        <div className="together-image-text"><div><img src={Calf} /> <div className="description"><p>I am a description </p></div></div></div>
        <div className="together-image-text"><div><img src={Chicken} /> <div className="description"><p>I am a description </p></div></div></div>
        
        <div className="together-image-text"><div><img src={Lamb} /> <div className="description"><p>I am a description </p></div></div></div>
        <div className="together-image-text"><div><img src={Beef} /> <div className="description"><p>I am a description </p></div></div></div>
        <div className="together-image-text"><div><img src={Beef} /> <div className="description"><p>I am a description </p></div></div></div>
      </div></>
    );
}

export default Products


