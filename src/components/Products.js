import React from 'react'
import Beef from "../images/Beef.jpg"
import Calf from "../images/Calf.webp"
import Chicken from "../images/Chicken.jpg"
import Lamb from "../images/Lamb.jpg"
import "../css/Products.css";


export const Products = () => {

    return (

      <div className="body-products">
      <div className="product-text">
        <h1>slagteren's produkter</h1>
        <h2>Her på siden kan du se vores udvalg af kød, vi sørger altid for at alt er frisk slagtet!</h2>
        <h2>Vores kød lever altid optil de højeste standarder.</h2>
        <h2>Kom forbi vores butik og se det med dine egne øjne eller læg en bestilling herpå hjemmesiden.</h2>
        <div className="last-h2">
        <h2>Vi har din bestilling klar til afhentning på dit ønskede tidspunkt. </h2>
        </div>
      </div>
      
      <div className="img-wrapper">
        <div className="together-image-text"><div><img src={Beef} /> <div className="description"><p>Vores øksekød </p> </div></div></div>
        <div className="together-image-text"><div><img src={Calf} /> <div className="description"><p>Vores kalvekød </p></div></div></div>
        <div className="together-image-text"><div><img src={Chicken} /> <div className="description"><p>Vores kylling </p></div></div></div>
        
        <div className="together-image-text"><div><img src={Lamb} /> <div className="description"><p>Vores lammekød </p></div></div></div>
        <div className="together-image-text"><div><img src={Beef} /> <div className="description"><p>Vores ....</p></div></div></div>
        <div className="together-image-text"><div><img src={Beef} /> <div className="description"><p>Vores ....</p></div></div></div>
      </div></div>
    );
}

export default Products


