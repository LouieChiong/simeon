import "./globals.scss";
import Socialites from "./components/socialite";
import Navigator from "./components/navigator";
import Image from "next/image";
import Link from "next/link";
import SocialMediaConnect from "./components/SocialMediaConnect";

export default function Home() {
  return (
    <main>
        <Navigator />
      {/* Hero Section */}
      <section className="hero-light">
        <span className="hero-watermark" aria-hidden="true">JOHNSON</span>
        <div className="hero-content-grid">
          <div>
            <p className="hero-eyebrow" data-aos="fade-up" data-aos-delay="100">
              Author • Speaker • Heritage Keeper
            </p>
            <h1
              className="hero-title font-bold mobile:text-[40px] tablet:text-[60px] laptop:text-[72px] leading-tight"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Simeon W.
              <span className="hero-title-script">Johnson</span>
            </h1>
            <p
              className="hero-desc mt-6 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Preserving the Johnson Family Heritage and inspiring
              generations through words, wisdom, and storytelling.
            </p>
            <div className="hero-links mt-8" data-aos="fade-up" data-aos-delay="250">
              <Link href="/author" className="hero-link-primary">
                Discover the Legacy
              </Link>
              <Link href="#mission" className="hero-link-secondary">
                The Mission
              </Link>
            </div>
          </div>
          <div className="hero-photo-frame" data-aos="fade-up" data-aos-delay="150">
            <Image
              src="/images/section_1.jpg"
              alt="Simeon W. Johnson"
              width={420}
              height={336}
              priority
            />
          </div>
        </div>
        <div className="hero-scroll-cue">Scroll</div>
      </section>

      {/* Content Section 1 */}
      <section className="section content-section flex items-center justify-center text-center">
        <blockquote className="border-l-4 italic text-xl leading-relaxed my-8 max-w-3xl mx-auto" style={{ borderColor: "var(--primary)" }}>
          <p className="mb-4">

            “Think it not strange concerning the fiery trial which is to try you, as
            though some strange things happen unto you.”
          </p>

          <p className="mb-4">
            The vicissitudes of life are a turbid ebb and flow of human enigmatic
            misery. The good news is!
            <span className="font-semibold">
              “On Christ the Solid Rock I stand: All other ground is sinking sand.”
            </span>
          </p>

          <div className="mt-4 not-italic font-medium text-center">
            — SIMEON W. JOHNSON BOOK MINISTRY
          </div>
        </blockquote>
      </section>

      {/* Content Section 2 */}
      <section className="w-full py-24 flex flex-col laptop:flex-row items-center justify-center gap-12 px-8 laptop:px-24" style={{ backgroundColor: "var(--cream)" }}>
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
          <h2 className="section-title text-4xl text-gray-900 mb-6">About the Author</h2>
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

      <div id="mission" className="cta-wrapp">
        <section className="cta-section section">
          <div className="relative max-w-3xl mx-auto">
              <div className="flex mobile:flex-col tablet:flex-col laptop:flex-row justify-center items-center w-full tmt-3 h-auto ">
                <div>
                    <h3 className='book-title !text-white font-bold mobile:!text-[30px] tablet:!text-[50px] laptop:!text-[50px]'>&quot;My Mission and Vision&quot;</h3>
                    <p className='qoutes indent-10 text-[25px] font-bold !text-white'>
                        To promulgate the Good News Story around the World, changing lives in preparation for the Kingdom of God. Amen!
                    </p>
                </div>
            </div>
          </div>
        </section>
        <div className="scroll-spacer"></div>
      </div>

      {/* Social Media Connect Section */}
      <SocialMediaConnect />
    </main>
  );
}

