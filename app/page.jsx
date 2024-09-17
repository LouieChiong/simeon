import Navigator from "./components/navigator";
import './globals.scss'

export default function Home() {
  return (
      <div className="bg-white w-full flex flex-col items-center justify-center min-h-screen relative">
        <Navigator />
        <section className="flex pt-2 w-[80%] relative items-center justify-center h-[85vh]">
          <div className="flex w-full h-full p-2">
            <div className="flex flex-col text-wrap w-1/2">
              <div className="flex h-[40%] bg-red px-2 z-0">
                <h1 className="name-initial absolute top-[-90px] p-0 select-none">J</h1>
                <h1 className="name-title absolute top-[160px]">Simeon W. Johnson </h1>
                <div className="absolute top-[260px] flex flex-col">
                  <span className="name-description font-bold">The Patriarch</span>
                  <small className="name-description font-normal">The Simeon  W Johnson family heritage</small>
                </div>
              </div>
              <div className="flex gap-y-4 flex-col mt-10 p-2 z-20">
                <p className="tracking-widest text-md leading-loose indent-8 content">
                    Simeon Johnson is a devoted father and a distinguished writer whose life and work are deeply intertwined with his commitment to faith and family. As a father,
                    he embodies the values of patience, guidance, and unconditional love, striving to be a steadfast source of support and inspiration for his children.
                    His approach to parenting reflects the same thoughtful and compassionate spirit that characterizes his writing.
                </p>
                <p className="tracking-widest text-md leading-loose indent-8 content">
                  In his role as an author, Johnson’s work is a testament to his profound understanding of faith and human experience. His writings, which are central to his book
                  ministry, offer a rich blend of personal insight and spiritual wisdom, designed to uplift and guide readers on their own journeys.
                  Through his books, he communicates complex spiritual truths with clarity and warmth, making them accessible and impactful for a diverse audience.
                  Johnson’s website highlights his dual passion for nurturing his family and sharing his spiritual insights with the world. His dedication to both roles
                  reveals a deep commitment to living out his beliefs and values, making his contributions both personally meaningful and universally relevant.
                </p>
              </div>
            </div>
            <div className="flex justify-center w-1/2 p-10">
              <img src="/images/section_1.jpg" alt="" className="w-auto"/>
            </div>
          </div>
        </section>
      </div>
  );
}