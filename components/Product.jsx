"use client";

import Image from "next/image"
import { useEffect, useState } from "react"
import { StarIcon } from "@heroicons/react/solid";
import primeLogo from "@assets/images/prime_logo.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "@redux/features/cart/cartSlice";

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({id, title, price, description, category, image, rating}) {

  // const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch();

  const [starRating, setStarRating] = useState(null);
  const [hasPrime, setHasPrime] = useState(false);

  // Converting to Currency String of price
  const formattedCurrency = price.toLocaleString("en-US", {style: "currency", currency: "USD"});

  useEffect(() => {
    const random = Math.random();
    const range = MAX_RATING - MIN_RATING + 1;
    const result = Math.floor(random * range) + MIN_RATING;
    setStarRating(result);
    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToCart = () => {
    console.log("addItemToCart Called");
    const product = {id, title, price, description, category, image, rating};
    dispatch(addToCart(product));
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

        <Image src={image} alt={title} width={200} height={200}
            className="object-contain"
        />

        <h4 className="my-3">{title}</h4>

        <div className="flex">
          {Array(starRating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))
          }
        </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>

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

        <button onClick={addItemToCart} className="mt-auto button">Add to Cart</button>

        
    </div>
  )
}

export default Product