"use client";
import React, { useRef } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

export default function Galleries() {
    const swiperRef = useRef(null);

    const familyImages = [
    "/images/family/father.jpg",
    "/images/family/wife.jpg",
    "/images/family/wife_and_simeon.jpg",
    "/images/family/image13.jpg",
    "/images/family/daughter.jpg",
    "/images/family/image17.jpg",
    "/images/family/image14.jpg",
    "/images/family/image2.jpg",
    "/images/family/image3.jpg",
    "/images/family/image4.jpg",
    "/images/family/image5.jpg",
    "/images/family/image6.jpg",
    "/images/family/image7.jpg",
    "/images/family/image8.jpg",
    "/images/family/image18.jpg",
    "/images/family/image11.jpg",
    "/images/family/image15.jpg",
    "/images/family/image16.jpg",
    "/images/family/image10.jpg",
    "/images/family/image12.jpg",
    ];

    const travelImages = [
        "/images/travels/travel.jpg",
        "/images/travels/travel_1.jpg",
        "/images/travels/travel_2.jpg",
        "/images/travels/travel_3.jpg",
        "/images/travels/travel_12.jpg",
        "/images/travels/travel_6.jpg",
        "/images/travels/travel_8.jpg",
        "/images/travels/travel_9.jpg",
        "/images/travels/travel_10.jpg",
        "/images/travels/travel_4.jpg",
        "/images/travels/travel_7.jpg",
    ]

    return (
        <div className="flex flex-col min-h-screen !bg-yellow-100">
        <Navigator />
        <main className="flex flex-col flex-auto justify-center items-center px-5 py-20">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
                    Family Gallery
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                    A collection of memories with my loved ones
                    </p>
                </div>

                {/* 🌟 Linear Gallery */}
                <Swiper
                    grabCursor
                    loop
                    slidesPerView={3} // shows 3 slides at once
                    spaceBetween={90} // gap between slides
                    speed={5000} // 👈 how fast it scrolls (higher = slower)
                    autoplay={{
                        delay: 0, // 👈 no delay
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full h-[500px]"
                >
                    {familyImages.map((src, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="!h-[400px] flex items-center justify-center"
                        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                        onMouseLeave={() => swiperRef.current?.autoplay.start()}
                    >
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={src}
                            alt={`slide-${idx}`}
                            fill
                            className="object-cover"
                        />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full flex flex-col items-center gap-6">
                <div className="w-full text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
                    Travel Gallery
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                        A  collection of unforgettable journeys and adventures
                    </p>
                </div>

                {/* 🌟 Linear Gallery */}
                <Swiper
                    grabCursor
                    loop
                    slidesPerView={3} // shows 3 slides at once
                    spaceBetween={90} // gap between slides
                    speed={5000} // 👈 how fast it scrolls (higher = slower)
                    autoplay={{
                        delay: 0, // 👈 no delay
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    freeMode={true}
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full h-[500px]"
                >
                    {travelImages.map((src, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="!h-[400px] flex items-center justify-center"
                        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                        onMouseLeave={() => swiperRef.current?.autoplay.start()}
                    >
                        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={src}
                            alt={`slide-${idx}`}
                            fill
                            className="object-cover"
                        />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
        <Footer />
        </div>
    );
}
