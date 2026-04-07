"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "../../styles/home.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "../UI/Button";
import { ArrowRightLongIcon } from "../Icon/ArrowRightLongIcon";

export default function HeroSlider() {
  return (
    <div>
      <div className="homeContainer">
        <div className={styles.slider}>
          <div className={styles.sliderContent}>
            <h1>PROMETEX Display</h1>
            <p style={{ marginBottom: "3rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
              sed do eiusmod tempor incididunt ut labore{" "}
            </p>
            <Button variant="primary">
              Shop Now
              <ArrowRightLongIcon />
            </Button>
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
            className="mySwiper"
          >
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
