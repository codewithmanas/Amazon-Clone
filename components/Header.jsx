"use client";

import Image from 'next/image';
import React from 'react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react"
// import { useRouter } from 'next/router'; 
// This doesn't work because it supports
// only page router, not app router.
import { useRouter } from 'next/navigation'
// import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectItems } from '@redux/features/cart/cartSlice';
import { useSelector } from 'react-redux';



function Header() {
    const { data: session } = useSession({})
    // console.log(session);
    const fullUserName = session?.user?.name;
    const firstName =fullUserName ? fullUserName.slice(0,5) : "";
    // console.log(firstName);

    // Router
    const router = useRouter();

    const cartButtonClick = () => {
      // Navigate to the '/checkout' page
      router.push('/checkout');
    }

    const homeButtonClick = () => {
      router.push('/');
    }


    const items = useSelector(state => state.cart.items)

    // Alternative way
    // This is for imported selectItems function from cartSlice
    // const items = useSelector(selectItems)
  return (
    <header className="header">
      <div className="header__container">

        {/* Top Nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 px-3">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              alt="Logo"
              // objectFit="contain"
              className="cursor-pointer object-contain mr-1"
              onClick={homeButtonClick}
            />
          </div>

          {/* Search */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
              <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
              <SearchIcon className="h-12 p-4" />
              
          </div>

          {/* Right Header */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
              <div onClick={session ? signOut : signIn} className="link">
                  <p>Hello, { session ? `${firstName}` : "SignIn"}</p>
                  <p className="font-extrabold md:text-sm">Account & Lists</p>
              </div>

              <div className="link">
                <p>
                  Return
                </p>
                <p className="font-extrabold md:text-sm">
                   and Orders
                </p>
              </div>

              <div className="relative link flex items-center" onClick={cartButtonClick}>
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">Cart</p>
              </div>
          </div>

        </div>

        {/* Bottom Nav */}
        <div className="flex items-center space-x-3 p-2 bg-amazon_blue-light text-white text-sm px-3 whitespace-nowrap">
          <p className="flex items-center link">
          <MenuIcon className="h-6 mr-1" />
            All 
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today&apos;s Deals</p>
          <p className="link hidden md:inline-flex">Electronics</p>
          <p className="link hidden md:inline-flex">Food & Grocery</p>
          <p className="link hidden md:inline-flex">Prime</p>
          <p className="link hidden md:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health and Personal Care</p>
        </div>

      </div>
    </header>
  )
}

export default Header