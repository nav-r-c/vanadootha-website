'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules";

import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from "next/image";

import Carousel1 from "@/public/landing-page/conflict-1.jpg"
import Carousel2 from "@/public/landing-page/conflict-2.jpg"
import Carousel3 from "@/public/landing-page/conflict-3.jpg"
import Carousel4 from "@/public/landing-page/conflict-4.jpg"

import Carousel1Mobile from "@/public/landing-page/conflict-1-phone.jpg"
import Carousel2Mobile from "@/public/landing-page/conflict-2-phone.jpg"
import Carousel3Mobile from "@/public/landing-page/conflict-3-phone.jpg"
import Carousel4Mobile from "@/public/landing-page/conflict-4-phone.jpg"


export default function Carousel() {
    
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
                nextEl : ".swiper-next-el",
                prevEl : '.swiper-prev-el'
            }}
            autoplay={true}
            loop = {true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image src = {Carousel1} width={500} height={500} alt = "Carousel Item" className="hidden md:block" />
                <Image src = {Carousel1Mobile} width={500} height={500} alt = "Carousel Item" className="block md:hidden" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src = {Carousel2} width={500} height={500} alt = "Carousel Item" className="hidden md:block" />
                <Image src = {Carousel2Mobile} width={500} height={500} alt = "Carousel Item" className="block md:hidden" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src = {Carousel3} width={500} height={500} alt = "Carousel Item" className="hidden md:block" />
                <Image src = {Carousel3Mobile} width={500} height={500} alt = "Carousel Item" className="block md:hidden" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src = {Carousel4} width={500} height={500} alt = "Carousel Item" className="hidden md:block" />
                <Image src = {Carousel4Mobile} width={500} height={500} alt = "Carousel Item" className="block md:hidden" />
            </SwiperSlide>
        </Swiper>
        <div>
            <button className="swiper-prev-el m-5">
                <CiCircleChevLeft className = "text-accent-1 text-5xl transition-all ease-in-out lg:hover:scale-110" />
            </button>
            <button className="swiper-next-el m-5">
                <CiCircleChevRight className = "text-accent-1 text-5xl transition-all ease-in-out lg:hover:scale-110" />
            </button>
        </div>
        </>
    )
}