"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../../styles/home.module.css";

export default function HotPromotions() {
  const promotions = [
    { id: 1, img: "img/promo1.jpg" },
    { id: 2, img: "img/promo2.jpg" },
    { id: 3, img: "img/promo3.png" },
    { id: 4, img: "img/promo1.jpg" },
    { id: 5, img: "img/promo3.png" },
  ];

  return (
    <div className={styles.hotPromotions}>
      <h2 className={styles.promoTitle}>HOT Promotions</h2>
      <div className={styles.hotPromoContainer}>
        {" "}
        <button className={`${styles.promoBtnPrev} custom-prev`}>
          <FaChevronLeft size={30} />
        </button>
        <button className={`${styles.promoBtnNext} custom-next`}>
          <FaChevronRight size={30} />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {promotions.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.hotPromoSlide}>
                <img
                  src={item.img}
                  className={styles.hotPromoImg}
                  alt="promo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
