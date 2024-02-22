'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from "next/image";

import Carousel1 from "@/public/landing-page/conflict-1-phone.jpg"
import Carousel2 from "@/public/landing-page/conflict-2-phone.jpg"
import Carousel3 from "@/public/landing-page/conflict-3-phone.jpg"
import Carousel4 from "@/public/landing-page/conflict-4-phone.jpg"

export default function CarouselMobile() {
    
    return (
        <>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
            effect={'coverflow'}
            spaceBetween={-50}
            slidesPerView={3}
            coverflowEffect={{
                rotate : 0,
                scale : 0.9,
                depth: 200,
                modifier: 1,
                stretch : 0,
                slideShadows: true,
            }}
            navigation = {{
                nextEl : 'swiper-next-el-mobile',
                prevEl : 'swiper-prev-el-mobile'
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

        <div>
            <button className="swiper-next-el-mobile">Next</button>
            <button className="swiper-prev-el-mobile">Previous</button>
        </div>
        </>
    )
}