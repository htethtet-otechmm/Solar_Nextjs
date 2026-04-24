"use client";
import "./globals.css";
import styles from "../styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Header from "@/component/UserLayout/Header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroSlider from "@/component/Home/HeroSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
    </div>
  );
}
