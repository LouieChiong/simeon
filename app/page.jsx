import Navigator from "./components/navigator";
import './globals.scss'
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-col items-center justify-center min-h-screen h-auto relative">
      <Navigator />
      <section className="flex desktop:flex-col laptop:flex-col tablet:flex-col w-fullh-full mt-44 desktop:px-40 laptop:px-30 tablet:px-10">
        <div className="flex desktop:flex-row laptop:flex-row tablet:flex-col-reverse w-full h-full gap-x-5">
          <div className="laptop:w-full desktop:w-1/2 tablet:w-full h-full flex flex-col ">
            <div className="w-full tablet:mt-10 laptop:mt-0 h-[300px] flex flex-col justify-center tablet:items-center laptop:items-start indent-9 header-content tablet:bg-top laptop:bg-left-top">
              <h1 className="name-title">Simeon W. Johnson</h1>
              <span className="name-description font-bold text-xl">The Patriarch</span>
              <small className="name-description font-normal text-lg">The Simeon W Johnson family heritage</small>
            </div>

            <div className="flex gap-y-4 flex-col h-full p-2 z-20">
              <p className="tracking-widest text-md leading-loose indent-8 content text-justify">
                Simeon Johnson is a devoted father and a distinguished writer whose life and work are deeply intertwined with his commitment to faith and family. As a father,
                he embodies the values of patience, guidance, and unconditional love, striving to be a steadfast source of support and inspiration for his children.
                His approach to parenting reflects the same thoughtful and compassionate spirit that characterizes his writing.
              </p>
              <p className="tracking-widest text-md leading-loose indent-8 content text-justify">
                In his role as an author, Johnson&#39;s work is a testament to his profound understanding of faith and human experience. His writings, which are central to his book
                ministry, offer a rich blend of personal insight and spiritual wisdom, designed to uplift and guide readers on their own journeys.
                Through his books, he communicates complex spiritual truths with clarity and warmth, making them accessible and impactful for a diverse audience.
                Johnson&#39;s website highlights his dual passion for nurturing his family and sharing his spiritual insights with the world. His dedication to both roles
                reveals a deep commitment to living out his beliefs and values, making his contributions both personally meaningful and universally relevant.
              </p>
            </div>
          </div>
          <div className="laptop:w-full desktop:w-1/2 tablet:w-full flex justify-center items-baseline px-5">
            <Image
              src="/images/section_1.jpg"
              alt=""
              width={600} // Add an appropriate width value
              height={750} // Add an appropriate height value
              className=""
            />
          </div>
        </div>

        <div className="flex w-full tracking-widest text-md leading-loose indent-8 content text-justify laptop:mt-10">
          <p>
            Born in Jamaica, the youngest of thirteen children, SIMEON JOHNSON overcame much hardship. As a young child, he witnessed his mother’s death; as a teenager, he endured myriad hardships and even came to the brink of suicide. Who, then would have said God blessed Simeon? Yet now he has returned to testify to the world and the testimony of the Cross.
          </p>
        </div>

        <div className="flex w-full mt-10">
            <Image
              src="/images/image_3.jpg"
              alt=""
              width={500}
              height={400}
              className="h-[80%] w-full"
            />
        </div>
        <div className="flex flex-col w-full px-14 mb-5 mt-10">
          <p className="qoutes text-[58px] text-left">
            &quot;He that openeth and no man and shutteth; and shutteth, and no man openeth&quot;
            <span className="text-[40px]"> - Revelation 3: 7-8</span>
          </p>
        </div>
      </section>
    </div>
  );
}