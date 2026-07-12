"use client";
import React, { useEffect, useState } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, BookOpen } from "lucide-react";

const books = [
    {
        title: "You're a Worthwhile Person in More Ways Than a Million",
        img: "/images/book/worthwhile.jpg",
        link:'https://www.amazon.com/Youre-Worthwhile-Person-More-Million-ebook/dp/B0F9HZ6ZKN/ref=sr_1_2?crid=3VDOUKAJHELI0&dib=eyJ2IjoiMSJ9.s28wGU5nd37IBFnIK3ASF33kIu_wk5wZT4cAfweBVU-nKfaTGTJtdpI8ha8kEuiy_22RPyJG2I88ep8Ka-rQHQ.NVHzDYdNF3Ue8HOQ2iESa3ZtMIwYQA3JfrwsTcDoMrU&dib_tag=se&keywords=simeon+w+johnson&qid=1757451817&sprefix=simeon+w+johnson%2Caps%2C303&sr=8-2',
        desc_1: `"Simeon Johnson's exuberant celebration of the 'invisible' people who make up our society's support system is nothing short of marvelous.
                He gives us a unique glimpse into the daily lives of the hardworking men and women around us - people who deserve greater recognition for their invaluable
                contributions." -Willie E. Gary Willie E. Gary, the founder of Gary, Williams, Parenti, Finney, Lewis, McManus, Watson & Speranto, L.C.,
                grew up in a shack he shared with his migrant worker parents and his ten sisters and brothers.`,
        desc_2: ` The first black male from Indiantown, FL,
                to attend college, he is now an internationally renowned attorney, multi-millionaire business leader, and philanthropist.
                "Everyone deserves to be recognized for their contribution since we each play an integral part in the larger fabric of life.
                Simeon Johnson captured this beautifully in his book. It's a wonderful read!"`
    },
    {
        title: "A myopic life resonated from the brink of the abyss",
        img: "/images/book/myopic_life.jpg",
        link:'https://www.amazon.com/Myopic-Life-Resonated-Brink-Abyss-ebook/dp/B0F9HH1VJZ/ref=sr_1_3?crid=3VDOUKAJHELI0&dib=eyJ2IjoiMSJ9.s28wGU5nd37IBFnIK3ASF33kIu_wk5wZT4cAfweBVU-nKfaTGTJtdpI8ha8kEuiy_22RPyJG2I88ep8Ka-rQHQ.NVHzDYdNF3Ue8HOQ2iESa3ZtMIwYQA3JfrwsTcDoMrU&dib_tag=se&keywords=simeon+w+johnson&qid=1757451817&sprefix=simeon+w+johnson%2Caps%2C303&sr=8-3',
        desc_1: `Simeon Johnson's life has been transformed from a myopic life resonated to a vanguard of change life! Born in Jamaica, the youngest of thirteen children, SIMEON JOHNSON overcame much hardship. As a young child, he witnessed his mother's death; as a teenager, he endured myriad hardships and even came to the brink of suicide. `,
        desc_2: `Who, then would have said God blessed Simeon? Yet now he has returned to testify to the world and the testimony of the Cross. In his book A Myopic Life Resonated From the Brink of the Abyss, he describes his miraculous transformation.`
    },
    {
        title: "Romw versus Ramb reveals God, Adam and Creation",
        img: "/images/book/romw.jpg",
        link:'https://www.amazon.com/ROMW-versus-RAMB-Reveals-Creation-ebook/dp/B0F9HMHM25?ref_=ast_author_dp',
        desc_1: `The declaration of Creation begins in Genesis with "In the beginning" and ends with "I am Alpha and Omega, the beginning and the end, the first and the last." What this book has to offer and why everyone should read this book: Its inspirational contents are thought-provoking! It will broaden horizons and increase overall knowledge! It's a therapeutic formula for the inquiring minds It also shows God's sense of humor at the folly of sinful man. When Israel went out of Egypt, the house of Jacob from a people of strange language. "Judah was his sanctuary, and Israel his dominion. The sea saw it and fled: Jordan was driven back. The mountains skipped like rams and the little hills like lambs. What ailed thee, O thou sea, that thou fleddest? thou`,
        desc_2: `Jordan, that thou wast driven back? Ye mountains, that ye skipped like rams; and ye little hills, like lambs? Tremble, thou earth, at the presence of the Lord, at the presence of the God of Jacob; Which turned the rock into standing water, the flint into a fountain of waters. (Ps. 114:1-8)
            These and much more you will find in the covered pages of this book! Simeon Johnson says, "Yes, you will be able to gain valuable information on the authentic proof of creation versus the counterfeit hypothesis theory of evolution. It will generate discussion from the opponents of creation to present the facts presented in this book! Not random-access make-believe (RAMB) hypothesis theory of evolution."`
    },
    {
        title: "Unforgettable tribute to healthcare professionals",
        img: "/images/book/unforgettable.jpg",
        link:'https://www.amazon.com/Unforgettable-Simeon-W-Johnson-ebook/dp/B0F9H9FM12/ref=sr_1_1?crid=3VDOUKAJHELI0&dib=eyJ2IjoiMSJ9.s28wGU5nd37IBFnIK3ASF33kIu_wk5wZT4cAfweBVU-nKfaTGTJtdpI8ha8kEuiy_22RPyJG2I88ep8Ka-rQHQ.NVHzDYdNF3Ue8HOQ2iESa3ZtMIwYQA3JfrwsTcDoMrU&dib_tag=se&keywords=simeon+w+johnson&qid=1757451817&sprefix=simeon+w+johnson%2Caps%2C303&sr=8-1',
        desc_1: `We will never forget the pain & loss of past and present experiences. In a time of depression, grief, and loss.` ,
        desc_2: `We give tributes to The First Responders and all essential workers for their invaluable service and tireless dedication to the public at large, saving lives and offering grief counseling to grieving families and loved ones so in need of a support system at this time. Just as we overcame all Pandemic in the pass: This too shall pass. In this book, you'll find a plethora of helpful information on how to deal with rejection and depression. Here you will find numerous examples of successful men and women who have been a trailblazer of past and current success stories. Myself included. Mr. Johnson started, from the nascence of his humble beginning to a successful investor and author of four incredible books, generating Media Buzz with Big Screen Movie in production.`
    },
];

const Divider = () => (
    <div className="section-divider" aria-hidden="true">
        <span className="section-divider-mark"></span>
    </div>
);

export default function BooksPage() {
    const [activeBook, setActiveBook] = useState(null);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setActiveBook(null);
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = activeBook !== null ? "hidden" : "";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [activeBook]);

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen h-auto" style={{ backgroundColor: "var(--cream)" }}>
            <Navigator />
            <section className="flex flex-col w-full h-full mt-32 desktop:px-24 laptop:px-16 tablet:px-10 mobile:px-5 relative mb-10 max-w-screen-xl">

                {/* Intro */}
                <div className="w-full flex flex-col items-center text-center pb-4">
                    <span className="section-eyebrow">The Book Ministry</span>
                    <h1 className="section-heading laptop:!text-[46px] desktop:!text-[46px] mobile:!text-[30px]">
                        &quot;The Significance of Words&quot;
                    </h1>
                    <p className="qoutes indent-10 text-[22px] font-bold max-w-4xl mt-4">
                        In my books, you will find a cornucopia of significance and insightful inspirations through the written words!
                        Words are the tools of thought by which both men and women do most of their thinking and communicate through language.
                        It clarifies your speech and writing: enhances your conversation with style: It Broadens horizons and increases overall knowledge.
                        An exact and essential vocabulary is a necessary concomitant to success! It culls the mind with distention to choose the Word that precisely expresses
                        the thought, the knowledge, and the ability to use them that affirmed these books. Spiritual and natural perspicacity is changing lives everywhere. To God be the Glory!
                    </p>
                </div>

                <Divider />

                {/* Shelf */}
                <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-4 gap-x-10 gap-y-16">
                    {books.map((book, idx) => (
                        <motion.div
                            key={idx}
                            className="book-card"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                        >
                            <motion.div
                                className="book-cover-frame"
                                onClick={() => setActiveBook(idx)}
                                whileHover={{ y: -10, rotate: idx % 2 === 0 ? -1.5 : 1.5 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            >
                                <Image
                                    src={book.img}
                                    alt={book.title}
                                    width={300}
                                    height={400}
                                />
                            </motion.div>

                            <h3 className="book-index-title mt-5 mb-4 min-h-[54px]">{book.title}</h3>

                            <div className="book-btn-row">
                                <button
                                    onClick={() => setActiveBook(idx)}
                                    className="book-btn flex items-center gap-1.5"
                                >
                                    <BookOpen size={14} /> Read More
                                </button>
                                <Link
                                    href={book.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="book-btn book-btn-solid flex items-center gap-1.5"
                                >
                                    Order Now <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Reading panel */}
            <AnimatePresence>
                {activeBook !== null && (
                    <React.Fragment>
                        <motion.div
                            className="book-panel-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setActiveBook(null)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="book-panel flex flex-col"
                        >
                            <div className="flex justify-between items-start p-6 pb-4">
                                <span className="section-eyebrow">From the Book Ministry</span>
                                <button
                                    onClick={() => setActiveBook(null)}
                                    className="book-panel-close"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="px-6 flex flex-col items-center text-center">
                                <div className="portrait-frame" style={{ maxWidth: "220px" }}>
                                    <Image
                                        src={books[activeBook].img}
                                        alt={books[activeBook].title}
                                        width={220}
                                        height={293}
                                    />
                                </div>
                                <h2 className="book-panel-title mt-8">{books[activeBook].title}</h2>
                            </div>

                            <div className="book-panel-body px-6 mt-6 flex flex-col gap-4">
                                <p>{books[activeBook].desc_1}</p>
                                <p>{books[activeBook].desc_2}</p>
                            </div>

                            <div className="p-6 mt-4">
                                <Link
                                    href={books[activeBook].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="book-btn book-btn-solid w-full flex items-center justify-center gap-1.5"
                                >
                                    Order This Book <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    </React.Fragment>
                )}
            </AnimatePresence>

            <Footer />
        </div>
  );
}
