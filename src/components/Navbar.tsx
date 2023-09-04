/* eslint-disable @next/next/no-img-element */
'use client'

import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <nav className='flex justify-between bg-slate-900 text-white py-8 px-16'>
            <Link href='/'>
                <h2 className='text-2xl'>Login with Google</h2>
            </Link>

            { session?.user ?    (
            <div className='flex justify-between items-center w-80'>
                <Link href='/panel'>
                    Panel
                </Link>
                <p>{session.user.name}</p>
                <img src={session.user.image ? session.user.image : ''} alt='img profile' className='w-10 h-10 rounded-full cursor-pointer' />
                <button onClick={async () => {
                    await signOut({
                        callbackUrl: '/'
                    })
                    }} className='bg-red-500 text-white rounded-md p-3 hover:bg-red-700'>
                    Logout
                </button>
            </div>)
            : (
            <button onClick={() => signIn()} className='bg-indigo-500 rounded-md p-3 hover:bg-indigo-700'>
                Sign in
            </button>)
            }
        </nav>
    )
}

export default Navbar