import React, { useEffect, useState } from 'react'
import Beef from "../images/Beef.jpg"
import Calf from "../images/Calf.webp"
import Chicken1 from "../images/Chicken1.webp"
import Lamb from "../images/Lamb.jpg"
import Goose1 from "../images/Goose1.webp"
import Duck from "../images/Duck.jpg"
import "../css/Products.css";


export const Products = () => {
  
  const [product,setProduct] = useState([])
  
  
  useEffect(() => {
    async function getData(){
        const res = await fetch('http://localhost:4000/api/v1/product');
        const data = await res.json();
        setProduct(data)
}
        
getData()
},[]);


    const productArr = {
      newArray: []
    };
    productArr.newArray = product.map((product,index) => (
          <p value={product} key={index}>Navn: {product.name}<br></br> Vægt: {product.weight} gram<br></br> Pris: {product.price} Kr.</p>

      ))
    

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
        <div className="together-image-text"><div><img src={Beef} /> <div className="description" key={product.id} name="products">
          <p>{productArr.newArray[0]}</p>
         </div></div></div>

        <div className="together-image-text"><div><img src={Calf} /> <div className="description" key={product.id} name="products">{
          <p>{productArr.newArray[1]}</p>
        }</div></div></div>

        <div className="together-image-text"><div><img src={Chicken1} /> <div className="description" key={product.id} name="products">{
          <p>{productArr.newArray[2]}</p>
        }</div></div></div>
        
        <div className="together-image-text"><div><img src={Lamb} /> <div className="description" key={product.id} name="products">
          <p>{productArr.newArray[3]}</p>
        </div></div></div>

        <div className="together-image-text"><div><img src={Goose1} /> <div className="description" key={product.id} name="products">
          <p>{productArr.newArray[4]}</p>
        </div></div></div>

        <div className="together-image-text"><div><img src={Duck} /> <div className="description" key={product.id} name="products">
          <p>{productArr.newArray[5]}</p>
        </div></div></div>
      </div></div>
    );
}

export default Products


