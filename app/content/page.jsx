"use client";
import React, { useRef, useEffect, useState } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Divider = () => (
    <div className="section-divider" aria-hidden="true">
        <span className="section-divider-mark"></span>
    </div>
);

const images = [
    "/images/auctions/auction_12.png",
    "/images/content/maya.png",
    "/images/content/tigerwoods.png",
    "/images/content/image_1.png",
    "/images/content/image_2.jpg",
    "/images/content/image_3.jpg",
    "/images/content/image_4.jpg",
    "/images/content/image_5.jpg",
    "/images/content/image_6.png",
    "/images/content/image_7.png",
    "/images/content/image_8.jpeg",
    "/images/content/image_9.jpeg",
];

export default function ContentPage() {
    const swiperRef = useRef(null);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setModalImage(null);
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = modalImage ? "hidden" : "";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [modalImage]);

    const handleOpenModal = (src) => {
        setModalImage(src);
        swiperRef.current?.autoplay.stop();
    };

    const handleCloseModal = () => {
        setModalImage(null);
        swiperRef.current?.autoplay.start();
    };

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen h-auto" style={{ backgroundColor: "var(--cream)" }}>
            <Navigator />
            <section className="flex flex-col w-full h-full mt-32 desktop:px-24 laptop:px-16 tablet:px-10 mobile:px-5 relative mb-10 max-w-screen-xl">

                {/* Intro */}
                <div className="w-full flex flex-col items-center text-center pb-4">
                    <span className="section-eyebrow">Media &amp; Insights</span>
                    <h1 className="section-heading laptop:!text-[46px] desktop:!text-[46px] mobile:!text-[30px]">
                        The Content Collection
                    </h1>
                    <p className="qoutes indent-10 text-[22px] font-bold max-w-4xl mt-4">
                        Insightful videos, thought-provoking reflections, and behind-the-scenes glimpses into my creative world.
                    </p>
                </div>

                <Divider />

                {/* Videos */}
                <div className="w-full flex flex-col items-center text-center mb-10">
                    <span className="section-eyebrow">In His Own Words</span>
                    <h2 className="section-heading">Featured Videos</h2>
                </div>

                <div className="flex flex-col gap-10 w-full">
                    <div className="video-frame w-full">
                        <iframe
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="A Myopic Life Resonated From The Brink of The Abyss"
                            className="w-full h-[280px] tablet:h-[420px] laptop:h-[500px]"
                            src="https://www.youtube.com/embed/WeeWHM4zwSQ?si=7MivugWgEJt6zfYU&controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0"
                        />
                    </div>

                    <div className="video-frame w-full">
                        <iframe
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Simeon W. Johnson — Featured Interview"
                            className="w-full h-[280px] tablet:h-[420px] laptop:h-[560px]"
                            src="https://www.youtube.com/embed/iy68ZzC0ymM?si=7MivugWgEJt6zfYU&controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0"
                        />
                    </div>
                </div>

                <Divider />

                {/* Gallery */}
                <div className="w-full flex flex-col items-center text-center mb-8">
                    <span className="section-eyebrow">Behind The Scenes</span>
                    <h2 className="section-heading">Captured Moments</h2>
                    <p className="name-description text-center mt-1 max-w-2xl !text-[17px]">
                        A glimpse into interviews, features, and creative milestones
                    </p>
                </div>

                <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    loop
                    slidesPerView="auto"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
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
                    className="w-full h-[380px]"
                >
                    {images.map((src, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="!w-[340px] !h-[340px] flex items-center justify-center"
                        >
                            <div
                                className="gallery-frame relative w-full h-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.03]"
                                onClick={() => handleOpenModal(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Content moment ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="auction-nav-row mt-8">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="auction-nav-btn"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="auction-nav-btn"
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {modalImage && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleCloseModal}
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
                                onClick={handleCloseModal}
                                className="lightbox-close"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                            <div className="relative w-full h-full">
                                <Image
                                    src={modalImage}
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
