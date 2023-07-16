"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// For Learning Purposes
// Working
export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        focusOnSelect: false,
        swipe: true,
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
              <Image loading="lazy" src="https://links.papareact.com/6ff" className="w-full bg-center bg-cover" width={500} height={400} alt="banner image" />
            </div>
            <div>
              <Image loading="lazy" src="https://links.papareact.com/gi1" className="w-full h-32 bg-center bg-cover" width={500} height={400} alt="banner image" />
            </div>
            <div>
              <Image loading="lazy" src="https://links.papareact.com/7ma" className="w-full h-32 bg-center bg-cover" width={500} height={400} alt="banner image" />
            </div>
            
          </Slider>
        </div>
      );
    }
  }