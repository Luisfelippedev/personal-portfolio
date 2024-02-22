"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";
import { Card } from "../Card";


export const Carousel = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "center",
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1433,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        },
      },
      {
        breakpoint: 918,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
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

   
  );
};
