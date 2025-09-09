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

// ✅ Import arrow icons
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Hook for responsive direction
function useIsDesktop(breakpoint = 1024) {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const update = () => setIsDesktop(window.innerWidth >= breakpoint);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [breakpoint]);

    return isDesktop;
}

    export default function Auction() {
    const isDesktop = useIsDesktop();
    const swiperRef = useRef(null);

    const images = [
    "/images/auctions/auction_1.jpg",
    "/images/auctions/auction_2.jpg",
    "/images/auctions/auction_4.jpg",
    "/images/auctions/auction_5.jpg",
    "/images/auctions/auction_6.jpg",
    "/images/auctions/auction_7.jpg",
    "/images/auctions/auction_9.jpg",
    "/images/auctions/auction_10.jpg",
    "/images/auctions/auction_11.jpg",
    "/images/auctions/auction_12.png",
    "/images/auctions/auction_13.png",
    ];

    return (
        <div className="flex flex-col min-h-screen bg-yellow-100">
        <Navigator />

        <main className="flex flex-col flex-auto justify-center items-center px-5 py-20">
            <div className="w-full max-w-6xl flex flex-col items-center gap-6">
                <div className="w-full text-center py-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
                        Auction Gallery
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                        Browse a curated selection of exclusive auction items
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
                        className=" h-auto w-auto"
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
