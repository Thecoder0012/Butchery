import "../css/OrderForm.css";
import React, { useEffect, useState } from 'react'



export const Form = () =>  {

  const [product,setProduct] = useState([])

  useEffect(() => {
    async function getData(){
        const res = await fetch('http://localhost:8080/api/v1/product');
        const data = await res.json();
        setProduct(data)
}
        
getData()
},[]);


  return (
    <div>

        <form className="order-form" method="POST">
        <h1>Opret din bestilling</h1>

     <div className="inputs">


          
        <label>Kunde navn</label>
        <input type={"text"} name="customerName" />

        <label>Afhentningstid</label>
        <input type={"datetime-local"} name="pickUpTime" />


        <label>Vælg produkt</label>
        <select key={product.id} name="products">
          <option selected> </option>
        {
          product.map((product,index) => (
              <option value={product.id} key={index}>{product.name} {product.weight} gram</option>
          ))
        }
       </select>


        <label>Antal</label>
        <input type={"number"} name="quantityOfProducts" />

        <input className="submit" type="submit" value={"Bestil"}/>
        </div>
        </form>
    </div>
  )
}
