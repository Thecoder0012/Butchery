import "../css/Admin.css";
import React, { useEffect, useState } from 'react'
import useToken from '../components/UseToken';
import Login from '../components/Login/Login';



export const Admin = () => {
    


    let endpointUrl = 'http://localhost:4000/api/v1/order'
    const [orders, setOrders] = useState([])


    useEffect(() => {
        async function getData(){
            const res = await fetch(endpointUrl)
            const data = await res.json()
            setOrders(data)
        }

        getData()
    },[])

    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    } 
    
    return (
        <div>
            <div className="title">
                <h1>Bestillinger</h1>
            </div>

            <div className="products-container">
                <table>
                    <thead>
                        <tr>
                            <th>Bestillings-nummer</th>
                            <th>Kundenavn</th>
                            <th>Produkt-navn</th>
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
    );

   

    
  
}

export default Admin;