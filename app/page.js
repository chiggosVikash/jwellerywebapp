'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authStore } from './stores/authStore'


const Page = () => {
  const router = useRouter()
  const {cookiesStatus} = authStore()

  useEffect(()=>{
    const isValid = cookiesStatus()
    console.log("isValid",isValid)
    if(!isValid){
      router.push("/signin")
    }
  },[cookiesStatus,router])

  


 
  return (
    <div className='w-full h-screen py-navBarPadding'>
      <h1>This is Dashbard</h1>
    </div>
  )
}

export default Page;
