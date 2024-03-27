"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "../Card";
import { motion } from "framer-motion";

export const Carousel = () => {
  const settings = {
    initialSlide: 0,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    speed: 2000,
    slidesToShow: 4, // Definido como 1 por padrão para dispositivos móveis
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1, // Breakpoint para dispositivos móveis menores
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1500,
        },
      },
      {
        breakpoint: 560, // Breakpoint para dispositivos móveis médios
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1700,
        },
      },
      {
        breakpoint: 918, // Breakpoint para tablets e dispositivos móveis maiores
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 1700,
        },
      },
      {
        breakpoint: 1024, // Breakpoint para tablets e dispositivos maiores
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1433, // Breakpoint para desktops e dispositivos maiores
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="slider-container"
    >
      <Slider {...settings}>
        <Card type="userExperience" />

        <Card type="devWeb" />

        <Card type="devMobile" />

        <Card type="responsiveLayout" />

        <Card type="innovation" />

        <Card type="api" />
      </Slider>
    </motion.div>
  );
};
