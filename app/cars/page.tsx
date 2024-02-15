"use client";
import React, { useState } from 'react'
import Link from 'next/link';

export default function Cars() {
    const [cars, setCars] = useState([
        {name: 'Cobalt', position: 1, color: 'Grey', year: 2025, price: 19000},
        {name: 'Gentra', position: 3, color: 'Black', year: 2027, price: 23000},
        {name: 'Malibu', position: 2, color: 'White', year: 2029, price: 50000},
    ])
  return (
    <div>
        <div className="container h-[100vh] grid place-items-center">
            <div className="parent">
                <table className='w-[700px]'>
                    <thead>
                        <tr className='border-b-2' >
                            <th>#</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cars?.map((item, index) => {
                                return <tr key={index} className='border-b-2 text-center'>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.position}</td>
                                    <td>{item.color}</td>
                                    <td>{item.year}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link href={{pathname: 'cars/car', query: {id: index + 1}}} className='underline'>More...</Link>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
