"use client";
import React, { useState } from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const books = [
    {
        title: "You're a Worthwhile Person in More Ways Than a Million",
        img: "/images/book-one-1.png",
        link:'https://www.amazon.com/Youre-Worthwhile-Person-More-Million-ebook/dp/B093BWP56M/ref=monarch_sidesheet',
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
        img: "/images/book-two-1.png",
        link:'https://www.amazon.com/Myopic-Life-Resonated-Brink-Abyss-ebook/dp/B093BW3C6G/ref=monarch_sidesheet',
        desc_1: `Simeon Johnson's life has been transformed from a myopic life resonated to a vanguard of change life! Born in Jamaica, the youngest of thirteen children, SIMEON JOHNSON overcame much hardship. As a young child, he witnessed his mother's death; as a teenager, he endured myriad hardships and even`,
        desc_2: `came to the brink of suicide. Who, then would have said God blessed Simeon? Yet now he has returned to testify to the world and the testimony of the Cross. In his book A Myopic Life Resonated From the Brink of the Abyss, he describes his miraculous transformation.`
    },
    {
        title: "Romw versus Ramb reveals God, Adam and Creation",
        img: "/images/book-three-1.png",
        link:'https://www.amazon.com/ROMW-VS-RAMB-Reveals-Adam-Creation-ebook/dp/B0939T9VQT/',
        desc_1: `The declaration of Creation begins in Genesis with "In the beginning" and ends with "I am Alpha and Omega, the beginning and the end, the first and the last." What this book has to offer and why everyone should read this book: Its inspirational contents are thought-provoking! It will broaden horizons and increase overall knowledge! It's a therapeutic formula for the inquiring minds It also shows God's sense of humor at the folly of sinful man. When Israel went out of Egypt, the house of Jacob from a people of strange language. "Judah was his sanctuary, and Israel his dominion. The sea saw it and fled: Jordan was driven back. The mountains skipped like rams and the little hills like lambs. What ailed thee, O thou sea, that thou fleddest? thou`,
        desc_2: `Jordan, that thou wast driven back? Ye mountains, that ye skipped like rams; and ye little hills, like lambs? Tremble, thou earth, at the presence of the Lord, at the presence of the God of Jacob; Which turned the rock into standing water, the flint into a fountain of waters. (Ps. 114:1-8)
            These and much more you will find in the covered pages of this book! Simeon Johnson says, "Yes, you will be able to gain valuable information on the authentic proof of creation versus the counterfeit hypothesis theory of evolution. It will generate discussion from the opponents of creation to present the facts presented in this book! Not random-access make-believe (RAMB) hypothesis theory of evolution."`
    },
    {
        title: "Unforgettable tribute to healthcare professionals",
        img: "/images/book-four-1.png",
        link:'https://www.amazon.com/Unforgettable-Tribute-Healthcare-Professionals-Pandemic-ebook/dp/B0939CKG5S/ref=monarch_sidesheet',
        desc_1: `We will never forget the pain & loss of past and present experiences. In a time of depression, grief, and loss.` ,
        desc_2: `We give tributes to The First Responders and all essential workers for their invaluable service and tireless dedication to the public at large, saving lives and offering grief counseling to grieving families and loved ones so in need of a support system at this time. Just as we overcame all Pandemic in the pass: This too shall pass. In this book, you'll find a plethora of helpful information on how to deal with rejection and depression. Here you will find numerous examples of successful men and women who have been a trailblazer of past and current success stories. Myself included. Mr. Johnson started, from the nascence of his humble beginning to a successful investor and author of four incredible books, generating Media Buzz with Big Screen Movie in production.`
    },
];

export default function BooksPage() {
    const [hoveredBook, setHoveredBook] = useState(null);

    return (
        <div className="bg-yellow-100 w-full flex flex-col items-center justify-center min-h-screen h-auto">
            <Navigator />
            <section className="flex flex-col w-full h-full mt-44 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0 relative mb-10">
            <div className='mb-3 w-full h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                <div className='gap-y-6 flex flex-col items-center mobile:justify-center tablet:justify-start laptop:justify-start px-4 mobile:py-4 tablet:py-10 laptop:py-10 w-full'>
                <h3 className='book-title font-bold laptop:!text-[50px] desktop:!text-[50px]'>&quot;The significance of words&quot;</h3>
                <p className='qoutes indent-10 text-[25px] font-bold'>
                    In my books, you will find a cornucopia of significance and insightful inspirations through the written words!
                    Words are the tools of thought by which both men and women do most of their thinking and communicate through language.
                    It clarifies your speech and writing: enhances your conversation with style: It Broadens horizons and increases overall knowledge.
                    An exact and essential vocabulary is a necessary concomitant to success! It culls the mind with distention to choose the Word that precisely expresses
                    the thought, the knowledge, and the ability to use them that affirmed these books. Spiritual and natural perspicacity is changing lives everywhere. To God be the Glory!
                </p>
                </div>
            </div>
                <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-12">
                {books.map((book, idx) => (
                    <div
                    key={idx}
                    className="relative flex flex-col items-center justify-center"
                    >
                    <Link
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                    >
                        <Image
                            onMouseEnter={() => setHoveredBook(idx)}
                            // onMouseLeave={() => setHoveredBook(null)}
                            src={book.img}
                            alt={book.title}
                            width={300}
                            height={400}
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                    <h3 className="mt-3 font-bold text-xl text-center">{book.title}</h3>

                    <Link
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer bg-black text-gold p-4 rounded-xl mt-5 text-xl"
                        >
                        Order Now
                    </Link>
                    </div>
                ))}
            </div>

            {/* Side Panel */}
            <AnimatePresence>
                {hoveredBook !== null && (
                    <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl z-50 p-6 overflow-y-auto gap-3"
                    >

                    {/* Close button */}
                    <button
                        onClick={() => setHoveredBook(null)}
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                    >
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-4">{books[hoveredBook].title}</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {books[hoveredBook].desc_1}
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-5">
                        {books[hoveredBook].desc_2}
                    </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>

        <Footer />
    </div>
  );
}
