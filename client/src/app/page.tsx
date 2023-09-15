"use client"
import { isLogin, logOut } from '@/utils/auth'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Home() {

  const [user, setUser] = useState({name: "", email: "", _id: ""}) 
  const router = useRouter()

  useEffect(()=> {
    const authenticate = async () => {
      const loggedIn = await isLogin()
      if(loggedIn.auth) {
        setUser(loggedIn.data)
      } else {
        router.push("/login")
      }
    }
    authenticate()
  }, []);

  const handleLogout = () => {
    logOut();
    toast.success("Logout Successful");
    router.push("/login")
  }

  return (
    <main className='w-full h-screen grid place-items-center bg-blue-600'>
      <div className='p-4 text-white space-y-4'>
        <p className='text-2xl font-bold'>Unique id: {user._id}</p>
        <p>Hi {user.name}, Welcome</p>
        <p>You have logged in using {user.email}</p>
        <button className='bg-accent px-4 py-2 text-white' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </main>
  )
}
