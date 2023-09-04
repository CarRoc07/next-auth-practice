/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const PanelPage = () => {
    const { data: session } = useSession();

    return (
        <div className='p-4 text-xl flex flex-col items-center gap-5'>
            <h2>This is a protected route, you can see your private data here!</h2>
            <div className='flex flex-col items-center gap-6'>
                <img src={session?.user?.image ? session.user.image : ''} className='rounded-full cursor-pointer hover:opacity-50' alt='Profile image' />
                <input type="text" value={session?.user?.name ? session.user.name : 'Your name'} className='bg-gray-300 text-black p-3 rounded-lg' />
                <input type="text" value={session?.user?.email ? session.user.email : 'Your email'} className='bg-gray-300 text-black p-3 rounded-lg' />
            </div>
        </div>
    )
}

export default PanelPage