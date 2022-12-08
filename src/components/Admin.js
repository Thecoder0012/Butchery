import "../css/Admin.css";
import React, { useEffect, useState } from 'react'



export const Admin = () =>  {
    let orderUrl = 'http://localhost:8080/api/v1/order'
    let productUrl = 'http://localhost:8080/api/v1/product'

    const [orders, setOrders] = useState([])
    const [products,setProducts] = useState([])

    const [showOrders,setShowOrders] = useState(false)
    const [showProducts,setShowProducts] = useState(false)
    const [showAdd, setShowAdd] = useState(false)

    const [productName, setProductName] = useState()
    const [price,setPrice] = useState()
    const [weight,setWeight] = useState()

    console.log(showAdd);
    console.log(showProducts);
    console.log(showOrders);

    useEffect(() => {
        async function getOrders(){
            const res = await fetch(orderUrl)
            const data = await res.json()
            setOrders(data)
        }

        async function getProducts(){
            const res = await fetch(productUrl)
            const data = await res.json()
            setProducts(data)
        }

        getProducts()
        getOrders()
    },[])

    const createProduct = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Accept' : 'application/json',
            'Content-Type':'application/json'},
            body: JSON.stringify({
            'name' : productName,
            'price': price,
            'weight' : weight
          })
        };
         await fetch(productUrl,options);
         window.location.reload(false);
        
        }



    return (
        <div>


            <div className="buttons">
                <button className="add" onClick={()=>
                    {{
                        if(showProducts || showOrders){
                            setShowOrders(false)
                            setShowProducts (false);
                        }

                        setShowAdd(!showAdd)

                    }}}
                        
                        >Tilføj produkt</button>
                <button onClick={() =>
                    {{
                        if(showAdd || showOrders){
                            setShowAdd(false)
                            setShowOrders(false)
                        }
                        setShowProducts(!showProducts)
                    }}}
                    
                    >Produkter</button>
                <button onClick={ ()=>
                    {{
                        if(showAdd || showProducts){
                            setShowAdd(false)
                            setShowProducts(false)   
                        }
                        setShowOrders(!showOrders)
                    }}}
                    >Bestillinger</button>
            </div>

            

    <div className="form-container">
        <form className={showAdd ? "show-form" : "hide-form"}>
        <h1>Opret nyt produkt</h1>

        <div className="input-form">
        <label>Produkt</label>
        <input type={"text"} value={productName} onChange={(e)=>{setProductName(e.target.value)}}/>

        <label>Pris i kr</label>
        <input type={"number"} value={price} onChange={(e)=>{setPrice(e.target.value)}} />

        <label>vægt</label>
        <input type={"number"} value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>

        <input onClick={createProduct} type={"submit"}/>
            </div>
        </form>
    </div>

           
            <div className={showProducts ? "admin-product-container" : "hide-admin-products"} >
            <div className="title">
                <h1>Produkter</h1>
            </div>

            <div className="products-container">

                <table>
                    <thead>
                        <tr>
                            <th>Produkt-id</th>
                            <th>Produkt</th>
                            <th>Pris</th>
                            <th>Vægt</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {products.map((product, i) => (
                        <tbody className="products" key={i}>
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price} kr</td>
                                <td>{product.weight} gram</td>
                                <td>
                                    <button className="delete">Slet</button>
                                    <button className="update">Opdater</button>
                                    </td>

                            </tr>
                        </tbody>
                    ))}

                    

                    
                </table>
                </div>




        
            </div>        
            <div className={showOrders ? "admin-orders-container" : "hide-admin-orders"} >
            <div className="title">
                <h1>Bestillinger</h1>
            </div>

            <div className="order-container">
                <table>
                    <thead>
                        <tr>
                            <th>Bestillings-nummer</th>
                            <th>Kundenavn</th>
                            <th>Produkt</th>
                            <th>Afhentningstid</th>
                            <th>Antal</th>
                        </tr>
                    </thead>
                    {orders.map((order, i) => (
                             <tbody className="products" key={i}>
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.product.name}</td>
                                <td>{order.pickUpTime}</td>
                                <td>{order.quantityOfProducts}</td>

                            </tr>
                        </tbody>
                    ))}

                    

                    
                </table>
                </div>
                
            </div>
        </div>
    )
  
}