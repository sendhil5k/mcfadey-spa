import React, { useState, useEffect } from "react";

export default function Newarrivals() {
    const [itemList, setitemList] = useState([]);
   // const [count, setCount] = useState(0);
    useEffect(function () {
        fetch('https://dummyjson.com/products/')
            .then(res => res.json())
            .then(data => setitemList(data.products))
    }, []);



    return (
        <div className="container">
            <h2>New Arrival page</h2>
            <table>
                <thead>
                    <tr>
                      {  /*<th>Product</th>*/}
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.map((item, index) => (
                        <tr key={index}>
                            {/*<td><img src={item.images[`${count}`]} width="20%" alt="" /></td>*/}
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <pre>{JSON.stringify(itemList, null, 2)}</pre>
        </div>
    )
}