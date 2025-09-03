"use client";
import React, { useRef } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// ✅ Icons
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FamilyOrbit3D() {
    const swiperRef = useRef(null);

    const images = [
        "/images/family/father.jpg",
        "/images/family/wife.jpg",
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

    return (
        <div className="flex flex-col min-h-screen bg-white">
        <Navigator />

        <main className="flex flex-col flex-auto justify-center items-center px-5 py-20">
            <div className="w-full max-w-6xl flex flex-col items-center gap-6">
                <div className="w-full text-center py-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
                        Family Gallery
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                        A collection of memories with my loved ones
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
