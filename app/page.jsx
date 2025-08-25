import "./globals.scss";
import Socialites from "./components/socialite";
import Navigator from "./components/navigator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white w-full flex flex-col items-center justify-center relative">
      {/* Section 1: Split Hero */}
        <Navigator />
      <section className="w-full h-screen flex flex-col laptop:flex-row  mobile:mt-40 tablet:mt-30 laptop:mt-20 desktop:mt-20">
        {/* Left Division - Author Content */}
          <div className="relative flex flex-col items-center laptop:items-start justify-center bg-white w-full laptop:w-1/2 px-8 laptop:px-20 overflow-hidden mobile:mb-10 laptop:mb-0 desktop:mb-0">
            {/* Logo backdrop */}
            <div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/images/Logo.jpg"
                alt="Background Logo"
                width={400}
                height={400}
                className="opacity-10 object-contain pointer-events-none select-none"
              />
            </div>

            {/* Foreground content */}
            <div className="relative mobile:max-w-full tablet:max-w-lg laptop:max-w-full mobile:mb-10 laptop:mb-0 desktop:mb-0 mobile:text-center laptop:text-start">
              <h1
                className="text-black font-bold mobile:text-[40px] tablet:text-[60px] laptop:text-[72px] leading-tight "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Simeon W. Johnson
              </h1>
              <p
                className="mt-4 text-gray-700 text-lg tracking-wide font-bold"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Author • Speaker • Heritage Keeper
              </p>
              <div className="mt-6 flex flex-col gap-y-6">
                <p className="text-gray-600 leading-relaxed side-text">
                  Preserving the Johnson Family Heritage and inspiring
                  generations through words, wisdom, and storytelling.
                </p>

                <div className="flex flex-col items-center laptop:items-start gap-y-4">
                  <Socialites color="fill-black" />
                </div>
              </div>
            </div>
          </div>

        {/* Right Division - Author Image */}
        <div
          className="w-full laptop:w-1/2 h-[300px] laptop:h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/image_3.jpg')` }}
        ></div>
      </section>

      {/* Section 2: Quote */}
      <section className="w-full min-h-[60vh] py-24 bg-gray-100 flex items-center justify-center text-center relative z-10">
        <div className="max-w-3xl px-6">
          <blockquote className="border-l-4 border-gray-400 pl-6 italic text-gray-800 text-xl leading-relaxed my-8">
              <p className="mb-4">
                “Think it not strange concerning the fiery trial which is to try you, as
                though some strange things happen unto you.”
              </p>

              <p className="mb-4">
                The vicissitudes of life are a turbid ebb and flow of human enigmatic
                misery. The good news is! <span className="font-semibold">“On Christ the
                Solid Rock I stand: All other ground is sinking sand.”</span>
              </p>

              <footer className="mt-4 text-right text-gray-600 not-italic font-medium">
                — SIMEON W. JOHNSON BOOK MINISTRY
              </footer>
          </blockquote>
        </div>
      </section>

      {/* Section 3: About the Author */}
      <section className="w-full py-24 bg-white flex flex-col laptop:flex-row items-center justify-center gap-12 px-8 laptop:px-24">
        {/* Author Image (smaller portrait style) */}
        <div className="w-full laptop:w-1/3 flex justify-center">
          <Image
            src="/images/section_1.jpg"
            alt="About Simeon W. Johnson"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg max-h-[500px] object-cover"
          />
        </div>

        {/* Author Bio */}
        <div className="w-full laptop:w-2/3 max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About the Author</h2>
          <p className="text-gray-700 leading-relaxed mb-4 side-text">
            Simeon W. Johnson is a passionate storyteller and heritage keeper,
            dedicated to preserving the legacy of his family and sharing wisdom
            with the world. His works reflect a deep commitment to faith,
            history, and the power of words to inspire change.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 side-text">
            With years of experience as a writer and speaker, he brings a unique
            perspective on family, tradition, and the values that shape
            generations. His writing blends personal narratives with timeless
            lessons that resonate with readers across all walks of life.
          </p>
          <p className="text-gray-700 leading-relaxed side-text">
            Beyond the page, Simeon is committed to community, mentorship, and
            uplifting others through his message of resilience and heritage.
          </p>
        </div>
      </section>
    </main>
  );
}

