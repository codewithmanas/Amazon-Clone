import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the Carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

// For Learning Purposes
// Not Working

const CarouselComps = () => {
  return (
    <Carousel>
      <div>
        <img src="https://links.papareact.com/6ff" alt="Image 1" />
        
      </div>
      <div>
        <img src="https://links.papareact.com/6ff" alt="Image 2" />
        
      </div>
      <div>
        <img src="https://links.papareact.com/6ff" alt="Image 3" />
        
      </div>
    </Carousel>
  );
};

export default CarouselComps;
