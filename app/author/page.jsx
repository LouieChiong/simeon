import Navigator from "../components/navigator";
import '../globals.scss'
import Image from "next/image";

export default function AuthorPages() {
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
                            Simeon Johnson stands as a paragon of refinement, a man whose life is shaped by elegance, wisdom, and a deeply ingrained sense of responsibility.
                            As a patriarch, his influence reaches far beyond the boundaries of his immediate family. He is a guiding force, a man whose very presence evokes a
                            sense of dignity and grace. As a devoted father and a distinguished writer whose life and work are deeply intertwined with his commitment to faith and family. As a father,
                            he embodies the values of patience, guidance, and unconditional love, striving to be a steadfast source of support and inspiration for his children.
                            His approach to parenting reflects the same thoughtful and compassionate spirit that characterizes his writing.
                        </p>
                        <p className="tracking-widest text-md leading-loose indent-8 content text-justify">
                            Yet, it is not just his familial leadership that defines him; he is also a writer, a craftsman of words who brings the
                            same class and elegance to the written page as he does to his daily life.
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
                        className="rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex desktop:flex-row laptop:flex-row tablet:flex-col w-full h-full gap-x-5 laptop:mt-6 tablet:mt-12">
                    <div className="laptop:w-full desktop:w-1/2 tablet:w-full flex justify-center items-baseline px-5">
                        <Image
                            src="/images/image_4.jpg"
                            alt=""
                            width={600}
                            height={750}
                            className="rounded-lg"
                            />
                    </div>

                    <div className="flex flex-col tablet:w-full laptop:w-1/2 desktop:w-1/2 tracking-widest text-md leading-loose indent-8 content text-justify laptop:mt-0 tablet:mt-10 h-full">
                        <p>
                        Born in Jamaica as the youngest of thirteen children, Simeon Johnson overcame significant hardships from an early age. Tragically, he witnessed his mother’s
                        death during his childhood, an event that cast a long shadow over his formative years. As a teenager,
                        he faced myriad struggles and even found himself teetering on the brink of suicide. It is remarkable, then,
                        that in the midst of such adversity, he would later return to testify to the world about the blessings he has received, proclaiming the transformative power of faith and the testimony of the Cross.

                        Despite the challenges of his early life, Simeon’s upbringing was steeped in the values of tradition and intellect.
                        His childhood home, filled with books and lively intellectual conversations, nurtured his burgeoning love for literature.
                        He spent countless hours lost in the pages of classic novels, poetry, and essays, fostering a passion for the written word
                        that would ultimately define his identity as a writer.
                        </p>

                        <p>
                        Simeon’s upbringing also emphasized the importance of manners, decorum, and the necessity of carrying oneself with dignity.
                        Although his parents were strict, they were also loving, instilling in him principles of humility and respect for others. These lessons
                        remained with him throughout his life, shaping the man he would become. Whether attending formal dinners with extended family or engaging in simple
                        conversations at the kitchen table, Simeon learned early on the value of connecting with others in a thoughtful and considerate manner.
                        This elegance in interaction would later influence both his family life and his professional endeavors as a writer, allowing him to express the profound insights he gained from his life experiences through his literary work.
                        </p>

                        <p>
                        Through his journey, not only navigated the storms of his early years but also emerged as a beacon of hope and resilience, dedicated to sharing his story
                        and inspiring others along the way.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-full justify-center items-center mt-10">
                    <iframe frameborder="0" allowfullscreen=""
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" title="A Myopic Life Resonated From The Brink of The Abyss"
                        className="w-full h-[700px]"
                        src="https://www.youtube-nocookie.com/embed/iJePe-bTqzQ?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsimeonwjohnsonbookministry.us&amp;widgetid=1" id="widget2">
                    </iframe>
                </div>

                <div className="flex flex-col w-full px-14 mb-16 mt-10">
                    <span className="qoutes laptop:text-[58px] tablet:text-[48px] text-left">
                        &quot;He that openeth and no man and shutteth; and shutteth, and no man openeth&quot;
                        <span className="qoutes laptop:text-[40px] tablet:text-[35px]"> - Revelation 3: 7-8</span>
                        </span>
                </div>

                <div className="flex desktop:flex-row laptop:flex-row tablet:flex-col w-full h-full gap-x-5 laptop:mt-6 tablet:mt-12">
                    <div className="laptop:w-full desktop:w-1/2 tablet:w-full flex justify-center items-baseline">
                        <Image
                            src="/images/family.jpg"
                            alt=""
                            width={600}
                            height={750}
                            className="rounded-lg"
                            />
                    </div>

                    <div className="flex flex-col tablet:w-full laptop:w-1/2 desktop:w-1/2 tracking-widest text-md leading-loose indent-8 content text-justify laptop:mt-0 tablet:mt-10 h-full">
                        <p>
                        Happily married  to <b>Dorothy Johnson</b> a quintessential embodiment of a loving mother and devoted wife,
                        whose life revolves around nurturing her family and supporting her husband, Simeon Johnson, a distinguished writer whose literary pursuits often demand both
                        creativity and solitude, and in this delicate balance, Dorothy finds her purpose, seamlessly intertwining her roles with grace and dedication, as she creates a
                        home that is not merely a physical space but a sanctuary brimming with warmth, love, and encouragement, where laughter echoes off the walls and the scent of
                        home-cooked meals wafts through the air, filling every corner with a sense of comfort and belonging that invites everyone to share in the daily joys and struggles
                        of life, and as a mother to their two daughters, she exemplifies unconditional love, always ensuring that her girls feel cherished and supported in their
                        individual dreams and aspirations, taking the time to listen to their hopes and fears, engaging in heartfelt conversations that strengthen their bond, while
                        also teaching them the values of kindness, resilience, and the importance of pursuing their passions with tenacity, as she guides them through the complexities
                        of growing up, helping them navigate the challenges they face with wisdom and patience,
                        understanding that her role as a mother extends beyond just providing physical care;
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-full tracking-widest text-md leading-loose indent-8 content text-justify mt-10 h-auto mb-12">
                    <p>
                        It involves instilling confidence in her daughters, empowering them to believe in themselves and their abilities, and while
                        Dorothy diligently attends to the daily routines of family life—organizing schedules, overseeing homework, and preparing meals—she also finds
                        moments of joy in the simple pleasures, such as reading bedtime stories that spark her daughters&apos; imaginations or enjoying impromptu dance parties
                        in the living room, all of which serve to reinforce the bonds of love and joy that are the foundation of their family life, and as she stands beside Simeon,
                        she understands the demands of his writing career, often acting as his muse and sounding board, providing him with the emotional support he needs to delve into
                        the depths of his creativity, as she encourages him to express his thoughts and ideas freely, knowing that his writing is an extension of himself, a reflection of
                        their shared experiences and the love that permeates their lives, and so she often surprises him with handwritten notes of encouragement tucked into his notebooks or a
                        steaming cup of coffee placed gently beside him as he works late into the night, her gestures simple yet profound, demonstrating her unwavering belief in his talent
                        and the importance of his voice, while also nurturing her own creative pursuits, whether through writing, painting, or community involvement, allowing her to bring a
                        sense of balance to her life and modeling for her daughters the importance of self-expression and pursuing one&apos;s passions, and through all the ups and downs of life,
                        Dorothy remains a constant source of strength and stability, her laughter a soothing balm on difficult days, her words of wisdom a guiding light, and her unwavering
                        love the anchor that keeps their family grounded, fostering an environment where creativity flourishes and dreams are nurtured, creating a legacy of love that her
                        daughters will carry with them throughout their lives, as they learn from her the true meaning of compassion, perseverance, and the beauty of family, knowing that in
                        the heart of their home lies a mother whose love knows no bounds and a wife whose partnership with her husband transcends the ordinary, weaving a tapestry of shared
                        experiences that reflect not only the joy of their family life but also the deep, abiding love that Dorothy and Simeon share, a bond strengthened by their mutual
                        respect and understanding, where they support each other through the challenges of their individual pursuits while celebrating each other&apos;s successes, reminding
                        one another that they are stronger together, and as they navigate the complexities of life, Dorothy&apos;s role as a loving mother and wife serves as the cornerstone
                        of their family, illustrating that the love and support she provides is the foundation upon which their lives are built, ensuring that their home remains a haven
                        of creativity, love, and shared dreams, where every moment is cherished, every laugh celebrated, and every challenge faced with the knowledge that together, they
                        can overcome anything life throws their way, creating a legacy of love, support, and artistic expression that will inspire not only their daughters but generations
                        to come.
                    </p>
                </div>
            </section>
        </div>
    );
}

