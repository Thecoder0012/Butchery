import "../css/Order.css";
import React, { useEffect, useState } from 'react'




export const Form = () =>  {

const [product,setProduct] = useState([])
const [customerName, setCustomerName] = useState();
const [pickUpTime, setPickUpTime] = useState(new Date());
const [quantityOfProducts, setQuantity] = useState();
const [orderProduct, setOrderProduct] = useState(0);


useEffect(() => {
    async function getProducts(){
        const res = await fetch('http://localhost:8080/api/v1/product');
        const data = await res.json();
        setProduct(data)
}

getProducts()
},[]);

const createOrder = async (e) => {
  e.preventDefault();
  const url = 'http://localhost:8080/api/v1/order';
  const options = {
      method: 'POST',
      headers: {'Accept' : 'application/json',
      'Content-Type':'application/json'},
      body: JSON.stringify({
      'customerName' : customerName,
      'pickUpTime': pickUpTime,
      'quantityOfProducts' : quantityOfProducts,
      'product': {
        'id' : orderProduct
      } 
    })
  };
  await fetch(url,options);
  window.location.reload(false);
  }



  return (
    <div>
        <form className="order-form" method="POST">
        <h1>Opret din bestilling</h1>
     <div className="inputs">

        <label>Kunde navn</label>
        <input value={customerName} onChange={(e)=>{setCustomerName(e.target.value)}} type={"text"} name="customerName" />

        <label>Afhentningstid</label>
        <input step="1" value={pickUpTime} onChange={(e)=>{setPickUpTime(e.target.value)}} type={"datetime-local"} name="pickUpTime" />

        <label>Vælg produkt</label>
        <select onChange={(e)=>{setOrderProduct(e.target.value)}} name="products">
        <option selected>- -</option>
        {
          product.map((product) => (
              <option value={product.id}  key={product.id}>{product.name} {product.weight} gram</option>
          ))
        }
    </select>
        <label>Antal</label>
        <input value={quantityOfProducts} onChange={(e)=>{setQuantity(e.target.value)}} type={"number"} name="quantityOfProducts" />
        <input className="submit" onClick={createOrder}  type="submit" value={"Bestil"}/>
        </div>
        </form>
    </div>
  )
}
