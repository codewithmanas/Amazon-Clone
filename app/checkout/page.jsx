"use client";

import Header from '@components/Header'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import ReduxProvider from '@components/ReduxProvider';
import CheckoutProduct from '@components/CheckoutProduct';

function Page() {

  const items = useSelector(state => state.cart.items);

  

  // console.log(items.length);
  // console.log(items);

  return (
    <ReduxProvider>
    <div className="bg-gray-100">
        <Header />
        <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* Left */}
            <div className="flex-grow m-5 shadow-sm">
              <Image
                src="https://links.papareact.com/ikj"
                width={1020}
                height={250}
                alt="checkout image"
                className="object-contain"
              />

              <div className="flex flex-col p-5 space-y-10 bg-white">
                <h1 className="text-3xl border-b pb-4">
                  {items.length === 0 ? "Your Amazon cart is empty" : "Shopping Cart"}
                </h1>

                {items.map((items, index) => {
                  return (
                    <CheckoutProduct 
                        key={index}
                        id={items.id}
                        title={items.title}
                        price={items.price}
                        description={items.description}
                        category={items.category}
                        image={items.image}
                        rating={items.rating}
                        />
                  )
                })}
              </div>

            </div>


            {/* Right */}
        </main>
    </div>
    </ReduxProvider>
  )
}

export default Page;