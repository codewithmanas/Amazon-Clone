"use client";

import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid";


function Product({id, title, price, description, category, image, rating}) {

  const [starRating] = useState(3);
  // const stars = [];
  // for (let i = 0; i < starRating ; i++) {
  //   stars.push(<StarIcon key={i} className="h-5" />)
  // }

  return (
    <div>
        <p>{category}</p>

        <Image src={image} alt={title} width={200} height={200}
            className="object-contain"
        />

        <h4>{title}</h4>

        <div className="flex">
          {Array(starRating).fill().map((_, i) => (
            <StarIcon key={i} className="h-5" />
          ))
          }
        </div>

        {/* Using for loop */}
        {/* <div className="flex">
          {stars}
        </div> */}
        
    </div>
  )
}

export default Product