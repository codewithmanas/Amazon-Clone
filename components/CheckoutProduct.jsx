"use client";

import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import primeLogo from "@assets/images/prime_logo.jpg";

function CheckoutProduct({id, title, price, description, category, image, rating}) {

        // Converting to Currency String of price
  const formattedCurrency = price.toLocaleString("en-US", {style: "currency", currency: "USD"});

  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="grid grid-cols-5 ">
        <Image src={image} width={200} height={200} className="object-contain" alt={title} />

        {/* Middle */}
        <div className="col-span-3 mx-5">
            <p className="font-semibold">{title}</p>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-3">{description}</p>

            <div className="mb-5">
                <p>{formattedCurrency}</p>
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                {/* <Image src="https://links.papareact.com/fdw" alt="prime logo" width={200} height={80} */}
                <Image src={primeLogo} alt="prime logo" width={200} height={80}
                  className="w-12"
                />
                <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
              </div>
            )}
        </div>

        {/* Right Add/Remove Buttons */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button">Add to Cart</button>
            <button className="button">Remove from Cart</button>
        </div>

    </div>
  )
}

export default CheckoutProduct