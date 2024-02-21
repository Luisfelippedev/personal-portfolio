"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.scss";

export const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <div className={styles.card}>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
      
        </div>
      </div>
      <div>
        <div className={styles.card}>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
        </div>
      </div>
      <div>
        <div className={styles.card}>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
          <p>asdasd</p>
        </div>
      </div>

      {/* <div>
        <h3 style={{ backgroundColor: 'red',color: "black", fontSize: 50, textAlign: 'center' }}>1123asdas123</h3>
      </div> <div>
        <h3 style={{ backgroundColor: 'red',color: "black", fontSize: 50, textAlign: 'center' }}>1123asdas123</h3>
      </div> <div>
        <h3 style={{ backgroundColor: 'red',color: "black", fontSize: 50, textAlign: 'center' }}>1123asdas123</h3>
      </div> <div>
        <h3 style={{ backgroundColor: 'red',color: "black", fontSize: 50, textAlign: 'center' }}>1123asdas123</h3>
      </div> <div>
        <h3 style={{ backgroundColor: 'red',color: "black", fontSize: 50, textAlign: 'center' }}>1123asdas123</h3>
      </div> <div>
        <h3 style={{ backgroundColor: 'red',color: "black", fontSize: 50, textAlign: 'center' }}>1123asdas123</h3>
      </div> */}
    </Slider>
  );
};
