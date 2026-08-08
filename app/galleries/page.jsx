"use client";
import React, { useRef, useState, useEffect } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const Divider = () => (
    <div className="section-divider" aria-hidden="true">
        <span className="section-divider-mark"></span>
    </div>
);

export default function Galleries() {
    const familySwiperRef = useRef(null);
    const travelSwiperRef = useRef(null);
    const [lightboxSrc, setLightboxSrc] = useState(null);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setLightboxSrc(null);
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = lightboxSrc ? "hidden" : "";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [lightboxSrc]);

    const familyImages = [
    "/images/family/father.png",
    "/images/family/wife.png",
    "/images/family/wife_and_simeon.png",
    "/images/family/image13.png",
    "/images/family/daughter.png",
    "/images/family/image17.png",
    "/images/family/image14.png",
    "/images/family/image2.png",
    "/images/family/image3.png",
    "/images/family/image4.png",
    "/images/family/image5.png",
    "/images/family/image6.png",
    "/images/family/image7.png",
    "/images/family/image8.png",
    "/images/family/image18.png",
    "/images/family/image11.png",
    "/images/family/image15.png",
    "/images/family/image16.png",
    "/images/family/image10.png",
    "/images/family/image12.png",
    ];

    const travelImages = [
        "/images/travels/travel.jpg",
        "/images/travels/travel_1.jpg",
        "/images/travels/travel_2.png",
        "/images/travels/travel_3.png",
        "/images/travels/travel_12.png",
        "/images/travels/travel_6.png",
        "/images/travels/travel_8.png",
        "/images/travels/travel_9.png",
        "/images/travels/travel_10.png",
        "/images/travels/travel_4.jpg",
        "/images/travels/travel_7.jpg",
    ]

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen h-auto" style={{ backgroundColor: "var(--cream)" }}>
            <Navigator />
            <section className="flex flex-col w-full h-full mt-32 desktop:px-24 laptop:px-16 tablet:px-10 mobile:px-5 relative mb-10 max-w-screen-xl">

                {/* Intro */}
                <div className="w-full flex flex-col items-center text-center pb-4">
                    <span className="section-eyebrow">The Gallery</span>
                    <h1 className="section-heading laptop:!text-[46px] desktop:!text-[46px] mobile:!text-[30px]">
                        Moments Worth Keeping
                    </h1>
                    <p className="qoutes indent-10 text-[22px] font-bold max-w-4xl mt-4">
                        A gathering of memories — the faces I cherish and the places that shaped my journey.
                    </p>
                </div>

                <Divider />

                {/* Family Gallery */}
                <div className="w-full flex flex-col items-center gap-2">
                    <span className="section-eyebrow">Beloved Faces</span>
                    <h2 className="section-heading text-center">Family Gallery</h2>
                    <p className="name-description text-center mt-1 max-w-2xl !text-[17px]">
                        A collection of memories with my loved ones
                    </p>
                </div>

                <Swiper
                    grabCursor
                    loop
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 3, spaceBetween: 60 },
                    }}
                    spaceBetween={24}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode={true}
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (familySwiperRef.current = swiper)}
                    className="w-full h-[420px] mt-10"
                >
                    {familyImages.map((src, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center"
                        onMouseEnter={() => familySwiperRef.current?.autoplay.stop()}
                        onMouseLeave={() => familySwiperRef.current?.autoplay.start()}
                    >
                        <div
                            className="gallery-frame relative w-full h-[380px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                            onClick={() => setLightboxSrc(src)}
                        >
                            <Image
                                src={src}
                                alt={`Family memory ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>

                <Divider />

                {/* Travel Gallery */}
                <div className="w-full flex flex-col items-center gap-2">
                    <span className="section-eyebrow">Journeys Abroad</span>
                    <h2 className="section-heading text-center">Travel Gallery</h2>
                    <p className="name-description text-center mt-1 max-w-2xl !text-[17px]">
                        A collection of unforgettable journeys and adventures
                    </p>
                </div>

                <Swiper
                    grabCursor
                    loop
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 40 },
                        1024: { slidesPerView: 3, spaceBetween: 60 },
                    }}
                    spaceBetween={24}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true,
                    }}
                    freeMode={true}
                    navigation={false}
                    modules={[Navigation, Autoplay]}
                    onSwiper={(swiper) => (travelSwiperRef.current = swiper)}
                    className="w-full h-[420px] mt-10"
                >
                    {travelImages.map((src, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center"
                        onMouseEnter={() => travelSwiperRef.current?.autoplay.stop()}
                        onMouseLeave={() => travelSwiperRef.current?.autoplay.start()}
                    >
                        <div
                            className="gallery-frame relative w-full h-[380px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                            onClick={() => setLightboxSrc(src)}
                        >
                            <Image
                                src={src}
                                alt={`Travel memory ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxSrc(null)}
                    >
                        <motion.div
                            className="lightbox-frame"
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.94 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setLightboxSrc(null)}
                                className="lightbox-close"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                            <div className="relative w-full h-full">
                                <Image
                                    src={lightboxSrc}
                                    alt="Enlarged view"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
