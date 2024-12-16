import "./globals.scss";
import Socialites from "./components/socialite";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center h-screen relative main-page">
      <div className="fixed inset-0 right-5 bottom-4 flex justify-end items-end z-0">
        <div className="relative bg-white p-2 rounded-lg shadow-lg tablet:min-w-[350px] laptop:min-w-[550px] h-[320px]">
          <iframe
            frameborder="0"
            allowfullscreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            title="A Myopic Life Resonated From The Brink of The Abyss"
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/WeeWHM4zwSQ?si=7MivugWgEJt6zfYU?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsimeonwjohnsonbookministry.us&amp;widgetid=1"
            id="widget2"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-full absolute flex flex-col items-start justify-center">
        <div className="flex flex-col mobile:items-center tablet:items-center laptop:items-start justify-center w-full h-full laptop:px-32 tablet:p-0">
          <span
            className="text-white section-title mobile:text-[60px] tablet:text-[80px] laptop:text-[80px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Simeon W. Jonhson
          </span>
          <div className="z-50 flex flex-col mobile:items-center tablet:items-center laptop:items-start justify-center gap-y-4">
            <span className="text-white welcome-text uppercase border-y-2 ">
              The Johnson Family Heritage
            </span>
            <Socialites color="fill-white" />
            <Link
              href={"welcome"}
              className="py-2 w-48 rounded-xl text-center bg-red-800 text-white tracking-widest font-semibold"
            >
              Proceed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
