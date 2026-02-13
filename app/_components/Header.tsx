// "use client"
// import Image from 'next/image'
// import { Button } from "@/components/ui/button";
// import Link from 'next/link'
// import { UserButton, useUser, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
// import { usePathname } from 'next/navigation';

// const menuOptions = [
//   {
//     name: "Home",
//     path: '/'
//   },
//   {
//     name: 'Pricing',
//     path: '/pricing'
//   },
//   {
//     name: 'About us',
//     path: '/about-us'
//   }
// ];

// function Header() {
//   const { user } = useUser();
//   const path = usePathname();  // hook - return us the current URL - my-trip, create-new-trip
//   // home Screen it show - create new trip -- when click get started it show - my trip
//   // console.log(path);

//   return (
//     <div className='sticky top-0 z-50 flex justify-between items-center p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800'>
//       {/* Logo */}
//       <div className='flex items-center gap-x-2'>
//         <Image src={"/logo.svg"} alt='logo' width={30} height={30} />
//         <h2 className='font-bold text-2xl '>AI Trip Planner</h2>
//       </div>

//       {/* Menu Options */}
//       <div className='flex gap-8 items-center'>
//         {menuOptions.map((menu) => (
//           <Link key={menu.path} href={menu.path}>
//             <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
//           </Link>
//         ))}
//       </div>

//       {/* Get Started Button */}
//       {/* Get Started Button */}
//       <div className='flex gap-5 items-center'>
//         <SignedOut>
//           <SignInButton mode="modal">
//             <Button>Get Started</Button>
//           </SignInButton>
//         </SignedOut>

//         <SignedIn>
//           {path == "/create-new-trip" ? (
//             <Button className="rounded-full bg-gradient-to-r from-primary to-blue-600 text-white hover:opacity-90 transition-opacity" asChild>
//               <Link href={'/my-trips'}>My Trips</Link>
//             </Button>
//           ) : (
//             <Button className="rounded-full" asChild>
//               <Link href={'/create-new-trip?mode=create'}>Create New Trip</Link>
//             </Button>
//           )}
//           <UserButton />
//         </SignedIn>
//       </div>
//     </div>
//   )
// }

// export default Header



"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { UserButton, useUser, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from "lucide-react";

const menuOptions = [
  { name: "Home", path: '/' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About us', path: '/about-us' }
];

function Header() {
  const { user } = useUser();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800'>
      
      <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>
        
        {/* Logo */}
        <div className='flex items-center gap-x-2'>
          <Image src={"/logo.svg"} alt='logo' width={30} height={30} />
          <h2 className='font-bold text-2xl'>AI Trip Planner</h2>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 items-center'>
          {menuOptions.map((menu) => (
            <Link key={menu.path} href={menu.path}>
              <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className='hidden md:flex gap-5 items-center'>
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="rounded-full">Get Started</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            {path == "/create-new-trip" ? (
              <Button className="rounded-full bg-primary text-white hover:opacity-90" asChild>
                <Link href={'/my-trips'}>My Trips</Link>
              </Button>
            ) : (
              <Button className="rounded-full" asChild>
                <Link href={'/create-new-trip?mode=create'}>Create New Trip</Link>
              </Button>
            )}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white dark:bg-gray-900 shadow-lg">
          
          {menuOptions.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium hover:text-primary"
            >
              {menu.name}
            </Link>
          ))}

          <SignedOut>
            <SignInButton mode="modal">
              <Button className="w-full rounded-full mt-2">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            {path == "/create-new-trip" ? (
              <Link href="/my-trips" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full bg-primary text-white mt-2">
                  My Trips
                </Button>
              </Link>
            ) : (
              <Link href="/create-new-trip?mode=create" onClick={() => setIsOpen(false)}>
                <Button className="w-full rounded-full mt-2">
                  Create New Trip
                </Button>
              </Link>
            )}

            <div className="pt-2">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      )}
    </div>
  )
}

export default Header




