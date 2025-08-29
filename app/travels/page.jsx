"use client";
import React, { useState, useEffect, useRef } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
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
    const [activeImage, setActiveImage] = useState("/images/travels/travel.jpg");
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

         <main className="flex-col flex-auto flex justify-center items-center">
            {/* ✅ Professional Header */}

            <section className="flex mobile:flex-col laptop:flex-row desktop:flex-row gap-10 w-full max-w-6xl px-5 mt-32">
            {/* LEFT: Preview Panel */}
            <div className="flex-1 flex flex-col items-center">
                <div className="w-auto h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={activeImage}
                    alt="active-preview"
                    width={1000}
                    height={800}
                    className="w-full h-full object-cover"
                />

                </div>

                {/* ✅ Arrow Navigation Below Preview */}
                <div className="flex gap-6 mt-6">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="p-3  text-blue-500 rounded-full hover:bg-blue-700 hover:text-white transition"
                >
                    <ChevronLeft size={28} />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="p-3  text-blue-500 rounded-full hover:bg-blue-700 hover:text-white transition"
                >
                    <ChevronRight size={28} />
                </button>
                </div>
                <div className="w-full text-center py-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-gray-800">
                        Travel Gallery
                    </h1>
                    <p className="mt-2 text-gray-500 text-lg">
                        A  collection of unforgettable journeys and adventures
                    </p>
                </div>
            </div>

            {/* RIGHT: Gallery Slider */}
            <div className="w-full desktop:w-[300px] desktop:h-[700px] flex justify-center items-center">
                <Swiper
                direction={isDesktop ? "vertical" : "horizontal"}
                slidesPerView={3}
                spaceBetween={40}
                centeredSlides
                loop
                modules={[Navigation]}
                onSlideChange={(swiper) =>
                    setActiveImage(images[swiper.realIndex])
                }
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="h-full w-full"
                >
                {images.map((src, idx) => (
                    <SwiperSlide
                    key={idx}
                    className="!h-auto flex items-center justify-center"
                    >
                    <Image
                        src={src}
                        alt={`thumb-${idx}`}
                        width={300}
                        height={200}
                        className={`h-[200px] w-[300px] rounded-lg object-cover cursor-pointer transition-all duration-300 ${
                        activeImage === src
                            ? "ring-4 ring-blue-500 scale-105"
                            : "opacity-70 hover:opacity-100"
                        }`}
                        onClick={() => setActiveImage(src)}
                    />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            </section>
        </main>

        <Footer />
        </div>
    );
}
