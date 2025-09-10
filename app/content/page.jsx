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

export default function ContentPage() {
    const isDesktop = useIsDesktop();
    const swiperRef = useRef(null);

    const images = [
        "/images/auctions/auction_12.png",
        '/images/content/maya.png',
        '/images/content/tigerwoods.png',
        '/images/content/image_1.png',
        '/images/content/image_2.jpg',
        '/images/content/image_3.jpg',
        '/images/content/image_4.jpg',
        '/images/content/image_5.jpg',
        '/images/content/image_6.png',
        '/images/content/image_7.png',
    ];

    return (
        <div className="bg-yellow-100 w-full flex flex-col min-h-screen">
        <Navigator />
        <main className="flex-grow flex flex-col w-full my-12 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0">
            {/* Video + Images in one row */}
            <div className="w-full mt-[120px] flex flex-col gap-10 items-start justify-center">
            {/* Video */}
            <div className="bg-black h-[500px] w-full rounded-2xl flex justify-center items-center overflow-hidden shadow-xl mb-10">
                <iframe
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="A Myopic Life Resonated From The Brink of The Abyss"
                className="w-full h-full"
                src="https://www.youtube.com/embed/WeeWHM4zwSQ?si=7MivugWgEJt6zfYU&controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0"
                id="widget2"
                ></iframe>
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
                <div className="flex gap-6 w-full items-center justify-center">
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
