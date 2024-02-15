"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter()

  const [phone, setPhone] = useState()
  const [password, setPassword] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(phone)
    console.log(password)
    if(phone === 'phone' && password === '1234'){
      router.push('/cars')
    }else{
      alert('Error in phone or password TRY AGAIN!!!')
    }

  }
  return (
    <div>
      <div className="container grid place-items-center text-center h-[100vh]">
        <div className="child">
          <form>
            <label className="text-3xl">Login</label><br />  
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} className="p-3 my-[10px] rounded-sm outline-none" /> <br />
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-3 my-[10px] rounded-sm outline-none" /> <br />
          </form>
            <button className='p-2 border-solid border-2 rounded-lg' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}
