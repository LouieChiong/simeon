"use client";
import React from 'react'
import Navigator from "../components/navigator";
import Footer from '../components/footer';
import ModalComponent from '../components/modalComponent';
import '../globals.scss'
import Image from "next/image";
import { useState } from 'react';

export default function Family() {
    const [show, setShow] = useState(false);
    const [imageUrl, setUrl] = useState('');
    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    return (
        <div className="bg-white w-full flex flex-col items-center justify-center min-h-screen h-auto">
            <Navigator />
            <section className="flex flex-col w-full h-full mt-44 desktop:px-40 laptop:px-10 tablet:px-10 mobile:px-0 mb-10">
                <div className='flex justify-center w-full py-8'>
                        <span className='text-gray-800 text-[50px] font-bold font-lora'>My Family </span>
                </div>
                <div className='mt-3 mobile:border-0 tablet:border-8 tablet:border-gray-700 rounded-md p-9 w-full h-full flex mobile:flex-col tablet:flex-col laptop:flex-col desktop:flex-col mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex'>
                        <div className='flex flex-col mobile:gap-2 tablet:gap-7 laptop:gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/father.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/father.jpg');
                                }}
                            />
                            <Image src="/images/family/wife.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/wife.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/mother.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/mother.jpg');
                                }}
                            />
                            <Image src="/images/family/image13.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image13.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image12.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image12.jpg');
                                }}
                            />
                            <Image src="/images/family/daughter.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/daughter.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image14.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image14.jpg');
                                }}
                            />
                            <Image src="/images/family/image2.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image2.jpg');
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image3.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image3.jpg');
                                }}
                            />
                            <Image src="/images/family/image4.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image4.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image5.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image5.jpg');
                                }}
                            />
                            <Image src="/images/family/image6.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image6.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image7.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image7.jpg');
                                }}
                            />
                            <Image src="/images/family/image8.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image8.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image9.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image9.jpg');
                                }}
                            />
                            <Image src="/images/family/image18.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image18.jpg');
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex mt-4'>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image11.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image11.jpg');
                                }}
                            />
                            <Image src="/images/family/image15.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image15.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image16.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image16.jpg');
                                }}
                            />
                            <Image src="/images/family/image17.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image17.jpg');
                                }}
                            />
                        </div>

                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family/image10.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-full tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family/image10.jpg');
                                }}
                            />
                        </div>
                    </div>
                </div>

            </section>
            <Footer />

            <ModalComponent isShow={show} closeModal={closeModal} urlSrc={imageUrl} />
        </div>
    )
}