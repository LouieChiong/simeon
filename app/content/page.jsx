import React from "react";
import Navigator from "../components/navigator";
import Footer from "../components/footer";
import "../globals.scss";

export default function ContentPage() {
    return (
        <div className="bg-white w-full flex flex-col min-h-screen">
        {" "}
        {/* Updated layout */}
        <Navigator />
        <main className="flex-grow flex flex-col w-full my-12  desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0">
            <div className="mb-3 w-full justify-center items-center mt-[120px] h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0 tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0">
            <div className="bg-red-300 h-[500px] w-[80%]">
                <iframe
                frameborder="0"
                allowfullscreen=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                title="A Myopic Life Resonated From The Brink of The Abyss"
                className="w-full h-full"
                src="https://www.youtube.com/embed/WeeWHM4zwSQ?si=7MivugWgEJt6zfYU?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsimeonwjohnsonbookministry.us&amp;widgetid=1"
                id="widget2"
                ></iframe>
            </div>
            </div>
        </main>
        <Footer />
        </div>
    );
}
