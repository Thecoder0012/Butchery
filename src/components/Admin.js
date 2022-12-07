import "../css/Admin.css";
import React, { useEffect, useState } from 'react'



export const Admin = () =>  {
    let endpointUrl = 'http://localhost:8080/api/v1/order'
    const [orders, setOrders] = useState([])


    useEffect(() => {
        async function getData(){
            const res = await fetch(endpointUrl)
            const data = await res.json()
            setOrders(data)
        }

        getData()
    },[])

    return (
        <div>
            <div>
                <h1>Orders</h1>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>orderId</th>
                            <th>customerName</th>
                            <th>pickUpTime</th>
                            <th>quantityOfProducts</th>
                            <th>product</th>
                        </tr>
                    </thead>
                    {orders.map((order, i) => (
                        <tbody key={i}>
                            <tr>
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.pickUpTime}</td>
                                <td>{order.quantityOfProducts}</td>
                                <td>{order.product.name}</td>

                            </tr>
                        </tbody>
                    ))}

                    

                    
                </table>
            </div>
        </div>
    )
  
}