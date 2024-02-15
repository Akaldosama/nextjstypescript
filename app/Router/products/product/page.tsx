"use client";
import { useSearchParams } from 'next/navigation'
import React, {useState} from 'react'

export default function Product() {
    const [products, setProducts] = useState([
        {id: 1, name: 'Phone', price: 1200, model: '14pro max', brand: 'Apple'},
        {id: 2, name: 'TV', price: 1000, model: 'Galaxy', brand: 'Samsung'},
        {id: 3, name: 'Laptop', price: 600, model: 'intel', brand: 'Acer'}
    ])
    const query = useSearchParams()
    let id = Number(query.get('id'))
  return (
    <div>
        <div className="container h-[100vh]">
            {
                products?.filter(item => item.id == id)?.map((item, index) => {
                    return <div className="child" key={index}>
                        <p>Product name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Model: {item.model}</p>
                        <p>Brand: {item.brand}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}
