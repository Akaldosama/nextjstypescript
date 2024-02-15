"use client";
import React, {useState} from 'react'
import Link from 'next/link';

export default function Products() {
  const [products, setProducts] = useState([
    {name: 'Phone', price: 1200, model: '14pro max', brand: 'Apple'},
    {name: 'TV', price: 1000, model: 'Galaxy', brand: 'Samsung'},
    {name: 'Laptop', price: 600, model: 'intel', brand: 'Acer'}
  ])
  return (
    <div>
      <div className="container h-[100vh] grid place-items-center">
        <table className='w-[700px]'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Model</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((item, index) => {
                return <tr key={index} className='text-center'>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.model}</td>
                  <td>{item.brand}</td>
                  <td>
                  <Link href={{pathname: '/Router/products/product', query: {id: index + 1}}} className='underline'>More...</Link>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
