import "../css/Order.css";
import React, { useEffect, useState } from 'react'




export const Form = () =>  {

  const [product,setProduct] = useState([])
  const [date,setDate] = useState(new Date());

  console.log(pro);

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
        <input step="1" value={date} onChange={(e)=>{setDate(e.target.value)}} type={"datetime-local"} name="pickUpTime" />


        <label>Vælg produkt</label>
        <select key={product.id} name="products">
          <option selected> </option>
        {
          product.map((product,index) => (
              <option onChange={(e)=>{setPro(e.target.value)}} value={product} key={product.id}>{product.name}</option>
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
