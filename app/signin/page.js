'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result.error) {
      // Handle error (e.g., show error message)
      console.error(result.error)
    } else {
      router.push('/')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl mb-4'>Sign In</h2>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='w-full p-2 mb-4 border rounded'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='w-full p-2 mb-4 border rounded'
        />
        <button type='submit' className='w-full p-2 bg-blue-500 text-white rounded'>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
