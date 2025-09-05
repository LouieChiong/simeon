import React from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";
import Image from "next/image";

export default function ContentPage() {
    const images = [
        "/images/auctions/auction_12.png",
    ];

    return (
        <div className="bg-yellow-100 w-full flex flex-col min-h-screen">
        <Navigator />
        <main className="flex-grow flex flex-col w-full my-12 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0">
            {/* Video + Images in one row */}
            <div className="w-full mt-[120px] flex flex-col gap-10 items-start justify-center">
            {/* Video */}
            <div className="bg-black h-[500px] w-full rounded-2xl flex justify-center items-center overflow-hidden shadow-xl">
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
            <div className="flex items-center justify-center w-full">
                <Image
                src="/images/auctions/auction_12.png"
                alt=""
                width={600}
                height={750}
                className="rounded-lg h-auto w-auto"
            />
            </div>
            </div>
        </main>
        <Footer />
        </div>
    );
}
