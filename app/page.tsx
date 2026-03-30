"use client";
import "./globals.css";
import styles from "../styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Header from "@/components/Header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Header />
    <div className="homeContainer">
      <div className={styles.slider}>
        <div className={styles.sliderContent}>
          <h1>PROMETEX Display</h1>
          <p style={{ marginBottom: "3rem", fontSize: "1rem", lineHeight: "1.75rem" }}>
          Prometex HD Co., Ltd. operates four business segments: sales of solar panels for industrial use, sales of solar panels for detached houses, installation of solar panels for detached houses, and export of solar panels overseas.          </p>
          <button
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            Shop Now
            <svg
              width="78"
              height="15"
              viewBox="0 0 78 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M77.7071 8.07106C78.0976 7.68054 78.0976 7.04737 77.7071 6.65685L71.3431 0.292885C70.9526 -0.0976396 70.3195 -0.0976396 69.9289 0.292885C69.5384 0.683409 69.5384 1.31657 69.9289 1.7071L75.5858 7.36395L69.9289 13.0208C69.5384 13.4113 69.5384 14.0445 69.9289 14.435C70.3195 14.8255 70.9526 14.8255 71.3431 14.435L77.7071 8.07106ZM0 7.36395V8.36395H77V7.36395V6.36395H0V7.36395Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: `.${styles.imageButtonNext}`,
            prevEl: `.${styles.imageButtonPrev}`,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper">
        
          <SwiperSlide>
            <img
              src="/img/slider-1.png"
              alt="Slider"
              className={styles.sliderImg}
            />
            </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/slider-1.png"
              alt="Slider"
              className={styles.sliderImg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/slider-1.png"
              alt="Slider"
              className={styles.sliderImg}
            />
          </SwiperSlide>

          <div className={styles.imageButtonPrev}>
            <FaChevronLeft />
          </div>
          <div className={styles.imageButtonNext}>
            <FaChevronRight />
          </div>
          </Swiper>
      </div>
    </div>
    </div>
  );
}
