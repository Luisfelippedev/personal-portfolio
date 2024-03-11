"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Card";

export const Carousel = () => {
  const settings = {
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1433,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 918,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 1700,
        },
        slidesToScroll: 1,
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1700,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Card type="userExperience" />
        </div>
        <div>
          <Card type="devWeb" />
        </div>
        <div>
          <Card type="devMobile" />
        </div>
        <div>
          <Card type="responsiveLayout" />
        </div>
        <div>
          <Card type="innovation" />
        </div>
        <div>
          <Card type="api" />
        </div>
      </Slider>
    </div>
  );
};
