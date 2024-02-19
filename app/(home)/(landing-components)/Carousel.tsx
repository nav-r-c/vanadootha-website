'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from "next/image";

import Carousel1 from "@/public/landing-page/conflict-1.jpg"
import Carousel2 from "@/public/landing-page/conflict-2.jpg"
import Carousel3 from "@/public/landing-page/conflict-3.jpg"
import Carousel4 from "@/public/landing-page/conflict-4.jpg"

export default function Carousel() {
    
    return (
        <>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
            effect={'coverflow'}
            spaceBetween={2}
            slidesPerView={3}
            coverflowEffect={{
                rotate : 0,
                scale : 0.9,
                depth: 100,
                modifier: 1,
                stretch : 0,
                slideShadows: false,
            }}
            autoplay={true}
            loop = {true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image src = {Carousel1} width={500} height={500} alt = "Carousel Item" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src = {Carousel2} width={500} height={500} alt = "Carousel Item" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src = {Carousel3} width={500} height={500} alt = "Carousel Item" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src = {Carousel4} width={500} height={500} alt = "Carousel Item" />
            </SwiperSlide>
        </Swiper>
        </>
    )
}