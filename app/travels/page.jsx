"use client";
import React, { useState, useEffect, useRef } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// ✅ Import arrow icons
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Hook for responsive direction
function useIsDesktop(breakpoint = 1024) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const update = () => setIsDesktop(window.innerWidth >= breakpoint);
        update(); // check on mount
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [breakpoint]);

    return isDesktop;
}

export default function BooksPage() {
    const isDesktop = useIsDesktop(); // ✅ use hook inside component
    const swiperRef = useRef(null);

    const images = [
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
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
        <Navigator />

        <main className="flex flex-col flex-auto justify-center items-center px-5 py-20">
            <div className="w-full max-w-6xl flex flex-col items-center gap-6">
                <div className="w-full text-center py-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
                        Travel Gallery
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                        A  collection of unforgettable journeys and adventures
                    </p>
                </div>
            {/* 🌟 3D Rotating Gallery */}
            <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                loop
                slidesPerView="auto"
                autoplay={{
                delay: 3000, // ⏱ 5 seconds
                disableOnInteraction: false, // keep autoplay after user interaction
            }}
                coverflowEffect={{
                rotate: 45,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
                }}
                navigation={false}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-[500px]"
            >
                {images.map((src, idx) => (
                <SwiperSlide
                    key={idx}
                    className="!w-[400px] !h-[400px] flex items-center justify-center"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={src}
                        alt={`slide-${idx}`}
                        fill
                        className="h-auto w-auto"
                    />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>

            {/* Arrows */}
            <div className="flex gap-6">
                <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
                >
                <ChevronLeft size={28} />
                </button>
                <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
                >
                <ChevronRight size={28} />
                </button>
            </div>
            </div>
        </main>

        <Footer />
        </div>
    );
}
