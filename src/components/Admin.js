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
    const [showEdit,setShowEdit] = useState(false) 

    const [loading,setLoading] = useState(false)

    const [productName, setProductName] = useState()
    const [price,setPrice] = useState()
    const [weight,setWeight] = useState()
    const [productValue, setProductValue] = useState(0)

    async function getOrders(){
        const res = await fetch(orderUrl)
        const data = await res.json()
        setOrders(data)
    }

    async function getProducts(){
        var millisecondsToWait = 2000;
        setTimeout(function() {
            // Whatever you want to do after the wait
        }, millisecondsToWait);
        const res = await fetch(productUrl)
        const data = await res.json()
        setProducts(data)
        setLoading(false)

    }
    useEffect(() => {
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

    const deleteProductById = async (id) => {
        if(!window.confirm("Er du sikker på, at du vil slette dette produkt?")){
            return
        }
        await fetch(productUrl + '/' + id, {
            method: "DELETE"
        })
        setLoading(true)

        var sleep = 600;
        setTimeout(function() {
            getProducts()
        }, sleep);        
}

    const updateProductById = async(product, id) => {
        const response = await fetch(productUrl + '/' + id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        await response.json();
        getProducts()
        setShowEdit(false)
        setShowProducts(true)
    }

    return (

        <div>


            <div className="buttons">
                <button className="add" onClick={()=>
                    {{
                        if(showProducts || showOrders || showEdit){
                            setShowOrders(false)
                            setShowProducts (false);
                            setShowEdit(false)
                        }

                        setShowAdd(!showAdd)

                    }}}
                        
                        >Tilføj produkt</button>
                <button onClick={() =>
                    {{
                        if(showAdd || showOrders || showEdit){
                            setShowAdd(false)
                            setShowOrders(false)
                            setShowEdit(false)

                        }
                        setShowProducts(!showProducts)
                    }}}
                    
                    >Produkter</button>
                <button onClick={ ()=>
                    {{
                        if(showAdd || showProducts || showEdit){
                            setShowAdd(false)
                            setShowProducts(false)  
                            setShowEdit(false)
 
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

    
    <div className={showEdit ? "edit-container" : "hide-edit-container"}>

    <div className="title">
         <h1>Produkter</h1>
    </div>

<div className="products-container">


    <table>

    <thead>
            <tr>
                <th>Produkt</th>
                <th>Pris</th>
                <th>Vægt</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody className="products">

         {products.map(obj => {
                if(productValue === obj.id){
                 
                    return(
                    <>
                    
                <td><input type={"text"}  placeholder={obj.name} value={productName} onChange={(e)=>{setProductName(e.target.value)}}/></td>
                <td><input type={"number"} placeholder={obj.price} value={price} onChange={(e)=>{setPrice(e.target.value)}} /></td>
                <td><input type={"number"} placeholder={obj.weight}  value={weight} onChange={(e)=>{setWeight(e.target.value)}}/></td>
                <td><input onClick={() =>{
                   var editedProduct = {
                        'name' : productName,
                        'price': price,
                        'weight' : weight
                    }

                    if (!editedProduct.name){
                        editedProduct.name = obj.name;
                    }
                    if(!editedProduct.price){
                        editedProduct.price = obj.price;
                    }
                    if(!editedProduct.weight){
                        editedProduct.weight = obj.weight;
                    }
                    updateProductById(editedProduct,obj.id)
                }} type={"submit"}/></td>
        </>
                    )
            }                           
    }
)
    } 
    </tbody>
           </table>
        </div>

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
                    {loading && 
                    <tbody>
                        <tr>
                            <td style={{fontSize:"1.5em" ,textAlign:"center" }} colSpan="5">
                                Loading...
                            </td>
                        </tr>
                    </tbody>
            }
            {!loading && 
                  <tbody className="products">
                    {products.map((product, i) => (
                            <tr key={i}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price} kr</td>
                                <td>{product.weight} gram</td>
                                <td>
                                    <button className="delete" onClick={() => {
                                        products.filter((productFiltered) => {
                                            if(product.id === productFiltered.id){
                                                deleteProductById(productFiltered.id)
                                            }
                                        })
                                    }}>Slet</button>
                                    <button onClick={() => {
                                        products.filter((productFiltered => {
                                            if(product.id === productFiltered.id){
                                                setProductValue(productFiltered.id);
                                                setShowEdit(true);
                                                setShowProducts(false);
                                            }
                                        }))
                                    }} className="update">Opdater</button>
                                    </td>

                            </tr>
                    ))}
                        </tbody>
                
                                }
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
                            <th>Total pris</th>

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
                                <td>{order.product.price * order.quantityOfProducts} kr</td>
                            </tr>
                        </tbody>
                    ))}

                    

                    
                </table>
                </div>
                
            </div>
        </div>
    )
  
    }