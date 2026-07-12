"use client";
import React, { useState, useEffect, useCallback } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Mail, Gem } from "lucide-react";

const Divider = () => (
    <div className="section-divider" aria-hidden="true">
        <span className="section-divider-mark"></span>
    </div>
);

const lots = [
    { img: "/images/auctions/auction_1.jpg", caption: "A treasured keepsake from Simeon's personal collection." },
    { img: "/images/auctions/auction_2.jpg", caption: "One of a kind — carrying its own story from Simeon's journey." },
    { img: "/images/auctions/auction_3.jpg", caption: "A piece with personal significance, now offered to collectors." },
    { img: "/images/auctions/auction_4.jpg", caption: "Part of the personal memorabilia gathered throughout his career." },
    { img: "/images/auctions/auction_5.jpg", caption: "A rare item, held onto for years before being offered for auction." },
    { img: "/images/auctions/auction_6.jpg", caption: "A cherished piece connected to Simeon's creative process." },
    { img: "/images/auctions/auction_7.jpg", caption: "A unique find from Simeon's private collection." },
    { img: "/images/auctions/auction_8.jpg", caption: "A treasured keepsake from Simeon's personal collection." },
    { img: "/images/auctions/auction_9.jpg", caption: "One of a kind — carrying its own story from Simeon's journey." },
    { img: "/images/auctions/auction_10.jpg", caption: "A piece with personal significance, now offered to collectors." },
    { img: "/images/auctions/auction_11.jpg", caption: "Part of the personal memorabilia gathered throughout his career." },
    { img: "/images/auctions/auction_12.png", caption: "A rare item, held onto for years before being offered for auction." },
    { img: "/images/auctions/auction_13.png", caption: "A cherished piece connected to Simeon's creative process." },
];

export default function Auction() {
    const [active, setActive] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const total = lots.length;

    const goPrev = useCallback(() => {
        setActive((i) => (i - 1 + total) % total);
    }, [total]);

    const goNext = useCallback(() => {
        setActive((i) => (i + 1) % total);
    }, [total]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = lightboxOpen ? "hidden" : "";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [lightboxOpen, goPrev, goNext]);

    const lotNumber = String(active + 1).padStart(2, "0");
    const current = lots[active];
    const inquireHref = `mailto:sj99359865@gmail.com?subject=${encodeURIComponent(
        `Inquiry about Lot ${lotNumber}`
    )}&body=${encodeURIComponent(
        `Hello Simeon,\n\nI'm interested in Lot ${lotNumber} from your auction collection. Could you share more details?\n\nThank you.`
    )}`;

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen h-auto" style={{ backgroundColor: "var(--cream)" }}>
            <Navigator />
            <section className="flex flex-col w-full h-full mt-32 desktop:px-24 laptop:px-16 tablet:px-10 mobile:px-5 relative mb-10 max-w-screen-xl">

                {/* Intro */}
                <div className="w-full flex flex-col items-center text-center pb-4">
                    <span className="section-eyebrow">Own A Piece Of My Story</span>
                    <h1 className="section-heading laptop:!text-[46px] desktop:!text-[46px] mobile:!text-[30px]">
                        The Collection
                    </h1>
                    <p className="qoutes indent-10 text-[22px] font-bold max-w-4xl mt-4">
                        A curated selection of personal memorabilia, rare items, and unique pieces from my journey as a writer —
                        each one carrying its own connection to my creative process and life experiences.
                    </p>
                </div>

                <Divider />

                {/* Lot Viewer */}
                <div className="auction-stage">
                    <div>
                        <div className="auction-frame" onClick={() => setLightboxOpen(true)}>
                            <span className="auction-lot-badge">Lot {lotNumber}</span>
                            <span className="auction-counter">{lotNumber} / {String(total).padStart(2, "0")}</span>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={current.img}
                                        alt={`Lot ${lotNumber}`}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="auction-nav-row">
                            <button
                                onClick={goPrev}
                                className="auction-nav-btn"
                                aria-label="Previous lot"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <span className="auction-meta-row">
                                <Gem size={13} /> Browse the Lots
                            </span>
                            <button
                                onClick={goNext}
                                className="auction-nav-btn"
                                aria-label="Next lot"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="auction-thumb-rail mt-6">
                            {lots.map((lot, idx) => (
                                <div
                                    key={idx}
                                    className={`auction-thumb ${idx === active ? "is-active" : ""}`}
                                    onClick={() => setActive(idx)}
                                >
                                    <Image
                                        src={lot.img}
                                        alt={`Lot ${String(idx + 1).padStart(2, "0")} thumbnail`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="auction-info-panel">
                        <span className="section-eyebrow">Lot No. {lotNumber}</span>
                        <h2 className="auction-lot-title">From The Personal Collection</h2>
                        <p className="auction-lot-desc">{current.caption}</p>
                        <p className="auction-lot-desc">
                            Interested collectors are welcome to inquire directly for further details, provenance,
                            and bidding information on this piece.
                        </p>

                        <div className="auction-cta-row">
                            {/* <a
                                href={inquireHref}
                                className="book-btn book-btn-solid flex items-center gap-1.5"
                            >
                                <Mail size={14} /> Inquire About This Lot
                            </a> */}
                            <button
                                onClick={() => setLightboxOpen(true)}
                                className="book-btn flex items-center gap-1.5"
                            >
                                View Full Image
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxOpen(false)}
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
                                onClick={() => setLightboxOpen(false)}
                                className="lightbox-close"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>
                            <div className="relative w-full h-full">
                                <Image
                                    src={current.img}
                                    alt={`Lot ${lotNumber} enlarged`}
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
