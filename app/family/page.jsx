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
                <div className='mt-3 mobile:border-0 tablet:border-8 tablet:border-gray-700 rounded-md p-9 w-full h-full gap-4 flex mobile:flex-col tablet:flex-col laptop:flex-col desktop:flex-col mobile:gap-x-0  tablet:gap-x-5 laptop:gap-x-4 desktop:gap-x-0'>
                    <div className='flex'>
                        <div className='flex flex-col mobile:gap-2 tablet:gap-7 laptop:gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/father_1.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/father_1.jpg');
                                }}
                            />
                            <Image src="/images/mother_1.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/mother_1.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/wife_1.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/wife_1.jpg');
                                }}
                            />
                            <Image src="/images/image_6.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/image_6.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family.jpg');
                                }}
                            />
                            <Image src="/images/family_2.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family_2.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/family_3.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/family_3.jpg');
                                }}
                            />
                            <Image src="/images/daughter.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/daughter.jpg');
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/new/family_1.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_1.jpg');
                                }}
                            />
                            <Image src="/images/new/family_2.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_2.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/new/family_3.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_3.jpg');
                                }}
                            />
                            <Image src="/images/new/family_4.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_4.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/new/family_6.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_6.jpg');
                                }}
                            />
                            <Image src="/images/new/family_7.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_7.jpg');
                                }}
                            />
                        </div>
                        <div className='flex flex-col gap-7 mobile:items-center tablet:items-center laptop:items-start desktop:items-start justify-center mobile:w-full tablet:w-1/2 laptop:w-1/2'>
                            <Image src="/images/new/family_8.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_8.jpg');
                                }}
                            />
                            <Image src="/images/new/family_5.jpg" alt="" width={1000} height={1000}
                                className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer mobile:w-1/2 tablet:w-[90%] laptop:w-[90%] desktop:w-[90%]'
                                onClick={() => {
                                    openModal();
                                    setUrl('/images/new/family_5.jpg');
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