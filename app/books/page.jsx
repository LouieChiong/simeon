import React from 'react'
import Navigator from "../components/navigator";
import Footer from '../components/footer';
import '../globals.scss'
import Image from "next/image";

export default function BooksPage() {
    return (
        <div className="bg-white w-full flex flex-col items-center justify-center min-h-screen h-auto">
        <Navigator />
            <section className="flex flex-col w-full h-full mt-44 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0">
                <div className='mb-3 w-full h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='gap-y-6 flex flex-col items-center mobile:justify-center tablet:justify-start laptop:justify-start px-4 mobile:py-4 tablet:py-10 laptop:py-10 w-full'>
                    <h3 className='book-title font-bold laptop:!text-[50px] desktop:!text-[50px]'>&quot;The significance of words &quot;</h3>
                    <p className='qoutes indent-10 text-[25px] font-bold'>
                        In my books, you will find a cornucopia of significance and insightful inspirations through the written words!
                        Words are the tools of thought by which both men and women do most of their thinking and communicate through language.
                        It clarifies your speech and writing: enhances your conversation with style: It Broadens horizons and increases overall knowledge.
                        An exact and essential vocabulary is a necessary concomitant to success! It culls the mind with distention to choose the Word that precisely expresses
                        the thought, the knowledge, and the ability to use them that affirmed these books & Websites:
                        SWJBookMinistry.us Spiritual and natural perspicacity is changing lives everywhere. To God be the Glory!
                    </p>
                    </div>
                </div>
                <div className='w-full h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <Image src="/images/book-one-1.png" alt="" width={500} height={500}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-1/2'
                        />
                    </div>
                    <div className='gap-y-6 flex flex-col items-center mobile:justify-center tablet:justify-start laptop:justify-start px-4 mobile:py-4 tablet:py-10 laptop:py-10  mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <h3 className='book-title font-bold text-center'> &quot; You&apos;re a Worthwhile Person in More Ways Than a Million &quot;</h3>
                        <p className='book-description indent-10'>
                            Is a motivational and self-help book designed to inspire individuals to recognize their self-worth and unique potential.
                            The book focuses on building self-esteem, promoting positive thinking, and encouraging readers to overcome obstacles in their lives.
                            Through personal anecdotes, practical advice, and empowering messages, Johnson aims to remind readers that their value goes far beyond
                            material success or societal expectations, emphasizing inner strength and resilience.
                        </p>
                    </div>
                </div>
                <div className='w-full h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <Image src="/images/book-two-1.png" alt="" width={500} height={500}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-1/2'
                            />
                    </div>
                    <div className='gap-y-6 flex flex-col items-center mobile:justify-center tablet:justify-start laptop:justify-start px-4 mobile:py-4 tablet:py-10 laptop:py-10  mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <h3 className='book-title font-bold text-center'>&quot; A myopic life resonated from the brink of the abyss &quot;</h3>
                        <p className='book-description indent-10'>
                            Is an autobiographical and reflective work that delves into the author&apos;s personal experiences and challenges.
                            The book explores themes of hardship, perseverance, and resilience, detailing Johnson’s journey through difficult
                            circumstances and his struggle to find meaning and purpose. The title metaphorically conveys a narrow or limited perspective (&quot;myopic&quot;)
                            that was transformed while facing life&apos;s darkest moments (&quot;the brink of the abyss&quot;).
                            Ultimately, the narrative aims to inspire readers by showcasing how overcoming adversity can lead to personal growth and deeper self-awareness.
                        </p>
                    </div>
                </div>
                <div className='w-full h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <Image src="/images/book-three-1.png" alt="" width={500} height={500}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-1/2'
                        />
                    </div>
                    <div className='gap-y-6 flex flex-col items-center mobile:justify-center tablet:justify-start laptop:justify-start px-4 mobile:py-4 tablet:py-10 laptop:py-10  mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <h3 className='book-title font-bold text-center'>&quot; Romw versus Ramb reveals God, Adam and Creation &quot;</h3>
                        <p className='book-description indent-10'>
                            Is a philosophical and theological exploration that examines the origins of humanity, the nature of God,
                            and the creation of the world. The book contrasts different viewpoints—possibly symbolized by `&quot;Rome`&quot; and `&quot;Ramb`&quot;—to delve into religious,
                            historical, and spiritual discussions. Johnson likely uses these symbols to represent opposing perspectives or ideologies,
                            potentially drawing from biblical accounts, such as the story of Adam and Eve, to uncover deeper truths about existence and the divine.
                        </p>
                    </div>
                </div>
                <div className='w-full h-auto flex mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <Image src="/images/book-four-1.png" alt="" width={500} height={500}
                            className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mobile:w-1/2 tablet:w-full laptop:w-full desktop:w-1/2'
                        />
                    </div>
                    <div className='gap-y-6 flex flex-col items-center mobile:justify-center tablet:justify-start laptop:justify-start px-4 mobile:py-4 tablet:py-10 laptop:py-10  mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                        <h3 className='book-title font-bold text-center'>&quot; Romw versus Ramb reveals God, Adam and Creation &quot;</h3>
                        <p className='book-description indent-10'>
                            Is a heartfelt acknowledgment of the extraordinary efforts and sacrifices made by healthcare workers during times of crisis,
                            particularly in the context of the COVID-19 pandemic. The book serves as both a tribute and a reflection on the emotional and
                            physical toll that frontline workers have endured while dealing with the overwhelming grief, loss, and stress brought on by the
                            global health emergency.
                        </p>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}