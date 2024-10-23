'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { authStore } from '../stores/authStore'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const {processing,isAuthenticated,errorMessage,login,setErrorMessage} = authStore()

  useEffect(() => {
    if(isAuthenticated){
      router.push('/')
    }
  }, [isAuthenticated,router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch (e) {
      setErrorMessage('Invalid credentials Check and try again')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      {processing && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-md'>
            <h2 className='text-xl mb-4'>Loading</h2>
            <p>Please wait while we process your request...</p>
          </div>
        </div>
      )}
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

      {errorMessage && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded shadow-md'>
            <h2 className='text-xl mb-4'>Error</h2>
            <p>{errorMessage}</p>
            <button onClick={() => setErrorMessage(null)} className='mt-4 p-2 bg-red-500 text-white rounded'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignIn
