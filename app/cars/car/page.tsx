"use client"
import React, {useState} from 'react'
import { useSearchParams } from 'next/navigation'

export default function Car() {
    const [cars, setCars] = useState([
        {id: 1, name: 'Cobalt', position: 1, color: 'Grey', year: 2025, price: 19000},
        {id: 2, name: 'Gentra', position: 3, color: 'Black', year: 2027, price: 23000},
        {id: 3, name: 'Malibu', position: 2, color: 'White', year: 2029, price: 50000},
    ])
    const query = useSearchParams()
    let id = Number(query.get('id'))
  return (
    <div>
        <div className="container h-[100vh]">
            {
                cars?.filter(item => item.id == id)?.map((item, index) => {
                    return <div key={index}>
                    <p>Name: {item.name}</p>
                    <p>Position: {item.position}</p>
                    <p>Color: {item.color}</p>
                    <p>Year: {item.year}</p>
                    <p>Price: {item.price}</p>
                </div>
                })
            }
        </div>
    </div>
  )
}
