"use client";
import React, { useState } from 'react'
import Link from 'next/link'

export default function Details() {
  const [details, setDetails] = useState([
    {id: 1, name: 'Rolex', color: 'white', price: 12000},
    {id: 2, name: 'IWatch', color: 'black', price: 600},
    {id: 3, name: 'Jacob&Co', color: 'pink', price: 130000}
  ])
  return (
    <div className='text-center m-4'>
      <table className='w-[700px]'>
        <thead>
          <tr className='border-b-2'>
            <th>#</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              details?.map((item, index) => {
                return <tr key={index} className='border-b-2'>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link href={{pathname: '/Router/cabinet/settings/details/detailId', query: {id: index + 1}}} className='underline'>More...</Link>
                  </td>
                </tr>
              })
            }
        </tbody>
      </table>
    </div>
  )
}
