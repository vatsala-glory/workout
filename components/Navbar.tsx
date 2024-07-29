'use client'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react';
const routes: Array<{name: string, path: string}> = [
    {
        name: "Chat",
        path: "/"
    },
    {
        name: "Profile",
        path: "/profile"
    }
];

function Navbar() {
    const pathname = usePathname();
  return (
    <div className="p-4 flex flex-row justify-between items-center bg-black text-white">
        <Link href="/">
            <h1 className='text-2xl font-bold'>Workout</h1>
        </Link>
        <div className="flex gap-x-6 text-lg items-center">
            {routes.map((route,id) => {
                   return <Link
                    key={id}
                    href={route.path}
                    className={pathname === route.path ? 'border-b-2 border-yellow': ''}>
                       {route.name}
                    </Link>
                })
            }
                <SignedIn>
        {/* Mount the UserButton component */}
       
      </SignedIn>
      <SignedOut>
      <UserButton afterSwitchSessionUrl="/"/>
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
               
        </div>
    </div>
  )
}

export default Navbar