import React from 'react'
import Link from 'next/link'

export default function Settings() {
  return (
    <div className='text-3xl m-4'>
      <h1>Settings</h1>
      <Link href='/Router/cabinet/settings/details' className='text-xl underline'>Go to Details</Link>
    </div>
  )
}
