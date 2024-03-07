"use client";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Card";

export const Carousel = () => {
  // const sliderRef:any = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Mude o slide manualmente para o próximo

  //       sliderRef.current?.slickNext();

  //   }, 300); // Intervalo em milissegundos entre cada transição

  //   return () => clearInterval(interval); // Limpe o intervalo ao desmontar o componente
  // }, []);

  const settings = {
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    className: "center",
    accessibility: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
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
        },
        slidesToScroll: 1,
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* <Slider ref={sliderRef} {...settings}> */}
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
