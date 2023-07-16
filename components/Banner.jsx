// import { Carousel } from 'react-responsive-carousel';
// import Image from 'next/image';
// import CarouselComponent from './CarouselComponent';
// import Carousel from './Carousel';

import Image from "next/image"


function Banner() {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
        <div className="carousel">
            <Image src="https://links.papareact.com/6ff" 
            alt="banner image"
            width={500}
            height={400}
            className="w-full bg-center bg-cover" />
        </div>
    </div>
  )
}

export default Banner