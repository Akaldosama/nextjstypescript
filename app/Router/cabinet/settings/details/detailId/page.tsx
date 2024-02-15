"use client";
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function DetailId() {
    const [details, setDetails] = useState([
        {id: 1, name: 'Rolex', color: 'white', price: 12000},
        {id: 2, name: 'IWatch', color: 'black', price: 600},
        {id: 3, name: 'Jacob&Co', color: 'pink', price: 130000}
    ])

    const query = useSearchParams()
    let id = Number(query.get('id'))
  return (
    <div className='m-4 text-2xl'>
        Detail Id <br />
        <div>
        {
                details?.filter(item => item.id == id)?.map((item, index) => {
                    return <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Color: {item.color}</p>
                    <p>Price: {item.price}</p>
                </div>
                })
            }
        </div>
    </div>
  )
}
